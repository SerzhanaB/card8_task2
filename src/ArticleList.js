import React from "react";
import Article from "./components/Article";

import './App.css';

function ArticleList({ articles }) {
  const articleElements = articles.map((article,index)=> 
    <li key= {article.id} className="article-list_li">
           <Article article={article}  defaultOpen={index===0}/>
    </li>
  )

  return <ul>{articleElements}</ul>
}

export default ArticleList;
