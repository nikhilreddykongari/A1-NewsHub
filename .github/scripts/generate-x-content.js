const fs = require('fs');

// X topics by category
const X_TOPICS = {
    news: ['#AINews', '#ArtificialIntelligence', '#AIUpdates'],
    research: ['#AIResearch', '#MachineLearning', '#DeepLearning'],
    business: ['#AIBusiness', '#TechInvestment', '#AIStartups'],
    industry: ['#AIIndustry', '#IndustryAI', '#AIApplications'],
    trending: ['#AITrending', '#TechTrends', '#AIFuture']
};

// User profiles for X posts
const userProfiles = [
    { username: 'AI Research Lab', handle: '@AIResearchLab', verified: true, profileImg: 'https://pbs.twimg.com/profile_images/1634058036934500352/b4F1eVpJ_400x400.jpg' },
    { username: 'Sarah Johnson, PhD', handle: '@DrSarahAI', verified: true, profileImg: 'https://randomuser.me/api/portraits/women/44.jpg' },
    { username: 'Tech Insights', handle: '@TechInsights', verified: true, profileImg: 'https://randomuser.me/api/portraits/men/32.jpg' },
    { username: 'AI Daily', handle: '@AIDailyNews', verified: true, profileImg: 'https://randomuser.me/api/portraits/men/45.jpg' },
    { username: 'Future Tech Today', handle: '@FutureTechToday', verified: true, profileImg: 'https://randomuser.me/api/portraits/women/22.jpg' }
];

// Generate X posts for a category
function generateXPostsForCategory(category) {
    const topics = X_TOPICS[category] || X_TOPICS.news;
    const posts = [];
    
    // Generate 5-8 posts for this category
    const postCount = 5 + Math.floor(Math.random() * 4);
    
    for (let i = 0; i < postCount; i++) {
        const topic = topics[i % topics.length];
        const user = userProfiles[i % userProfiles.length];
        
        // Generate post content based on category
        let content = '';
        let title = '';
        
        switch(category) {
            case 'news':
                title = `Breaking: New AI Model Shows Unprecedented Performance in ${topic.replace('#', '')} Tasks`;
                content = `Just released: A new AI model has demonstrated remarkable capabilities in ${topic.replace('#', '')}. This could revolutionize how we approach problems in this domain. #AI #Innovation ${topic}`;
                break;
            case 'research':
                title = `Research Breakthrough in ${topic.replace('#', '')} Efficiency`;
                content = `Exciting research paper just published showing a 90% improvement in ${topic.replace('#', '')} efficiency. The implications for the field are enormous. #AIResearch ${topic}`;
                break;
            case 'business':
                title = `Major Investment in ${topic.replace('#', '')} Startups`;
                content = `VC funding for ${topic.replace('#', '')} startups reached record levels this quarter. Several unicorns emerging in this space. #AIBusiness #Investment ${topic}`;
                break;
            case 'industry':
                title = `${topic.replace('#', '')} Transforming Manufacturing Sector`;
                content = `Companies implementing ${topic.replace('#', '')} are reporting 40%+ efficiency gains. This is changing how entire industries operate. #Industry40 #Innovation ${topic}`;
                break;
            case 'trending':
                title = `${topic.replace('#', '')} Discussions Trending Today`;
                content = `Everyone's talking about ${topic.replace('#', '')} today after the latest developments. Join the conversation! #TechTrends ${topic}`;
                break;
        }
        
        // Add some randomness to the timestamps
        const hours = Math.floor(Math.random() * 24);
        const timestamp = hours === 0 ? 'Just now' : hours === 1 ? '1 hour ago' : `${hours} hours ago`;
        
        posts.push({
            title: title,
            description: content.substring(0, 100) + '...',
            category: category,
            source: { name: user.username },
            publishedAt: new Date(Date.now() - hours * 3600000).toISOString(),
            urlToImage: `https://picsum.photos/seed/${category}${i}/800/400`,
            url: `https://twitter.com/${user.handle.substring(1)}/status/${Date.now() - i}`,
            content: content,
            user: user,
            timestamp: timestamp,
            likes: Math.floor(Math.random() * 1000) + 100,
            retweets: Math.floor(Math.random() * 500) + 50,
            replies: Math.floor(Math.random() * 100) + 10
        });
    }
    
    return posts;
}

// Generate X content for all categories
function generateAllXContent() {
    const xData = {};
    
    // Generate posts for each category
    for (const category in X_TOPICS) {
        xData[category] = generateXPostsForCategory(category);
    }
    
    return xData;
}

// Main function
function main() {
    // Generate X content
    const xData = generateAllXContent();
    
    // Write to file
    const fileContent = `// Auto-generated X content - Last updated: ${new Date().toISOString()}
const newsData = ${JSON.stringify(xData, null, 2)};
export default newsData;`;

    fs.writeFileSync('news-data.js', fileContent);
    console.log('X content updated successfully!');
}

// Run the main function
main();
