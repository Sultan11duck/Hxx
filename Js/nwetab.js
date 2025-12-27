// ==UserScript==
// @name         在新标签页打开链接2.0
// @version      25.11.22
// @description  Make all links open in a new tab
// @match        https://github.com/*
// @match        https://greasyfork.org/*
// @exclude      https://greasyfork.org/en/scripts/by-site/*
// @match        http*://sleazyfork.org/*
// @match        *://github.com/search*
// @match        *://github.com
// @match        https://*.scmp.com/*
// @match        https://edition.cnn.com/*
// @match       *luxxle.com/*
// @match       *m.inftab.com/*
// @match       *://*.perplexity.com/*
// @match        *google.com.*/search*
// @match       https://*luxxle.com/*
// @match       https://*telegram.org/*
// @match       https://*perplexity.ai/*
// @match       https://*luxxle.com/*
// @match       *://*.m.inftab.com/*
// @match       *://*.you.com/*
// @match       https://*google.com/*
// @match       https://*bing.com/*
// @match       https://*yandex.com/*
// @match       https://*perplexity.ai/*
// @match      https://*inftab.com/*
// @match       https://*greasyfork.org/*
// @match       https://sub-store.vercel.app/*
// @match       *://*.sub-store.vercel.app.com/*
// @match       https://*m.inftab.com/*
// @match        https://www.google.com/search?*  
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function modifyLinks() {
        const allLinks = document.querySelectorAll('a[href]');
        allLinks.forEach(link => {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        });
    }

    // Modify links on initial load
    modifyLinks();

    // Also observe dynamically added content (infinite scroll, etc.)
    const observer = new MutationObserver(modifyLinks);
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
})();