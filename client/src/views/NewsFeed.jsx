import { useEffect, useState } from "react";
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
        <div>
                      <LPNavBar />
          <div className="bg-background min-h-screen">
            <div className="container mx-auto">
                <div className="text-center">
                    <h1 className="font-semibold text-white text-6xl py-10 ">News Feed</h1>
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
                  <button className="rounded bg-buttonColor hover:bg-hoverButtonColor text-black font-medium py-2 px-4 transition duration-300 ease-in-out transform mx-2 " onClick={handleClick}>
                  Load More Articles
                    </button>

                </div>
            </div>
            <Footer />
          </div>
        </div>
    );
}

export default NewsFeed;

