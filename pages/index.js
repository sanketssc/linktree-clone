import Image from 'next/image';
import data from '../data.json';
import LinkCard from '../components/LinkCard';



export default function Home() {
  return (
   <div className='flex flex-col items-center gap-1 mt-10 mx-2'>
    <Image className='rounded-full' src={data.avatar} width={100} height={100} alt={data.name} />
    <h2 className='text-2xl font-bold'>{data.name}</h2>
    <div className='max-w-screen-sm w-full flex flex-col gap-5 mt-4'>
      {data.links.map((link, index) => {return( <LinkCard key={index} link={link} />)})}
    </div>
   </div>
  )
}