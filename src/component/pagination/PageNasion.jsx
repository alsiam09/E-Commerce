import React from 'react'

const PageNasion = ({PageNumder , paginate ,currentPage}) => {
  return (
    <div className="pageNumber">
              <ul className='flex'>
                {PageNumder.map((item , i)=>(
                    <li onClick={()=>paginate(item)} className={`  h-[30px] w-[30px] flex items-center justify-center border-[1px] border-[#262626] mx-[10px] ${currentPage == i + 1 && " bg-[#262626] text-[#fff] "}`} >{item + 1}</li>
                ))}
              </ul>
            </div>
  )
}

export default PageNasion