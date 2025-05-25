// Replace with X-focused configuration
const X_TOPICS = {
    news: ['#AINews', '#ArtificialIntelligence', '#AIUpdates'],
    research: ['#AIResearch', '#MachineLearning', '#DeepLearning'],
    business: ['#AIBusiness', '#TechInvestment', '#AIStartups'],
    industry: ['#AIIndustry', '#IndustryAI', '#AIApplications'],
    trending: ['#AITrending', '#TechTrends', '#AIFuture']
};


// Default image URLs for articles without images
const DEFAULT_IMAGES = [
    "https://images.unsplash.com/photo-1677442135136-760c813029fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1561144257-e32e8efc6c4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
];

// Sample data for different categories
const categoryData = {
    news: [
        {
            title: "OpenAI Releases New AI Model with Enhanced Capabilities",
            description: "The latest model shows significant improvements in reasoning and problem-solving abilities.",
            category: "news",
            source: { name: "Tech News Today" },
            publishedAt: new Date().toISOString(),
            urlToImage: "https://images.unsplash.com/photo-1677442135136-760c813029fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            url: "https://technewstoday.com/openai-new-model"
        },
        {
            title: "AI Regulation Framework Announced by Government Coalition",
            description: "New guidelines aim to ensure responsible AI development while fostering innovation.",
            category: "news",
            source: { name: "Policy Watch" },
            publishedAt: new Date(Date.now() - 86400000).toISOString(),
            urlToImage: "https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            url: "https://policywatch.org/ai-regulation-framework"
        }
    ],
    research: [
        {
            title: "Breakthrough in Neural Network Efficiency Reduces Model Size by 90%",
            description: "Researchers develop new technique that maintains accuracy while dramatically reducing computational requirements.",
            category: "research",
            source: { name: "AI Research Journal" },
            publishedAt: new Date().toISOString(),
            urlToImage: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            url: "https://airesearchjournal.org/neural-efficiency"
        },
        {
            title: "Quantum Computing Accelerates Drug Discovery Process",
            description: "New algorithms enable pharmaceutical researchers to identify promising compounds in a fraction of the time.",
            category: "research",
            source: { name: "Quantum Computing Today" },
            publishedAt: new Date(Date.now() - 86400000).toISOString(),
            urlToImage: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            url: "https://quantumcomputing.today/drug-discovery"
        }
    ],
    business: [
        {
            title: "AI Startups Raise Record $50 Billion in First Half of 2024",
            description: "Venture capital funding continues to flow into AI companies despite broader market fluctuations.",
            category: "business",
            source: { name: "Business Insider" },
            publishedAt: new Date().toISOString(),
            urlToImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            url: "https://businessinsider.com/ai-startup-funding"
        },
        {
            title: "Major Tech Companies Form AI Alliance for Standardization",
            description: "Collaboration aims to establish common protocols and safety standards across the industry.",
            category: "business",
            source: { name: "Tech Business Report" },
            publishedAt: new Date(Date.now() - 86400000).toISOString(),
            urlToImage: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            url: "https://techbusinessreport.com/ai-alliance"
        }
    ],
    industry: [
        {
            title: "Manufacturing Sector Reports 60% Efficiency Gains with AI Implementation",
            description: "Smart factories using computer vision and predictive maintenance see dramatic improvements in output.",
            category: "industry",
            source: { name: "Industry Tech" },
            publishedAt: new Date().toISOString(),
            urlToImage: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            url: "https://industrytech.com/ai-efficiency-gains"
        },
        {
            title: "Healthcare AI Systems Now Deployed in Over 5,000 Hospitals",
            description: "Medical imaging diagnostics and clinical decision support systems achieve widespread adoption.",
            category: "industry",
            source: { name: "Healthcare Technology" },
            publishedAt: new Date(Date.now() - 86400000).toISOString(),
            urlToImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            url: "https://healthcaretech.org/ai-hospital-deployment"
        }
    ],
    trending: [
        {
            title: "#AIEthics Trending as Industry Leaders Call for Responsible Development",
            description: "Discussions about ethical AI guidelines gain traction following recent industry announcements.",
            category: "trending",
            source: { name: "Social Media Watch" },
            publishedAt: new Date().toISOString(),
            urlToImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            url: "https://socialmediawatch.com/ai-ethics-trending"
        },
        {
            title: "#MachineLearning Discussions Spike After Major Research Publication",
            description: "Tech community buzzes about the latest neural network efficiency techniques from leading AI labs.",
            category: "trending",
            source: { name: "Tech Trends" },
            publishedAt: new Date(Date.now() - 86400000).toISOString(),
            urlToImage: "https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            url: "https://techtrends.com/machine-learning-spike"
        }
    ]
};

// Function to get X (Twitter) posts for an article
function getXPostsForArticle(article) {
    // More realistic X posts based on article topic
    const mockXPosts = [
        {
            username: 'AI Research Lab',
            handle: '@AIResearchLab',
            verified: true,
            content: `Just read "${article.title}". This research could revolutionize how we approach ${article.category} problems. The implications for industry are significant. #AI #Innovation`,
            timestamp: '2h ago',
            likes: Math.floor(Math.random() * 1000) + 100,
            retweets: Math.floor(Math.random() * 500) + 50,
            replies: Math.floor(Math.random() * 100) + 10,
            profileImg: 'https://pbs.twimg.com/profile_images/1634058036934500352/b4F1eVpJ_400x400.jpg'
        },
        {
            username: 'Sarah Johnson, PhD',
            handle: '@DrSarahAI',
            verified: true,
            content: `I've been following developments in ${article.category} for years, and this is genuinely exciting. The approach described in "${article.title.substring(0, 40)}..." addresses key challenges we've been facing. Looking forward to seeing how this develops.`,
            timestamp: '4h ago',
            likes: Math.floor(Math.random() * 2000) + 500,
            retweets: Math.floor(Math.random() * 1000) + 200,
            replies: Math.floor(Math.random() * 200) + 50,
            profileImg: 'https://randomuser.me/api/portraits/women/44.jpg'
        },
        {
            username: 'Tech Insights',
            handle: '@TechInsights',
            verified: true,
            content: `Breaking: ${article.title}. Our analysts predict this will have major implications for the ${article.category} sector. Companies should take note of these developments. What are your thoughts? #TechNews #Innovation`,
            timestamp: '1d ago',
            likes: Math.floor(Math.random() * 5000) + 1000,
            retweets: Math.floor(Math.random() * 2000) + 500,
            replies: Math.floor(Math.random() * 500) + 100,
            profileImg: 'https://randomuser.me/api/portraits/men/32.jpg'
        }
    ];
    
    // Generate HTML for X posts with more realistic styling
    return mockXPosts.map(post => `
        <div class="x-post">
            <div class="x-post-header">
                <img src="${post.profileImg}" alt="${post.username}" class="x-profile-img">
                <div class="x-user-info">
                    <div class="x-name">
                        ${post.username} ${post.verified ? '<span class="x-verified">✓</span>' : ''}
                    </div>
                    <div class="x-handle">${post.handle}</div>
                </div>
            </div>
            <div class="x-post-content">${post.content}</div>
            <div class="x-post-footer">
                <span class="x-timestamp">${post.timestamp}</span>
                <div class="x-stats">
                    <span class="x-stat"><i class="x-icon">💬</i> ${post.replies}</span>
                    <span class="x-stat"><i class="x-icon">🔄</i> ${post.retweets}</span>
                    <span class="x-stat"><i class="x-icon">❤️</i> ${post.likes}</span>
                </div>
            </div>
        </div>
    `).join('');
}


// Function to generate citations for an article
function generateCitations(article) {
    const category = article.category || 'news';
    const sourceName = article.source?.name || 'Unknown Source';
    
    // Generate relevant citations based on category
    const citations = [];
    
    switch(category) {
        case 'research':
            citations.push({
                authors: 'Johnson, S., et al.',
                year: '2023',
                title: 'Advances in Neural Network Optimization',
                journal: 'Journal of Machine Learning Research',
                volume: '24',
                pages: '1145-1172'
            });
            citations.push({
                authors: 'Chen, R., et al.',
                year: '2024',
                title: 'Efficient Training Methods for Large Language Models',
                journal: 'Proceedings of NeurIPS',
                pages: '3245-3260'
            });
            break;
        case 'business':
            citations.push({
                authors: 'Rodriguez, E.',
                year: '2024',
                title: 'AI Investment Trends: A Market Analysis',
                journal: 'Harvard Business Review',
                volume: '102',
                issue: '3',
                pages: '78-86'
            });
            break;
        case 'industry':
            citations.push({
                authors: 'Wilson, T., et al.',
                year: '2023',
                title: 'AI Implementation in Manufacturing: Case Studies',
                journal: 'Industry 4.0 Journal',
                volume: '15',
                pages: '210-225'
            });
            break;
        default:
            citations.push({
                authors: 'Smith, J., et al.',
                year: '2024',
                title: 'Recent Developments in Artificial Intelligence',
                journal: 'AI Review',
                volume: '42',
                pages: '56-72'
            });
    }
    
    // Add the source of the current article as a citation
    citations.push({
        source: sourceName,
        year: new Date(article.publishedAt).getFullYear(),
        title: article.title,
        url: article.url
    });
    
    // Generate HTML for citations
    return citations.map(citation => {
        if (citation.source) {
            return `<li>${citation.source} (${citation.year}). "${citation.title}". <a href="${citation.url}" target="_blank">Link</a></li>`;
        } else {
            return `<li>${citation.authors} (${citation.year}). "${citation.title}". ${citation.journal}, ${citation.volume || ''}${citation.issue ? '(' + citation.issue + ')' : ''}, ${citation.pages}.</li>`;
        }
    }).join('');
}

// Function to generate detailed news content for an article
function generateSummaryContent(article) {
    // Use the actual article content if available
    if (article.content) {
        return `
            <p class="article-date">${new Date(article.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            <h3>${article.title}</h3>
            <p class="article-lead"><strong>${article.description || ''}</strong></p>
            <div class="article-content">
                ${article.content}
            </div>
            <p class="article-source">Source: <a href="${article.url}" target="_blank">${article.source?.name || 'Original Source'}</a></p>
        `;
    }
    
    // If no content is available, use the description and add a link to the original article
    return `
        <p class="article-date">${new Date(article.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        <h3>${article.title}</h3>
        <p class="article-lead"><strong>${article.description || ''}</strong></p>
        <p>This article was published by ${article.source?.name || 'a news source'} on ${new Date(article.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}.</p>
        <p>To read the full article, please visit the <a href="${article.url}" target="_blank">original source</a>.</p>
    `;
}


// Helper functions for generating random names and locations
function getRandomExpertName() {
    const firstNames = ["Dr. Michael", "Dr. Sarah", "Dr. David", "Dr. Emily", "Dr. James", "Dr. Jennifer", "Prof. Robert", "Prof. Lisa"];
    const lastNames = ["Chen", "Williams", "Johnson", "Garcia", "Singh", "Kim", "Patel", "Thompson"];
    return firstNames[Math.floor(Math.random() * firstNames.length)] + " " + lastNames[Math.floor(Math.random() * lastNames.length)];
}

function getRandomCompanyName() {
    const companies = ["TechNova AI", "Quantum Dynamics", "Neural Systems Inc.", "AI Innovations", "Future Intelligence", "DataMind", "Cognitive Technologies", "Synapse Analytics"];
    return companies[Math.floor(Math.random() * companies.length)];
}

function getRandomLocation() {
    const locations = ["San Francisco, CA", "Boston, MA", "Seattle, WA", "Austin, TX", "New York, NY", "Toronto, Canada", "London, UK", "Zurich, Switzerland"];
    return locations[Math.floor(Math.random() * locations.length)];
}


// Function to fetch news from X discussions
async function fetchNews(category = 'news') {
    // Get X posts for the selected category
    const posts = generateXPostsForCategory(category);
    return posts;
}
// Function to generate X posts for a category
function generateXPostsForCategory(category) {
    const topics = X_TOPICS[category] || X_TOPICS.news;
    const posts = [];
    
    // Generate 5-8 posts for this category
    const postCount = 5 + Math.floor(Math.random() * 4);
    
    for (let i = 0; i < postCount; i++) {
        const topic = topics[i % topics.length];
        posts.push(generateXPost(category, topic, i));
    }
    
    return posts;
}

// Function to generate a single X post
function generateXPost(category, topic, index) {
    const userProfiles = [
        { username: 'AI Research Lab', handle: '@AIResearchLab', verified: true, profileImg: 'https://pbs.twimg.com/profile_images/1634058036934500352/b4F1eVpJ_400x400.jpg' },
        { username: 'Sarah Johnson, PhD', handle: '@DrSarahAI', verified: true, profileImg: 'https://randomuser.me/api/portraits/women/44.jpg' },
        { username: 'Tech Insights', handle: '@TechInsights', verified: true, profileImg: 'https://randomuser.me/api/portraits/men/32.jpg' },
        { username: 'AI Daily', handle: '@AIDailyNews', verified: true, profileImg: 'https://randomuser.me/api/portraits/men/45.jpg' },
        { username: 'Future Tech Today', handle: '@FutureTechToday', verified: true, profileImg: 'https://randomuser.me/api/portraits/women/22.jpg' }
    ];
    
    const user = userProfiles[index % userProfiles.length];
    
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
    
    return {
        title: title,
        description: content.substring(0, 100) + '...',
        category: category,
        source: { name: user.username },
        publishedAt: new Date(Date.now() - hours * 3600000).toISOString(),
        urlToImage: `https://picsum.photos/seed/${category}${index}/800/400`,
        url: `https://twitter.com/${user.handle.substring(1)}/status/${Date.now() - index}`,
        content: content,
        user: user,
        timestamp: timestamp,
        likes: Math.floor(Math.random() * 1000) + 100,
        retweets: Math.floor(Math.random() * 500) + 50,
        replies: Math.floor(Math.random() * 100) + 10
    };
}



// Function to create news cards
async function createNewsCards(category = 'news') {
    const gridContainer = document.querySelector('.grid');
    
    // Show loading state
    gridContainer.innerHTML = '<div class="loading">Loading latest AI news...</div>';
    
    try {
        // Fetch news data
        currentNewsData = await fetchNews(category);
        
        // Clear existing content
        gridContainer.innerHTML = '';
        
        // Add news cards
        currentNewsData.forEach((article, index) => {
            const card = createNewsCard(article, index);
            gridContainer.innerHTML += card;
        });
    } catch (error) {
        console.error('Error creating news cards:', error);
        gridContainer.innerHTML = '<div class="error">Failed to load news. Please try again later.</div>';
    }
}

function createNewsCard(article, index) {
    // Handle differences between X post format and our display format
    const imageUrl = article.urlToImage;
    const sourceName = article.source?.name || article.user?.username || 'X User';
    
    // Create freshness badge with relative time
    const freshnessBadge = `<span class="freshness-badge">${article.timestamp || formatDate(article.publishedAt)}</span>`;
    
    // Generate X conversations
    const xPosts = getXPostsForArticle(article);
    
    return `
        <article class="card">
            <div class="card-video" style="background-image: url('${imageUrl}')">
                <div class="card-overlay">
                    <div class="card-category-tag">${article.category || 'news'}</div>
                </div>
                ${freshnessBadge}
            </div>
            <div class="card-content">
                <div class="source-tag">${sourceName}</div>
                <h3>${article.title}</h3>
                <p>${article.description || 'No description available'}</p>
                
                <div id="expanded-${index}" class="expanded-content">
                    <div class="full-article">
                        <div class="content-tabs">
                            <div class="tab-buttons">
                                <button class="tab-btn active" onclick="showTab(${index}, 'x')">X Discussions</button>
                            </div>
                            
                            <div class="tab-content active" id="tab-${index}-x">
                                <h4>X (Twitter) Discussions</h4>
                                <div class="x-feed">
                                    ${xPosts}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="card-footer">
                   <small>Posted: ${article.timestamp || formatDate(article.publishedAt)}</small>
                   <button id="btn-${index}" onclick="toggleArticle(${index})">Read More</button>
                </div>
            </div>
        </article>
    `;
}



// Function to format date
function formatDate(dateString) {
    try {
        const date = new Date(dateString);
        
        // Check if date is valid
        if (isNaN(date.getTime())) {
            return "Recently";
        }
        
        // Calculate time difference
        const now = new Date();
        const diffMs = now - date;
        const diffSecs = Math.floor(diffMs / 1000);
        const diffMins = Math.floor(diffSecs / 60);
        const diffHours = Math.floor(diffMins / 60);
        const diffDays = Math.floor(diffHours / 24);
        
        // Format relative time for recent dates
        if (diffDays === 0) {
            if (diffHours === 0) {
                if (diffMins === 0) {
                    return "Just now";
                }
                return `${diffMins} minute${diffMins !== 1 ? 's' : ''} ago`;
            }
            return `${diffHours} hour${diffHours !== 1 ? 's' : ''} ago`;
        } else if (diffDays < 7) {
            return `${diffDays} day${diffDays !== 1 ? 's' : ''} ago`;
        }
        
        // Use full date for older content
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString(undefined, options);
    } catch (e) {
        console.error("Date formatting error:", e);
        return "Recently";
    }
}

// Global variable to store current news data
let currentNewsData = [];

// Function to toggle article expansion
function toggleArticle(id) {
    const expandedContent = document.getElementById(`expanded-${id}`);
    const button = document.querySelector(`#btn-${id}`);
    
    expandedContent.classList.toggle('active');
    
    // Update button text based on expanded state
    if (expandedContent.classList.contains('active')) {
        button.textContent = 'Read Less';
    } else {
        button.textContent = 'Read More';
    }
}


// Function to filter content by category
async function filterContent(category) {
    // Update active nav link
    document.querySelectorAll('.main-nav a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + category) {
            link.classList.add('active');
        }
    });
    
    // Show loading state
    const container = document.querySelector('.grid');
    container.style.opacity = '0.5';
    
    // Fetch news for selected category
    const articles = await fetchNews(category);
    let newsHTML = '';
    
    // Create news cards
    articles.forEach((article, index) => {
        newsHTML += createNewsCard(article, index);
    });
    
    // Update content with animation
    setTimeout(() => {
        container.innerHTML = newsHTML;
        container.style.opacity = '1';
        
        // Update header text
        const categoryTitles = {
            news: 'Latest AI News & Updates',
            research: 'AI Research & Breakthroughs',
            business: 'AI Business & Markets',
            industry: 'Industry Applications & Impact',
            trending: 'Trending on X'
        };
        
        document.querySelector('#featured h2').textContent = categoryTitles[category] || 'Featured Content';
    }, 300);
}

// Function to switch tabs
function showTab(articleId, tabName) {
    // Hide all tab contents for this article
    const tabContents = document.querySelectorAll(`[id^="tab-${articleId}-"]`);
    tabContents.forEach(tab => tab.classList.remove('active'));
    
    // Show the selected tab
    document.getElementById(`tab-${articleId}-${tabName}`).classList.add('active');
    
    // Update tab button states
    const tabButtons = document.querySelector(`[id="expanded-${articleId}"]`).querySelectorAll('.tab-btn');
    tabButtons.forEach(btn => btn.classList.remove('active'));
    event.currentTarget.classList.add('active');
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Initial load with news category
    filterContent('news');
});
