// NewsAPI configuration
const NEWS_API_KEY = '05b556a20afa40b7947c78b4bc787a7b'; // Replace with your actual NewsAPI key
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
            url: "#"
        },
        {
            title: "AI Regulation Framework Announced by Government Coalition",
            description: "New guidelines aim to ensure responsible AI development while fostering innovation.",
            category: "news",
            source: { name: "Policy Watch" },
            publishedAt: new Date(Date.now() - 86400000).toISOString(),
            urlToImage: "https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            url: "#"
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
            url: "#"
        },
        {
            title: "Quantum Computing Accelerates Drug Discovery Process",
            description: "New algorithms enable pharmaceutical researchers to identify promising compounds in a fraction of the time.",
            category: "research",
            source: { name: "Quantum Computing Today" },
            publishedAt: new Date(Date.now() - 86400000).toISOString(),
            urlToImage: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            url: "#"
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
            url: "#"
        },
        {
            title: "Major Tech Companies Form AI Alliance for Standardization",
            description: "Collaboration aims to establish common protocols and safety standards across the industry.",
            category: "business",
            source: { name: "Tech Business Report" },
            publishedAt: new Date(Date.now() - 86400000).toISOString(),
            urlToImage: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            url: "#"
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
            url: "#"
        },
        {
            title: "Healthcare AI Systems Now Deployed in Over 5,000 Hospitals",
            description: "Medical imaging diagnostics and clinical decision support systems achieve widespread adoption.",
            category: "industry",
            source: { name: "Healthcare Technology" },
            publishedAt: new Date(Date.now() - 86400000).toISOString(),
            urlToImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            url: "#"
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
            url: "#"
        },
        {
            title: "#MachineLearning Discussions Spike After Major Research Publication",
            description: "Tech community buzzes about the latest neural network efficiency techniques from leading AI labs.",
            category: "trending",
            source: { name: "Tech Trends" },
            publishedAt: new Date(Date.now() - 86400000).toISOString(),
            urlToImage: "https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            url: "#"
        }
    ]
};

// Function to fetch news from pre-fetched data, API, or fallback to sample data
async function fetchNews(category = 'news') {
    try {
        // Always use category-specific sample data for now to ensure something displays
        console.log(`Using sample data for ${category}`);
        return categoryData[category] || categoryData.news;
    } catch (error) {
        console.error('Error fetching news:', error);
        return categoryData[category] || categoryData.news;
    }
}

// Function to update sample data with current dates (for backward compatibility)
function updateSampleDataDates() {
    // Now we use category-specific sample data instead
    return categoryData.news;
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

// Function to create a single news card
function createNewsCard(article, index) {
    // Handle differences between NewsAPI format and our sample data format
    const imageUrl = article.urlToImage || DEFAULT_IMAGES[index % DEFAULT_IMAGES.length];
    const sourceName = article.source?.name || article.source || 'Unknown Source';
    const articleUrl = article.url || "#";
    
    // Create freshness badge with relative time
    const freshnessBadge = `<span class="freshness-badge">${formatDate(article.publishedAt)}</span>`;
    
    // Generate summary content
    const summaryContent = generateSummaryContent(article);
    
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
                        <div class="article-summary">
                            ${summaryContent}
                            <div class="read-source">
                                <p>Read the full article from the original source:</p>
                                <a href="${articleUrl}" target="_blank" class="source-button">Read at ${sourceName}</a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="card-footer">
                    <small>Published: ${formatDate(article.publishedAt)}</small>
                    <button onclick="toggleArticle(${index})">Read Summary</button>
                </div>
            </div>
        </article>
    `;
}

// Function to generate a summary for an article
function generateSummaryContent(article) {
    const category = article.category || 'news';
    
    // Create a more detailed summary based on the article category
    let summary = '';
    
    switch(category) {
        case 'news':
            summary = `
                <p>This news article from ${article.source?.name || 'a reputable source'} covers recent developments in artificial intelligence.</p>
                <p>${article.description}</p>
                <p>Key points from this article:</p>
                <ul>
                    <li>Latest AI developments and their potential impact</li>
                    <li>Industry reactions and expert opinions</li>
                    <li>Implications for technology and society</li>
                </ul>
            `;
            break;
        case 'research':
            summary = `
                <p>This research article highlights recent breakthroughs in AI technology and methodology.</p>
                <p>${article.description}</p>
                <p>Research highlights:</p>
                <ul>
                    <li>Novel approaches and methodologies</li>
                    <li>Performance improvements and benchmarks</li>
                    <li>Potential applications and future directions</li>
                </ul>
            `;
            break;
        case 'business':
            summary = `
                <p>This business article examines AI's impact on markets, investments, and corporate strategy.</p>
                <p>${article.description}</p>
                <p>Business implications:</p>
                <ul>
                    <li>Market trends and investment opportunities</li>
                    <li>Corporate strategies and partnerships</li>
                    <li>Economic impact and industry transformation</li>
                </ul>
            `;
            break;
        case 'industry':
            summary = `
                <p>This industry article explores practical applications of AI across various sectors.</p>
                <p>${article.description}</p>
                <p>Industry applications:</p>
                <ul>
                    <li>Sector-specific implementations and use cases</li>
                    <li>Efficiency gains and operational improvements</li>
                    <li>Challenges and adoption strategies</li>
                </ul>
            `;
            break;
        case 'trending':
            summary = `
                <p>This trending topic is currently generating significant discussion in the AI community.</p>
                <p>${article.description}</p>
                <p>Why it's trending:</p>
                <ul>
                    <li>Social media engagement and public interest</li>
                    <li>Expert opinions and diverse perspectives</li>
                    <li>Potential impact on AI development and policy</li>
                </ul>
            `;
            break;
        default:
            summary = `
                <p>${article.description}</p>
                <p>This article provides valuable insights into artificial intelligence developments and their implications.</p>
            `;
    }
    
    return summary;
}
                            <div class="tab-buttons">
                                <button class="tab-btn active" onclick="showTab(${index}, 'fulltext')">Full Article</button>
                                ${article.videoId ? `<button class="tab-btn" onclick="showTab(${index}, 'video')">Video</button>` : ''}
                                <button class="tab-btn" onclick="showTab(${index}, 'source')">Source</button>
                            </div>
                            
                            <div class="tab-content active" id="tab-${index}-fulltext">
                                <h4>${article.title}</h4>
                                <div class="article-metadata">
                                    <span class="article-author">By ${sourceName}</span>
                                    <span class="article-date">${formatDate(article.publishedAt)}</span>
                                </div>
                                <div class="article-content">
                                    <p>This is a sample article content. In a real implementation, this would contain the full article text.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.</p>
                                </div>
                            </div>
                            
                            ${article.videoId ? `
                            <div class="tab-content" id="tab-${index}-video">
                                <h4>Related Video</h4>
                                <div class="video-container">
                                    <iframe 
                                        src="https://www.youtube.com/embed/${article.videoId}" 
                                        frameborder="0" 
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                        allowfullscreen>
                                    </iframe>
                                </div>
                            </div>
                            ` : ''}
                            
                            <div class="tab-content" id="tab-${index}-source">
                                <h4>Original Source</h4>
                                <p>This article was published by <strong>${sourceName}</strong> on ${formatDate(article.publishedAt)}</p>
                                <p class="source-link"><a href="${article.url}" target="_blank" rel="noopener">Read the original article</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="card-footer">
                    <small>Published: ${formatDate(article.publishedAt)}</small>
                    <button onclick="toggleArticle(${index})">Read more</button>
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
    event.target.classList.add('active');
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Initial load with news category
    filterContent('news');
});