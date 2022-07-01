import { React,useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
export default function Questions()
{
    let info = 
    [
        {
            ques:'How To Contact For Help?',
            answer:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s',
            on:true,
            id:1
        },
        {
            ques:'What Payments Methods Are Available?',
            answer:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s',
            on:false,
            id:2
        },
        {
            ques:'Can I Can Choose My Own Tutor?',
            answer:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s',
            on:false,
            id:3
        },
        {
            ques:'What Is The Best Carrer in 2022?',
            answer:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s',
            on:false,
            id:4
        },
        {
            ques:'How To Contact For Help?',
            answer:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s',
            on:false,
            id:5
        },
        {
            ques:'What Payments Methods Are Available?',
            answer:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s',
            on:false,
            id:6
        }
    ]

    const [data,setData] = useState(info)

    function change(id)
    {
        setData(back=>back.map(box=>box.id==id?{...box,on:!box.on}:{...box,on:false}))
    }

    return(
        <div>
            <div className="container mx-auto px-6 py-[40px]">
                <h3 className="text-[22px] sm:text-[28px] text-black text-center mb-5">Frequently Ask Questions</h3>
                <div className='grid lg:grid-cols-2 gap-4 items-start'>
                {
                    data.map((box,index)=>
                    {
                        return(
                            <div key={index+'mn18'} className="border border-green shadow text-black">
                                <div className='flex justify-between items-center cursor-pointer p-3 duration-300' onClick={()=>change(box.id)}
                                style={{backgroundColor:box.on?'#0eb582':'',color:box.on?'white':''}}>
                                    <h3>{box.ques}</h3>
                                    <IoIosArrowDown className='text-green font-bold'/>
                                </div>
                                {
                                    box.on&&<p className='text-[14px] text-light_color px-3 pt-3 pb-5'>{box.answer}</p>
                                }
                            </div>
                        )
                    })
                }
                </div>
            </div>
        </div>
    )
}