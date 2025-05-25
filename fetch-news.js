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
  const url = `${NEWS_API_ENDPOINT}?q=${encodeURIComponent(query)}&from=${fromDate}&to=${toDate}&sortBy=publishedAt&language=en&pageSize=10&apiKey=${NEWS_API_KEY}`;
  
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
      url: article.url
    }));
  }
  return [];
}

async function main() {
  const newsData = {};
  
  for (const category of categories) {
    try {
      console.log(`Fetching ${category} news...`);
      newsData[category] = await fetchNewsForCategory(category);
    } catch (error) {
      console.error(`Error fetching ${category} news:`, error);
      newsData[category] = [];
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
