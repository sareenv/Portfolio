/**
 * Articles Data Structure
 * Organized as: Topic > Concepts > Articles
 * 
 * Structure:
 * - topic: Main category (e.g., Networking, System Design)
 * - concepts: Sub-categories within a topic
 * - articles: Individual articles within a concept
 */

const getDiceBearCoverImage = (seed) => (
    `https://api.dicebear.com/9.x/shapes/svg?seed=${encodeURIComponent(seed)}&backgroundColor=f5f3ee,e2ded6,fef3c7,dbeafe&radius=12`
);

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
                        tags: ['Recommended Read', 'DNS', 'Networking', 'Fundamentals'],
                        coverImage: getDiceBearCoverImage('dns-basics'),
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
                        coverImage: getDiceBearCoverImage('dns-caching'),
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
                        tags: ['Recommended Read', 'System Design', 'Load Balancing', 'Scalability'],
                        coverImage: getDiceBearCoverImage('load-balancing-intro'),
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
                        tags: ['Recommended Read', 'Caching', 'Performance', 'System Design'],
                        coverImage: getDiceBearCoverImage('caching-patterns'),
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
            },
            {
                id: 'cap-theorem',
                name: 'CAP Theorem',
                description: 'Consistency, Availability, and Partition tolerance trade-offs in distributed systems',
                articles: [
                    {
                        id: 'cap-theorem-intro',
                        title: 'Introduction to the CAP Theorem',
                        slug: 'cap-theorem-intro',
                        summary: 'The CAP theorem addresses fundamental constraints of distributed systems during network partitions. When servers in different locations lose communication, systems must choose between consistency and availability. While banking systems require strong consistency and return error codes to prevent displaying incorrect balances, non-critical services like user profiles can safely prioritize availability over strict consistency.',
                        readTime: '3 min read',
                        date: '2026-09-07',
                        tags: ['Recommended Read', 'System Design', 'CAP Theorem', 'Distributed Systems'],
                        coverImage: getDiceBearCoverImage('cap-theorem-intro'),
                        contentPath: '/articles/system-design/cap-theorem/cap-theorem-intro.md',
                        references: []
                    }
                ]
            },
            {
                id: 'sso-oidc',
                name: 'SSO and OIDC',
                description: 'Single Sign-On and OpenID Connect identity protocols in distributed systems',
                articles: [
                    {
                        id: 'what-is-sso-and-oidc',
                        title: 'What is SSO and OIDC?',
                        slug: 'what-is-sso-and-oidc',
                        summary: 'An introduction to Single Sign-On (SSO) and OpenID Connect (OIDC), exploring the fundamentals of centralized authentication and identity federation in modern architectures.',
                        readTime: '5 min read',
                        date: '2026-09-07',
                        tags: ['System Design', 'SSO', 'OIDC', 'Security', 'Authentication'],
                        coverImage: getDiceBearCoverImage('what-is-sso-and-oidc'),
                        wip: true,
                        contentPath: '/articles/system-design/sso-oidc/what-is-sso-and-oidc.md',
                        references: []
                    },
                    {
                        id: 'parties-in-oidc-flow',
                        title: 'Parties in the OIDC Flow',
                        slug: 'parties-in-oidc-flow',
                        summary: 'A breakdown of all the key participants in OpenID Connect: End-User, Relying Party (RP), OpenID Provider (OP/IdP), and Resource Server, along with their communication channels.',
                        readTime: '5 min read',
                        date: '2026-09-07',
                        tags: ['System Design', 'OIDC', 'Authentication', 'Security'],
                        coverImage: getDiceBearCoverImage('parties-in-oidc-flow'),
                        wip: true,
                        contentPath: '/articles/system-design/sso-oidc/parties-in-oidc-flow.md',
                        references: []
                    },
                    {
                        id: 'kinds-of-tokens',
                        title: 'Kinds of Tokens in OAuth 2.0 & OIDC',
                        slug: 'kinds-of-tokens',
                        summary: 'Understanding the distinct roles, scopes, lifecycles, and security implications of ID tokens, Access tokens, and Refresh tokens in modern authentication systems.',
                        readTime: '6 min read',
                        date: '2026-09-07',
                        tags: ['System Design', 'OIDC', 'OAuth', 'Tokens', 'Security'],
                        coverImage: getDiceBearCoverImage('kinds-of-tokens'),
                        wip: true,
                        contentPath: '/articles/system-design/sso-oidc/kinds-of-tokens.md',
                        references: []
                    },
                    {
                        id: 'pkce',
                        title: 'Proof Key for Code Exchange (PKCE)',
                        slug: 'pkce',
                        summary: 'Why PKCE is essential for securing authorization code flows on public clients like mobile and single-page apps against code interception attacks.',
                        readTime: '5 min read',
                        date: '2026-09-07',
                        tags: ['System Design', 'OIDC', 'OAuth', 'PKCE', 'Security'],
                        coverImage: getDiceBearCoverImage('pkce'),
                        wip: true,
                        contentPath: '/articles/system-design/sso-oidc/pkce.md',
                        references: []
                    },
                    {
                        id: 'anatomy-of-tokens',
                        title: 'Anatomy of Access and ID Tokens',
                        slug: 'anatomy-of-tokens',
                        summary: 'Dissecting JWT headers, payloads, signatures, standard claims, custom claims, and signature verification with JWKS.',
                        readTime: '6 min read',
                        date: '2026-09-07',
                        tags: ['System Design', 'OIDC', 'JWT', 'Tokens', 'Security'],
                        coverImage: getDiceBearCoverImage('anatomy-of-tokens'),
                        wip: true,
                        contentPath: '/articles/system-design/sso-oidc/anatomy-of-tokens.md',
                        references: []
                    },
                    {
                        id: 'go-server-implementation',
                        title: 'Implementing an OIDC Server in Go',
                        slug: 'go-server-implementation',
                        summary: 'A step-by-step architecture and implementation guide for building an OpenID Connect server in Go, handling discovery, authorization, PKCE, token issuance, and JWKS.',
                        readTime: '10 min read',
                        date: '2026-09-07',
                        tags: ['Go', 'System Design', 'OIDC', 'Backend', 'Security'],
                        coverImage: getDiceBearCoverImage('go-server-implementation'),
                        wip: true,
                        contentPath: '/articles/system-design/sso-oidc/go-server-implementation.md',
                        references: []
                    },
                    {
                        id: 'ios-appauth-implementation',
                        title: 'iOS Implementation using AppAuth',
                        slug: 'ios-appauth-implementation',
                        summary: 'Integrating federated OIDC authentication in iOS applications using AppAuth-iOS, ASWebAuthenticationSession, PKCE, and secure keychain token persistence.',
                        readTime: '8 min read',
                        date: '2026-09-07',
                        tags: ['iOS', 'Swift', 'AppAuth', 'OIDC', 'Mobile'],
                        coverImage: getDiceBearCoverImage('ios-appauth-implementation'),
                        wip: true,
                        contentPath: '/articles/system-design/sso-oidc/ios-appauth-implementation.md',
                        references: []
                    }
                ]
            }
        ]
    },
    {
        id: 'clean-architecture',
        topic: 'Clean Architecture',
        icon: null,
        description: 'Software architecture design principles and maintainable code patterns',
        concepts: [
            {
                id: 'solid-principles',
                name: 'SOLID Principles',
                description: 'The five fundamental principles of object-oriented and clean software design',
                articles: [
                    {
                        id: 'solid-principles',
                        title: 'SOLID Principles in Clean Architecture',
                        slug: 'solid-principles',
                        summary: 'A deep dive into the SOLID design principles essential for clean architecture, exploring why they are needed, the consequences of ignoring them, and real-world Swift examples for each principle.',
                        readTime: '10 min read',
                        date: '2026-09-07',
                        tags: ['Recommended Read', 'Clean Architecture', 'SOLID', 'Swift', 'Design Patterns'],
                        coverImage: getDiceBearCoverImage('solid-principles'),
                        contentPath: '/articles/clean-architecture/solid-principles.md',
                        references: [
                            {
                                title: "Clean Architecture: A Craftsman's Guide to Software Structure and Design",
                                url: 'https://www.oreilly.com/library/view/clean-architecture-a/9780134494272/',
                                author: 'Robert C. Martin'
                            },
                            {
                                title: 'S.O.L.I.D: The First 5 Principles of Object Oriented Design',
                                url: 'https://www.digitalocean.com/community/conceptual-articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design',
                                author: 'DigitalOcean'
                            },
                            {
                                title: 'ChatGPT (Content refinement & review)',
                                url: 'https://chatgpt.com/',
                                author: 'OpenAI'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    /*
    {
        id: 'design-patterns',
        topic: 'Design Patterns',
        icon: null,
        description: 'Reusable solutions to commonly occurring software design problems',
        concepts: [
            {
                id: 'creational-patterns',
                name: 'Creational Patterns',
                description: 'Mechanisms for object creation that increase flexibility and code reuse',
                articles: [
                    {
                        id: 'factory-pattern',
                        title: 'Factory Pattern',
                        slug: 'factory-pattern',
                        summary: '',
                        readTime: '',
                        date: '2026-09-07',
                        tags: ['Design Patterns', 'Creational', 'Swift', 'Factory Pattern'],
                        coverImage: '',
                        wip: true,
                        contentPath: '/articles/design-patterns/creational/factory-pattern.md',
                        references: []
                    },
                    {
                        id: 'abstract-factory-pattern',
                        title: 'Abstract Factory Pattern',
                        slug: 'abstract-factory-pattern',
                        summary: '',
                        readTime: '',
                        date: '2026-09-07',
                        tags: ['Design Patterns', 'Creational', 'Swift', 'Abstract Factory'],
                        coverImage: '',
                        wip: true,
                        contentPath: '/articles/design-patterns/creational/abstract-factory-pattern.md',
                        references: []
                    },
                    {
                        id: 'builder-pattern',
                        title: 'Builder Pattern',
                        slug: 'builder-pattern',
                        summary: '',
                        readTime: '',
                        date: '2026-09-07',
                        tags: ['Design Patterns', 'Creational', 'Swift', 'Builder Pattern'],
                        coverImage: '',
                        wip: true,
                        contentPath: '/articles/design-patterns/creational/builder-pattern.md',
                        references: []
                    }
                ]
            },
            {
                id: 'structural-patterns',
                name: 'Structural Patterns',
                description: 'Assembling objects and classes into larger, flexible structures',
                articles: [
                    {
                        id: 'adapter-pattern',
                        title: 'Adapter Pattern',
                        slug: 'adapter-pattern',
                        summary: '',
                        readTime: '',
                        date: '2026-09-07',
                        tags: ['Design Patterns', 'Structural', 'Swift', 'Adapter Pattern'],
                        coverImage: '',
                        wip: true,
                        contentPath: '/articles/design-patterns/structural/adapter-pattern.md',
                        references: []
                    },
                    {
                        id: 'facade-pattern',
                        title: 'Facade Pattern',
                        slug: 'facade-pattern',
                        summary: '',
                        readTime: '',
                        date: '2026-09-07',
                        tags: ['Design Patterns', 'Structural', 'Swift', 'Facade Pattern'],
                        coverImage: '',
                        wip: true,
                        contentPath: '/articles/design-patterns/structural/facade-pattern.md',
                        references: []
                    },
                    {
                        id: 'bridge-pattern',
                        title: 'Bridge Pattern',
                        slug: 'bridge-pattern',
                        summary: '',
                        readTime: '',
                        date: '2026-09-07',
                        tags: ['Design Patterns', 'Structural', 'Swift', 'Bridge Pattern'],
                        coverImage: '',
                        wip: true,
                        contentPath: '/articles/design-patterns/structural/bridge-pattern.md',
                        references: []
                    },
                    {
                        id: 'proxy-pattern',
                        title: 'Proxy Pattern',
                        slug: 'proxy-pattern',
                        summary: '',
                        readTime: '',
                        date: '2026-09-07',
                        tags: ['Design Patterns', 'Structural', 'Swift', 'Proxy Pattern'],
                        coverImage: '',
                        wip: true,
                        contentPath: '/articles/design-patterns/structural/proxy-pattern.md',
                        references: []
                    }
                ]
            },
            {
                id: 'behavioral-patterns',
                name: 'Behavioral Patterns',
                description: 'Effective communication and assignment of responsibilities between objects',
                articles: [
                    {
                        id: 'chain-of-responsibility-pattern',
                        title: 'Chain of Responsibility Pattern',
                        slug: 'chain-of-responsibility-pattern',
                        summary: '',
                        readTime: '',
                        date: '2026-09-07',
                        tags: ['Design Patterns', 'Behavioral', 'Swift', 'Chain of Responsibility'],
                        coverImage: '',
                        wip: true,
                        contentPath: '/articles/design-patterns/behavioral/chain-of-responsibility-pattern.md',
                        references: []
                    },
                    {
                        id: 'command-pattern',
                        title: 'Command Pattern',
                        slug: 'command-pattern',
                        summary: '',
                        readTime: '',
                        date: '2026-09-07',
                        tags: ['Design Patterns', 'Behavioral', 'Swift', 'Command Pattern'],
                        coverImage: '',
                        wip: true,
                        contentPath: '/articles/design-patterns/behavioral/command-pattern.md',
                        references: []
                    },
                    {
                        id: 'observer-pattern',
                        title: 'Observer Pattern',
                        slug: 'observer-pattern',
                        summary: '',
                        readTime: '',
                        date: '2026-09-07',
                        tags: ['Design Patterns', 'Behavioral', 'Swift', 'Observer Pattern'],
                        coverImage: '',
                        wip: true,
                        contentPath: '/articles/design-patterns/behavioral/observer-pattern.md',
                        references: []
                    },
                    {
                        id: 'strategy-pattern',
                        title: 'Strategy Pattern',
                        slug: 'strategy-pattern',
                        summary: '',
                        readTime: '',
                        date: '2026-09-07',
                        tags: ['Design Patterns', 'Behavioral', 'Swift', 'Strategy Pattern'],
                        coverImage: '',
                        wip: true,
                        contentPath: '/articles/design-patterns/behavioral/strategy-pattern.md',
                        references: []
                    }
                ]
            }
        ]
    },
    */
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
                        tags: ['Recommended Read', 'Swift', 'iOS', 'Memory Management', 'ARC'],
                        coverImage: getDiceBearCoverImage('memory-management-swift'),
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
                        coverImage: getDiceBearCoverImage('swift-optionals'),
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
                    },
                    {
                        id: 'equatable-hashable-identifiable',
                        title: 'Core Swift Protocols: Equatable, Hashable, and Identifiable',
                        slug: 'equatable-hashable-identifiable',
                        summary: 'Master the three cornerstone protocols of Swift data modeling. Learn how Equatable establishes logical value equivalence and automatic compiler synthesis, how Hashable satisfies the hashing invariant for O(1) Set and Dictionary lookups, and how Identifiable provides persistent entity identity for SwiftUI\'s view diffing engine.',
                        readTime: '9 min read',
                        date: '2024-02-05',
                        tags: ['Recommended Read', 'Swift', 'iOS', 'Protocols', 'SwiftUI', 'Foundation'],
                        coverImage: getDiceBearCoverImage('equatable-hashable-identifiable'),
                        contentPath: '/articles/swift/equatable-hashable-identifiable.md',
                        references: [
                            {
                                title: 'Equatable Protocol',
                                url: 'https://developer.apple.com/documentation/swift/equatable',
                                author: 'Apple Developer'
                            },
                            {
                                title: 'Hashable Protocol',
                                url: 'https://developer.apple.com/documentation/swift/hashable',
                                author: 'Apple Developer'
                            },
                            {
                                title: 'Identifiable Protocol',
                                url: 'https://developer.apple.com/documentation/swift/identifiable',
                                author: 'Apple Developer'
                            }
                        ]
                    },
                    {
                        id: 'associated-types',
                        title: 'Associated Types in Swift Protocols',
                        slug: 'associated-types',
                        summary: 'Discover why method-level generics fail for homogeneous storage protocols and how Swift\'s associated types provide compile-time type safety without resorting to Any or unsafe downcasting. Includes practical code examples, compiler type inference, and modern Swift 5.7+ primary associated types.',
                        readTime: '9 min read',
                        date: '2024-02-15',
                        tags: ['Swift', 'iOS', 'Generics', 'Protocols', 'Architecture'],
                        coverImage: getDiceBearCoverImage('associated-types'),
                        contentPath: '/articles/swift/associated-types.md',
                        references: [
                            {
                                title: 'Generics and Associated Types',
                                url: 'https://docs.swift.org/swift-book/documentation/the-swift-programming-language/generics/#Associated-Types',
                                author: 'Swift.org'
                            },
                            {
                                title: 'SE-0346: Lightweight satisfaction of requirements with associated types',
                                url: 'https://github.com/swiftlang/swift-evolution/blob/main/proposals/0346-light-weight-same-type-syntax.md',
                                author: 'Swift Evolution'
                            }
                        ]
                    }
                ]
            },
            {
                id: 'swift-concurrency',
                name: 'Swift Concurrency',
                description: 'Modern asynchronous programming, tasks, actors, and thread safety in Swift',
                articles: [
                    {
                        id: 'modern-concurrency-basics',
                        title: 'Demystifying the Basics of Modern Concurrency in Swift',
                        slug: 'modern-concurrency-basics',
                        summary: 'Understand the bedrock of modern Swift concurrency: the cooperative thread pool, executors, how await suspends execution, task hierarchies, lifecycle, cancellations, and wrapping legacy completion handlers with continuations.',
                        readTime: '10 min read',
                        date: '2024-03-05',
                        tags: ['Swift', 'iOS', 'Concurrency', 'Async/Await', 'Tasks', 'Executors'],
                        coverImage: getDiceBearCoverImage('modern-concurrency-basics'),
                        wip: true,
                        contentPath: '/articles/swift/modern-concurrency-basics.md',
                        references: [
                            {
                                title: 'Swift Concurrency',
                                url: 'https://docs.swift.org/swift-book/documentation/the-swift-programming-language/concurrency/',
                                author: 'Swift.org'
                            }
                        ]
                    },
                    {
                        id: 'swift-actors',
                        title: 'Understanding Actors in Swift',
                        slug: 'swift-actors',
                        summary: 'Explore how actors in Swift ensure safe, serial access to mutable state across concurrent tasks. Understand actor isolation boundaries, why external calls require await, how serial executors prevent overlapping execution, and a preview of actor reentrancy.',
                        readTime: '6 min read',
                        date: '2024-03-10',
                        tags: ['Swift', 'iOS', 'Concurrency', 'Actors', 'Multithreading'],
                        coverImage: getDiceBearCoverImage('swift-actors'),
                        contentPath: '/articles/swift/actors.md',
                        references: [
                            {
                                title: 'Actors in Swift',
                                url: 'https://developer.apple.com/documentation/swift/actor',
                                author: 'Apple Developer'
                            },
                            {
                                title: 'SE-0306: Actors',
                                url: 'https://github.com/swiftlang/swift-evolution/blob/main/proposals/0306-actors.md',
                                author: 'Swift Evolution'
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
                        coverImage: getDiceBearCoverImage('swiftui-state-management'),
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
                        tags: ['Recommended Read', 'AI', 'Agents', 'Memory', 'LLM', 'System Prompt'],
                        coverImage: getDiceBearCoverImage('agentic-memory-need'),
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
