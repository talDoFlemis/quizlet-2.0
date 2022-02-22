import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import EntryPage from "../components/home/EntryPage"
import Header from "../components/home/Header"
import SectioCallToAction from "../components/home/SectioCallToAction"
import Section1 from "../components/home/Section1"
import Section2 from "../components/home/Section2"
import Section3 from "../components/home/Section3"
import Section4 from "../components/home/Section4"
import Section5 from "../components/home/Section5"
import SectionTeacher from "../components/home/SectionTeacher"
import SectionTestimonials from "../components/home/SectionTestimonials"
//TODO:REMOVE DARK MODE
const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>Learning Tools & Flashcards</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <main>
        <Header />
        <EntryPage />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <SectionTestimonials />
        <SectioCallToAction />
        <SectionTeacher />
      </main>
    </div>
  )
}

export default Home
