import type { NextPage } from "next"
import Head from "next/head"
import { useState } from "react"
import EntryPage from "@components/home/EntryPage"
import Header from "@components/home/Header"
import ModalLoginAndSignIn from "@components/home/ModalLoginAndSignIn"
import SectioCallToAction from "@components/home/SectioCallToAction"
import Section1 from "@components/home/Section1"
import Section2 from "@components/home/Section2"
import Section3 from "@components/home/Section3"
import Section4 from "@components/home/Section4"
import Section5 from "@components/home/Section5"
import SectionTeacher from "@components/home/SectionTeacher"
import SectionTestimonials from "@components/home/SectionTestimonials"
import { ModalData } from "../typings"

const Home: NextPage = () => {
  const [modalData, setModalData] = useState<ModalData>({ modalOpen: false })
  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>Learning Tools & Flashcards</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header setModalData={setModalData} />
        <EntryPage />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <SectionTestimonials />
        <SectioCallToAction />
        <SectionTeacher />
        <ModalLoginAndSignIn
          modalData={modalData}
          setModalData={setModalData}
        />
      </main>
    </div>
  )
}

export default Home
