import { BsLightbulbFill } from 'react-icons/bs';
import { BsList } from 'react-icons/bs';
import Link from 'next/link';
import React from 'react';
export default function Navbar()
{
    const [on,setOn] = React.useState(true)
    return(
        <div className='shadow fixed w-full z-[20] bg-white'>
            <div className='flex justify-between items-center container mx-auto py-[12px] px-6'>
                <div className='flex justify-center items-center gap-1'>
                    <BsLightbulbFill className='text-green text-[20px]'/>
                    <span className='text-[22px] font-semibold'>educa</span>
                </div>
                <div>
                    <div className='sm:hidden text-[24px]' onClick={()=>setOn(!on)}>
                        <BsList/>
                    </div>
                    {
                        <ul className={` text-black  ${on?'hidden':'flex'} sm:flex gap-6 text-[17px] items-center sm:relative absolute sm:w-fit w-[100%] left-0 top-[57px] sm:top-0 sm:flex-row 
                        flex-col sm:bg-transparent bg-light_green sm:p-0 py-5`}>
                            <li><Link href={"/"}>Home</Link></li>
                            <li><Link href={"/about"}>About</Link></li>
                            <li><Link href={"/courses"}>Courses</Link></li>
                            <li><Link href={"/contact"}>Contact</Link></li>
                        </ul>
                    }
                </div>
            </div>
        </div>
    )
}