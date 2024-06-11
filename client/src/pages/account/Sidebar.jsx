import React from 'react'

const Sidebar = ({ handler, active, sideLinks }) => {
  return (
    <ul className='flex flex-col gap-2 min-w-[350px] w-full sm:w-[unset]'>
        {
            sideLinks.map((link, i)=>{
                return <li key={link.label} onClick={()=>handler(link.link)} className={`rounded-[10px] cursor-pointer p-[15px] text-[15px] ${active && active.index === i ? "border-2 border-[color:var(--grey)] bg-[color:var(--light-grey)]" : "hover:bg-[color:var(--light-grey)] border sm:border-none"}  `} >{link.label}</li>
            })
        }
    </ul>
  )
}

export default Sidebar
