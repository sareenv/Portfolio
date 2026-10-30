import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { FaExclamationTriangle, FaRedo, FaWifi } from 'react-icons/fa';
import { colors, typography, spacing, borders, transitions, layout, iconSize } from '../../constants/theme';

const ErrorState = ({ 
    title = "Something went wrong",
    message = "We couldn't load the content. Please try again.",
    onRetry,
    type = "error" // "error" | "network" | "notFound"
}) => {
    const icons = {
        error: <FaExclamationTriangle size={iconSize['3xl']} />,
        network: <FaWifi size={iconSize['3xl']} />,
        notFound: <FaExclamationTriangle size={iconSize['3xl']} />
    };

    const titles = {
        error: title,
        network: "Connection Error",
        notFound: "Not Found"
    };

    const messages = {
        error: message,
        network: "Please check your internet connection and try again.",
        notFound: "The content you're looking for doesn't exist."
    };

    return (
        <Container>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: layout.minHeight.section,
                padding: `${spacing['5xl']} ${spacing.lg}`,
                textAlign: 'center'
            }}>
                <div style={{
                    color: type === 'error' ? colors.semantic.error : colors.semantic.info,
                    marginBottom: spacing['2xl'],
                    opacity: 0.8
                }}>
                    {icons[type]}
                </div>
                
                <h4 style={{
                    color: colors.primary.main,
                    fontWeight: typography.fontWeight.semibold,
                    marginBottom: spacing.md,
                    fontSize: typography.fontSize['5xl']
                }}>
                    {titles[type]}
                </h4>
                
                <p style={{
                    color: colors.neutral.gray,
                    fontSize: typography.fontSize.lg,
                    marginBottom: spacing['2xl'],
                    maxWidth: '400px',
                    lineHeight: typography.lineHeight.relaxed
                }}>
                    {messages[type]}
                </p>
                
                {onRetry && (
                    <Button
                        onClick={onRetry}
                        style={{
                            backgroundColor: colors.primary.main,
                            border: 'none',
                            padding: `${spacing.md} ${spacing['2xl']}`,
                            borderRadius: borders.radius.md,
                            fontWeight: typography.fontWeight.medium,
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: spacing.sm,
                            transition: `all ${transitions.normal}`
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = colors.primary.light;
                            e.target.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = colors.primary.main;
                            e.target.style.transform = 'translateY(0)';
                        }}
                    >
                        <FaRedo size={iconSize.sm} /> Try Again
                    </Button>
                )}
            </div>
        </Container>
    );
};

export default ErrorState;
