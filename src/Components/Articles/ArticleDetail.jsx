import React, { useEffect } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';
import Container from 'react-bootstrap/Container';
import Markdown from 'markdown-to-jsx';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { getArticleBySlug, getTopicById, getConceptById, getAllArticles } from '../../constants/articles';
import { HiArrowLeft, HiClock, HiCalendar, HiChevronRight, HiBookOpen } from 'react-icons/hi';
import '../../Styles/article-detail.scss';

// Code block component for syntax highlighting
const CodeBlock = ({ className, children }) => {
    const language = className ? className.replace('lang-', '') : 'text';
    return (
        <SyntaxHighlighter
            style={oneDark}
            language={language}
            className="code-block"
        >
            {children}
        </SyntaxHighlighter>
    );
};

// Inline code component
const InlineCode = ({ children }) => (
    <code className="inline-code">{children}</code>
);

// Table wrapper for responsive tables
const TableWrapper = ({ children }) => (
    <div className="table-wrapper">
        <table>{children}</table>
    </div>
);

const ArticleDetail = () => {
    const { topicId, conceptId, slug } = useParams();
    const history = useHistory();
    const article = getArticleBySlug(slug);
    const topic = getTopicById(topicId);
    const concept = getConceptById(topicId, conceptId);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

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
                            {topic.icon} {topic.topic}
                        </span>
                        <span className="article-header__concept">{concept.name}</span>
                    </div>
                    <h1 className="article-header__title">{article.title}</h1>
                    <p className="article-header__summary">{article.summary}</p>
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

                {/* Article Content */}
                <motion.article 
                    className="article-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <Markdown
                        options={{
                            overrides: {
                                code: {
                                    component: CodeBlock
                                },
                                inlineCode: {
                                    component: InlineCode
                                },
                                table: {
                                    component: TableWrapper
                                },
                                pre: {
                                    component: ({ children }) => <>{children}</>
                                }
                            }
                        }}
                    >
                        {article.content}
                    </Markdown>
                </motion.article>

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
