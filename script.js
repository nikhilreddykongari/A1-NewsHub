// Sample AI news data
const aiNewsData = [
    {
        title: "OpenAI Releases GPT-5 with Enhanced Reasoning Capabilities",
        description: "The latest large language model shows significant improvements in logical reasoning and mathematical problem-solving.",
        category: "research",
        source: "AI Research Today",
        publishedAt: "2024-05-15T09:30:00Z",
        imageUrl: "https://images.unsplash.com/photo-1677442135136-760c813029fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        url: "#"
    },
    {
        title: "AI Regulation Framework Proposed by International Coalition",
        description: "A group of 24 countries has proposed a unified framework for regulating artificial intelligence development and deployment.",
        category: "policy",
        source: "Global Tech Policy",
        publishedAt: "2024-05-14T14:20:00Z",
        imageUrl: "https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        url: "#"
    },
    {
        title: "Healthcare AI System Achieves 95% Accuracy in Early Cancer Detection",
        description: "A new AI diagnostic tool has demonstrated remarkable accuracy in detecting early-stage cancers from standard medical imaging.",
        category: "healthcare",
        source: "Medical AI Journal",
        publishedAt: "2024-05-13T11:45:00Z",
        imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        url: "#"
    },
    {
        title: "Autonomous Vehicles Reach New Milestone in Urban Testing",
        description: "Self-driving cars have completed over 1 million miles in complex urban environments with zero accidents.",
        category: "industry",
        source: "Automotive Tech",
        publishedAt: "2024-05-12T08:15:00Z",
        imageUrl: "https://images.unsplash.com/photo-1561144257-e32e8efc6c4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        url: "#",
        videoId: "8V20HkoLIqc"
    }
];

// Function to format date
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}

// Function to create news cards
function createNewsCards() {
    const gridContainer = document.querySelector('.grid');
    
    // Clear existing content
    gridContainer.innerHTML = '';
    
    // Add news cards
    aiNewsData.forEach((article, index) => {
        const card = createNewsCard(article, index);
        gridContainer.innerHTML += card;
    });
}

// Function to create a single news card
function createNewsCard(article, index) {
    return `
        <article class="card">
            <div class="card-video" style="background-image: url('${article.imageUrl}')">
                <div class="card-overlay">
                    <div class="card-category-tag">${article.category}</div>
                </div>
                ${article.lastUpdated ? `<span class="freshness-badge">${article.lastUpdated}</span>` : ''}
            </div>
            <div class="card-content">
                <div class="source-tag">${article.source}</div>
                <h3>${article.title}</h3>
                <p>${article.description}</p>
                
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
    
    // In a real implementation, this would filter the displayed articles
    // For now, we'll just log the category
    console.log(`Filtering by category: ${category}`);
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

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    createNewsCards();
    updateLastUpdatedTime();
});