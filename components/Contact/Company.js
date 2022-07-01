import Image from "next/image"
export default function Company()
{
    const images = [
        'partner-logo-1.png',
        'partner-logo-2.png',
        'partner-logo-3.png',
        'partner-logo-4.png',
        'partner-logo-5.png'
    ]
    return(
        <div>
            <div className="container mx-auto px-6 py-[40px] grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-4">
                {
                    images.map((box,index)=>
                    {
                        return(
                            <div key={index+'naz0'} className="flex justify-center">
                                <Image alt="load" width="120px" height="100px" src={`/images/${box}`}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}