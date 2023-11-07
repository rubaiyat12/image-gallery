import React, { useRef } from 'react';
import { motion, useDragControls } from "framer-motion";

const PhotoCard = ({ imageComponent, updateSelectedComponents, onToggleCheck,handleSort,index, onDragEnter, onDragStart }) => {
   
    const handleIconClick = () => {
        updateSelectedComponents(imageComponent);
        onToggleCheck(imageComponent.key);
    };
    const dragItem = useRef(null);
    const dragOverItem = useRef(null);

    return (
        <motion.div
            className={` group border-2 rounded-lg  border-slate-300 relative ${index === 0 ? "col-span-2 row-span-2" : "col-span-1 row-span-1"} before:absolute before:h-full before:w-full rounded before:transition-colors before:cursor-move `}
            
        
           
            draggable
            onDragStart={ onDragStart}
            onDragEnter={onDragEnter}
            onDragEnd={handleSort}
            onDragOver={(e) => e.preventDefault()}
            
            // dragConstraints={{left:0 , bottom:0, top:0, right:0}}
            // dragElastic={2}
        >
            <img
                src={imageComponent.src}
                alt=""
                className={`w-full h-full rounded-lg ${imageComponent.isChecked ? "opacity-70" : "opacity-100"}`}
                loading="lazy"
                decoding="async"
                data-nimg="1"
            />
            <div className={`absolute inset-0 rounded-lg bg-black ${imageComponent.isChecked ? 'opacity-10' : 'hover:opacity-50 opacity-0'}`}></div>
            <input
                type="checkbox"
                onClick={handleIconClick}
                className={`absolute top-4 left-4 h-5 w-5 text-blue-700 group-hover:opacity-100 transition-opacity delay-100 duration-100 ease-linear cursor-pointer ${imageComponent.isChecked ? "opacity-100" : "group-hover:opacity-100 opacity-0"
                    }`}
                onChange={() => onToggleCheck(imageComponent.key)}
                checked={imageComponent.isChecked}
            />
        </motion.div>
    );
};

export default PhotoCard;
