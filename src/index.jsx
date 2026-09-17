import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

const ARTICLE_SHARE_PARAM = 'article';

const restoreSharedArticleRoute = () => {
    const params = new URLSearchParams(window.location.search);
    const articleRoute = params.get(ARTICLE_SHARE_PARAM);

    if (!articleRoute || !articleRoute.startsWith('/articles/')) return;

    const nextUrl = `${window.location.pathname}#${articleRoute}`;
    window.history.replaceState(null, '', nextUrl);
};

restoreSharedArticleRoute();

ReactDOM.render((
    <App />
), document.getElementById('root'));

serviceWorker.unregister();
