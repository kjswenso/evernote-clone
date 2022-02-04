import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Evernote Clone</title>
        <meta name="description" content="Evernote clone from youtube tutorial https://www.youtube.com/watch?v=3446IAFr1Tw" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Evernote Clone</h1>
      </main>

      {/* <footer className={styles.footer}>
       
      </footer> */}
    </div>
  )
}
