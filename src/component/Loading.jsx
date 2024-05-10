import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
const Loading = () => {
  return (
    <div className="container mx-auto">
            <SkeletonTheme baseColor="#f0f0f0" highlightColor="#f9f9f9">
    <div className='' >
      <Skeleton count={3} height={"30px"}/>  
    </div>
    </SkeletonTheme>
    </div>
  )
}

export default Loading