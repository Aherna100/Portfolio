import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

import '../utils/i18n';

import { Main } from '@/components/Main';
import { Sidenav } from '@/components/Sidenav';
import { Footer } from '@/components/Footer';
import { About } from '@/components/About';
import { Projects } from '@/components/Projects';
import { Contact } from '@/components/Contact';

// Pre project

export default function Home({ data }) {

  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Sidenav />
        <Main className='main' />
        <About className='about' />
        <Projects className='projects' data={data}/>
        <Contact className='contact' />
        <Footer className='footer' />
      </main>

    </>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://api.github.com/users/aherna100/repos');
  const fData = await res.json();
  let data = fData.map((item) => ({ id: item.id, name: item.name, url: item.html_url, description: item.description }));
  return {
    props: {
      data
    }
  }
}