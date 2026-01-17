import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { getAllArticles } from '../../constants/articles';
import { HiArrowRight, HiBookOpen, HiClock } from 'react-icons/hi';
import '../../Styles/articles.scss';

const ArticlesPreview = ({ limit = 6 }) => {
    const allArticles = getAllArticles();
    const featuredArticles = allArticles.slice(0, limit);

    return (
        <div style={{
            backgroundColor: '#ffffff',
            padding: '4rem 0'
        }}>
            <Container>
                {/* Section Header */}
                <div style={{
                    marginBottom: '2.5rem',
                    textAlign: 'center'
                }}>
                    <span style={{
                        color: '#00b4d8',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        marginBottom: '0.75rem',
                        display: 'inline-block',
                        padding: '0.5rem 1rem',
                        backgroundColor: 'rgba(0, 180, 216, 0.1)',
                        borderRadius: '20px'
                    }}>
                        📚 Knowledge Base
                    </span>
                    <h2 style={{
                        fontWeight: 700,
                        color: '#003049',
                        fontSize: 'clamp(1.75rem, 5vw, 2.5rem)',
                        marginBottom: '0.75rem',
                        lineHeight: 1.2
                    }}>
                        Latest Articles
                    </h2>
                    <p style={{
                        color: '#666',
                        fontSize: '1rem',
                        maxWidth: '600px',
                        lineHeight: 1.6,
                        marginBottom: 0,
                        marginLeft: 'auto',
                        marginRight: 'auto'
                    }}>
                        Technical deep dives, tutorials, and insights from my learning journey
                    </p>
                </div>

                {/* Articles Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
                    gap: '2rem',
                    marginBottom: '3rem'
                }}>
                    {featuredArticles.map((article, index) => (
                        <Link
                            key={article.id}
                            to={`/articles/${article.topicId}/${article.conceptId}/${article.slug}`}
                            style={{
                                textDecoration: 'none',
                                color: 'inherit'
                            }}
                        >
                            <article
                                style={{
                                    backgroundColor: '#ffffff',
                                    borderRadius: '20px',
                                    padding: '2rem',
                                    height: '100%',
                                    border: '1px solid #e9ecef',
                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                    cursor: 'pointer',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-8px)';
                                    e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,48,73,0.12)';
                                    e.currentTarget.style.borderColor = '#00b4d8';
                                    e.currentTarget.querySelector('.article-arrow').style.transform = 'translateX(4px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'none';
                                    e.currentTarget.style.borderColor = '#e9ecef';
                                    e.currentTarget.querySelector('.article-arrow').style.transform = 'translateX(0)';
                                }}
                            >
                                {/* Decorative gradient bar */}
                                <div style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    height: '4px',
                                    background: `linear-gradient(90deg, 
                                        ${['#667eea', '#f093fb', '#4facfe', '#43e97b', '#fa709a', '#30cfd0'][index % 6]}, 
                                        ${['#764ba2', '#f5576c', '#00f2fe', '#38f9d7', '#fee140', '#330867'][index % 6]})`
                                }} />

                                {/* Icon */}
                                <div style={{
                                    width: '56px',
                                    height: '56px',
                                    borderRadius: '14px',
                                    background: 'linear-gradient(135deg, rgba(0,180,216,0.1) 0%, rgba(0,48,73,0.1) 100%)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '1.5rem'
                                }}>
                                    <HiBookOpen size={28} color="#00b4d8" />
                                </div>

                                {/* Topic badge */}
                                <div style={{
                                    display: 'inline-block',
                                    padding: '0.35rem 0.75rem',
                                    backgroundColor: '#f8f9fa',
                                    borderRadius: '6px',
                                    fontSize: '0.75rem',
                                    fontWeight: 600,
                                    color: '#6c757d',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em',
                                    marginBottom: '1rem'
                                }}>
                                    {article.topicName}
                                </div>

                                {/* Title */}
                                <h3 style={{
                                    fontSize: '1.25rem',
                                    fontWeight: 700,
                                    color: '#003049',
                                    marginBottom: '0.75rem',
                                    lineHeight: 1.4
                                }}>
                                    {article.title}
                                </h3>

                                {/* Summary */}
                                <p style={{
                                    color: '#5a6c7d',
                                    fontSize: '0.95rem',
                                    lineHeight: 1.7,
                                    marginBottom: '1.5rem',
                                    display: '-webkit-box',
                                    WebkitLineClamp: '3',
                                    WebkitBoxOrient: 'vertical',
                                    overflow: 'hidden'
                                }}>
                                    {article.summary}
                                </p>

                                {/* Footer */}
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    paddingTop: '1rem',
                                    borderTop: '1px solid #f0f2f5'
                                }}>
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        color: '#6c757d',
                                        fontSize: '0.85rem'
                                    }}>
                                        <HiClock size={16} />
                                        <span>{article.readTime}</span>
                                    </div>
                                    <HiArrowRight 
                                        className="article-arrow"
                                        size={20} 
                                        color="#00b4d8"
                                        style={{
                                            transition: 'transform 0.3s ease'
                                        }}
                                    />
                                </div>

                                {/* Tags */}
                                {article.tags && article.tags.length > 0 && (
                                    <div style={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        gap: '0.5rem',
                                        marginTop: '1rem'
                                    }}>
                                        {article.tags.slice(0, 3).map(tag => (
                                            <span
                                                key={tag}
                                                style={{
                                                    fontSize: '0.75rem',
                                                    padding: '0.25rem 0.6rem',
                                                    backgroundColor: 'rgba(0,180,216,0.08)',
                                                    color: '#00b4d8',
                                                    borderRadius: '4px',
                                                    fontWeight: 500
                                                }}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </article>
                        </Link>
                    ))}
                </div>

                {/* View All Button */}
                <div style={{ textAlign: 'center' }}>
                    <Link
                        to="/articles"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            backgroundColor: '#003049',
                            color: '#ffffff',
                            padding: '1rem 2rem',
                            borderRadius: '50px',
                            fontSize: '1rem',
                            fontWeight: 600,
                            textDecoration: 'none',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 4px 15px rgba(0, 48, 73, 0.2)'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#004c6d';
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 48, 73, 0.3)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = '#003049';
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 48, 73, 0.2)';
                        }}
                    >
                        View All Articles
                        <HiArrowRight size={18} />
                    </Link>
                </div>
            </Container>
        </div>
    );
};

export default ArticlesPreview;
