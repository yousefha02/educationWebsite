import Image from 'next/image'
export default function Subject()
{
    const info =
    [
        {
            image:"subject-icon-1.png",
            title:'Graphic Design',
            modules:'12'
        },
        {
            image:"subject-icon-2.png",
            title:'Mathmatics',
            modules:'12'
        },
        {
            image:"subject-icon-3.png",
            title:'Teaching',
            modules:'12'
        },
        {
            image:"subject-icon-4.png",
            title:'Web Design',
            modules:'12'
        },
        {
            image:"subject-icon-5.png",
            title:'Science',
            modules:'12'
        },
        {
            image:"subject-icon-6.png",
            title:'Engineering',
            modules:'12'
        }
    ]
    return(
        <div>
            <div className="container mx-auto px-6 pb-[40px]">
                <h3 className="text-[28px] text-black text-center mb-5">Our Top Subjects</h3>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5'>
                    {
                        info.map((box,index)=>
                        {
                            return(
                                <div key={index+'2a'} className="flex flex-col items-center border-green border bg-light_green py-8 gap-2
                                hover:bg-green duration-300 group text-black hover:text-white">
                                    <Image src={`/images/${box.image}`} alt="wait" width="85px" height="85px"/>
                                    <h3 className='font-semibold'>{box.title}</h3>
                                    <p className='text-[14px] font-[400]'>{box.modules} modules</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}