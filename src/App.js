import React,{useState,useEffect} from 'react';
import Article from './components/Article';
import particles from './components/particles.css';

function App() {
  const [articles, setArticles] = useState([]);
  const [subreddit, setSubreddit] = useState('webdev');

  useEffect(() => {
    fetch("https://www.reddit.com/r/"+ subreddit +".json").then(res => {
      if(res.status !== 200){
        console.log("ERROR");
        return;
      }
    
      res.json().then(data => {
        if(data != null){
          setArticles(data.data.children);

        }
      });
    })
  },[subreddit]);
  return (
    <div className="App">
      <section class="wrapper">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </section>
      <header className="App-header">
        <input type="text" className="input" value={subreddit} onChange={e => setSubreddit(e.target.value)}/>
      </header>
      <div className="articles">
      {(articles != null) ? articles.map((article,index)=><Article key={index} article={article.data} />) : ''}

      </div>
    </div>
  );
}

export default App;
