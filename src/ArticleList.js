import React,{PureComponent} from 'react';
import Article from "./Article";

import './App.css';

class ArticleList extends PureComponent {


 
render(){
  console.log("---2 лист")
  const articleElements = this.props.articles.map((article,index)=> 
  <li key= {article.id} className="article-list_li">
         <Article article={article}  defaultOpen={index===0}/>
  </li>)


  return <ul>{articleElements}</ul>
}
}
export default ArticleList;
