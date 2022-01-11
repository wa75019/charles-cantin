import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'


const catDirectory = path.join(process.cwd(), 'lib/cat')
const photoDirectory = path.join(process.cwd(), 'lib/photos')
const pricingDirectory = path.join(process.cwd(), 'lib/tarifs')


export function getGalleryCategories() {
    
    const fullPath = path.join(catDirectory, 'gallery.md')
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)
    const allCategories = [ ...matterResult.data ]

  return allCategories
}

export function getCategoryContent() {
    const fileNames = fs.readdirSync(photoDirectory)

    const allPhotosData = fileNames.map(fileName => {
      const id = fileName.replace(/\.md$/, '')
      const fullPath = path.join(photoDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'UTF-8')
      const matterResult = matter(fileContents)

      return {
        id,
        ...matterResult.data
      }
    })
    return allPhotosData
}

export function getPricingData() {
  
  const fullPath = path.join(pricingDirectory, 'tarifs.md')
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const matterResult = matter(fileContents)
  const allPrices =  [ ...matterResult.data ] 

  return allPrices

}
