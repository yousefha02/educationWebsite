import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import { Pagination } from "swiper";
export default function Course()
{
    const data =
    [
        {
            img:"home-slide-1.jpg",
            title:"The Best Courses You Will Find Here!",
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
        },
        {
            img:"home-slide-2.jpg",
            title:"The Best Courses You Will Find Here!",
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
        },
        {
            img:"home-slide-3.jpg",
            title:"The Best Courses You Will Find Here!",
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
        }
    ]
    return(
        <div className="py-[57px]">
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                {
                    data.map((box,index)=>
                    {
                        return<SwiperSlide key={index+'1'}>
                        <div style={{backgroundImage:`url('/images/${box.img}')`}} className="bg-cover bg-center bg-no-repeat">
                            <div className="container mx-auto px-6 h-[75vh] flex flex-col justify-center" >
                                <div className="xl:pl-[44px]">
                                    <h2 className=" text-white text-[28px] sm:text-[30px] md:w-[55%] lg:text-[44px] lg:w-[45%] xl:w-[35%] mb-2 sm:mb-3">{box.title}</h2>
                                    <p className="text-white text-[15px] font-[300] mb-4 md:w-[55%] lg:w-[45%] xl:w-[35%]">
                                        {box.desc} 
                                    </p>
                                    <button className="bg-white text-green border borer-green w-[120px] h-[40px] text-[16px]">Get Started</button>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                    })
                }
            </Swiper>
        </div>
    )
}