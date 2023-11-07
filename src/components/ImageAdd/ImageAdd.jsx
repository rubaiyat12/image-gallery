import React from 'react';

const ImageAdd = ({ handleAddImage}) => {
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (handleAddImage) {
            handleAddImage(file);
        }
    };
    return (
        <div className="relative border-2 border-dashed border-slate-300 rounded-lg   py-7 flex justify-center items-center">
            <input
                type="file"
                name="images"
                id="images"
                className="absolute  opacity-0 "
                title="Try to upload photos..."
                onChange={handleImageChange}
            />
            <div className="h-full   flex flex-col  justify-center items-center gap-y-1">
                <img alt="" fetchpriority="high" className='my-2' decoding="async" data-nimg="1" src="addimage.png" />
                <h1 className='hidden sm:block my-2 h-full'>Add images</h1>
            </div>
        </div>
    );
};

export default ImageAdd;