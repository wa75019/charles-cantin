import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import Header from '../header/header'
import Footer from '../footer/footer'


export const siteTitle = 'My photographies book'

export default function Layout({ children, home }) {
  return (
    <>
    
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="photographie"
          content="Ce site contient mon book de photographie"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <header>
        {home ? (
          <Image
              priority
              src="/images/homepage.jpg"
              className="landingImage"
              layout="fill"
              objectFit="cover"
              objectPosition= "center"
              alt="image background"
            />
        ) : (
          <>
            <Header>{children}</Header>
          </>
        )}
      </header>
    {home ? (
      <main>{children}</main>
      ) : (
        <>
            <main className={styles.container}>{children}</main>
            <Footer>{children}</Footer>
        </>
      )
      }
    </>
  )
  
}