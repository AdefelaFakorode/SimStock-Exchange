import react from "react";
import NewsArticle from "../components/NewsArticle.jsx";
import { useEffect, useState } from "react";

const today = new Date();
today.setDate(1);
const dateString = today.toISOString().split('T')[0];

const URL = `https://newsapi.org/v2/everything?` +
`q=(Google AND stock) OR (Amazon AND stock) OR (Airbnb AND stock) OR (PayPal AND stock) OR (Adobe AND stock)&` +
`from=${dateString}&` +
`sortBy=popularity&` +
`apiKey=3f52d2fffebe4de4ab5a29d0c3d8af42`;

function NewsFeed() {
    const [newsArticles, setNewsArticles] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            let response = await fetch(URL);
            let data = await response.json();

            const filteredArticles = data.articles.filter(article => 
                article.urlToImage !== null && 
                article.author !== null && 
                article.description !== null && 
                article.source && article.source.id !== null && 
                article.source.name !== null && 
                article.title !== null && 
                article.url !== null
              );
            setNewsArticles(filteredArticles);
            console.log("Data was loaded in Successfully:", filteredArticles);
          } catch (error) {
            console.log("Error data was not loaded in Successfully:", error);
          }
        };
        fetchData();
      }, []);

      if (newsArticles.length === 0) {
        return <div>No articles found</div>;
      }

    return (
        <>
        <main className="bg-gray-800 p-4">
            <div className="container mx-auto text-center">
                <h1 className="text-[#af85e5] text-3xl font-bold p-2 m-2">News Feed</h1>
            </div>

            <NewsArticle title={newsArticles[0].title} image={newsArticles[0].urlToImage} description={newsArticles[0].description} author={newsArticles[0].author} content={newsArticles[0].content} url={newsArticles[0].url} publish={newsArticles[0].publishedAt} />
            <NewsArticle title={newsArticles[1].title} image={newsArticles[1].urlToImage} description={newsArticles[1].description} author={newsArticles[1].author} content={newsArticles[1].content} url={newsArticles[1].url} publish={newsArticles[1].publishedAt}/>
            <NewsArticle title={newsArticles[2].title} image={newsArticles[2].urlToImage} description={newsArticles[2].description} author={newsArticles[2].author} content={newsArticles[2].content} url={newsArticles[2].url} publish={newsArticles[2].publishedAt}/>
        </main>
      </>
    );
}

export default NewsFeed;
