import Head from "next/head"
import Course from "../components/Home/Course"
import Courses from "../components/Home/Courses"
import Subject from "../components/Home/Subject"
export default function Home() {
  return (
    <>
    <Head>
      <title>Home Page</title>
    </Head>
    <div>
        <Course/>
        <Subject/>
        <Courses/>
    </div>
    </>
  )
}
