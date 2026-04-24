import React, { useEffect, useState, useCallback } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';
import Container from 'react-bootstrap/Container';
import Markdown from 'markdown-to-jsx';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { getArticleBySlug, getTopicById, getConceptById, getAllArticles } from '../../constants/articles';
import { HiArrowLeft, HiClock, HiCalendar, HiChevronRight, HiBookOpen, HiExternalLink } from 'react-icons/hi';
import ArticleReader from './ArticleReader';
import '../../Styles/article-detail.scss';

// Auto-detect programming language from code content
const detectLanguage = (code) => {
    const codeStr = String(code).trim();
    
    // JavaScript/TypeScript patterns
    if (/(const|let|var|function|=>|async|await|import|export|React|useState|useEffect)/.test(codeStr)) {
        return 'javascript';
    }
    
    // Python patterns
    if (/(def |import |from |print\(|if __name__|self\.|class .*:)/.test(codeStr)) {
        return 'python';
    }
    
    // Java patterns
    if (/(public class|private |protected |void |System\.out|import java\.)/.test(codeStr)) {
        return 'java';
    }
    
    // C/C++ patterns
    if (/(#include|int main\(|printf\(|std::|cout|cin)/.test(codeStr)) {
        return 'cpp';
    }
    
    // Swift patterns
    if (/(func |var |let |import Swift|@State|@Binding|class .*:|struct .*:)/.test(codeStr)) {
        return 'swift';
    }
    
    // SQL patterns
    if (/(SELECT|INSERT|UPDATE|DELETE|FROM|WHERE|JOIN|CREATE TABLE)/i.test(codeStr)) {
        return 'sql';
    }
    
    // CSS/SCSS patterns
    if (/(\{[\s\S]*?:[^:]+;[\s\S]*?\}|@media|@import|\.[\w-]+\s*\{)/.test(codeStr)) {
        return 'css';
    }
    
    // HTML/XML patterns
    if (/^<[\w-]+[^>]*>[\s\S]*<\/[\w-]+>$/.test(codeStr) || /^<[\w-]+[^>]*\/>$/.test(codeStr)) {
        return 'html';
    }
    
    // JSON patterns
    if (/^\s*[\{\[][\s\S]*[\}\]]\s*$/.test(codeStr) && codeStr.includes('"')) {
        try {
            JSON.parse(codeStr);
            return 'json';
        } catch (e) {
            // Not valid JSON
        }
    }
    
    // Bash/Shell patterns
    if (/(npm |yarn |cd |ls |mkdir |echo |export |source |chmod |grep |sudo )/.test(codeStr) || codeStr.startsWith('#!') || /\$\w+/.test(codeStr)) {
        return 'bash';
    }
    
    // Default to markup for arrows and simple text diagrams
    if (/→|←|↔|⇒|⇐|⇔/.test(codeStr)) {
        return 'markdown'; // Use markdown for better visibility of plain text
    }
    
    // Default fallback - try to detect if it looks like code
    if (/[{}\[\]();]/.test(codeStr) || /\w+\s*=\s*/.test(codeStr)) {
        return 'javascript';
    }
    
    return 'markdown'; // Default to markdown instead of text for better readability
};

// Code component that handles both inline and block code
const Code = ({ className, children, ...props }) => {
    // If it has a className starting with 'lang-', it's a code block with language
    if (className && className.startsWith('lang-')) {
        const language = className.replace('lang-', '');
        const codeString = String(children).replace(/\n$/, '');
        
        return (
            <SyntaxHighlighter
                style={oneDark}
                language={language}
                className="code-block"
                showLineNumbers={false}
                customStyle={{
                    padding: '1.25rem 1.5rem',
                    fontSize: '0.9rem',
                    lineHeight: '1.6'
                }}
            >
                {codeString}
            </SyntaxHighlighter>
        );
    }
    
    // Check if this is a block code (multi-line) without language specification
    const codeString = String(children);
    const isMultiLine = codeString.includes('\n');
    
    if (isMultiLine) {
        // Auto-detect the language
        const detectedLanguage = detectLanguage(codeString);
        
        // For text/diagram blocks, render as plain styled element for guaranteed visibility
        if (detectedLanguage === 'markdown' || detectedLanguage === 'text') {
            return (
                <pre className="code-block code-block--text">
                    <code style={{ color: '#abb2bf' }}>{codeString.trim()}</code>
                </pre>
            );
        }
        
        // Render with detected language and syntax highlighting
        return (
            <SyntaxHighlighter
                style={oneDark}
                language={detectedLanguage}
                className="code-block"
                showLineNumbers={false}
                customStyle={{
                    padding: '1.25rem 1.5rem',
                    fontSize: '0.9rem',
                    lineHeight: '1.6'
                }}
            >
                {codeString.replace(/\n$/, '')}
            </SyntaxHighlighter>
        );
    }
    
    // Otherwise, it's inline code
    return <code className="inline-code" {...props}>{children}</code>;
};

// Table component for responsive tables
const TableWrapper = ({ children }) => (
    <div className="table-wrapper">
        <table>{children}</table>
    </div>
);

// Pre component to handle code blocks with proper detection
const Pre = ({ children, ...props }) => {
    // If the pre contains a code element, extract it and render properly
    if (children && typeof children === 'object' && children.type === 'code') {
        const { className, children: codeChildren } = children.props || {};
        return <Code className={className}>{codeChildren}</Code>;
    }
    
    // If children is just text, render with text block styling
    if (typeof children === 'string') {
        return <Code>{children}</Code>;
    }
    
    // Fallback: render as styled pre block
    return (
        <pre className="code-block code-block--text" {...props}>
            {children}
        </pre>
    );
};

// Utility: slugify heading text to an id
const slugify = (text) =>
    text
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .trim();

// Recursively extract plain text from React children (handles bold, code, etc.)
const extractText = (children) => {
    if (typeof children === 'string') return children;
    if (typeof children === 'number') return String(children);
    if (Array.isArray(children)) return children.map(extractText).join('');
    if (children?.props?.children) return extractText(children.props.children);
    return '';
};

// Heading components that inject id attributes for anchor links
const H2 = ({ children }) => <h2 id={slugify(extractText(children))}>{children}</h2>;
const H3 = ({ children }) => <h3 id={slugify(extractText(children))}>{children}</h3>;
const H4 = ({ children }) => <h4 id={slugify(extractText(children))}>{children}</h4>;

// Extract heading entries from raw markdown for the TOC
const extractTOC = (markdown) => {
    const headingRegex = /^(#{2,4})\s+(.+)$/gm;
    const items = [];
    let match;
    while ((match = headingRegex.exec(markdown)) !== null) {
        const level = match[1].length;
        const text = match[2].trim();
        items.push({ level, text, id: slugify(text) });
    }
    return items;
};

const ArticleDetail = () => {
    const { topicId, conceptId, slug } = useParams();
    const history = useHistory();
    const article = getArticleBySlug(slug);
    const topic = getTopicById(topicId);
    const concept = getConceptById(topicId, conceptId);
    const [content, setContent] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [toc, setToc] = useState([]);
    const [activeId, setActiveId] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
        
        // If article has contentPath, fetch from markdown file
        if (article?.contentPath) {
            setIsLoading(true);
            fetch(article.contentPath)
                .then(response => response.text())
                .then(text => {
                    setContent(text);
                    setIsLoading(false);
                })
                .catch(err => {
                    console.error('Failed to load article content:', err);
                    setContent('# Error\n\nFailed to load article content.');
                    setIsLoading(false);
                });
        } else if (article?.content) {
            setContent(article.content);
            setIsLoading(false);
        } else {
            setIsLoading(false);
        }
    }, [slug]); // Only depend on slug, not the article object

    // Build TOC whenever content changes
    useEffect(() => {
        if (content) {
            setToc(extractTOC(content));
        }
    }, [content]);

    // Track active heading with IntersectionObserver
    useEffect(() => {
        if (toc.length === 0) return;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: '-80px 0px -70% 0px' }
        );
        toc.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, [toc]);

    if (!article || !topic || !concept) {
        return (
            <section className="article-detail article-detail--not-found">
                <Container>
                    <div className="article-not-found">
                        <HiBookOpen size={64} />
                        <h2>Article Not Found</h2>
                        <p>The article you're looking for doesn't exist.</p>
                        <Link to="/articles" className="back-link">
                            <HiArrowLeft /> Back to Articles
                        </Link>
                    </div>
                </Container>
            </section>
        );
    }

    // Get related articles from same concept
    const relatedArticles = concept.articles
        .filter(a => a.slug !== slug)
        .slice(0, 3);

    // Get next/previous articles
    const allArticles = getAllArticles();
    const currentIndex = allArticles.findIndex(a => a.slug === slug);
    const prevArticle = currentIndex > 0 ? allArticles[currentIndex - 1] : null;
    const nextArticle = currentIndex < allArticles.length - 1 ? allArticles[currentIndex + 1] : null;

    return (
        <section className="article-detail">
            <Container>
                {/* Breadcrumb */}
                <motion.nav 
                    className="article-breadcrumb"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <Link to="/articles">Articles</Link>
                    <HiChevronRight />
                    <Link to={`/articles?topic=${topicId}`}>{topic.topic}</Link>
                    <HiChevronRight />
                    <span>{concept.name}</span>
                </motion.nav>

                {/* Back Button */}
                <motion.button
                    className="article-back"
                    onClick={() => history.goBack()}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ x: -5 }}
                >
                    <HiArrowLeft /> Back
                </motion.button>

                {/* Article Header */}
                <motion.header 
                    className="article-header"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="article-header__meta">
                        <span className="article-header__topic">
                            {topic.icon && `${topic.icon} `}{topic.topic}
                        </span>
                        <span className="article-header__concept">{concept.name}</span>
                    </div>
                    <h1 className="article-header__title">{article.title}</h1>
                    <div className="article-header__info">
                        <span className="article-header__date">
                            <HiCalendar /> {new Date(article.date).toLocaleDateString('en-US', { 
                                year: 'numeric', 
                                month: 'long', 
                                day: 'numeric' 
                            })}
                        </span>
                        <span className="article-header__time">
                            <HiClock /> {article.readTime}
                        </span>
                    </div>
                    <div className="article-header__tags">
                        {article.tags.map(tag => (
                            <span key={tag} className="article-header__tag">{tag}</span>
                        ))}
                    </div>
                </motion.header>

                {/* Cover Image */}
                {article.coverImage && (
                    <motion.div 
                        className="article-cover"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <img 
                            src={article.coverImage} 
                            alt={article.title}
                            loading="lazy"
                        />
                    </motion.div>
                )}

                {/* Article Reader */}
                {!isLoading && content && <ArticleReader article={{ ...article, content }} />}

                {/* Article body layout: content + TOC sidebar */}
                <div className="article-layout">
                {/* Article Content */}
                <motion.article 
                    className="article-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {isLoading ? (
                        <div className="article-loading">Loading...</div>
                    ) : (
                        <Markdown
                            options={{
                                overrides: {
                                    code: {
                                        component: Code
                                    },
                                    pre: {
                                        component: Pre
                                    },
                                    table: {
                                        component: TableWrapper
                                    },
                                    h2: { component: H2 },
                                    h3: { component: H3 },
                                    h4: { component: H4 },
                                }
                            }}
                        >
                            {content}
                        </Markdown>
                    )}
                </motion.article>

                {/* Table of Contents */}
                {toc.length > 0 && (
                    <aside className="article-toc">
                        <div className="article-toc__sticky">
                            <p className="article-toc__label">On this page</p>
                            <ul className="article-toc__list">
                                {toc.map((item) => (
                                    <li
                                        key={item.id}
                                        className={`article-toc__item article-toc__item--h${item.level}${activeId === item.id ? ' article-toc__item--active' : ''}`}
                                    >
                                        <a
                                            href={`#${item.id}`}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                const el = document.getElementById(item.id);
                                                if (el) {
                                                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                                }
                                            }}
                                        >
                                            {item.text}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>
                )}
                </div>

                {/* References Section */}
                {article.references && article.references.length > 0 && (
                    <motion.div
                        className="article-references"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <h3 className="article-references__title">References & Further Reading</h3>
                        <ul className="article-references__list">
                            {article.references.map((ref, index) => (
                                <li key={index} className="article-references__item">
                                    <a 
                                        href={ref.url} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="article-references__link"
                                    >
                                        <span className="article-references__number">{index + 1}</span>
                                        <div className="article-references__content">
                                            <span className="article-references__text">{ref.title}</span>
                                            {ref.author && (
                                                <span className="article-references__author">by {ref.author}</span>
                                            )}
                                        </div>
                                        <HiExternalLink className="article-references__icon" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}

                {/* Navigation */}
                <motion.div 
                    className="article-navigation"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    {prevArticle ? (
                        <Link 
                            to={`/articles/${prevArticle.topicId}/${prevArticle.conceptId}/${prevArticle.slug}`}
                            className="article-navigation__link article-navigation__link--prev"
                        >
                            <HiArrowLeft />
                            <div>
                                <span className="article-navigation__label">Previous</span>
                                <span className="article-navigation__title">{prevArticle.title}</span>
                            </div>
                        </Link>
                    ) : <div />}
                    
                    {nextArticle && (
                        <Link 
                            to={`/articles/${nextArticle.topicId}/${nextArticle.conceptId}/${nextArticle.slug}`}
                            className="article-navigation__link article-navigation__link--next"
                        >
                            <div>
                                <span className="article-navigation__label">Next</span>
                                <span className="article-navigation__title">{nextArticle.title}</span>
                            </div>
                            <HiArrowLeft style={{ transform: 'rotate(180deg)' }} />
                        </Link>
                    )}
                </motion.div>

                {/* Related Articles */}
                {relatedArticles.length > 0 && (
                    <motion.div 
                        className="related-articles"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <h3 className="related-articles__title">More from {concept.name}</h3>
                        <div className="related-articles__grid">
                            {relatedArticles.map(relatedArticle => (
                                <Link
                                    key={relatedArticle.slug}
                                    to={`/articles/${topicId}/${conceptId}/${relatedArticle.slug}`}
                                    className="related-article-card"
                                >
                                    <h4>{relatedArticle.title}</h4>
                                    <p>{relatedArticle.summary}</p>
                                    <span className="related-article-card__time">
                                        <HiClock /> {relatedArticle.readTime}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </Container>
        </section>
    );
};

export default ArticleDetail;
