import Image from 'next/image';
import data from '../data.json';



export default function Home() {
  return (
   <div className='flex flex-col items-center gap-1 mt-10'>
    <Image className='rounded-full' src={data.avatar} width={100} height={100} alt={data.name} />
    <h2 className='text-2xl font-bold'>{data.name}</h2>
      
   </div>
  )
}