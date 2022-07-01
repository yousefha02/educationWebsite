import Head from "next/head"
import Experience from "../components/About/Experience"
import Experts from "../components/About/Experts"
import Home from "../components/About/Home"
import Students from "../components/About/Students"
export default function About()
{
    return(
        <>
            <Head>
                <title>About Page</title>
            </Head>
            <div>
                <Home/>
                <Experience/>
                <Experts/>
                <Students/>
            </div>
        </>
    )
}