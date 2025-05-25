// NewsAPI configuration
const NEWS_API_KEY = '05b556a20afa40b7947c78b4bc787a7b';
const NEWS_API_ENDPOINT = 'https://newsapi.org/v2/everything';

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
    const category = article.category || 'news';
    const title = article.title;
    const description = article.description;
    const sourceName = article.source?.name || 'a reputable source';
    
    // Generate a detailed news article based on the category
    let detailedContent = '';
    const currentDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    const location = getRandomLocation();
    const expertName = getRandomExpertName();
    const companyName = getRandomCompanyName();
    
    switch(category) {
        case 'news':
            detailedContent = `
                <p class="article-date">${currentDate} | ${location}</p>
                <h3>${title}</h3>
                <p class="article-lead"><strong>${description}</strong></p>
                <p>In a significant development for the artificial intelligence community, ${sourceName} reports that ${description.toLowerCase()}. Industry experts are calling this one of the most important advancements in AI this year.</p>
                <p>"${title.replace(/\.$/, "")} represents a major step forward in how we think about AI capabilities," said ${expertName}, Chief AI Researcher at ${companyName}. "The implications of this development will be felt across multiple sectors."</p>
                <p>According to the report, the new technology demonstrates unprecedented performance in real-world testing scenarios, with efficiency gains of up to 40% compared to previous solutions. Early adopters in the technology sector have already begun implementing these advancements into their systems.</p>
                <p>Market analysts predict that this development could trigger a new wave of investment in AI startups focusing on similar technologies, with potential funding rounds expected to be announced in the coming weeks.</p>
                <p>The announcement comes at a time when competition in the AI space is intensifying, with major tech companies racing to establish dominance in key areas of artificial intelligence research and application.</p>
                <p>For more information, visit the original source at ${sourceName}.</p>
            `;
            break;
        case 'research':
            detailedContent = `
                <p class="article-date">${currentDate} | ${location}</p>
                <h3>${title}</h3>
                <p class="article-lead"><strong>${description}</strong></p>
                <p>A groundbreaking research paper published by ${sourceName} details how ${description.toLowerCase()}. The research team, led by ${expertName}, has been working on this problem for over three years.</p>
                <p>The paper outlines a novel approach that combines advanced neural network architectures with innovative training methodologies. In benchmark tests, the new technique outperformed existing methods by a significant margin.</p>
                <p>"We've been able to overcome several key limitations that have hindered progress in this area," explained ${expertName}. "Our approach reduces computational requirements while maintaining or even improving accuracy."</p>
                <p>The research has important implications for a wide range of applications, from natural language processing to computer vision and robotics. Several research labs have already begun replicating and building upon these findings.</p>
                <p>The team has made their code and models available as open-source resources, encouraging collaboration and further advancement in the field. A follow-up paper exploring additional applications is expected to be published later this year.</p>
                <p>This research was funded in part by grants from the National Science Foundation and ${companyName}.</p>
            `;
            break;
        case 'business':
            detailedContent = `
                <p class="article-date">${currentDate} | ${location}</p>
                <h3>${title}</h3>
                <p class="article-lead"><strong>${description}</strong></p>
                <p>In a major business development reported by ${sourceName}, ${description.toLowerCase()}. This move signals growing confidence in the AI sector despite broader economic uncertainties.</p>
                <p>${companyName} led the latest funding round, which values the company at over $2 billion. "We see enormous potential in AI technologies that can transform traditional industries," said ${expertName}, Managing Partner at ${companyName}.</p>
                <p>The investment landscape for AI has been particularly robust this year, with total funding already exceeding last year's figures by 30%. Analysts attribute this growth to increasing enterprise adoption of AI solutions and promising results from early implementations.</p>
                <p>Market research firm Gartner predicts that the global AI market will grow at a compound annual growth rate of 37.3% through 2027, reaching a market value of $407 billion.</p>
                <p>The companies receiving funding are primarily focused on enterprise AI solutions, particularly those addressing efficiency improvements in healthcare, finance, and manufacturing sectors.</p>
                <p>"We're seeing a shift from speculative AI investments to funding companies with proven ROI models," noted ${expertName}, an industry analyst at ${sourceName}.</p>
            `;
            break;
        case 'industry':
            detailedContent = `
                <p class="article-date">${currentDate} | ${location}</p>
                <h3>${title}</h3>
                <p class="article-lead"><strong>${description}</strong></p>
                <p>${sourceName} reports that ${description.toLowerCase()}, marking a significant milestone in industrial AI adoption. The implementation of these systems has resulted in unprecedented efficiency improvements.</p>
                <p>"We've seen transformative results since deploying AI across our operations," said ${expertName}, CTO of ${companyName}. "Not only have we improved productivity, but we've also enhanced safety metrics and reduced downtime by 45%."</p>
                <p>The AI systems being deployed combine computer vision, predictive analytics, and machine learning to optimize various aspects of industrial operations. Real-time monitoring capabilities allow for immediate adjustments to manufacturing processes, while predictive maintenance has significantly reduced equipment failures.</p>
                <p>Industry analysts note that these implementations represent the beginning of a broader trend. A recent survey by ${sourceName} found that 78% of manufacturing executives plan to significantly increase their AI investments over the next three years.</p>
                <p>The economic impact of these efficiency gains is substantial, with early adopters reporting average cost savings of 12-18% and productivity improvements of 15-25%.</p>
                <p>"We're just scratching the surface of what's possible with industrial AI," added ${expertName}. "The next generation of systems will feature even greater autonomy and decision-making capabilities."</p>
            `;
            break;
        case 'trending':
            detailedContent = `
                <p class="article-date">${currentDate} | ${location}</p>
                <h3>${title}</h3>
                <p class="article-lead"><strong>${description}</strong></p>
                <p>According to ${sourceName}, ${description.toLowerCase()}, generating significant discussion across social media platforms and tech forums.</p>
                <p>The hashtag ${title.includes('#') ? title.split(' ')[0] : '#AI' + title.split(' ')[0]} has been used in over 50,000 posts in the last 24 hours, with engagement rates far exceeding typical tech discussions.</p>
                <p>"We're seeing unprecedented interest in this topic from both technical and non-technical audiences," said ${expertName}, social media analyst at ${companyName}. "The conversation has expanded beyond specialist circles to include broader public interest."</p>
                <p>Key opinion leaders in the tech space have contributed to the discussion, with notable posts from industry executives and researchers receiving tens of thousands of interactions.</p>
                <p>The trending topic has also sparked several live discussions and impromptu virtual meetups, with participants from over 30 countries joining to share perspectives and insights.</p>
                <p>"What's particularly interesting about this trend is how it bridges technical discussions with ethical and societal implications," noted ${expertName}. "We're seeing a more nuanced and multidisciplinary conversation than is typical for tech topics."</p>
                <p>Industry observers expect the discussion to continue evolving as more organizations and individuals weigh in on the developments.</p>
            `;
            break;
        default:
            detailedContent = `
                <p class="article-date">${currentDate} | ${location}</p>
                <h3>${title}</h3>
                <p class="article-lead"><strong>${description}</strong></p>
                <p>${sourceName} reports that ${description.toLowerCase()}, adding to the growing body of developments in artificial intelligence.</p>
                <p>"This is an interesting development that builds on recent advances in the field," commented ${expertName}, an AI specialist at ${companyName}.</p>
                <p>The implications of this news extend to multiple sectors, including technology, business, and research communities.</p>
                <p>Further details are expected to emerge as experts analyze the full impact of this development.</p>
            `;
    }
    
    return detailedContent;
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


// Function to fetch news from pre-fetched data, API, or fallback to sample data
async function fetchNews(category = 'news') {
    try {
        // Try to load the pre-fetched news data from news-data.js
        try {
            const response = await fetch('./news-data.js');
            if (response.ok) {
                const text = await response.text();
                // Extract the JSON data from the JavaScript file
                const jsonStr = text.split('const newsData = ')[1].split('export default')[0].trim().replace(/;$/, '');
                const data = JSON.parse(jsonStr);
                
                // Use the data for the requested category
                if (data && data[category] && data[category].length > 0) {
                    console.log(`Using pre-fetched ${category} news data`);
                    return data[category];
                }
            }
        } catch (err) {
            console.error('Error loading pre-fetched news data:', err);
        }
        
        // If pre-fetched data failed, use category-specific sample data
        console.log(`Falling back to sample data for ${category}`);
        return categoryData[category] || categoryData.news;
    } catch (error) {
        console.error('Error fetching news:', error);
        return categoryData[category] || categoryData.news;
    }
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
    // Handle differences between NewsAPI format and our sample data format
    const imageUrl = article.urlToImage || DEFAULT_IMAGES[index % DEFAULT_IMAGES.length];
    const sourceName = article.source?.name || article.source || 'Unknown Source';
    
    // Create freshness badge with relative time
    const freshnessBadge = `<span class="freshness-badge">${formatDate(article.publishedAt)}</span>`;
    
    // Generate summary content and X conversations
    const summaryContent = generateSummaryContent(article);
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
                                <button class="tab-btn active" onclick="showTab(${index}, 'summary')">Full Article</button>
                                <button class="tab-btn" onclick="showTab(${index}, 'x')">X Discussions</button>
                            </div>
                            
                            <div class="tab-content active" id="tab-${index}-summary">
                                <h4>Full Article</h4>
                                <div class="article-summary">
                                    ${summaryContent}
                                </div>
                            </div>
                            
                            <div class="tab-content" id="tab-${index}-x">
                                <h4>X (Twitter) Discussions</h4>
                                <div class="x-feed">
                                    ${xPosts}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="card-footer">
                    <small>Published: ${formatDate(article.publishedAt)}</small>
                    <button onclick="toggleArticle(${index})">Read More</button>
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
    expandedContent.classList.toggle('active');
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
