import styles from './footer.module.css'
import { name, job } from '../../pages/index'
import Link from 'next/link'


export default function Footer() {

    return (
        <>
            <div className={styles.footer}>
                <div className={styles.textFooter}>
                    <h1>{name} - </h1>
                    <h3>{job}</h3>
                </div>
                 
                <div className={styles.footerSocial}>
                    <Link href='https://facebook.com' passHref={true}>
                        <a target="_blank"> 
                        <img src="/images/facebook.png" alt="logo facebook" />
                        </a>
                    </Link> 
                    <Link href='https://instagram.com' passHref={true}>
                        <a target="_blank"> 
                        <img src="/images/instagram.png" alt="logo instagram" />
                        </a>
                    </Link> 
                </div>
            </div>
        </>

        )
    }