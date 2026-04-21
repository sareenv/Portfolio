import React, { useState, useEffect, useRef } from 'react';
import { HiPlay, HiPause, HiStop } from 'react-icons/hi';

const ArticleReader = ({ article }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [isSupported, setIsSupported] = useState(false);
    const [voices, setVoices] = useState([]);
    const utteranceRef = useRef(null);
    const textContentRef = useRef('');

    useEffect(() => {
        // Check if speech synthesis is supported
        if ('speechSynthesis' in window) {
            setIsSupported(true);
            
            // Load voices
            const loadVoices = () => {
                const availableVoices = window.speechSynthesis.getVoices();
                setVoices(availableVoices);
            };

            loadVoices();
            
            // Chrome loads voices asynchronously
            if (window.speechSynthesis.onvoiceschanged !== undefined) {
                window.speechSynthesis.onvoiceschanged = loadVoices;
            }
        }

        return () => {
            // Cleanup on unmount
            if (window.speechSynthesis) {
                window.speechSynthesis.cancel();
            }
        };
    }, []);

    useEffect(() => {
        // Use summary if available, otherwise fall back to full content
        if (!article) return;
        
        let textToSpeak = '';
        
        if (article.summary) {
            // Summary is already concise, just basic cleanup for TTS
            console.log('Using article summary for TTS');
            textToSpeak = article.summary
                // Add breathing room at sentence ends
                .replace(/\.\s+/g, '. ')
                .replace(/\?\s+/g, '? ')
                .replace(/!\s+/g, '! ')
                // Normalize line breaks
                .replace(/\n+/g, ' ')
                // Clean up extra spaces
                .replace(/\s{2,}/g, ' ')
                .trim();
            
            // Add closing statement for summary
            textToSpeak += ' Read the complete article to learn more details.';
        } else if (article.content) {
            // Fall back to processing full content if no summary
            console.log('No summary found, processing full content for TTS');
            textToSpeak = article.content
                // Remove code blocks first
                .replace(/```[\s\S]*?```/g, '')
                // Remove heading markers but keep the text
                .replace(/#{1,6}\s+(.+)/g, '$1. ')
                // Remove bold/italic but keep text
                .replace(/\*\*(.+?)\*\*/g, '$1')
                .replace(/\*(.+?)\*/g, '$1')
                // Remove inline code
                .replace(/`(.+?)`/g, '$1')
                // Remove links, keep text
                .replace(/\[(.+?)\]\(.+?\)/g, '$1')
                // Remove images
                .replace(/!\[.*?\]\(.+?\)/g, '')
                // Remove list markers
                .replace(/^\s*[-*+]\s+/gm, '')
                .replace(/^\s*\d+\.\s+/gm, '')
                // Clean up tables
                .replace(/\|/g, ' ')
                .replace(/[-]{3,}/g, '')
                // Add breathing room at sentence ends
                .replace(/\.\s+/g, '. ')
                .replace(/\?\s+/g, '? ')
                .replace(/!\s+/g, '! ')
                // Add pauses after colons and semicolons
                .replace(/:\s+/g, ': ')
                .replace(/;\s+/g, '; ')
                // Normalize line breaks
                .replace(/\n{3,}/g, '\n\n')
                .replace(/\n\n/g, '. ')
                .replace(/\n/g, ' ')
                // Clean up extra spaces
                .replace(/\s{2,}/g, ' ')
                .trim();
        }

        textContentRef.current = textToSpeak;
        console.log('TTS text prepared, length:', textToSpeak.length);
    }, [article]);

    const getBestVoice = () => {
        console.log('Available voices count:', voices.length);
        let availableVoices = voices;
        
        if (!availableVoices.length) {
            console.log('No voices loaded yet, trying to load...');
            availableVoices = window.speechSynthesis.getVoices();
            console.log('Fresh voices count:', availableVoices.length);
            if (!availableVoices.length) return null;
            setVoices(availableVoices);
        }

        console.log('First few voices:', availableVoices.slice(0, 5).map(v => v.name));

        // Prioritize male voices for natural-sounding speech
        const preferredVoices = [
            'Alex', // macOS male voice
            'Google UK English Male',
            'Google US English Male',
            'Microsoft David', // Windows male voice
            'Daniel', // macOS (UK)
            'Fred', // macOS (US)
        ];

        // Try to find a preferred voice
        for (const preferred of preferredVoices) {
            const voice = availableVoices.find(v => v.name.includes(preferred));
            if (voice) {
                console.log('Found preferred voice:', voice.name);
                return voice;
            }
        }

        // Look for any male English voice
        const maleEnglishVoice = availableVoices.find(v => 
            (v.lang === 'en-US' || v.lang === 'en-GB') && 
            !v.name.includes('eSpeak') && // Avoid robotic eSpeak voices
            !v.name.toLowerCase().includes('female') &&
            !v.name.toLowerCase().includes('woman') &&
            (v.name.toLowerCase().includes('male') || 
             v.name.toLowerCase().includes('man') ||
             ['alex', 'daniel', 'david', 'fred', 'tom', 'james'].some(name => 
                v.name.toLowerCase().includes(name)))
        );
        
        if (maleEnglishVoice) {
            console.log('Found male English voice:', maleEnglishVoice.name);
            return maleEnglishVoice;
        }

        // Fallback to any English voice
        const fallback = availableVoices.find(v => v.lang.startsWith('en')) || availableVoices[0];
        console.log('Using fallback voice:', fallback?.name);
        return fallback;
    };

    const speak = () => {
        if (!isSupported || !textContentRef.current) {
            console.log('Cannot speak:', { isSupported, hasContent: !!textContentRef.current });
            return;
        }

        if (isPaused) {
            // Resume
            window.speechSynthesis.resume();
            setIsPlaying(true);
            setIsPaused(false);
            return;
        }

        // Create new utterance
        const utterance = new SpeechSynthesisUtterance(textContentRef.current);
        utteranceRef.current = utterance;

        // Select best voice
        const bestVoice = getBestVoice();
        if (bestVoice) {
            utterance.voice = bestVoice;
            console.log('Using voice:', bestVoice.name);
        } else {
            console.log('No specific voice selected, using default');
        }

        // Configure for more natural speech
        utterance.rate = 0.95; // Slightly slower for clarity
        utterance.pitch = 1.0; // Natural pitch
        utterance.volume = 0.9; // Slightly softer

        console.log('Utterance configured:', {
            rate: utterance.rate,
            pitch: utterance.pitch,
            volume: utterance.volume,
            textLength: utterance.text.length,
            voice: utterance.voice?.name
        });

        // Event handlers
        utterance.onstart = () => {
            console.log('Speech started');
            setIsPlaying(true);
            setIsPaused(false);
        };

        utterance.onend = () => {
            console.log('Speech ended');
            setIsPlaying(false);
            setIsPaused(false);
        };

        utterance.onerror = (event) => {
            console.error('Speech synthesis error:', event);
            console.error('Error details:', {
                error: event.error,
                charIndex: event.charIndex,
                elapsedTime: event.elapsedTime
            });
            setIsPlaying(false);
            setIsPaused(false);
        };

        // Start speaking
        console.log('Starting speech, text length:', textContentRef.current.length);
        console.log('SpeechSynthesis state before speak:', {
            speaking: window.speechSynthesis.speaking,
            pending: window.speechSynthesis.pending,
            paused: window.speechSynthesis.paused
        });
        
        window.speechSynthesis.speak(utterance);
        
        console.log('SpeechSynthesis state after speak:', {
            speaking: window.speechSynthesis.speaking,
            pending: window.speechSynthesis.pending,
            paused: window.speechSynthesis.paused
        });
    };

    const pause = () => {
        if (!isSupported) return;
        window.speechSynthesis.pause();
        setIsPlaying(false);
        setIsPaused(true);
    };

    const stop = () => {
        if (!isSupported) return;
        window.speechSynthesis.cancel();
        setIsPlaying(false);
        setIsPaused(false);
    };

    if (!isSupported || !article) {
        return null; // Don't show if not supported or no article
    }

    return (
        <div className="article-reader">
            <div className="article-reader__controls">
                {!isPlaying && !isPaused && (
                    <button
                        className="article-reader__btn article-reader__btn--play"
                        onClick={speak}
                        title="Quick Summary"
                    >
                        <HiPlay />
                        <span>Quick Summary</span>
                    </button>
                )}

                {isPlaying && (
                    <button
                        className="article-reader__btn article-reader__btn--pause"
                        onClick={pause}
                        title="Pause"
                    >
                        <HiPause />
                        <span>Pause</span>
                    </button>
                )}

                {isPaused && (
                    <button
                        className="article-reader__btn article-reader__btn--play"
                        onClick={speak}
                        title="Resume"
                    >
                        <HiPlay />
                        <span>Resume</span>
                    </button>
                )}

                {(isPlaying || isPaused) && (
                    <button
                        className="article-reader__btn article-reader__btn--stop"
                        onClick={stop}
                        title="Stop"
                    >
                        <HiStop />
                        <span>Stop</span>
                    </button>
                )}
            </div>

            <div className="article-reader__note">
                Brief summary of the complete article. Read the complete article for full information.
            </div>

            {isPlaying && (
                <div className="article-reader__status">
                    <span className="article-reader__indicator"></span>
                    <span>Reading article...</span>
                </div>
            )}
        </div>
    );
};

export default ArticleReader;
