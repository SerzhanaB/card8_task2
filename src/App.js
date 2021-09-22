import React from 'react';
import ArticleList from './ArticleList';
import articles from './fixtures'

function App() {
  return (
    <div>
      <h1>New App</h1>
      <ArticleList articles={articles}/>
       
   
    
    </div>
  );
}

export default App;
