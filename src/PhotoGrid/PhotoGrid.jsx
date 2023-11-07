import React, { useEffect, useRef, useState } from 'react';
import PhotoCard from '../components/PhotoCard/PhotoCard';
import Header from '../components/Header/Header';
import AddPhoto from '../components/ImageAdd/ImageAdd';

const PhotoGrid = () => {
    const [imageComponents, setImageComponents] = useState([]);
    const [selectedComponents, setSelectedComponents] = useState([]);
    useEffect(() => {
        const loadImages = async () => {
            const imagePaths = import.meta.glob("../assets/*");
            const imagePromises = Object.keys(imagePaths).map((imagePath) => imagePaths[imagePath]());
            const imageModules = await Promise.all(imagePromises);

            const initialImageComponents = imageModules.map((module, index) => ({
                key: index,
                src: module.default,
                alt: `Image ${index + 1}`,
                isChecked: false, // Initialize isChecked as false
            }));

            setImageComponents(initialImageComponents);
        };

        loadImages();
    }, []);

    // Callback function to update checkstatus for selected components
    const handleToggleCheck = (id) => {
        const updatedImageComponents = imageComponents.map((component) => {
            if (component.key === id) {
                return { ...component, isChecked: !component.isChecked };
            }
            return component;
        });

        setImageComponents(updatedImageComponents);
    };
    // Callback function to delete selected components
    const handleTodeleteSelectedComponents = () => {
        const updatedImageComponents = imageComponents.filter(
            (imageComponent) => imageComponent.isChecked == false
        );
        setImageComponents(updatedImageComponents);
        setSelectedComponents([]);
    };

    // Callback function to update selected Fcomponents
    const updateSelectedComponents = (imageComponent) => {
        const isAlreadySelected = selectedComponents.some((item) => {
            return item.key === imageComponent.key && item.src === imageComponent.src;
        });

        if (isAlreadySelected) {
            // Deselect the component by filtering it out
            setSelectedComponents(selectedComponents.filter((item) => {
                return item.key !== imageComponent.key || item.src !== imageComponent.src;
            }));
        } else {
            // Select the component if it's not already in the selected array
            setSelectedComponents([...selectedComponents, imageComponent]);
        }
    };

    const handleAddImage = (imageFile) => {
        // Create a new image component using the selected image file
        const newImageComponent = {
            key: imageComponents.length, // Generate a unique key based on the current number of images
            src: URL.createObjectURL(imageFile), // Use a temporary URL for the selected image
            alt: `New Image ${imageComponents.length + 1}`,
            isChecked: false, // Initialize isChecked as false
        };
    
        // Update the imageComponents state by adding the new image component
        setImageComponents([...imageComponents, newImageComponent]);
    };

    const dragItem = useRef(null);
    const dragOverItem = useRef(null);

    const handleSort = () => {
        console.log(dragItem);
        console.log(dragOverItem);
        let _items = [...imageComponents];
        const draggedItemContent = _items.splice(dragItem.current, 1)[0];

        _items.splice(dragOverItem.current, 0, draggedItemContent);

        dragItem.current = null;
        dragOverItem.current = null;

        setImageComponents([..._items]);

    };

    return (
        <div className='md:w-2/3 mx-auto border rounded-lg bg-white md:my-4  border-slate-300  '>
            <Header
                selectedComponents={selectedComponents}
                handleTodeleteSelectedComponents={handleTodeleteSelectedComponents}
            ></Header>
            <div className="grid xl:grid-cols-5   lg:grid-cols-3 object-contain md:grid-cols-3 sm:grid-cols-2  sm:gap-6  gap-3 sm:px-6 px-2 my-6">
                {
                imageComponents.map((imageComponent, index) => (
                    <PhotoCard
                        key={index}
                        imageComponent={imageComponent}
                        updateSelectedComponents={updateSelectedComponents}
                        onToggleCheck={handleToggleCheck}
                        index={index}
                        handleSort={handleSort}
                        onDragStart={() => (dragItem.current = index)}
                        onDragEnter={() => (dragOverItem.current = index)}
                        
                    ></PhotoCard>
                ))}
                
                <AddPhoto  className='object-contain' handleAddImage={handleAddImage} ></AddPhoto>
            </div>
            
        </div>
    );
};

export default PhotoGrid;