import React, { useState } from "react";
import styles from './gallery.module.css'
import Layout from '../../components/layout/layout'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { getGalleryCategories, getCategoryContent } from '../../components/posts'
import Link from 'next/link'
import Masonry from 'react-masonry-css'



export default function Gallery({ allCategories, allPhotoData }) {

const [fileName, setFileName] = useState('')
var imgSrc = []
const handleClick = ( e, name ) => {
  e.preventDefault
  setFileName(name)
}

var styledFileName = fileName.toLowerCase().replace(/[éèê]/g, "e")

allPhotoData.forEach(element => {
  if (element.id === styledFileName) {
    imgSrc = element.images
  } 
})

if (imgSrc !== undefined) {
  var images = imgSrc.map(function(item){
    return <img src={item.thumbnail} key={item.thumbnail} /> 
  })
}
const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 3,
  500: 2
};
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
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        {images}
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
