import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
        <div className="bg-[linear-gradient(125deg,#0F172B,#162456,#020618)] w-full min-h-screen p-4 max-md:p-2  gap-2">

        <div className='flex gap-4 font-inter text-white border-b border-[#192D71]  pb-4 mb-4 w-full h-13'>
            <h1 className='text-2xl font-normal  px-2.5  cursor-pointer '>Profile</h1>
            <h1 className='text-2xl font-normal px-2.5 cursor-pointer'>Password Setting</h1>

        </div>
        {children}
        </div>
  )
}

export default layout