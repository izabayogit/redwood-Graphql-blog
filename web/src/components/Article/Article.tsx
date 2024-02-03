
type ArticleProps={
  article:{
title: string
body:string
createdAt: string
  }
}
const Article = ({article}: ArticleProps) => {
  return (
    <article >
    <header>
      <h2>{article.title}</h2>
    </header>
    <p>{article.body}</p>
    <div>Posted At: {article.createdAt}</div>
  </article>
  )
}

export default Article
