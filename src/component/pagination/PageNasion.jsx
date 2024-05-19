import React from 'react'

const PageNasion = ({PageNumder , paginate}) => {
  return (
    <div className="pageNumber">
              <ul className='flex'>
                {PageNumder.map((item)=>(
                    <li onClick={()=>paginate(item)} className=" h-[30px] w-[30px] flex items-center justify-center border-[1px] border-[#262626] mx-[10px]">{item + 1}</li>
                ))}
              </ul>
            </div>
  )
}

export default PageNasion