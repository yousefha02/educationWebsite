import { FaStar } from 'react-icons/fa'
import { FaStarHalfAlt } from 'react-icons/fa'
import { GoFileSubmodule } from 'react-icons/go'
import { BiTimeFive } from 'react-icons/bi'
import Image from 'next/dist/client/image'
export default function Famous()
{
    const data = 
    [
        {
            image:'course-2-1.jpg',
            title:'learn what is best for you',
            desc:'Lorem Ipsum is simply dummy text of the printing and types',
            type:'Development',
            modules:'12',
            hours:'6'
        },
        {
            image:'course-2-2.jpg',
            title:'learn what is best for you',
            desc:'Lorem Ipsum is simply dummy text of the printing and types',
            type:'Development',
            modules:'12',
            hours:'6'
        },
        {
            image:'course-2-3.jpg',
            title:'learn what is best for you',
            desc:'Lorem Ipsum is simply dummy text of the printing and types',
            type:'Development',
            modules:'12',
            hours:'6'
        },
        {
            image:'course-2-4.jpg',
            title:'learn what is best for you',
            desc:'Lorem Ipsum is simply dummy text of the printing and types',
            type:'Development',
            modules:'12',
            hours:'6'
        },
        {
            image:'course-2-5.jpg',
            title:'learn what is best for you',
            desc:'Lorem Ipsum is simply dummy text of the printing and types',
            type:'Development',
            modules:'12',
            hours:'6'
        },
        {
            image:'course-2-6.jpg',
            title:'learn what is best for you',
            desc:'Lorem Ipsum is simply dummy text of the printing and types',
            type:'Development',
            modules:'12',
            hours:'6'
        },
        {
            image:'course-2-7.jpg',
            title:'learn what is best for you',
            desc:'Lorem Ipsum is simply dummy text of the printing and types',
            type:'Development',
            modules:'12',
            hours:'6'
        },
        {
            image:'course-2-8.jpg',
            title:'learn what is best for you',
            desc:'Lorem Ipsum is simply dummy text of the printing and types',
            type:'Development',
            modules:'12',
            hours:'6'
        },
        {
            image:'course-2-9.jpg',
            title:'learn what is best for you',
            desc:'Lorem Ipsum is simply dummy text of the printing and types',
            type:'Development',
            modules:'12',
            hours:'6'
        }
    ]
    return(
        <div>
            <div className="container mx-auto px-6 py-[50px]">
                <h3 className="text-[28px] text-black text-center mb-5">
                    Our Famous Courses
                </h3>
                <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-4'>
                    {
                        data.map((box,index)=>
                        {
                            return(
                                <div key={index+'p81'} className="border border-green">
                                    <div className='mb-2'>
                                        <Image src={`/images/${box.image}`} alt="load" width="670px" height="502px"/>
                                    </div>
                                    <div className='flex flex-col items-center px-6'>
                                        <div className='border border-transparent border-b-green'>
                                                <ul className='flex gap-1 text-green mb-2 justify-center'>
                                                    <li><FaStar/></li>
                                                    <li><FaStar/></li>
                                                    <li><FaStar/></li>
                                                    <li><FaStar/></li>
                                                    <li><FaStarHalfAlt/></li>
                                                </ul>
                                                <h3 className="text-[18px] text-black text-center mb-2">{box.title}</h3>
                                                <p className='text-[15px] text-black leading-5 text-center mb-3'>{box.desc}</p>
                                                <div className='flex justify-center'>
                                                    <button className='bg-light_green mb-3 text-green border border-green w-[120px] h-[35px] text-[16px]'>
                                                        Read More
                                                    </button>
                                                </div>
                                            </div>
                                    </div>
                                    <div className='flex justify-between mt-3 px-6 pb-4'>
                                        <div className='flex items-center gap-2 text-green'><GoFileSubmodule/><span className='text-black text-[14px]'>12 modules</span></div>
                                        <div className='flex items-center gap-2 text-green'><BiTimeFive/><span className='text-black text-[14px]'>6 hours</span></div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}