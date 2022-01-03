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
                <Link href='/contact'>
                    <a> 
                    <p> contact</p>
                    </a>
                </Link> 
            </div>
        </>

        )
    }