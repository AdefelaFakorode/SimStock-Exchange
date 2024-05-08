import React, { useEffect, useState } from "react";
import NewsArticle from "../components/NewsArticle.jsx";
import LPNavBar from '../components/LSI_NavBar/LPNavBar';
import Footer from '../components/LSI_NavBar/LSI_Footer.jsx';

const refreshRate = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

function NewsFeed() {
    const [newsArticles, setNewsArticles] = useState([]);
    const [numArticles, setNumArticles] = useState(5);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const fetchArticles = async () => {
        const date = new Date();
        const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
        const dateString = firstDayOfMonth.toISOString().split('T')[0];
        const URL = `https://newsapi.org/v2/everything?` +
                    `q=(GOOGL AND stock) OR 
                    (AMZN AND stock) OR 
                    (ABNB AND stock) OR 
                    (PYPL AND stock) OR 
                    (ADBE AND stock) OR 
                    (AAPL AND stock) OR 
                    (MSFT AND stock) OR 
                    (NFLX AND stock) OR 
                    (TSLA AND stock)&` +
                    `from=${dateString}&` +
                    `sortBy=popularity&` +
                    `apiKey=3f52d2fffebe4de4ab5a29d0c3d8af42`;

        try {
          const response = await fetch(URL);
          const data = await response.json();
          const filteredArticles = data.articles.filter(article => 
            article.urlToImage &&
            article.author &&
            article.description &&
            article.source.name &&
            article.title &&
            article.url
          );
          setIsLoading(false);
          setNewsArticles(filteredArticles);
        } catch (error) {
          setIsLoading(false);
          console.error("Error, data was not loaded successfully:", error);
        }
      };

      fetchArticles();
      const interval = setInterval(fetchArticles, refreshRate);
      return () => clearInterval(interval);
    }, []);

    function handleClick() {
      setNumArticles(numArticles + 3);
    }

    return (
        <>
          <main className={`bg-background p-4 transition-opacity duration-500 ${isLoading ? 'opacity-50 blur-sm' : 'opacity-100'}`}>
            <LPNavBar />

            <div className="container mx-auto">
                <div className="text-center">
                    <h1 className="text-white text-3xl font-bold p-2 m-2">News Feed</h1>
                </div>

                {newsArticles.slice(0, numArticles).map(article => (
                      <NewsArticle 
                        key={article.url}
                        title={article.title} 
                        image={article.urlToImage} 
                        description={article.description} 
                        author={article.author} 
                        content={article.content} 
                        url={article.url} 
                        publish={article.publishedAt} 
                      />
                ))}

                <div className="flex justify-center p-11">
                  <button className="bg-white text-lg font-semibold text-gray-800 py-1 px-2 border border-gray-400 rounded shadow hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-opacity-50 transition duration-300 ease-in-out" onClick={handleClick}>
                    Load More Articles
                  </button>
                </div>
            </div>
          </main>
          <Footer />
        </>
    );
}

export default NewsFeed;

