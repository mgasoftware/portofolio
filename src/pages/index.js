import Head from 'next/head'
import Main from '../components/Main'
import About from '../components/About'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'

export default function Home() {
  return (
    <>
    <Head>
      <title>MGA Software | Full Stack developper</title>
    </Head>
    <Navbar />
    <Main />
    <About />
    <Skills />
    <Projects />
    <Contact />
    </>
  )
}
