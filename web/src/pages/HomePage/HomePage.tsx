import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import ArticlesCell from "src/components/ArticlesCell"
const HomePage = () => {
  return (
    <>
      <Metadata title="Home" description="Redwood Blog " />
      
      <> <ArticlesCell/></>
     
    </>
  )
}

export default HomePage
