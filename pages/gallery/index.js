import React, { useState } from "react";
import styles from './gallery.module.css'
import Layout from '../../components/layout/layout'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { getGalleryCategories, getCategoryContent } from '../../components/posts'
import Link from 'next/link'



export default function Gallery({ allCategories, allPhotoData }) {

const [fileName, setFileName] = useState('')
 const handleClick = ( e, name ) => {
  e.preventDefault
  setFileName(name)
}
const styledFileName = fileName.toLowerCase().replace(/[éèê]/g, "e")
var imgSrc = null
let content
allPhotoData.forEach(element => {
  if (element.id === styledFileName) {
    imgSrc = element.images
    
  }
  else {
    imgSrc = []
  }
})
console.log(imgSrc)
  return (
    <Layout>
      <p className={styles.textCategory}>Cliquez sur une catégorie</p>
      <MdKeyboardArrowDown className={styles.svg}/>
      <div className={styles.categories}>
        {allCategories.map(({ name, thumbnail }) => (
          <Link href="#" key={name} >
            <a className={styles.category} onClick={(e) => handleClick(e, name)}>
              <img src={thumbnail} alt={name} />
              <p>{name}</p>
            </a>
          </Link>
            ))}
      </div>

      {imgSrc.map(({ thumbnail }) => (
        <img src={thumbnail} key={thumbnail} /> 
      
      ))}

          
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
