const fetch = require('node-fetch');
const fs = require('fs');

const NEWS_API_KEY = process.env.NEWS_API_KEY;
const NEWS_API_ENDPOINT = 'https://newsapi.org/v2/everything';

// Categories to fetch
const categories = ['news', 'research', 'business', 'industry', 'trending'];

async function fetchNewsForCategory(category) {
  const today = new Date();
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(today.getDate() - 30);
  
  const fromDate = thirtyDaysAgo.toISOString().split('T')[0];
  const toDate = today.toISOString().split('T')[0];
  
  const query = category === 'trending' ? 'artificial intelligence' : `artificial intelligence ${category}`;
  const url = `${NEWS_API_ENDPOINT}?q=${encodeURIComponent(query)}&from=${fromDate}&to=${toDate}&sortBy=publishedAt&language=en&pageSize=5&apiKey=${NEWS_API_KEY}`;
  
  const response = await fetch(url);
  const data = await response.json();
  
  if (data.status === 'ok' && data.articles && data.articles.length > 0) {
    return data.articles.slice(0, 5).map(article => ({
      title: article.title,
      description: article.description || "Latest updates on artificial intelligence.",
      category: category,
      source: { name: article.source.name },
      publishedAt: article.publishedAt,
      urlToImage: article.urlToImage,
      url: article.url,
      fetchedAt: new Date().toISOString() // Add timestamp when article was fetched
    }));
  }
  return [];
}

async function main() {
  // Try to load existing news data
  let existingData = {};
  try {
    if (fs.existsSync('news-data.js')) {
      const fileContent = fs.readFileSync('news-data.js', 'utf8');
      const jsonStr = fileContent.split('const newsData = ')[1].split('export default')[0].trim().replace(/;$/, '');
      existingData = JSON.parse(jsonStr);
    }
  } catch (error) {
    console.log('No existing news data found or error parsing it:', error.message);
  }
  
  const newsData = {};
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
  
  for (const category of categories) {
    try {
      console.log(`Fetching ${category} news...`);
      const newArticles = await fetchNewsForCategory(category);
      
      // Get existing articles for this category
      const existingArticles = existingData[category] || [];
      
      // Filter out articles older than a week based on fetchedAt
      const recentExistingArticles = existingArticles.filter(article => {
        const fetchDate = new Date(article.fetchedAt || article.publishedAt);
        return fetchDate > oneWeekAgo;
      });
      
      // Combine new articles with existing ones, avoiding duplicates
      const combinedArticles = [...newArticles];
      
      recentExistingArticles.forEach(existingArticle => {
        // Check if article already exists in new articles
        const isDuplicate = combinedArticles.some(
          newArticle => newArticle.title === existingArticle.title
        );
        
        if (!isDuplicate) {
          combinedArticles.push(existingArticle);
        }
      });
      
      // Sort by published date, newest first
      newsData[category] = combinedArticles.sort((a, b) => 
        new Date(b.publishedAt) - new Date(a.publishedAt)
      );
      
    } catch (error) {
      console.error(`Error fetching ${category} news:`, error);
      newsData[category] = existingData[category] || [];
    }
  }
  
  // Write to file
  const fileContent = `// Auto-generated news data - Last updated: ${new Date().toISOString()}
const newsData = ${JSON.stringify(newsData, null, 2)};
export default newsData;`;

  fs.writeFileSync('news-data.js', fileContent);
  console.log('News data updated successfully!');
}

main().catch(console.error);
