import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiArrowLeft, HiPencilAlt, HiSparkles } from 'react-icons/hi';
import { extractOutline } from './wipDetection';
import articleWritingRobotDicebear from '../../Assets/article-writing-robot-dicebear.svg';

const WorkInProgressView = ({ article, markdown }) => {
    const outline = extractOutline(markdown).filter((item) => item.level > 1);

    return (
        <motion.section
            className="article-wip"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="article-wip__hero">
                <div className="article-wip__avatar">
                    <img src={articleWritingRobotDicebear} alt="Work in progress robot" loading="lazy" />
                </div>
                <div className="article-wip__intro">
                    <span className="article-wip__badge">
                        <HiPencilAlt /> On my writing table
                    </span>
                    <h2 className="article-wip__title">
                        This article is on my table to write.
                    </h2>
                    <p className="article-wip__message">
                        I'm actively working on this topic and shaping the explanation,
                        examples, and diagrams. It is not available yet, but I will make
                        it available soon. For now, here is the outline of what this article
                        is going to cover.
                    </p>
                </div>
            </div>

            {outline.length > 0 && (
                <div className="article-wip__outline">
                    <h3 className="article-wip__outline-title">
                        <HiSparkles /> Planned outline
                    </h3>
                    <ul className="article-wip__outline-list">
                        {outline.map((item, index) => (
                            <li
                                key={`${item.text}-${index}`}
                                className={`article-wip__outline-item article-wip__outline-item--h${item.level}`}
                            >
                                <span className="article-wip__outline-marker" />
                                <span className="article-wip__outline-text">{item.text}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            <div className="article-wip__actions">
                <Link to="/articles" className="article-wip__cta">
                    <HiArrowLeft /> Browse other articles
                </Link>
            </div>
        </motion.section>
    );
};

export default WorkInProgressView;
