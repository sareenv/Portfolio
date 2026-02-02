import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Container from 'react-bootstrap/Container';
import { articlesData, getAllArticles } from '../../constants/articles';
import { HiArrowRight, HiSearch, HiBookOpen, HiClock, HiChevronDown, HiChevronRight } from 'react-icons/hi';
import '../../Styles/articles.scss';

const Articles = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [expandedTopics, setExpandedTopics] = useState(
        articlesData.reduce((acc, topic) => ({ ...acc, [topic.id]: true }), {})
    );
    // Initialize all concepts as expanded
    const [expandedConcepts, setExpandedConcepts] = useState(
        articlesData.reduce((acc, topic) => {
            topic.concepts.forEach(concept => {
                acc[concept.id] = true;
            });
            return acc;
        }, {})
    );

    // Filter articles based on search
    const filteredData = useMemo(() => {
        if (!searchTerm.trim()) return articlesData;

        const term = searchTerm.toLowerCase();
        return articlesData.map(topic => ({
            ...topic,
            concepts: topic.concepts.map(concept => ({
                ...concept,
                articles: concept.articles.filter(article =>
                    article.title.toLowerCase().includes(term) ||
                    article.summary.toLowerCase().includes(term) ||
                    article.tags.some(tag => tag.toLowerCase().includes(term))
                )
            })).filter(concept => concept.articles.length > 0)
        })).filter(topic => topic.concepts.length > 0);
    }, [searchTerm]);

    const totalArticles = getAllArticles().length;

    const toggleTopic = (topicId) => {
        setExpandedTopics(prev => ({ ...prev, [topicId]: !prev[topicId] }));
    };

    const toggleConcept = (conceptId) => {
        setExpandedConcepts(prev => ({ ...prev, [conceptId]: !prev[conceptId] }));
    };

    return (
        <section className="articles-section">
            <Container>
                {/* Header */}
                <motion.div 
                    className="articles-header"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="articles-header__label">Knowledge Base</span>
                    <h1 className="articles-header__title">Technical Articles</h1>
                    <p className="articles-header__description">
                        Deep dives into technical concepts, best practices, and learnings.
                        Currently {totalArticles} articles across {articlesData.length} topics.
                    </p>
                </motion.div>

                {/* Search */}
                <motion.div 
                    className="articles-search"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <HiSearch className="articles-search__icon" />
                    <input
                        type="text"
                        placeholder="Search articles by title, content, or tags..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="articles-search__input"
                    />
                </motion.div>

                {/* Topics Tree */}
                <div className="articles-tree">
                    <AnimatePresence>
                        {filteredData.map((topic, topicIndex) => (
                            <motion.div
                                key={topic.id}
                                className="topic-card"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: topicIndex * 0.1 }}
                            >
                                {/* Topic Header */}
                                <div 
                                    className="topic-card__header"
                                    onClick={() => toggleTopic(topic.id)}
                                >
                                    <div className="topic-card__info">
                                        <span className="topic-card__icon">{topic.icon}</span>
                                        <div>
                                            <h2 className="topic-card__title">{topic.topic}</h2>
                                            <p className="topic-card__description">{topic.description}</p>
                                        </div>
                                    </div>
                                    <motion.div
                                        animate={{ rotate: expandedTopics[topic.id] ? 180 : 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <HiChevronDown className="topic-card__toggle" />
                                    </motion.div>
                                </div>

                                {/* Concepts */}
                                <AnimatePresence>
                                    {expandedTopics[topic.id] && (
                                        <motion.div
                                            className="concepts-list"
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            {topic.concepts.map((concept) => (
                                                <div key={concept.id} className="concept-item">
                                                    <div 
                                                        className="concept-item__header"
                                                        onClick={() => toggleConcept(concept.id)}
                                                    >
                                                        <motion.div
                                                            animate={{ rotate: expandedConcepts[concept.id] ? 90 : 0 }}
                                                            transition={{ duration: 0.2 }}
                                                        >
                                                            <HiChevronRight className="concept-item__chevron" />
                                                        </motion.div>
                                                        <div className="concept-item__info">
                                                            <h3 className="concept-item__name">{concept.name}</h3>
                                                            <span className="concept-item__count">
                                                                {concept.articles.length} article{concept.articles.length !== 1 ? 's' : ''}
                                                            </span>
                                                        </div>
                                                    </div>

                                                    {/* Articles */}
                                                    <AnimatePresence>
                                                        {expandedConcepts[concept.id] && (
                                                            <motion.div
                                                                className="articles-list"
                                                                initial={{ height: 0, opacity: 0 }}
                                                                animate={{ height: 'auto', opacity: 1 }}
                                                                exit={{ height: 0, opacity: 0 }}
                                                                transition={{ duration: 0.3 }}
                                                            >
                                                                {concept.articles.map((article) => (
                                                                    <Link
                                                                        key={article.id}
                                                                        to={`/articles/${topic.id}/${concept.id}/${article.slug}`}
                                                                        className="article-card"
                                                                    >
                                                                        <div className="article-card__content">
                                                                            <HiBookOpen className="article-card__icon" />
                                                                            <div className="article-card__info">
                                                                                <h4 className="article-card__title">{article.title}</h4>
                                                                                <p className="article-card__summary">{article.summary}</p>
                                                                                <div className="article-card__meta">
                                                                                    <span className="article-card__time">
                                                                                        <HiClock /> {article.readTime}
                                                                                    </span>
                                                                                    <div className="article-card__tags">
                                                                                        {article.tags.slice(0, 2).map(tag => (
                                                                                            <span key={tag} className="article-card__tag">{tag}</span>
                                                                                        ))}
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <HiArrowRight className="article-card__arrow" />
                                                                    </Link>
                                                                ))}
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                </div>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </AnimatePresence>

                    {/* No results */}
                    {filteredData.length === 0 && (
                        <motion.div 
                            className="articles-empty"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            <HiSearch size={48} />
                            <h3>No articles found</h3>
                            <p>Try adjusting your search terms</p>
                        </motion.div>
                    )}
                </div>
            </Container>
        </section>
    );
};

export default Articles;
