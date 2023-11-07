import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'

const Header = ({selectedComponents,handleTodeleteSelectedComponents}) => {

  return (
    <div className='border-b-2 bg-white border-slate-300  top-0 z-50 px-6 p-2 '>
      {
        selectedComponents == 0 ?
          < >
            <div className='container mx-auto navbar'>
              <h3 className='font-bold text-xl '>
                Gallery</h3>
            </div>
          </>
          :
          <>
            <div className=" container mx-auto navbar flex">
              <div className="flex-1">
                <div className='flex items-center '>
                  <FontAwesomeIcon className='h-6 text-blue-700 mr-3' icon={faCheckSquare} />
                  <h3 className='font-bold text-xl'>{selectedComponents.length} Files Selected</h3>
                </div>

              </div>
              <div className=" gap-2">
                <div className="dropdown dropdown-end  hover:border-b-[1px] border-red-500 cursor-pointer">
                  <h3 onClick={handleTodeleteSelectedComponents} className='text-red-500  text-xl   	'>Delete files</h3>
                </div>
              </div>
            </div>
          </>
      }
    </div>
  )
}

export default Header