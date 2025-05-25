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

// Fallback to sample data if API fails
const sampleAiNewsData = [
    {
        title: "OpenAI Releases GPT-5 with Enhanced Reasoning Capabilities",
        description: "The latest large language model shows significant improvements in logical reasoning and mathematical problem-solving.",
        category: "research",
        source: { name: "AI Research Today" },
        publishedAt: "2024-05-15T09:30:00Z",
        urlToImage: "https://images.unsplash.com/photo-1677442135136-760c813029fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        url: "#"
    },
    {
        title: "AI Regulation Framework Proposed by International Coalition",
        description: "A group of 24 countries has proposed a unified framework for regulating artificial intelligence development and deployment.",
        category: "policy",
        source: { name: "Global Tech Policy" },
        publishedAt: "2024-05-14T14:20:00Z",
        urlToImage: "https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        url: "#"
    },
    {
        title: "Healthcare AI System Achieves 95% Accuracy in Early Cancer Detection",
        description: "A new AI diagnostic tool has demonstrated remarkable accuracy in detecting early-stage cancers from standard medical imaging.",
        category: "healthcare",
        source: { name: "Medical AI Journal" },
        publishedAt: "2024-05-13T11:45:00Z",
        urlToImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        url: "#"
    },
    {
        title: "Autonomous Vehicles Reach New Milestone in Urban Testing",
        description: "Self-driving cars have completed over 1 million miles in complex urban environments with zero accidents.",
        category: "industry",
        source: { name: "Automotive Tech" },
        publishedAt: "2024-05-12T08:15:00Z",
        urlToImage: "https://images.unsplash.com/photo-1561144257-e32e8efc6c4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        url: "#",
        videoId: "8V20HkoLIqc"
    }
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

// Function to fetch news from NewsAPI or use category-specific sample data
async function fetchNews(category = 'news') {
    try {
        // For GitHub Pages deployment, use category-specific sample data
        if (window.location.hostname.includes('github.io')) {
            console.log('Using sample data for GitHub Pages deployment');
            return categoryData[category] || categoryData.news;
        }
        
        // For localhost development, try to use the actual API
        // Get current date and date from 30 days ago (NewsAPI free tier limitation)
        const today = new Date();
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(today.getDate() - 30);
        
        // Format dates for API
        const fromDate = thirtyDaysAgo.toISOString().split('T')[0];
        const toDate = today.toISOString().split('T')[0];
        
        const query = category === 'trending' ? 'artificial intelligence' : `artificial intelligence ${category}`;
        const url = `${NEWS_API_ENDPOINT}?q=${encodeURIComponent(query)}&from=${fromDate}&to=${toDate}&sortBy=publishedAt&language=en&pageSize=10&apiKey=${NEWS_API_KEY}`;
        
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.status === 'ok' && data.articles && data.articles.length > 0) {
            // Add category to each article and ensure dates are valid
            return data.articles.map((article, index) => {
                // Assign a default image if none exists
                if (!article.urlToImage) {
                    article.urlToImage = DEFAULT_IMAGES[index % DEFAULT_IMAGES.length];
                }
                
                // Ensure publishedAt is valid, or use current date
                if (!article.publishedAt || isNaN(new Date(article.publishedAt).getTime())) {
                    article.publishedAt = new Date().toISOString();
                }
                
                // Assign a category based on the current filter
                article.category = category;
                
                return article;
            });
        } else {
            console.error('Error fetching news or no articles returned:', data);
            // Use category-specific sample data as fallback
            return categoryData[category] || categoryData.news;
        }
    } catch (error) {
        console.error('Error fetching news:', error);
        // Use category-specific sample data as fallback
        return categoryData[category] || categoryData.news;
    }
}

// Global variable to store current news data
let currentNewsData = [];

// Function to update sample data with current dates (for backward compatibility)
function updateSampleDataDates() {
    // Now we use category-specific sample data instead
    return categoryData.news;
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
    
    // Create freshness badge with relative time
    const freshnessBadge = `<span class="freshness-badge">${formatDate(article.publishedAt)}</span>`;
    
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
                                <button class="tab-btn active" onclick="showTab(${index}, 'fulltext')">Full Article</button>
                                ${article.videoId ? `<button class="tab-btn" onclick="showTab(${index}, 'video')">Video</button>` : ''}
                                <button class="tab-btn" onclick="showTab(${index}, 'source')">Source</button>
                            </div>
                            
                            <div class="tab-content active" id="tab-${index}-fulltext">
                                <h4>${article.title}</h4>
                                <div class="article-metadata">
                                    <span class="article-author">By ${article.source}</span>
                                    <span class="article-date">${formatDate(article.publishedAt)}</span>
                                </div>
                                <div class="article-content">
                                    <p>This is a sample article content. In a real implementation, this would contain the full article text.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.</p>
                                    <div class="social-share">
                                        <button onclick="shareOnTwitter('${article.title}')" class="share-btn twitter">
                                            <svg viewBox="0 0 24 24" width="16" height="16">
                                                <path fill="currentColor" d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                                            </svg>
                                            Share on X
                                        </button>
                                        <button onclick="shareOnFacebook('${article.title}')" class="share-btn facebook">
                                            <svg viewBox="0 0 24 24" width="16" height="16">
                                                <path fill="currentColor" d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h8.62v-7h-2.35v-2.69h2.35v-2a3.27 3.27 0 0 1 3.49-3.59 19.25 19.25 0 0 1 2.1.11v2.43h-1.44c-1.13 0-1.35.54-1.35 1.32v1.73h2.69L17.76 14h-2.34v7H20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z"/>
                                            </svg>
                                            Share on Facebook
                                        </button>
                                        <button onclick="shareByEmail('${article.title}')" class="share-btn email">
                                            <svg viewBox="0 0 24 24" width="16" height="16">
                                                <path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                                            </svg>
                                            Share by Email
                                        </button>
                                    </div>
                                </div>
                            </div>
                            
                            ${article.videoId ? `
                            <div class="tab-content" id="tab-${index}-video">
                                <h4>Related Video: ${article.title}</h4>
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
                                <p>This article was published by <strong>${article.source}</strong> on ${formatDate(article.publishedAt)}</p>
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

// Function to toggle article expansion
function toggleArticle(index) {
    const expandedContent = document.getElementById(`expanded-${index}`);
    expandedContent.classList.toggle('active');
    
    const button = expandedContent.nextElementSibling.querySelector('button');
    if (expandedContent.classList.contains('active')) {
        button.textContent = 'Show less';
    } else {
        button.textContent = 'Read more';
    }
}

// Function to show tab content
function showTab(articleIndex, tabName) {
    // Hide all tab contents for this article
    const tabContents = document.querySelectorAll(`[id^="tab-${articleIndex}-"]`);
    tabContents.forEach(tab => tab.classList.remove('active'));
    
    // Show the selected tab
    document.getElementById(`tab-${articleIndex}-${tabName}`).classList.add('active');
    
    // Update tab button active state
    const tabButtons = document.getElementById(`expanded-${articleIndex}`).querySelectorAll('.tab-btn');
    tabButtons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
}

// Function to filter content by category
function filterContent(category) {
    // Update active nav link
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => link.classList.remove('active'));
    event.target.classList.add('active');
    
    // Fetch and display news for the selected category
    createNewsCards(category);
}

// Social sharing functions
function shareOnTwitter(title) {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(`Check out this article: ${title}`);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
}

function shareOnFacebook(title) {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
}

function shareByEmail(title) {
    const url = window.location.href;
    const subject = encodeURIComponent(`Check out this AI news article: ${title}`);
    const body = encodeURIComponent(`I thought you might be interested in this article: ${title}\n\n${url}`);
    window.open(`mailto:?subject=${subject}&body=${body}`);
}

// Update the last updated time
function updateLastUpdatedTime() {
    const lastUpdatedElement = document.getElementById('last-updated');
    if (lastUpdatedElement) {
        const now = new Date();
        lastUpdatedElement.textContent = now.toLocaleString();
    }
}

// Add loading and error styles
document.addEventListener('DOMContentLoaded', function() {
    // Add loading and error styles to the head
    const style = document.createElement('style');
    style.textContent = `
        .loading, .error {
            text-align: center;
            padding: 2rem;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 8px;
            margin: 1rem 0;
        }
        
        .error {
            color: #ff6b6b;
        }
    `;
    document.head.appendChild(style);
    
    // Initialize the page
    createNewsCards();
    updateLastUpdatedTime();
});