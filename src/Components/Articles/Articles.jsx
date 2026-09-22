import React, { useState, useMemo } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Container from 'react-bootstrap/Container';
import { articlesData, getAllArticles } from '../../constants/articles';
import { HiArrowRight, HiSearch, HiBookOpen, HiClock, HiChevronDown, HiChevronRight } from 'react-icons/hi';
import technicalArticlesDicebear from '../../Assets/technical-articles-dicebear.svg';
import articlesWritingTableDicebear from '../../Assets/articles-writing-table-dicebear.svg';
import '../../Styles/articles.scss';

const ARTICLE_TOPIC_PARAM = 'topic';

const getValidTopicFilter = (search) => {
    const topicId = new URLSearchParams(search).get(ARTICLE_TOPIC_PARAM);

    return articlesData.some(topic => topic.id === topicId) ? topicId : 'all';
};

const WritingTable = ({ topics }) => {
    const upcomingArticles = topics.flatMap(topic =>
        topic.concepts.flatMap(concept =>
            concept.articles
                .filter(article => article.wip)
                .map(article => ({ ...article, topic: topic.topic }))
        )
    );

    const topicNames = [...new Set(upcomingArticles.map(article => article.topic))];

    if (upcomingArticles.length === 0) {
        return null;
    }

    return (
        <motion.div
            className="articles-writing-table"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
        >
            <div className="articles-writing-table__visual">
                <img
                    src={articlesWritingTableDicebear}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    width="88"
                    height="88"
                />
            </div>
            <div className="articles-writing-table__content">
                <span className="articles-writing-table__label">On My Writing Table</span>
                <h2 className="articles-writing-table__title">More technical articles are in progress</h2>
                <p className="articles-writing-table__description">
                    I'm working on writing these articles. They are on my table, and this is the list of topics they will cover soon.
                </p>
                <div className="articles-writing-table__topics" aria-label="Upcoming article topics">
                    {topicNames.map(topic => (
                        <span key={topic} className="articles-writing-table__topic">{topic}</span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const Articles = () => {
    const history = useHistory();
    const location = useLocation();
    const [searchTerm, setSearchTerm] = useState('');
    const selectedTopic = useMemo(() => getValidTopicFilter(location.search), [location.search]);
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

    const filteredData = useMemo(() => {
        const term = searchTerm.toLowerCase();
        return articlesData.filter(topic => selectedTopic === 'all' || topic.id === selectedTopic).map(topic => ({
            ...topic,
            concepts: topic.concepts.map(concept => ({
                ...concept,
                articles: concept.articles.filter(article => {
                    const matchesSearch = !term.trim() ||
                        article.title.toLowerCase().includes(term) ||
                        article.summary.toLowerCase().includes(term) ||
                        article.tags.some(tag => tag.toLowerCase().includes(term));

                    return matchesSearch;
                })
            })).filter(concept => concept.articles.length > 0)
        })).filter(topic => topic.concepts.length > 0);
    }, [searchTerm, selectedTopic]);

    const allArticles = useMemo(() => getAllArticles(), []);
    const totalArticles = allArticles.length;
    const topicFilters = useMemo(() => [
        { id: 'all', label: 'All', count: allArticles.length },
        ...articlesData.map(topic => ({
            id: topic.id,
            label: topic.topic,
            count: topic.concepts.reduce((total, concept) => total + concept.articles.length, 0)
        }))
    ], [allArticles]);
    const hasActiveFilters = selectedTopic !== 'all';

    const toggleTopic = (topicId) => {
        setExpandedTopics(prev => ({ ...prev, [topicId]: !prev[topicId] }));
    };

    const toggleConcept = (conceptId) => {
        setExpandedConcepts(prev => ({ ...prev, [conceptId]: !prev[conceptId] }));
    };

    const updateTopicFilter = (topicId) => {
        const params = new URLSearchParams(location.search);

        if (topicId === 'all') {
            params.delete(ARTICLE_TOPIC_PARAM);
        } else {
            params.set(ARTICLE_TOPIC_PARAM, topicId);
        }

        const search = params.toString();
        history.push({
            pathname: location.pathname,
            search: search ? `?${search}` : ''
        });
    };

    const clearFilters = () => {
        updateTopicFilter('all');
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
                    <img
                        src={technicalArticlesDicebear}
                        alt=""
                        aria-hidden="true"
                        className="articles-header__asset"
                        loading="lazy"
                        width="72"
                        height="72"
                    />
                    <span className="articles-header__label">Articles</span>
                    <h1 className="articles-header__title">Technical Articles</h1>
                    <p className="articles-header__description">
                        Deep dives into technical concepts, best practices, and learnings.
                        Currently {totalArticles} articles across {articlesData.length} topics.
                    </p>
                </motion.div>

                <WritingTable topics={articlesData} />

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

                <motion.div
                    className="articles-filter-bar"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                >
                    <div className="articles-filter-bar__section">
                        <span className="articles-filter-bar__label">Browse by topic</span>
                        <div className="articles-filter-bar__chips" aria-label="Filter articles by topic">
                            {topicFilters.map(topic => (
                                <button
                                    key={topic.id}
                                    type="button"
                                    className={`articles-filter-chip${selectedTopic === topic.id ? ' articles-filter-chip--active' : ''}`}
                                    onClick={() => updateTopicFilter(topic.id)}
                                    aria-pressed={selectedTopic === topic.id}
                                >
                                    <span>{topic.label}</span>
                                    <span className="articles-filter-chip__count">{topic.count}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                    {hasActiveFilters && (
                        <button type="button" className="articles-filter-bar__clear" onClick={clearFilters}>
                            Clear filters
                        </button>
                    )}
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
                                        {topic.icon && <span className="topic-card__icon">{topic.icon}</span>}
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
                                                                                <h4 className="article-card__title">
                                                                                    <span>{article.title}</span>
                                                                                    {article.wip && (
                                                                                        <span className="article-card__wip-badge">Coming Soon</span>
                                                                                    )}
                                                                                </h4>
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
                            <p>Try adjusting your search terms or clearing filters</p>
                        </motion.div>
                    )}
                </div>
            </Container>
        </section>
    );
};

export default Articles;
