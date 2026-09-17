// Detect if a markdown document is an outline-only "work in progress" article.
// Strips headings, horizontal rules, blockquote markers, and whitespace; treats
// anything shorter than a small threshold as a stub.
export const isMarkdownWIP = (markdown) => {
    if (!markdown || typeof markdown !== 'string') return false;

    const body = markdown
        .replace(/^#{1,6}\s+.*$/gm, '')
        .replace(/^\s*[-*_]{3,}\s*$/gm, '')
        .replace(/^\s*>\s?.*$/gm, '')
        .replace(/\s+/g, '');

    return body.length < 40;
};

// Extract the heading outline from markdown for the WIP preview.
export const extractOutline = (markdown) => {
    if (!markdown) return [];
    const regex = /^(#{1,4})\s+(.+)$/gm;
    const items = [];
    let match;
    while ((match = regex.exec(markdown)) !== null) {
        items.push({
            level: match[1].length,
            text: match[2].trim(),
        });
    }
    return items;
};
