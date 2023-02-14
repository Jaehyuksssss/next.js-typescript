import React, { useState } from 'react'
import axios from 'axios'
import useQuery from 'react-query'

export interface IPost {
  userId: number
  id: number
  title: string
  body: string
}

async function fetchAPI() {
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts?_limit=10&_page=0',
    )
  } catch (error) {
    console.error(error)
  }
}
console.log(fetchAPI())
const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(0)
  const [selectedPost, setSelectedPost] = useState<IPost | null>(null)

  // replace with useQuery

  return <div>aa</div>
}

export default HomePage
