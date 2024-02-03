import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import ArticleCell from "src/components/ArticleCell"

type ArticlePageProps ={
  id:number
}
const ArticlePage = ({id}: ArticlePageProps) => {
  return (
    <>
      <Metadata title="Article" description="Article page" />
      <ArticleCell id={id}/>
    </>
  )
}

export default ArticlePage
