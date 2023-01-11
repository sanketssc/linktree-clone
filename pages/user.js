import React,{useEffect, useState} from 'react'
import Image from 'next/image';
import LinkCard from '../components/LinkCard';




function User() {
    const [data, setData] = useState({})

    
    useEffect(() => {
      async function fetchUser() {
        // console.log(`http://localhost:8000/user}`);
        const res = await fetch(`http://localhost:8000/user`);
        const data = await res.json();
        setData(data);
      }
      fetchUser();

    }, [])
    
    
  return (<>
    {data.name && <div className='flex flex-col items-center gap-1 mt-10 mx-2'>

    <Image className='rounded-full' src={data.avatar} width={100} height={100} priority alt={data.name} />
    <h2 className='text-2xl font-bold'>{data.name}</h2>
    <div className='max-w-screen-sm w-full flex flex-col gap-5 mt-4'>
      {data.links?.map((link, index) => {return( <LinkCard key={index} link={link} />)})}
    </div>
   </div>}
   </>
  )
}

export default User