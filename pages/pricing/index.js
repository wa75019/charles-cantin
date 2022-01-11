import styles from './pricing.module.css'
import Layout from '../../components/layout/layout'
import { getPricingData } from '../../components/posts'
import Link from 'next/link'

export default function Pricing( allPrices ) {
  
  return (
    
    <Layout>
      <div className={styles.contentPrices}>
        <div className={styles.prices}>
          {allPrices.allPrices.map(( { name, price, description }) => (
            <div className={styles.description}>
              <p>"{name}"</p>
              <p>{price}</p>
              <hr />
              <p>{description}</p>
            </div>
            ))}
          </div>
          <div className={styles.contact}>
            <p>Pour envoyer une demande de réservation ou devis :</p>
            <div className={styles.button}>
              <Link href="/contact" >
                <a>
                  <p>Contact</p>
                </a>           
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.info}>
          <p>* 30 euros en supplément par personne au-delà de 4 (hormis enfant jusqu’à 2 ans)</p>
        </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPrices = getPricingData()

  return {
    props: {
      allPrices
    }
  }
}