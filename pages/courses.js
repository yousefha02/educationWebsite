import Head from "next/head"
import Famous from "../components/Courses/Famous"
import Home from "../components/Courses/Home"
export default function Courses()
{
    return(
        <>
            <Head>
                <title>Courses Page</title>
            </Head>
            <div>
                <Home/>
                <Famous/>
            </div>
        </>
    )
}