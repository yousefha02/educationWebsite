import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image'
export default function Students()
{
    const info= 
    [
        {
            image:'pic-1.png',
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make"
            ,name:'John Deo'
        },
        {
            image:'pic-2.png',
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make"
            ,name:'John Deo'
        },
        {
            image:'pic-3.png',
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make"
            ,name:'John Deo'
        },
        {
            image:'pic-4.png',
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make"
            ,name:'John Deo'
        },
        {
            image:'pic-5.png',
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make"
            ,name:'John Deo'
        },
        {
            image:'pic-6.png',
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make"
            ,name:'John Deo'
        },
    ]
    return(
        <div>
            <div className="container mx-auto px-6 py-[60px]">
                <h3 className="text-[28px] text-black text-center mb-5">
                    Our Sastisfied Students
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
                        slidesPerView: 2,
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
                            return<SwiperSlide key={index+'jas'}>
                                <div className='flex flex-col items-center'>
                                    <div className='text-center mb-7 text-[15px] text-light_color bg-light_green border border-green
                                    py-3 px-5 leading-7 relative'>
                                        {box.desc}
                                        <div className='absolute h-[20px] w-[20px] bottom-[-10px] left-[50%] translate-x-[-50%] bg-light_green rotate-45 border-transparent border-r-green border border-b-green'>
                                        </div>
                                    </div>
                                    <Image src={`/images/${box.image}`} width="82px" height="82px" alt='load' 
                                    className='rounded-full'/>
                                    <h3 className='mt-2 font-bold text-[16px]'>{box.name}</h3>
                                </div>
                            </SwiperSlide>
                        })
                    }
                </Swiper>
            </div>
        </div>
    )
}