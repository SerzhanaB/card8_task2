import React,{PureComponent} from 'react';
import ArticleList from './ArticleList';
import articles from './fixtures'
import 'bootstrap/dist/css/bootstrap.css'

class  App extends PureComponent {
state ={
  reverted: false
}

articles=articles.slice()

  render(){
    console.log("---1")
   // const articleList=this.state.reverted ? articles.reverse() : articles
   // console.log('----', 2, this.state, articles.map(article=>article.id))
  return (
    <div className="container">
      <div className="jumbotron">
      <h1 className="display-3">New App 
      <button className="btn btn-secondary btn-sm float-right" onClick={this.revert}> Обратный порядок</button>
      </h1>  
      </div>   
      <ArticleList articles={this.state.reverted ? articles.slice().reverse() : articles} />   
    </div>
  )
  }

  revert = () => {
    console.log("button click")
   
    this.setState({
    reverted: !this.state.reverted
  })

 // console.log({this.state.reverted})
}
  
}

export default App;
