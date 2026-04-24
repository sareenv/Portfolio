/**
 * Articles Data Structure
 * Organized as: Topic > Concepts > Articles
 * 
 * Structure:
 * - topic: Main category (e.g., Networking, System Design)
 * - concepts: Sub-categories within a topic
 * - articles: Individual articles within a concept
 */

export const articlesData = [
    {
        id: 'networking',
        topic: 'Networking',
        icon: null,
        description: 'Understanding how computer networks work, from DNS to TCP/IP',
        concepts: [
            {
                id: 'dns',
                name: 'How DNS Works',
                description: 'Domain Name System fundamentals and resolution process',
                articles: [
                    {
                        id: 'dns-basics',
                        title: 'DNS Basics: From Domain to IP',
                        slug: 'dns-basics',
                        summary: 'DNS is the phonebook of the internet, translating domain names like google.com into IP addresses that computers understand. When you type a URL, your request travels through six layers: browser cache, operating system cache, recursive resolver, root name servers, TLD servers, and finally the authoritative server that returns the IP address. The most important DNS record types are A records for IPv4 addresses, AAAA for IPv6, CNAME for domain aliases, MX for mail servers, and TXT for verification. Understanding DNS is essential for debugging network issues and optimizing website performance.',
                        readTime: '8 min read',
                        date: '2024-12-15',
                        tags: ['DNS', 'Networking', 'Fundamentals'],
                        coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80',
                        contentPath: '/articles/networking/dns/dns-basics.md',
                        references: [
                            {
                                title: 'DNS RFC 1035 - Domain Names Implementation',
                                url: 'https://www.rfc-editor.org/rfc/rfc1035',
                                author: 'IETF'
                            },
                            {
                                title: 'How DNS Works',
                                url: 'https://howdns.works/',
                                author: 'DNSimple'
                            }
                        ]
                    },
                    {
                        id: 'dns-caching',
                        title: 'DNS Caching and TTL',
                        slug: 'dns-caching',
                        summary: 'DNS caching stores query results at multiple levels to speed up subsequent requests. Your browser, operating system, router, and ISP all maintain DNS caches to avoid repeating the full resolution process. The TTL or Time-To-Live value determines how long each DNS record should be cached before requesting a fresh copy. For stable websites, use TTL values of 24 to 48 hours, but reduce to 5 to 15 minutes before making DNS changes. You can manually flush your DNS cache using system commands when troubleshooting connectivity issues.',
                        readTime: '6 min read',
                        date: '2024-12-20',
                        tags: ['DNS', 'Caching', 'Performance'],
                        coverImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&q=80',
                        contentPath: '/articles/networking/dns/dns-caching.md',
                        references: [
                            {
                                title: 'DNS Caching Explained',
                                url: 'https://www.cloudflare.com/learning/dns/what-is-dns/',
                                author: 'Cloudflare'
                            },
                            {
                                title: 'Understanding DNS TTL',
                                url: 'https://www.dnswatch.info/articles/dns-ttl',
                                author: 'DNS Watch'
                            }
                        ]
                    }
                ]
            },
            {
                id: 'tcp-ip',
                name: 'TCP/IP Protocol',
                description: 'The foundational protocol suite of the internet',
                articles: [
                    {
                        id: 'tcp-handshake',
                        title: 'The TCP Three-Way Handshake',
                        slug: 'tcp-handshake',
                        summary: 'TCP establishes reliable connections using a three-way handshake before any data is transmitted. First, the client sends a SYN packet with an initial sequence number. Second, the server responds with SYN-ACK, acknowledging the client and providing its own sequence number. Third, the client sends an ACK to acknowledge the server, completing the handshake. This process ensures bidirectional communication, synchronizes sequence numbers to prevent data confusion, and verifies both parties can send and receive. Connection termination uses a four-way handshake because TCP connections are full-duplex, meaning data flows in both directions independently.',
                        readTime: '7 min read',
                        date: '2024-12-25',
                        tags: ['TCP', 'Networking', 'Protocols'],
                        coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80',
                        contentPath: '/articles/networking/tcp/tcp-handshake.md',
                        references: [
                            {
                                title: 'RFC 793 - Transmission Control Protocol',
                                url: 'https://www.rfc-editor.org/rfc/rfc793',
                                author: 'IETF'
                            },
                            {
                                title: 'TCP/IP Illustrated, Volume 1',
                                url: 'https://en.wikipedia.org/wiki/TCP/IP_Illustrated',
                                author: 'W. Richard Stevens'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 'system-design',
        topic: 'System Design',
        icon: null,
        description: 'Principles and patterns for building scalable systems',
        concepts: [
            {
                id: 'load-balancing',
                name: 'Load Balancing',
                description: 'Distributing traffic across multiple servers',
                articles: [
                    {
                        id: 'load-balancing-intro',
                        title: 'Introduction to Load Balancing',
                        slug: 'load-balancing-intro',
                        summary: 'Load balancing distributes network traffic across multiple servers to improve availability, performance, and scalability. Common algorithms include round robin for simple sequential distribution, weighted round robin for servers with different capacities, least connections for routing to the least busy server, and IP hash for session persistence. Layer 4 load balancers work at the TCP level and are fast but limited, while Layer 7 load balancers operate at the HTTP level and can route based on URLs, headers, and cookies. Always implement health checks so the load balancer can detect and bypass failed servers automatically.',
                        readTime: '10 min read',
                        date: '2024-12-28',
                        tags: ['System Design', 'Load Balancing', 'Scalability'],
                        coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80',
                        contentPath: '/articles/system-design/load-balancing/load-balancing-intro.md',
                        references: [
                            {
                                title: 'Introduction to Modern Load Balancing',
                                url: 'https://www.nginx.com/blog/introduction-to-modern-load-balancing/',
                                author: 'NGINX'
                            },
                            {
                                title: 'Load Balancing Algorithms',
                                url: 'https://www.haproxy.com/documentation/',
                                author: 'HAProxy'
                            }
                        ]
                    }
                ]
            },
            {
                id: 'caching',
                name: 'Caching Strategies',
                description: 'Improving performance through intelligent caching',
                articles: [
                    {
                        id: 'caching-patterns',
                        title: 'Common Caching Patterns',
                        slug: 'caching-patterns',
                        summary: 'Caching stores frequently accessed data closer to where it is needed, significantly reducing database load and improving response times from seconds to milliseconds. The four main patterns are: cache-aside where the application manages the cache directly, write-through where data is written to both cache and database simultaneously, write-behind where cache is updated immediately but database writes happen asynchronously, and read-through where the cache automatically fetches from the database on a miss. For cache eviction, use LRU for general purpose, LFU for popular content, or TTL for time-sensitive data. Always monitor your cache hit rate and plan for cache failures with fallback strategies.',
                        readTime: '9 min read',
                        date: '2024-12-30',
                        tags: ['Caching', 'Performance', 'System Design'],
                        coverImage: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&q=80',
                        contentPath: '/articles/system-design/caching/caching-patterns.md',
                        references: [
                            {
                                title: 'Caching Strategies and How to Choose the Right One',
                                url: 'https://codeahoy.com/2017/08/11/caching-strategies-and-how-to-choose-the-right-one/',
                                author: 'Code Ahoy'
                            },
                            {
                                title: 'Redis Caching Patterns',
                                url: 'https://redis.io/docs/manual/patterns/',
                                author: 'Redis Labs'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 'swift-ios',
        topic: 'Swift & iOS',
        icon: null,
        description: 'Swift programming language and iOS development concepts',
        concepts: [
            {
                id: 'swift-fundamentals',
                name: 'Swift Fundamentals',
                description: 'Core Swift language concepts and best practices',
                articles: [
                    {
                        id: 'memory-management',
                        title: 'Memory Management in Swift',
                        slug: 'memory-management-swift',
                        summary: 'Swift uses Automatic Reference Counting or ARC to manage memory by tracking how many references point to each object. When the reference count drops to zero, the object is deallocated automatically. The main challenge is retain cycles, where two objects hold strong references to each other, preventing deallocation and causing memory leaks. Break retain cycles using weak references for optional relationships or unowned references when you know the reference will never be nil. For closures that capture self, use capture lists with weak or unowned to avoid creating retain cycles. Always use instruments and memory debugger tools to detect and fix leaks in your iOS applications.',
                        readTime: '10 min read',
                        date: '2024-01-15',
                        tags: ['Swift', 'iOS', 'Memory Management', 'ARC'],
                        coverImage: 'https://images.unsplash.com/photo-1621839673705-6617adf9e890?w=1200&q=80',
                        contentPath: '/articles/swift/memory-management.md',
                        references: [
                            {
                                title: 'Automatic Reference Counting',
                                url: 'https://docs.swift.org/swift-book/documentation/the-swift-programming-language/automaticreferencecounting/',
                                author: 'Apple'
                            },
                            {
                                title: 'Memory Management in iOS',
                                url: 'https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/MemoryMgmt/',
                                author: 'Apple Developer'
                            }
                        ]
                    },
                    {
                        id: 'swift-optionals',
                        title: 'Understanding Optionals in Swift',
                        slug: 'swift-optionals',
                        summary: 'Optionals in Swift represent values that might be absent, eliminating null pointer crashes common in other languages. An optional can contain either a value or nil, and must be unwrapped before use. Safe unwrapping methods include optional binding with if let or guard let, optional chaining to access nested properties, and the nil-coalescing operator to provide default values. Avoid force unwrapping with the exclamation mark unless you are absolutely certain the value exists. Implicitly unwrapped optionals are useful for properties that are nil during initialization but guaranteed to have a value before first use, such as IBOutlets in iOS development.',
                        readTime: '7 min read',
                        date: '2024-01-10',
                        tags: ['Swift', 'iOS', 'Optionals'],
                        coverImage: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=1200&q=80',
                        contentPath: '/articles/swift/optionals.md',
                        references: [
                            {
                                title: 'The Basics - Optionals',
                                url: 'https://docs.swift.org/swift-book/documentation/the-swift-programming-language/thebasics/#Optionals',
                                author: 'Apple'
                            },
                            {
                                title: 'Optional Handling in Swift',
                                url: 'https://www.swiftbysundell.com/articles/optional-handling/',
                                author: 'Swift by Sundell'
                            }
                        ]
                    }
                ]
            },
            {
                id: 'swiftui',
                name: 'SwiftUI',
                description: 'Building modern iOS interfaces with SwiftUI',
                articles: [
                    {
                        id: 'swiftui-state',
                        title: 'State Management in SwiftUI',
                        slug: 'swiftui-state-management',
                        summary: 'SwiftUI uses property wrappers to manage state and automatically update the UI when data changes. Use @State for simple value types owned by a single view, @Binding to create two-way connections between parent and child views, and @ObservedObject for reference types that conform to ObservableObject and can be shared across views. For app-wide state, use @EnvironmentObject to inject dependencies down the view hierarchy without passing them through every view. The @Published property wrapper marks properties that should trigger UI updates when they change. Understanding when to use each property wrapper is crucial for building reactive, efficient SwiftUI applications.',
                        readTime: '8 min read',
                        date: '2024-01-20',
                        tags: ['SwiftUI', 'iOS', 'State Management'],
                        coverImage: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=1200&q=80',
                        contentPath: '/articles/swift/swiftui-state-management.md',
                        references: [
                            {
                                title: 'Managing User Interface State',
                                url: 'https://developer.apple.com/documentation/swiftui/state-and-data-flow',
                                author: 'Apple'
                            },
                            {
                                title: 'SwiftUI State Management Guide',
                                url: 'https://www.hackingwithswift.com/quick-start/swiftui/all-swiftui-property-wrappers',
                                author: 'Hacking with Swift'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 'ai-ml',
        topic: 'AI & ML',
        icon: null,
        description: 'Artificial intelligence, machine learning concepts, and agentic systems',
        concepts: [
            {
                id: 'agentic-memory',
                name: 'Agentic Memory',
                description: 'How AI agents store and retrieve memory for context-aware interactions',
                articles: [
                    {
                        id: 'agentic-memory-need',
                        title: 'Agentic Memory & Need for it',
                        slug: 'agentic-memory-need',
                        summary: 'AI agents need memory to retain context across conversations and make more intelligent decisions based on past interactions. Unlike stateless functions that forget everything after each request, memory-enabled agents can recall previous conversations, learn user preferences, and reference solutions to similar problems. Memory is typically structured in tiers: user memory for persistent facts across all sessions, session memory for temporary context within a conversation, and repository memory for project-specific knowledge. This memory is injected into the system prompt at runtime, allowing the agent to behave as if it remembers you. Just like humans don\'t start from scratch when solving problems, AI agents with memory can leverage prior experience to provide better, more personalized assistance.',
                        readTime: '12 min read',
                        date: '2026-04-21',
                        tags: ['AI', 'Agents', 'Memory', 'LLM', 'System Prompt'],
                        coverImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80',
                        contentPath: '/articles/ai-ml/agentic-memory/agentic-memory-need.md',
                        references: [
                            {
                                title: 'Building LLM Applications: Memory',
                                url: 'https://www.anthropic.com/index/building-effective-agents',
                                author: 'Anthropic'
                            },
                            {
                                title: 'LangChain Memory Documentation',
                                url: 'https://python.langchain.com/docs/modules/memory/',
                                author: 'LangChain'
                            },
                            {
                                title: 'Prompt Engineering Guide',
                                url: 'https://www.promptingguide.ai/',
                                author: 'DAIR.AI'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    
];

// Helper function to get all articles flattened
export const getAllArticles = () => {
    const articles = [];
    articlesData.forEach(topic => {
        topic.concepts.forEach(concept => {
            concept.articles.forEach(article => {
                articles.push({
                    ...article,
                    topicId: topic.id,
                    topicName: topic.topic,
                    topicIcon: topic.icon,
                    conceptId: concept.id,
                    conceptName: concept.name
                });
            });
        });
    });
    return articles;
};

// Helper function to find an article by slug
export const getArticleBySlug = (slug) => {
    return getAllArticles().find(article => article.slug === slug);
};

// Helper function to get topic by id
export const getTopicById = (topicId) => {
    return articlesData.find(topic => topic.id === topicId);
};

// Helper function to get concept by id within a topic
export const getConceptById = (topicId, conceptId) => {
    const topic = getTopicById(topicId);
    if (!topic) return null;
    return topic.concepts.find(concept => concept.id === conceptId);
};
