import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const selectedIPhoto = 0;

  return (
    <div>
      {
        selectedIPhoto == 0 ? < ><div className='container mx-auto navbar bg-base-100'><h3 className='font-bold text-xl'>Gallery</h3> </div></> : <>
          <div className=" container mx-auto navbar bg-base-100">
            <div className="flex-1">
              <div className='flex items-center'>
                <FontAwesomeIcon className='h-6 text-blue-700 mr-3' icon={faCheckSquare} />
                <h3 className='font-bold text-xl'>{selectedIPhoto} Files Selected</h3>
              </div>

            </div>
            <div className="flex-none gap-2">
              <div className="dropdown dropdown-end">
                <h3 className='text-red-600 font-semibold text-lg	'>Delete files</h3>
              </div>
            </div>
          </div></>
      }
      <hr className='mb-6' />
    </div>
  )
}

export default Header