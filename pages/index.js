import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout/layout'
import styles from '../components/layout/layout.module.css'
import { MdPlayArrow } from 'react-icons/md'
import Link from 'next/link'


export const name = 'Charles Cantin'
export const job = "Photographe"
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
        <section>
            <Link href='/gallery'>
              <a className={styles.homeHeader}> 
                <div className={styles.link}>
                  <div className="text">
                    <h1>{name} </h1>
                    <h3>{job}</h3>
                  </div>
                    <MdPlayArrow/>
                </div>  
              </a>
            </Link>    
            
        </section>
    </Layout>
  )
}
