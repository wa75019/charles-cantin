import styles from './gallery.module.css'
import Layout from '../../components/layout/layout'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { getGalleryCategories } from '../../components/posts'

export default function Gallery({ allCategories }) {

  return (
    <Layout>
      <p className={styles.textCategory}>Cliquez sur une catégorie</p>
      <MdKeyboardArrowDown className={styles.svg}/>
      <div className={styles.categories}>
        {allCategories.map(({ name, thumbnail }) => (
          <div className={styles.category} key={name}>
            <img src={thumbnail} alt={name} />
            <p>{name}</p>
          </div>
            ))}
      </div>

          
    </Layout>
  )
}

export async function getStaticProps() {
  const allCategories = getGalleryCategories()
  return {
    props: {
      allCategories
    }
  }
}