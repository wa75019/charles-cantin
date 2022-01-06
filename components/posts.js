import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'


const catDirectory = path.join(process.cwd(), 'lib/cat')
const photoDirectory = path.join(process.cwd(), 'lib/photos')


export function getGalleryCategories() {
    
    const fullPath = path.join(catDirectory, 'gallery.md')
    const id = fullPath.replace(/\.md$/, '')
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)
    const allCategories = [ ...matterResult.data ]

  return allCategories
}

export function getCategoryContent( ) {
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

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...matterResult.data
    }
  })
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Combine the data with the id
  return {
    id,
    ...matterResult.data
  }
}