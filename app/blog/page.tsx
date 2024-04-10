import React from 'react'

type Props = {}

const Blog = (props: Props) => {
  return (
    <div className=' w-screen h-screen relative'>
        <div className='flex items-center w-full h-full bg-cover bg-center bg-blog dark:bg-blog2 transition-background duration-500'></div>
        <h1 className="text-center text-black dark:text-white">Blog</h1>
    </div>
  )
}

export default Blog