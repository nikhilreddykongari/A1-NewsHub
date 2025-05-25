// Function to get X (Twitter) posts for an article
function getXPostsForArticle(article) {
    // Mock X posts based on article topic
    const mockXPosts = [
        {
            username: 'AIResearcher',
            handle: '@ai_research',
            verified: true,
            content: `Just read about ${article.title.split(':')[0]}. This could be a game changer for the industry! #AI #MachineLearning`,
            timestamp: '2h ago',
            likes: Math.floor(Math.random() * 1000) + 100,
            retweets: Math.floor(Math.random() * 500) + 50,
            replies: Math.floor(Math.random() * 100) + 10,
            profileImg: 'https://randomuser.me/api/portraits/men/32.jpg'
        },
        {
            username: 'TechInsider',
            handle: '@tech_insider',
            verified: true,
            content: `Breaking: ${article.title}. Our analysis shows this development could impact ${article.category} significantly in the coming months.`,
            timestamp: '4h ago',
            likes: Math.floor(Math.random() * 2000) + 500,
            retweets: Math.floor(Math.random() * 1000) + 200,
            replies: Math.floor(Math.random() * 200) + 50,
            profileImg: 'https://randomuser.me/api/portraits/women/44.jpg'
        },
        {
            username: 'OpenAI',
            handle: '@OpenAI',
            verified: true,
            content: `We're excited about the latest developments in ${article.category}. The potential applications are enormous.`,
            timestamp: '1d ago',
            likes: Math.floor(Math.random() * 5000) + 1000,
            retweets: Math.floor(Math.random() * 2000) + 500,
            replies: Math.floor(Math.random() * 500) + 100,
            profileImg: 'https://pbs.twimg.com/profile_images/1634058036934500352/b4F1eVpJ_400x400.jpg'
        }
    ];
    
    // Generate HTML for X posts
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