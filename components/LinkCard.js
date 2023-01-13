import Image from 'next/image'
import { MdOutlineIosShare } from 'react-icons/md'


function LinkCard({link}) {
    
  return (

    <a className='group flex items-center py-4 overflow-hidden text-center max-w-screen-sm rounded-lg border border-gray-600 relative px-16 hover:scale-105 transition-all' target={'_blank'} href={link.href} rel="noreferrer">
        {link.image && <Image className='absolute rounded-[4px] left-2' src={link.image} width={40} height={40} alt={''} />}
        
        <h2 className='text-xl w-full  '>{link.title}</h2>
        
        <div className={'absolute opacity-0 hover:opacity-100 duration-200 right-4 hidden group-hover:block hover:rounded-full hover:bg-slate-400 p-2 text-gray-700'} >
        <MdOutlineIosShare size={20}/>
        </div>
    </a>
    
    
  )
}

export default LinkCard