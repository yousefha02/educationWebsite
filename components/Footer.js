import { BsLightbulbFill } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
import { AiFillLinkedin } from 'react-icons/ai'
import { FiInstagram } from 'react-icons/fi'
export default function Footer()
{
    return(
        <div className="bg-light_green">
            <div className="container px-6 mx-auto py-14 lg:flex gap-8 grid sm:grid-cols-2 md:grid-cols-3">
                <div className='lg:w-[20%]'>
                    <div className='flex items-center gap-1 mb-4'>
                        <BsLightbulbFill className='text-green text-[20px]'/>
                        <span className='text-[20px] font-semibold'>Educa</span>
                    </div>
                    <p className='text-[15px] text-light_color mb-5'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    </p>
                    <div className='flex gap-1'>
                        <span className='bg-green w-[35px] h-[35px] text-[18px] text-white flex justify-center items-center'><FaFacebookF/></span>
                        <span className='bg-green w-[35px] h-[35px] text-[18px] text-white flex justify-center items-center'><BsTwitter/></span>
                        <span className='bg-green w-[35px] h-[35px] text-[18px] text-white flex justify-center items-center'><AiFillLinkedin/></span>
                        <span className='bg-green w-[35px] h-[35px] text-[18px] text-white flex justify-center items-center'><FiInstagram/></span>
                    </div>
                </div>
                <div className='lg:w-[22%]'>
                    <h3 className='text-[20px] font-semibold mb-4'>Quick Links</h3>
                    <ul>
                        <li className='text-[15px] text-light_color mb-2'>home</li>
                        <li className='text-[15px] text-light_color mb-2'>about</li>
                        <li className='text-[15px] text-light_color mb-2'>courses</li>
                        <li className='text-[15px] text-light_color mb-2'>contact</li>
                    </ul>
                </div>
                <div className='lg:w-[22%] '>
                    <h3 className='text-[20px] font-semibold mb-4'>Useful Links</h3>
                    <ul>
                        <li className='text-[15px] text-light_color mb-2'>help center</li>
                        <li className='text-[15px] text-light_color mb-2'>ask question</li>
                        <li className='text-[15px] text-light_color mb-2'>send feedback</li>
                        <li className='text-[15px] text-light_color mb-2'>terms of use</li>
                        <li className='text-[15px] text-light_color mb-2'>privacy policy</li>
                    </ul>
                </div>
                <div>
                <h3 className='text-[20px] font-semibold mb-4'>Newsletter</h3>
                <h4 className='text-[15px] text-light_color mb-3'>subscribe for letest updates</h4>
                <form>
                    <input type="text" placeholder="enter your email" className='border mb-3 border-green focus:outline-none w-[240px] h-[50px]
                    px-[6px]'/>
                    <div>
                        <button className='bg-transparent border border-green text-green text-[15px] w-[140px] h-[40px]'>Subscribe</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    )
}