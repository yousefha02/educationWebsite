import Image from "next/image"
export default function Send()
{
    return(
        <div>
            <div className="grid lg:grid-cols-2 gap-5 container mx-auto px-6 py-[30px] items-center">
                <div>
                    <Image src="/images/contact-img.png" alt="load" width="699px" height="494px"/>
                </div>
                <div className="border border-green p-6 shadow">
                    <h3 className="text-[22px] sm:text-[26px] text-black mb-2">Send Us Message</h3>
                    <div>
                        <input type="text" placeholder="name" className="border border-green p-2 w-full mb-[10px] focus:outline-none text-white focus:bg-green focus:placeholder:text-white"/>
                    </div>
                    <div>
                        <input type="email" placeholder="email" className="border border-green p-2 w-full mb-[10px] focus:outline-none text-white focus:bg-green focus:placeholder:text-white"/>
                    </div>
                    <div>
                        <input type="text" placeholder="number" className="border border-green p-2 w-full mb-[10px] focus:outline-none text-white focus:bg-green focus:placeholder:text-white"/>
                    </div>
                    <div>
                        <textarea placeholder="message" rows={5} className="border border-green w-full p-2 mb-3 focus:bg-green text-white focus:placeholder:text-white focus:outline-none"></textarea>
                    </div>
                    <div>
                        <button className='bg-light_green mb-3 text-green border border-green w-[135px] h-[35px] text-[16px] hover:bg-green hover:text-white duration-300'>
                        Send Message
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}