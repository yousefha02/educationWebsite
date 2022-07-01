import Head from "next/head"
import Company from "../components/Contact/Company"
import Home from '../components/Contact/Home'
import Questions from "../components/Contact/Question"
import Send from "../components/Contact/Send"
import Touch from "../components/Contact/Touch"
export default function Contact() {
return (
    <>
    <Head>
        <title>Contact Page</title>
    </Head>
    <div>
        <Home/>
        <Touch/>
        <Send/>
        <Questions/>
        <Company/>
    </div>
    </>
)
}
