import React,{Component} from 'react';
import ArticleList from './ArticleList';
import articles from './fixtures'
import 'bootstrap/dist/css/bootstrap.css'

class  App extends Component {
state ={
  reverted: false
}


  render(){
  return (
    <div className="container">
      <div className="jumbotron">
      <h1 className="display-3">New App 
      <button className="btn btn-secondary btn-sm float-right" onClick={this.revert}>Обратный порядок</button>
      </h1>  
      </div>   
      <ArticleList articles={this.state.reverted ? articles.reverse() : articles} />   
    </div>
  )
  }

  revert =()=> this.setState({
    reverted: !this.state.reverted
  })
  
}

export default App;
