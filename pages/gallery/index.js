import React, { useState } from "react";
import styles from './gallery.module.css'
import Layout from '../../components/layout/layout'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { getGalleryCategories, getCategoryContent } from '../../components/posts'
import Link from 'next/link'
import Masonry from 'react-masonry-css'



export default function Gallery({ allCategories, allPhotoData }) {

const [fileName, setFileName] = useState('')

const handleClick = ( e, name ) => {
  e.preventDefault
  setFileName(name)
}
const styledFileName = fileName.toLowerCase().replace(/[éèê]/g, "e")
var imgSrc = null

allPhotoData.forEach(element => {
  if (element.id === styledFileName) {
    imgSrc = element.images
  }
  else {
    imgSrc = []
  }
})

imgSrc = imgSrc.map(function(item){
  return <img src={item.thumbnail} key={item.thumbnail} /> 
})

  return (
    <Layout>
      <p className={styles.textCategory}>Cliquez sur une catégorie</p>
      <MdKeyboardArrowDown className={styles.svg}/>
      <div className={styles.categories}>
        {allCategories.map(({ name, thumbnail }) => (
          <Link href="#" key={name} >
            <a className={`${styles.category} ${fileName == name ? "active" : ""}`} onClick={(e) => handleClick(e, name)} >
              <img src={thumbnail} alt={name} />
              <p>{name}</p>
            </a>
          </Link>
            ))}
      </div>
      <Masonry
        breakpointCols={3}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        {imgSrc}
      </Masonry>

    </Layout>
  )
}

export async function getStaticProps() {
  const allCategories = getGalleryCategories()
  const allPhotoData = getCategoryContent()

  return {
    props: {
      allCategories,
      allPhotoData
    }
  }
}
