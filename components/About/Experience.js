import Image from 'next/image'
import { GiRead } from 'react-icons/gi'
import { FaBook } from 'react-icons/fa'
import { FaMedal } from 'react-icons/fa'
export default function Experience()
{
    const info =
    [
        {
            icon:GiRead,
            num:'99+',
            title:'courses'
        },
        {
            icon:FaBook,
            num:'15+',
            title:'awards'
        },
        {
            icon:FaMedal,
            num:'769+',
            title:'students'
        }    
    ]
    return(
        <div>
            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-6 py-[40px] items-center">
                <div>
                    <Image src="/images/about-img.jpg" alt='wait' width="699px" height="517px"/>
                </div>
                <div className='xl:w-[80%]'>
                    <h3 className="text-[22px] sm:text-[26px] text-black mb-2 sm:mb-5">We Provided Best Learning Experience</h3>
                    <p className='text-[15px] text-black mb-5'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took  and typesetting industry
                    </p>
                    <div className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
                    {
                        info.map((box,index)=>
                        {
                            return(
                                <div key={index+'18l'} className="py-4 bg-light_green border-green border flex justify-center flex-col items-center">
                                    <box.icon className='text-green text-[42px] mb-2'/>
                                    <h3 className='text-black text-[28px]'>{box.num}</h3>
                                    <p className='text-[15px] text-black'>{box.title}</p>
                                </div>
                            )
                        })
                    }
                </div>
                </div>
            </div>
        </div>
    )
}