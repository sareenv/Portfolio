import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Container from 'react-bootstrap/Container';
import { HiArrowLeft, HiChevronRight, HiBookOpen } from 'react-icons/hi';
import { getTopicById, getConceptById } from '../../constants/articles';
import '../../Styles/article-detail.scss';
import '../../Styles/article-series.scss';

const formatDate = (date) => new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});

const ArticleSeries = () => {
    const { topicId, conceptId } = useParams();
    const topic = getTopicById(topicId);
    const concept = getConceptById(topicId, conceptId);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [topicId, conceptId]);

    if (!topic || !concept || !concept.series) {
        return (
            <section className="article-series article-series--not-found">
                <Container>
                    <div className="article-series__empty">
                        <HiBookOpen size={64} />
                        <h2>Series Not Found</h2>
                        <p>The series you're looking for doesn't exist.</p>
                        <Link to="/articles" className="article-series__back">
                            <HiArrowLeft /> Back to Articles
                        </Link>
                    </div>
                </Container>
            </section>
        );
    }

    const { series, articles } = concept;

    return (
        <section className="article-series">
            <Container>
                <motion.nav
                    className="article-series__breadcrumb"
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

                <motion.header
                    className="article-series__header"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="article-series__label">Article Series</span>
                    <h1 className="article-series__title">{series.title}</h1>
                    <p className="article-series__summary">{series.summary}</p>
                </motion.header>

                {series.coverImage && (
                    <motion.div
                        className="article-cover"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <img src={series.coverImage} alt={series.title} loading="lazy" />
                    </motion.div>
                )}

                <motion.div
                    className="article-series__table-wrapper"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                >
                    <table className="article-series__table">
                        <thead>
                            <tr>
                                <th scope="col">Part</th>
                                <th scope="col">Article</th>
                                <th scope="col">Read time</th>
                                <th scope="col">Published</th>
                            </tr>
                        </thead>
                        <tbody>
                            {articles.map((article, index) => (
                                <tr key={article.id}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <Link to={`/articles/${topicId}/${conceptId}/${article.slug}`}>
                                            {article.title}
                                        </Link>
                                        {article.wip && <span className="article-series__badge">In progress</span>}
                                    </td>
                                    <td>{article.readTime}</td>
                                    <td>{formatDate(article.date)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </motion.div>
            </Container>
        </section>
    );
};

export default ArticleSeries;
