import { BiTimeFive } from 'react-icons/bi'
import { IoMdCall } from 'react-icons/io'
import { HiOutlineMail } from 'react-icons/hi'
import { FaAddressBook } from 'react-icons/fa'
export default function Touch()
{
    const info = [
        {
            icon:BiTimeFive,
            title:'Opening hours:',
            desc:'00:07am to 00:06pm'
        },
        {
            icon:IoMdCall,
            title:'Phone:',
            desc:'+123-456-7890'
        },
        {
            icon:HiOutlineMail,
            title:'Email:',
            desc:'yosuefha@gmail.com'
        },
        {
            icon:FaAddressBook,
            title:'Address:',
            desc:'Palestine-400104'
        }
    ]
    return(
        <div>
            <div className="container mx-auto px-6 py-[50px]">
                <h3 className="text-[28px] text-black text-center mb-5">Get In Touch</h3>
            <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-4 text-center'>
                {
                    info.map((box,index)=>
                    {
                        return(
                            <div key={index+'aq87'} className="bg-light_green border border-green p-6">
                                <div className='bg-green w-[52px] h-[52px] mx-auto mb-3 flex justify-center items-center rounded-full text-white text-[22px]'><box.icon/></div>
                                <h3 className='text-black'>{box.title}</h3>
                                <p className='text-[14px] text-light_color'>{box.desc}</p>
                            </div>
                        )
                    })
                }
            </div>
            </div>
        </div>
    )
}