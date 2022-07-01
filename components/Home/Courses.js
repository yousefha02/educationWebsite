import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
export default function Courses()
{
    const info =
    [
        {
            image:"course-1-1.png",
            title:'Web Development',
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed "
        },
        {
            image:"course-1-2.png",
            title:'Web Development',
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"
        },
        {
            image:"course-1-3.png",
            title:'Web Development',
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed "
        },
        {
            image:"course-1-4.png",
            title:'Web Development',
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed "
        },
        {
            image:"course-1-5.png",
            title:'Web Development',
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"
        },
        {
            image:"course-1-6.png",
            title:'Web Development',
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"
        }
    ]
    return(
        <div>
            <div className="container mx-auto px-6 py-[40px]">
                <h3 className="text-[28px] text-black text-center mb-5">Our Top Courses</h3>
                <Swiper
                breakpoints={{
                    slidesPerView: 1,
                    spaceBetween: 10,
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1280: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    }}>
                    <div>
                        {
                            info.map((box,index)=>
                            {
                                return(
                                    <SwiperSlide key={index+'f4'}>
                                        <div className="bg-light_green p-3 flex flex-col items-center relative group">
                                            <Image src={`/images/${box.image}`} width="240px" height="300px" alt="wait"/>
                                            <h3 className='text-[15px] text-black mt-2'>{box.title}</h3>
                                            <div className='absolute w-full text-center bg-green bottom-[-100%] px-8 pt-7 group-hover:bottom-0 duration-300'>
                                                <h3 className='text-white font-[600] mb-2'>{box.title}</h3>
                                                <p className='text-white font-[300] text-[14px] mb-4'>{box.desc}</p>
                                                <button className="bg-white text-green border borer-green w-[100px] h-[30px] text-[16px]">Read More</button>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </div>
                </Swiper>
            </div>
        </div>
    )
}