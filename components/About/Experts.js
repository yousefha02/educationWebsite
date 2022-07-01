import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image'
import { FaFacebookF } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
import { AiFillLinkedin } from 'react-icons/ai'
import { FiInstagram } from 'react-icons/fi'
export default function Experts()
{
    const info= 
    [
        {
            image:'teacher-1.png',
            name:'Jhon Deo',
            job:'online tutor'
        },
        {
            image:'teacher-2.png',
            name:'Jhon Deo',
            job:'online tutor'
        },
        {
            image:'teacher-3.png',
            name:'Jhon Deo',
            job:'online tutor'
        },
        {
            image:'teacher-4.png',
            name:'Jhon Deo',
            job:'online tutor'
        },
        {
            image:'teacher-5.png',
            name:'Jhon Deo',
            job:'online tutor'
        },
        {
            image:'teacher-6.png',
            name:'Jhon Deo',
            job:'online tutor'
        }
    ]
    return(
        <div>
            <div className="container mx-auto px-6 py-[40px]">
                <h3 className="text-[28px] text-black text-center mb-5">
                    Expert Teachers
                </h3>
                <Swiper
                breakpoints={{
                    slidesPerView: 1,
                    spaceBetween: 20,
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1280:{
                        slidesPerView: 4,
                        spaceBetween: 20,
                    }
                    }}>
                    {
                        info.map((box,index)=>
                        {
                            return<SwiperSlide key={index+'ja'}>
                                <div>
                                    <div className="bg-light_green hover:bg-green duration-300 mb-2 relative group">
                                        <Image alt='load' src={`/images/${box.image}`} width="521px" height="521px"/>
                                        <div className='absolute bottom-0 left-0 flex bg-[black] duration-300 group-hover:opacity-80 w-full text-white 
                                        text-[24px] p-3 justify-center gap-2 opacity-0'>
                                            <FaFacebookF className='hover:text-green duration-300'/>
                                            <BsTwitter className='hover:text-green duration-300'/>
                                            <AiFillLinkedin className='hover:text-green duration-300'/>
                                            <FiInstagram className='hover:text-green duration-300'/>
                                        </div>
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <h3 className='text-black text-[17px] font-semibold'>{box.name}</h3>
                                        <p className=' text-light_color text-[15px]'>{box.job}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        })
                    }
                </Swiper>
            </div>
        </div>
    )
}