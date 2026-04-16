// ==UserScript==
// @name         محرك بحث تجميعي للتبديل بين التنقل + تحسينات GitHub (metasesrch)
// @namespace    http://tampermonkey.net/
// @version      v1.40
// @author       晚风知我意http://127.0.0.1:9101/file/*
// @match       https://*google.com/*
// @match        *://google.com/*
// @match        *://search.disroot.org/search*
// @match        *://www.bing.com/*
// @match        *://search.yahoo.com/search*
// @match        *://*.search.yahoo.com/search*
// @match        *://search.yahoo.co.jp/*
// @match        *://www.baidu.com/*
// @match        *://yandex.com/search/*
// @match        *://yandex.ru/search/*
// @match        *://search.disroot.org/search*
// @match        *://searx.tiekoetter.com/search*
// @match        *://search.bus-hit.me/search*
// @match        *://search.inetol.net/search*
// @match        *://priv.au/search*
// @match        *://searx.be/search*
// @match        *://searxng.site/search*
// @match        *://search.hbubli.cc/search*
// @match        *://search.im-in.space/search*
// @match        *://opnxng.com/search*
// @match        *://search.upinmars.com/search*
// @match        *://search.sapti.me/search*
// @match        *://freesearch.club/search*
// @match        *://xo.wtf/search*
// @match        *://www.gruble.de/search*
// @match        *://searx.tuxcloud.net/search*
// @match        *://baresearch.org/search*
// @match        *://searx.daetalytica.io/search*
// @match        *://etsi.me/search*
// @match        *://search.leptons.xyz/search*
// @match        *://search.rowie.at/search*
// @match        *://search.mdosch.de/search*
// @match        *://searx.catfluori.de/search*
// @match        *://searx.si/search*
// @match        *://searx.namejeff.xyz/search*
// @match        *://search.itstechtime.com/search*
// @match        *://s.mble.dk/search*
// @match        *://searx.kutay.dev/search*
// @match        *://ooglester.com/search*
// @match        *://searx.ox2.fr/search*
// @match        *://searx.techsaviours.org/search*
// @match        *://searx.perennialte.ch/search*
// @match        *://s.trung.fun/searxng/search*
// @match        *://search.in.projectsegfau.lt/search*
// @match        *://search.projectsegfau.lt/search*
// @match        *://darmarit.org/searx/search*
// @match        *://searx.lunar.icu/search*
// @match        *://nyc1.sx.ggtyler.dev/search*
// @match        *://search.rhscz.eu/search*
// @match        *://paulgo.io/search*
// @match        *://northboot.xyz/search*
// @match        *://searx.zhenyapav.com/search*
// @match        *://searxng.ch/search*
// @match        *://copp.gg/search*
// @match        *://searx.sev.monster/search*
// @match        *://searx.oakleycord.dev/search*
// @match        *://searx.juancord.xyz/search*
// @match        *://searx.work/search*
// @match        *://search.ononoki.org/search*
// @match        *://search.demoniak.ch/search*
// @match        *://searx.cthd.icu/search*
// @match        *://searx.fmhy.net/search*
// @match        *://searx.headpat.exchange/search*
// @match        *://sex.finaltek.net/search*
// @match        *://search.gcomm.ch/search*
// @match        *://search.smnz.de/search*
// @match        *://searx.ankha.ac/search*
// @match        *://search.lvkaszus.pl/search*
// @match        *://searx.nobulart.com/search*
// @match        *://sx.t-1.org/search*
// @match        *://www.jabber-germany.de/searx/search*
// @match        *://sx.catgirl.cloud/search*
// @match        *://sx.vern.cc/searxng/search*
// @match        *://www.startpage.com/search*
// @match        *://www.startpage.com/sp/search*
// @match        *://search.brave.com/*
// @match        *://duckduckgo.com
// @match        *://duckduckgo.com/*
// @match        *://ghosterysearch.com/*
 
// @match        *://presearch.com/*
 
// @match        *://metager.org/*meta/meta.ger3*
// @match        *://metager.de/*meta/meta.ger3*
 
// @match        *://4get.ca/*
// @match        *://4get.silly.computer/*
// @match        *://4get.plunked.party/*
// @match        *://4get.konakona.moe/*
// @match        *://4get.sijh.net/*
// @match        *://4get.hbubli.cc/*
// @match        *://4get.perennialte.ch/*
// @match        *://4get.zzls.xyz/*
// @match        *://4getus.zzls.xyz/*
// @match        *://4get.seitan-ayoub.lol/*
// @match        *://4get.dcs0.hu/*
// @match        *://4get.psily.garden/*
// @match        *://4get.lvkaszus.pl/*
// @match        *://4get.kizuki.lol/*
 
// @match        *://search.ahwx.org/search.php*
// @match        *://search2.ahwx.org/search.php*
// @match        *://search3.ahwx.org/search.php*
// @match        *://ly.owo.si/search.php*
// @match        *://librey.franklyflawless.org/search.php*
// @match        *://librey.org/search.php*
// @match        *://search.davidovski.xyz/search.php*
// @match        *://search.milivojevic.in.rs/search.php*
// @match        *://glass.prpl.wtf/search.php*
// @match        *://librex.uk.to/search.php*
// @match        *://librey.ix.tc/search.php*
// @match        *://search.funami.tech/search.php*
// @match        *://librex.retro-hax.net/search.php*
// @match        *://librex.nohost.network/search.php*
// @match        *://search.pabloferreiro.es/search.php*
// @match        *://librey.baczek.me/search.php*
// @match        *://lx.benike.me/search.php*
// @match        *://search.seitan-ayoub.lol/search.php*
// @match        *://librey.myroware.net/search.php*
// @match        *://librey.nezumi.party/search.php*
// @match        *://search.zeroish.xyz/search.php*
 
// @match        *://stract.com/*
 
// @match        *://search.albony.xyz/*
// @match        *://search.garudalinux.org/*
// @match        *://search.dr460nf1r3.org/*
// @match        *://search.nezumi.party/*
// @match        *://s.tokhmi.xyz/*
// @match        *://search.sethforprivacy.com/*
// @match        *://whoogle.dcs0.hu/*
// @match        *://whoogle.lunar.icu/*
// @match        *://gowogle.voring.me/*
// @match        *://whoogle.privacydev.net/*
// @match        *://whoogle.hostux.net/*
// @match        *://wg.vern.cc/*
// @match        *://whoogle.hxvy0.gq/*
// @match        *://whoogle.ungovernable.men/*
// @match        *://whoogle2.ungovernable.men/*
// @match        *://whoogle3.ungovernable.men/*
// @match        *://wgl.frail.duckdns.org/*
// @match        *://whoogle.no-logs.com/*
// @match        *://whoogle.ftw.lol/*
// @match        *://whoogle-search--replitcomreside.repl.co/*
// @match        *://search.notrustverify.ch/*
// @match        *://whoogle.datura.network/*
// @match        *://whoogle.yepserver.xyz/*
 
// @match        *://www.etools.ch/searchSubmit.do*
// @match        *://www.etools.ch/mobileSearch.do*
 
// @match        *://www.mojeek.com/*
// @match        *://www.mojeek.co.uk/*
 
// @match        *://wiby.me/*
// @match        *://yep.com/web*
// @match        *://www.torry.io/search*
// @match        *://www.qwant.com/*
// @match        *://www.ecosia.org/*
// @match        *://search.becovi.com/serp.php*
// @match        *://good-search.org/*search/*
// @match        *://www.alltheinternet.com/*
// @match        *://www.searchalot.com/*
// @match        *://search.aol.com/*search*
// @match        *://www.onesearch.com/*search*
// @match        *://www.info.com/*
// @match        *://oceanhero.today/web*
 
// @match        *://swisscows.com/*/web*
 
// @match        *://search.lilo.org/*
// @match        *://search.entireweb.com/*
// @match        *://www.tadadoo.com/*
// @match        *://search.gmx.com/web/result*
// @match        *://search.gmx.com/web*
// @match        *://youcare.world/all*
// @match        *://search.lycos.com/web/*
// @match        *://alohafind.com/search/*
// @match        *://spot.ecloud.global/search*
// @match        *://qmamu.com/*
// @match        *://search.carrot2.org/*
// @match        *://www.nona.de/*
// @match        *://www.sapo.pt/pesquisa/web/tudo*
// @match        *://www.exalead.com/search/web/results/*
// @match        *://cgi.search.biglobe.ne.jp/cgi-bin/search2-b*
// @match        *://search.goo.ne.jp/web.jsp*
// @match        *://search.walla.co.il/*
// @match        *://coccoc.com/*
// @match        *://search.seznam.cz/*
// @match        *://www.startsiden.no/sok/*
// @match        *://search.marginalia.nu/*
// @match        *://mwmbl.org/*
// @match        *://search.naver.com/search.naver*
// @match        *://gibiru.com/results.html*
// @match        *://www.lukol.com/s.php*
// @match        *://www.draze.com/web/*
 
// @match        *://www.yelliot.com/search/*
// @match        *://fr.yelliot.com/search/*
// @match        *://ar.yelliot.com/search/*
// @match        *://es.yelliot.com/search/*
// @match        *://de.yelliot.com/search/*
// @match        *://it.yelliot.com/search/*
// @match        *://ru.yelliot.com/search/*
// @match        *://cn.yelliot.com/search/*
// @match        *://in.yelliot.com/search/*
// @match        *://pt.yelliot.com/search/*
 
// @match        *://efind.com/search*
// @match        *://fireball.de/de/*
// @match        *://freespoke.com/search/web*
// @match        *://gogoprivate.com/search*
// @match        *://resulthunter.com/*
// @match        *://search.givewater.com/*
// @match        *://results.excite.com/*
// @match        *://www.webcrawler.com/*
// @match        *://www.metacrawler.com/*
// @match        *://www.dogpile.com/*
// @match        *://www.infospace.com/*
// @match        *://www.refseek.com/*
// @match        *://www.zapmeta.com/*
// @match        *://www.izito.com/*
// @match        *://www.ask.com/web*
// @match        *://www.pronto.com/web*
// @match        *://anoox.com/find.php*
 
// @match        *://kagi.com/search*
// @grant        unsafeWindow
// @grant        GM_addStyle
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_xmlhttpRequest
// @connect      github.com
// @connect      raw.githubusercontent.com
// @connect      api.github.com
// @icon         https://hub.gitmirror.com/https://raw.githubusercontent.com/qq5855144/greasyfork/main/shousuo.svg
// @run-at       document-body
// @license     MIT
// @description * 搜索引擎快捷工具 + GitHub搜索结果增强 * 核心功能：页面底部搜索引擎快捷栏、GitHub搜索结果显示部署网站和发布版本标签、拖拽排序、自定义引擎管理、快捷搜索
// ==/UserScript==

// ===== GitHub 功能模块 =====
const githubEnhancer = {
    CONFIG: {
        checkInterval: 1000,
        maxRetries: 3,
        deploymentKeywords: {
            'github.io': true,
            'vercel.app': true,
            'netlify.app': true,
            'herokuapp.com': true,
            'firebaseapp.com': true,
            'pages.dev': true,
            'railway.app': true,
            'render.com': true,
            'surge.sh': true,
            'gitlab.io': true
        },
        excludedExtensions: [
            '.png', '.jpg', '.jpeg', '.gif', '.bmp', '.webp', '.svg', '.ico',
            '.pdf', '.doc', '.docx', '.xls', '.xlsx', '.ppt', '.pptx',
            '.zip', '.rar', '.7z', '.tar', '.gz',
            '.md', '.txt', '.json', '.xml', '.yml', '.yaml',
            '.js', '.ts', '.jsx', '.tsx', '.css', '.scss', '.less',
            '.java', '.py', '.rb', '.php', '.go', '.rs', '.cpp', '.c', '.h',
            '.html', '.htm', '.vue', '.svelte',
            '.csv', '.tsv', '.sql', '.db',
            '.woff', '.woff2', '.ttf', '.eot',
            '.mp4', '.avi', '.mov', '.mp3', '.wav', '.flac',
            '.log', '.lock', '.env', '.gitignore', '.dockerfile'
        ]
    },

    ICONS: {
        deployment: `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path fill="#059669" d="M16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2m-5.15 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56M14.34 14H9.66c-.1-.66-.16-1.32-.16-2s.06-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2M12 19.96c-.83-1.2-1.5-2.53-1.91-3.96h3.82c-.41 1.43-1.08 2.76-1.91 3.96M8 8H5.08A7.92 7.92 0 0 1 9.4 4.44C8.8 5.55 8.35 6.75 8 8m-2.92 8H8c.35 1.25.8 2.45 1.4 3.56A8 8 0 0 1 5.08 16m-.82-2C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2M12 4.03c.83 1.2 1.5 2.54 1.91 3.97h-3.82c.41-1.43 1.08-2.77 1.91-3.97M18.92 8h-2.95a15.7 15.7 0 0 0-1.38-3.56c1.84.63 3.37 1.9 4.33 3.56M12 2C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"/></svg>`,
        releases: `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path fill="#0284c7" d="m5.12 5l.81-1h12l.94 1M12 17.5L6.5 12H10v-2h4v2h3.5zm8.54-12.27l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6 3 6.5V19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.5c0-.5-.17-.93-.46-1.27"/></svg>`
    },

    processedRepos: new Set(),

    init() {
        if (this.isGitHubSearchPage()) {
            this.injectGitHubStyles();
            this.startGitHubProcessing();
            this.initGitHubObserver();
        }
    },

    isGitHubSearchPage() {
        return window.location.hostname === 'github.com' && 
               (window.location.pathname === '/search' || 
                window.location.pathname.includes('/search'));
    },

    injectGitHubStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .github-search-tag {
                display: inline-flex;
                align-items: center;
                padding: 2px 8px;
                margin: 2px 4px 2px 0;
                font-size: 11px;
                font-weight: 500;
                border-radius: 12px;
                text-decoration: none;
                transition: all 0.2s ease;
                cursor: pointer;
                line-height: 1.4;
                white-space: nowrap;
                background-color: #DDF4FF !important;
                border: none !important;
            }
            
            .github-search-tag-deployment {
                color: #0284c7 !important;
            }
            
            .github-search-tag-releases {
                color: #0284c7 !important;
            }
            
            .github-search-tag:hover {
                opacity: 0.9;
                transform: translateY(-1px);
                box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                text-decoration: none !important;
                background-color: #DDF4FF !important;
            }
            
            .github-tags-container {
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                margin-top: 4px;
                gap: 4px;
                animation: fadeInUp 0.3s ease-out;
            }
            
            @keyframes fadeInUp {
                from {
                    opacity: 0;
                    transform: translateY(8px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }

            .github-search-tag svg {
                display: block;
                width: 12px;
                height: 12px;
            }
        `;
        document.head.appendChild(style);
    },

    makeRequest(url) {
        return new Promise((resolve, reject) => {
            GM_xmlhttpRequest({
                method: 'GET',
                url: url,
                onload: (response) => {
                    if (response.status === 200) {
                        resolve(response.responseText);
                    } else {
                        reject(new Error(`HTTP ${response.status}`));
                    }
                },
                onerror: reject
            });
        });
    },

    isValidWebsiteUrl(url) {
        try {
            const urlObj = new URL(url);
            
            if (!['http:', 'https:'].includes(urlObj.protocol)) {
                return false;
            }
            
            const pathname = urlObj.pathname.toLowerCase();
            const lastSegment = pathname.split('/').pop() || '';
            
            for (const ext of this.CONFIG.excludedExtensions) {
                if (lastSegment.endsWith(ext)) {
                    return false;
                }
            }
            
            const filePatterns = [
                /\/[^/]+\.[a-z0-9]{2,5}$/i,
                /\/blob\//,
                /\/raw\//,
                /\/releases\/download\//,
                /\/archive\//,
            ];
            
            for (const pattern of filePatterns) {
                if (pattern.test(url)) {
                    return false;
                }
            }
            
            const domain = urlObj.hostname;
            for (const keyword in this.CONFIG.deploymentKeywords) {
                if (domain.includes(keyword)) {
                    return true;
                }
            }
            
            if (domain.includes('github.com') || domain.includes('github.io')) {
                return false;
            }
            
            return true;
            
        } catch (e) {
            return false;
        }
    },

    async checkGitHubPages(repoOwner, repoName) {
        try {
            const possibleUrls = [
                `https://${repoOwner}.github.io`,
                `https://${repoOwner}.github.io/${repoName}`,
                `https://${repoName}.${repoOwner}.github.io`
            ];

            for (const url of possibleUrls) {
                try {
                    await new Promise((resolve, reject) => {
                        GM_xmlhttpRequest({
                            method: 'HEAD',
                            url: url,
                            onload: (response) => {
                                if (response.status < 400) {
                                    resolve(url);
                                } else {
                                    reject(new Error(`HTTP ${response.status}`));
                                }
                            },
                            onerror: reject
                        });
                    });
                    return url;
                } catch (e) {
                    continue;
                }
            }

            try {
                const settingsHtml = await this.makeRequest(`https://github.com/${repoOwner}/${repoName}/settings/pages`);
                
                if (settingsHtml.includes('is published') || 
                    settingsHtml.includes('is enrolled') ||
                    settingsHtml.includes('CNAME') ||
                    settingsHtml.includes('github-pages')) {
                    
                    const urlMatch = settingsHtml.match(/(https?:\/\/[^\s"']+\.github\.io[^\s"']*)/);
                    if (urlMatch) {
                        return urlMatch[0];
                    }
                    
                    return `https://${repoOwner}.github.io/${repoName}`;
                }
            } catch (e) {
                // 忽略错误
            }

            try {
                const repoInfo = await this.makeRequest(`https://api.github.com/repos/${repoOwner}/${repoName}`);
                const repoData = JSON.parse(repoInfo);
                
                if (repoData.has_pages) {
                    return `https://${repoOwner}.github.io/${repoName}`;
                }
                
            } catch (e) {
                // 忽略错误
            }

        } catch (error) {
            // 忽略错误
        }
        return null;
    },

    async checkDeployment(repoOwner, repoName) {
        try {
            const githubPagesUrl = await this.checkGitHubPages(repoOwner, repoName);
            if (githubPagesUrl) {
                return githubPagesUrl;
            }

            try {
                const readmeUrls = [
                    `https://raw.githubusercontent.com/${repoOwner}/${repoName}/main/README.md`,
                    `https://raw.githubusercontent.com/${repoOwner}/${repoName}/master/README.md`,
                    `https://raw.githubusercontent.com/${repoOwner}/${repoName}/HEAD/README.md`
                ];

                for (const readmeUrl of readmeUrls) {
                    try {
                        const readmeText = await this.makeRequest(readmeUrl);
                        
                        const urlRegex = /(?:https?:\/\/)(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(?:\/[^\s\)\]>]*)?/g;
                        const urls = readmeText.match(urlRegex) || [];
                        
                        const validDeploymentUrls = [];
                        
                        for (const url of urls) {
                            if (!this.isValidWebsiteUrl(url)) {
                                continue;
                            }
                            
                            const isKnownPlatform = Object.keys(this.CONFIG.deploymentKeywords).some(keyword => 
                                url.includes(keyword)
                            );
                            
                            if (isKnownPlatform) {
                                validDeploymentUrls.push(url);
                            }
                        }
                        
                        if (validDeploymentUrls.length > 0) {
                            return validDeploymentUrls[0];
                        }
                    } catch (e) {
                        continue;
                    }
                }
            } catch (e) {
                // 忽略错误
            }

            try {
                const packageJsonUrls = [
                    `https://raw.githubusercontent.com/${repoOwner}/${repoName}/main/package.json`,
                    `https://raw.githubusercontent.com/${repoOwner}/${repoName}/master/package.json`
                ];

                for (const packageUrl of packageJsonUrls) {
                    try {
                        const packageText = await this.makeRequest(packageUrl);
                        const packageData = JSON.parse(packageText);
                        
                        if (packageData.homepage && 
                            typeof packageData.homepage === 'string' &&
                            packageData.homepage.startsWith('http')) {
                            
                            const homepage = packageData.homepage;
                            if (this.isValidWebsiteUrl(homepage)) {
                                return homepage;
                            }
                        }
                    } catch (e) {
                        continue;
                    }
                }
            } catch (e) {
                // 忽略错误
            }

        } catch (error) {
            // 忽略错误
        }
        return null;
    },

    async checkReleases(repoOwner, repoName) {
        try {
            const releasesData = await this.makeRequest(`https://api.github.com/repos/${repoOwner}/${repoName}/releases`);
            const releases = JSON.parse(releasesData);
            return releases.length > 0;
        } catch (e) {
            return false;
        }
    },

    createTag(text, href, type) {
        const tag = document.createElement('a');
        tag.className = `github-search-tag github-search-tag-${type}`;
        
        const iconSpan = document.createElement('span');
        iconSpan.innerHTML = type === 'deployment' ? this.ICONS.deployment : this.ICONS.releases;
        iconSpan.style.cssText = 'display: inline-flex; align-items: center; margin-right: 4px;';
        
        const textSpan = document.createElement('span');
        textSpan.textContent = text;
        
        tag.appendChild(iconSpan);
        tag.appendChild(textSpan);
        
        tag.href = href;
        tag.target = '_blank';
        tag.rel = 'noopener noreferrer';
        
        return tag;
    },

    findBestPosition(repoItem) {
        const positions = [
            () => {
                const description = repoItem.querySelector('[class*="description"], .jsbtiO');
                if (description) {
                    const container = document.createElement('div');
                    container.className = 'github-tags-container';
                    description.parentNode.insertBefore(container, description.nextSibling);
                    return container;
                }
                return null;
            },
            () => {
                const metadata = repoItem.querySelector('[class*="metadata"], .dmuROe, .gbntE');
                if (metadata) {
                    const container = document.createElement('div');
                    container.className = 'github-tags-container';
                    metadata.appendChild(container);
                    return container;
                }
                return null;
            },
            () => {
                const container = document.createElement('div');
                container.className = 'github-tags-container';
                repoItem.appendChild(container);
                return container;
            },
            () => {
                const repoLink = repoItem.querySelector('a[href*="/"][href*="/"]:first-child');
                if (repoLink && repoLink.parentNode) {
                    const container = document.createElement('div');
                    container.className = 'github-tags-container';
                    repoLink.parentNode.insertBefore(container, repoLink.nextSibling);
                    return container;
                }
                return null;
            }
        ];

        for (const positionFinder of positions) {
            try {
                const container = positionFinder();
                if (container) {
                    return container;
                }
            } catch (e) {
                continue;
            }
        }

        return null;
    },

    async processRepo(repoItem) {
        const repoLink = repoItem.querySelector('a[href*="/"][href*="/"]');
        if (!repoLink) return;

        const href = repoLink.getAttribute('href');
        const match = href.match(/\/([^\/]+)\/([^\/]+)$/);
        if (!match) return;

        const [_, repoOwner, repoName] = match;
        const repoId = `${repoOwner}/${repoName}`;

        if (this.processedRepos.has(repoId) || repoItem.dataset.tagsProcessed) {
            return;
        }

        this.processedRepos.add(repoId);
        repoItem.dataset.tagsProcessed = 'true';

        const tagsContainer = this.findBestPosition(repoItem);
        if (!tagsContainer) return;

        const loadingTag = document.createElement('span');
        loadingTag.innerHTML = '<span style="display:inline-flex;align-items:center;margin-right:4px;">⏳</span>检查中...';
        loadingTag.style.cssText = 'font-size: 11px; color: #6a737d; margin-left: 8px; display: inline-flex; align-items: center;';
        tagsContainer.appendChild(loadingTag);

        try {
            const [deploymentUrl, hasReleases] = await Promise.all([
                this.checkDeployment(repoOwner, repoName),
                this.checkReleases(repoOwner, repoName)
            ]);

            tagsContainer.removeChild(loadingTag);

            if (deploymentUrl) {
                const deploymentTag = this.createTag('访问网站', deploymentUrl, 'deployment');
                tagsContainer.appendChild(deploymentTag);
            }

            if (hasReleases) {
                const releasesUrl = `https://github.com/${repoOwner}/${repoName}/releases`;
                const releasesTag = this.createTag('查看版本', releasesUrl, 'releases');
                tagsContainer.appendChild(releasesTag);
            }

            if (tagsContainer.children.length === 0) {
                tagsContainer.remove();
            }

        } catch (error) {
            if (loadingTag.parentNode === tagsContainer) {
                tagsContainer.removeChild(loadingTag);
            }
        }
    },

    findRepoItems() {
        const selectors = [
            '.fXzjPH',
            '[data-testid="repository-card"]',
            '.Box-row',
            '.repo-list-item'
        ];

        for (const selector of selectors) {
            const items = document.querySelectorAll(selector);
            if (items.length > 0) {
                return Array.from(items);
            }
        }

        const repoLinks = document.querySelectorAll('a[href*="/"][href*="/"]');
        return Array.from(repoLinks)
            .filter(link => {
                const href = link.getAttribute('href');
                return href.match(/^\/[^\/]+\/[^\/]+$/);
            })
            .map(link => link.closest('div, article, li, .Box, .fXzjPH') || link.parentElement)
            .filter(item => item && item.querySelector('a[href*="/"][href*="/"]'));
    },

    processVisibleRepos() {
        const repoItems = this.findRepoItems();
        repoItems.forEach(repoItem => {
            if (!repoItem.dataset.tagsProcessed) {
                this.processRepo(repoItem);
            }
        });
    },

    startGitHubProcessing() {
        let processedCount = 0;
        
        const interval = setInterval(() => {
            const currentCount = this.findRepoItems().length;
            
            if (currentCount > 0) {
                this.processVisibleRepos();
                processedCount++;
                
                if (processedCount >= this.CONFIG.maxRetries || 
                    this.findRepoItems().every(item => item.dataset.tagsProcessed)) {
                    clearInterval(interval);
                }
            }
        }, this.CONFIG.checkInterval);
    },

    initGitHubObserver() {
        const observer = new MutationObserver((mutations) => {
            let shouldProcess = false;
            
            mutations.forEach((mutation) => {
                if (mutation.addedNodes.length > 0) {
                    mutation.addedNodes.forEach((node) => {
                        if (node.nodeType === 1) {
                            if (node.querySelector && (
                                node.querySelector('.fXzjPH') ||
                                node.querySelector('[data-testid="repository-card"]') ||
                                node.querySelector('a[href*="/"][href*="/"]')
                            )) {
                                shouldProcess = true;
                            }
                            
                            if (node.matches && (
                                node.matches('.fXzjPH') ||
                                node.matches('[data-testid="repository-card"]') ||
                                (node.querySelector && node.querySelector('a[href*="/"][href*="/"]'))
                            )) {
                                shouldProcess = true;
                            }
                        }
                    });
                }
            });
            
            if (shouldProcess) {
                setTimeout(() => this.processVisibleRepos(), 500);
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });

        return observer;
    }
};

            const punkDeafultMark = "Bing-Google-Baidu-MetaSo-YandexSearch-Bilibili-ApkPure-Quark-Zhihu";
            const defaultSearchEngines = [{
                    name: "谷歌",
                    searchUrl: "https://www.google.com/search?q={keyword}",
                    searchkeyName: ["q"],
                    matchUrl: /google\.com.*?search.*?q=/g,
                    mark: "Google",
                    svgCode: `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="240px" height="149px" viewBox="0 0 240 149" enable-background="new 0 0 240 149" xml:space="preserve">  <image id="image0" width="240" height="149" x="0" y="0"
    xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAACVCAYAAABmbHd7AAAAIGNIUk0AAHomAACAhAAA+gAAAIDo
AAB1MAAA6mAAADqYAAAXcJy6UTwAAAAGYktHRAD/AP8A/6C9p5MAAD4nSURBVHja7Z13mBbV2f+/
9zkz87TthaUvHQRRKUoTBUVRIxo0ojHEmkhMMYkxmuQ1v3djjCmaaHxjIpYYSywbxRrsIIh06b0t
fZftu88+bWbOuX9/zLMLKiDsLhDNfLyW60J2Zu5z5txzzrnbAXx8fHx8fHx8fHx8fHx8fHx8fHx8
fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8
fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8
fHx8fHx8fHx8fHx8fHx8fHx8fHx8fI43dKIFODRMAFDCoIHrYHzy39ZhXWWlLhk/TqWbwCdaWh+f
E8F/jAJPf2X+4HDBwBGNycDweMLoVt/odKyoBzlM4YAlu2hWiGsBgzQyLIKAqtWQNbmZpAZ0REWB
lajMj4gFtbU7Fl941uDV8JX6v5YZH83oYHUtzGhUqRgACGVnsEHdDAAGDBgA8qErRvU4fyMRfaHH
yQlV4Fdmr5tQqbtOqKgV45pc65TyKgQbE4qiCQexRAqOS1AsAdZQLKCgocGASEtOgNASASmQm22i
Qya4byfpdu/IG/pnpz6SbtMHyz5a+cott1yUOtEd7XPseXT5y+NUKOeevfHqYTanpLA0BAGQgA1N
ggmSCQSJrLjJObacftOYy793ouVuC8ddgUtL54cy+/e5eue+jEtXbNETN1RJK5oEmhIaghlSMkxD
QUoFQwCSAWKGZsBhARcCDjNsRyHpMlxlwNUGSEgIMETARjBA6JYr0bPQ4DHF1pqTOtjPbVg/+7Eb
plxUdaI73OfY8M9NH054q3bn35fs3NatyYlDsw2GA4YCwfvmG2AEDIGcQBYGGB0x7qQxa3Y+8/qQ
kpIS90TL31qOmwIzs1i+2578zlLcPns9n17ZqMmxNZgJghhmQCEjg1GQAc4Ikw4GLdcgqgoyGk0G
XK3ggilOsnhfgs2GJMmaKItkDEgmNBxmuKyhGWCtYJH3MQgHGH27RjChh9g7opt+etOmuc/deNUF
K090x/u0H2+tnZ83o3zliqXR+m7VqSY4KomkE4OrHAAaYA0IwJKEMJnoHMjGZQPPr46vL5v8qynT
5p1o+dvCcVHghetqRi7fEfz584vik8obDNJswGQBGdAwpUL3fM29ugincx7e710k/oqEvdXlxPa6
1fvc8vJh6sB7FZ+93RJurANn5/UwIrkXbttIN765MZrXZFuyIQbEUhqO0oBiEAiCCFIwRFCiV76J
iweYTWf25fv3ls1/8OpJ46tP9AvwaTvPLXhz3OamxjcWO5sjCdNETbwR+xprEXUSgNZgYhABlhTI
IAtju5y6e+AeeeH/XHPzmhMte1s5pgo8e/Zso1YO+urLa0NPrNypMqJxgiYNU0qEGOic7fKQAaLh
5M7q11u2LXvxV9eet/Non/HMzGeyRpw6ufecdcm7Z26KXbCuMiDqowaSKYLSAIEBZkhBsIRAVkhj
cPcgX3QKFt14Vnj0F92I4eNROru0oxNBx0rTxM5Ew4Nv7lw+dk+8AVppgDy7SUBK5AYi+OaA8Q+W
nPa1H55omdsDo+23ODjzNmzI3LSry33Pzkt+e0cTKOkwmAQCpoFQkDAox3G/89WMhxbMWfibb449
q9V706kXTW0EsHz69Olf/eOkq86Zvzn5y3+sSIxZXRmA0ySgNABoQDMcSUi6QeysIlpcluq3e/Zi
CeALu//x2c+U8VMqAFQAwBMr3tr6LhljGQQGg5lBTGBIGJDIgJk80fK2F+JY3PSt+WvzFm/t9uIj
c91vb60zKJZ04SpvOZsddjFukNx22+TQReN6mT/+xQ2tV94DmTZtmtOze/bbZs2cC/5wccZN151q
2jkRwCINIgEhBEwYCJiETrkpPWFE8M8lJeN95f0SEkQGDAqBGGDWYBC09w0HCQMRoU+0iO1Guyvw
zJmbA1uaekx/an7qvD1RorgDaAiYUiIrW+HiEcHVPdwlk07vFXz3WCxfp0yZ0jSkf86j4zPLrpzY
PxILhw1Y0kBQmoiETBR3gp56VsZdVwwI/vr4dLHP8UbBguL9Q1szgwFoFiAChD5mC8/jTrsqMDOL
vVaXPz05L/m1yihRyvH0U0pCZpgwflhoa075rBtum3rWumPdsImThrxyeld5X25WkCMBiYyghd6F
0N88y7pvylDjLn/v++XFVRqaNVgD3PyWicAMeF7gY7LwPCG066fotUX1v/rHAnxnb6OA4xIgvAeE
TMaIvoj1c1bc9IMbv7L0uLVO6FX5GQCxhe55Qk+7IHDXBX2Er7xfchQzGAoQ3v7Xs2N6kT+sBcSX
R3/bT4HfXrbzrIc/cG7ZUWcJ22VAMIQgmDDQvTDFV5+OOyYMHDHr+DZPoUfQRu9OIfv8fvqeC/r4
M+9/A0waCuztf9N7YEC3hM1b/zkRxG2mXb5FJVwiPtyUfc+afVZWytHwwpA1DCEQziZcMiz4yrzS
+x893o1LJmsWDe9pvlscW/Cty4cFfuUr738HBAEB9txHzSHx3PxvgOsvoT/JGSt/eufdm53R8aQG
M4OVhpQSAVOgQ6Gth3bEn88qKbGPd+NuntRtD4CJx/u5PicWAc9wBfbmXuYDlJnwpVpCt7kppe++
m/3eSvt75Q0gR2mwYgAEKQRCEWBET9684t2nF57ohvr890CC0ovk9B74AJgBW3953EhtnoGzM0eV
zNtkFyZTDJ1ePZMgBKSBwoiLoV3lr6+adIufDeRz3GBK/5EOwtLwIvKaf75MtGkGfmbmzKz3NzlT
q+NErqvAYEAC0iAEAhIDchwnM771Cx0s7vPFg2AAullV00vnA/RW6S+PErdpBu5QOOabiz9Gfkop
aGIweUsXw5AIhIDiQr3kotFDjjq++YvK2tLSjN45oU6GKfqDKQ9QgHa1JmxyTL1r/frq6uHTpjnH
Xa7ZD2X06h8ZGqSaHkjFsqBjWQgCoCwHIn8fYG7etqtqXe/hP2s4HvI89fbKSH7X7n2TKjwwpY18
lXIztaPhuhqGAVjp33O1gtYaGhpCCBimCW0IJFMaDXEB4XIqP9/9x7UjsmoOvD9zOuyq2Z7agqfU
JNrHCr21tDS7W8es3twU66VVMgxoCDPYABneVhav2D7g0hujx7ov26TAG6ucqXubLHK19mZfDUAA
0hAIhRidc8LPf5ktvwzQnpceHdHBCA/R8eQwVVP5teS26ohOxgztKM8XSQIiEmZlBe3inMyN0Zf+
8ZrIzV2yviI2f/jVVx+zbKiytY+c1qlInGmyewonGydz3dZ8120iqHpAOYDWIJMBIwiE8rhHbqBe
7bjtMRHs/+666uw5gwZNaVej47Ovzy7I6Tbk3Kqa0JCycnx9Thm6xlmIhNaIswBYwATAij0DlNZg
mCBWYGIYaWcQtAvDEIiYjA5hGw47nQH85MBnUXPFB9qvv8xIr629+OjWsuC5v/UYnJF1FjfaExPV
lZOqt6zPYFbEtg1SDoRhQIYzdIegGY399TfPiZzcj9eHg/OHfvWGYxK81GoFLl271pr/seyddFyv
w8nrLUGAFEC2keIOAXf1sRD6RDP7iSeCZ4Rj5zTEktfLLdsn11TXSxFPgJMpMHsRPxoKxBrMChqa
lNYBJXFKPZmnZOTmcZ+e3ffabz9/1+LdsefOvLF9vtTMTNGtD46yqH4KORun0c66IEerQPEGaFeB
WIAtDRYKIAek3bSCSBISuSwjP3VDG3/SJ7t4hVvzyENvzt/7/KRJJfG2yPTYW/Pzencf+vX5G+nW
NXOoZ109yLEBloAjGE0KaLQVlNZQmsHsgl0GNIMMhoCAIRgBSTCEBDFBGkB+hBG0hB2q37Tk08+0
lYt09EZLKBYBacXlVnmB5zx6b89Tirtcl9q859ba5ZsjKmGTm0hCpsM0wTaknQQ7NrSAIKGzpWl9
B5EMFHTu0tQ04x+/WlCVevS8adPadZXTagUuTHTLWr3HzdaKm6vbeEYCIhiCkBmELow4Fe0p7H8C
u15+8oxQtOGxmhWbTtYNjQTbhTYMmMEwggX50KYBlxgCLtxkClxbB2qKg5UDTrkQugnxhnpK7S3r
Et24/uFBw0bdsuO1Z79TfMnVbbIVVFTM6BDf+ee7ZN3Kb8lEuUS8AY4mAAYolAmIEFzFYKQgKAWp
4zA5Aa1tQKWgXQdAPTheJdCwc6hbv/GxC4ad8s3lC/9805CRP9zcGpneXLRv4uLdmX/758upHk1x
i4KGRE4m0LUIsEwo24LTqBAorxUUbdRoiLtI2Rqu1t5i1wUMQ8MggmkB2SEXwrKQJYCu3a1kNse+
d8+VY57/7JMZ1Fx2CWnFTSszM4GPwghdWloqx6nayW5l7d9rZ87JNBpjQMACMiIIdSgCImHtwnU4
FbfsylpCXR0olQQlU9DxBNBYD1WzL2PXvt1/OGnY6dcuee5v15z+9ZuXt9d4bLUCV7iBcY0pYWqd
AkAQOu1jA0ESIzNIrhkWte0l6ImGmUXV609fk1q94f+adu3JQCIBNgkUCiO7Xx9lFnd92zUDrynB
KxRiMRsO4inVO0O5wzP2pH7Q8PGibGgNdhywVtBJQFWUU+2c9wZZPfvNir8342ehcyc/QERH7eOo
3/nw8HDNvBe4anVPJGsJzFAsIXJ7wezRN2bbGf9qSlpvh4g2KNiFcTbzs3KdYo5XX8fb5g2gZB2g
EwCnICgBdpugaxvISdWdPbj70Hnrl9975UlDfvrB0chUOqvi6kcWZ/59R1UyoLRAkBSKClyceRJv
7RJK/iaChrls27FQdqgokNt59NKdxk1vrNSnbt2jKa4ISnkTglYASUYkJDFyECEYFtsKs4JvlG9d
UPrbqWd9dLBnO66T3gd/5i2CmI94D7z09enhTrX7ftewbvP3qLJGSNLQZgBGz27KGtT33aSiF+xA
YCGMWNRmM79LRu5ItWXbTbULFg3V1RUkbRusFSiRBO1OUL3tnNxxxOkzFz3/8AUjrvpOu1SFabUC
70qJqXFXETcHuzCByJuBSQBZIbi1u4q+FAq8dOnScM2rLzwV+2jBZK6tFcK2AcNCRrdibQ05+cFk
RsY//m/uqtUlJSWfHjJrALz64b+ff3pwn353Vb8240pdVQEkFZg02HYg6mvhblxp7o7W3ptryAhz
yW+ISo5YiaO7Hr88WPfRM9i3IqjtKEhIaJkBmdWxknuP+3//fnPtO5dcc3fZwa59+eX7p39l9LQp
tGfeXbpibhG0A7ANaBuCUuAmm1Jbkh36Fsfe3Lr699/oPfiOGUci06tLKi6ZPsf825aaVEBAIWAS
8rNTfN6QwH2bFj77hx/dNu3AvX8FgJVPPPHEEz8ce+mtb62R/2/mCicQSxIUA6Q0HAeIJhSSThin
ZCTv/uaozCcO93xhiLT94VO73fRErJTC57H09dfD3cq3PFe3fPkkrm8gIRgyOweh4i5rI+dd8P2M
00bO+ZR9Zw+AVa8+/vvnhow7c1p87Yq71YZ1ARFXYFeBHQWU70X1vAUdu5498omn7r1t7DU/vS/W
1rHZajfSzqgqcF0FbnH+egEczSuXsPXliDctLS2VxXvLXoi9/85lurJCcDIGbQCBrh3ceO/eP7l/
2bafFJ1z2cqDKG8LY79y1aZ3Gp1vFFx5zU+tjl1S2hQQzGDlQjsOnGgTxK5tomHmayXJ9wfeeaSy
Ve546opg3YLnee9HQe1UQYiEZ0Ts0HXvyn2FV1mFN0+/5Jq/lB3q+smTf1xvFV33yN6Mr46W/W8o
g5Hl+QGhwewCHIOw98HetThYHFj33Ja1f77g82SaOX/zkFeXBv6xfR9nqZRX8yxsOTilt/Fs+d6Z
d/7xk8rbwvXXX5+8eEjePUONj39+4UlIRQIMQwuwBmyX0RhlzN9gI5oK3/Pkk6VdDieDct30vjTt
Pto/ywDMEHT4YV9aWiq7NFTe27BowSVcVUlwEhCWRGbvzqtXUXBy5pBRHxzKOHvpjXdEu19x030F
51xyJXfq6ArD8OxDWkPYKVjV+1C3eMlpl3Tv9odWDMfP0DoFZqaaeqcnK6S/cvu/dF43MQR/OYzP
53TMvzn27syv6Op9RMk4WDHcrGw2Th78WPHUaQ8cTnEPZMqUKSrn7PPu6/j165/UubnMhuGF2GsF
7drgWBxUtl3UL158Z9m/n7z08+63c+drpxfYax5B+VxDu/UgJMEEyIIuiSXlGTcPv/Tvs4+0jcX9
Lt62V489D50vjAorDBYmvGJwLoiToFQ9nN1LrZ5ZG5/dsOHRnoe6z+zZs43l1UX/WLJT5SZdhmKG
yYT8kOMO7+H+tmTK51u2b/j6OfdfNdx6smuWy4YJKCJoFrAVUF3n4MUlqY45AyZ843D3IIi00Qr7
/2yxZxH052yCz87P+nbT/DnfoWg9SCcBIgS7d1Vy6Km3nH/7L4/IHjCrovGNrKGj3+VgACxE2kuj
QK4Dqqqhui07rnv1r7845Ujf0aFo9QzcEHeJiVo6BwA0NVvqBVz3ix+utmnW2yOib7/+R11RTm4i
Csdx4AiB8OBhK99Yv/fHrbnnmxuX3dF58pVrVDgENrzZDqzArgsk40iuW2tm7dk9/aX7f9HpUPdY
uvT1cGfa9aDe9WaOdmoBSkErDTdQBLvjuMdGXfjMa0crV/e+Y7ZS16k/U5GTFBkWmotvEzSIk0Cq
Eu6ORbl98huemj275KBbr1h46M3vr1GDkw7gsgagYBiMPgWqsodbtulIZYnvW3Drmd3cpZEgQ0oB
Td7YshVhd63Cwp36f0oefHjgoa5XSnkDMW0h9sbn/ilGHmYGXvLGjJPt+XP+IOtqBBwbpBkUshAY
PPThnHFXzTnSNkyZMkUFCjo+zOEsQEivKgwJCK1hpVLQe3aFz4pYtx3te/o0rVZgKQAphGfVO2AO
Zg2QUkg6Gh06rPvCho2Xlk7Pzijb9i976wbLTTZBuwpaMUROlg4MOuV/ry8paVVdpcnX/7h+ixO+
Ldyzd0pY0us57aW9uY4LN9qA+hXLO0ws7nzIlzu4Z/jnvOOlEdreB5Dt2R4EAUVD9zz52p4/tbbN
Zu7M6bLblI9IZjCEATS/V61AOgWOVsLdOXvMmaf2HnWw61eWNV1TERVkK522HzG0aaBHB943bNiw
Iy5fNHHixNj5g7Of6Jar2BIEIgECAezC0RrLt+ms3B5nfPOQ7WiOhPYyGdASiZWegRmHnlx6uvbP
7E3rMnUyDtIKzIDskMfUOf+to41pUIwmYVggYQAkASkhDQNSChiOAiWcDq19V820WsEEGxBCQINa
Kh8wey9cKUZTUgeEyO7RVgFPFBO79L82sXB2V5GIeoEPrAGhEeleXDVj1YY323Lv4ZMnvZN38rAX
dTAIalnFaGjtKbFdUUWxXdXfeOmvJb0+fe3mtbMGUcU736P4RoKb9GZICJAZQSCU89rNNz+8vbVy
EZXoanvwdymrny2kAAmASIOEBmkN4jjQuI0QXX9baWmpPPDa2WVlwe113CPpuFDpMEZmCdMACsKh
qqMd/E2VK54f1lmWhUPUkj3EIGjFqIuZ0FmDhh7uevYyWpv/tv8flMahJuC3nv3HoNTSpZdTrAlw
bEApaNYwiotTL340d/HRyL/ouceHx7ZveYRiNggSZJigYAAcDkEWFnFGj947tir5UGvfVTOtU2AC
QhSIeYYrDaZ03CmTNwgVI2mziLpU0FYBTwTz55eGYvPn30m1VUSuAygN1hrCMJCdGdo4rR3CITeF
Q3/J7D3AYSlayr2ANVgzOGWjYcOaonMKIp859qNH7u7JuvyNXHbjAFxvbAoJCmTCpkibo3069T1j
rc46eZW0LHgjPa0JxAA7gBuFbthw8YQRez85C9cXDtjVIPO10gC8yDwmglAaViucHRdfPLauZwG9
l5shYIjmqCoBVwvEHaCikc5+/NVXOx/sWik8+0JLxEbzOprTK+tDFCIdXFg0yd6yKajtBLRywEpD
S0JOdtbqm396X+XnyTzv8cczK5559H/2/um3H3XdXDYPy9f3Jq1BgTBkfgEiJw9Wnc45Z23+xEt/
tyGvwxnDvnfX6219X610IxH37uTsXL2d+4DSoWnNS2kmuK5GZdQQiSanL4D5bRXyeHOSUzSgbv2L
+dpxWqKCQAwRNNEE3WbTPwAMu+SqhfWPPTAjtnrZlcrVgPaSQUhrMBS4vhFcGT3j09cl97w8PODU
Atr1VgUSXtRgMBMIFta0QpTPILtMuUvVfPgKkmukFzwMeHt1BukEkNgpMoqigwG0BJ9UJHhSwjVI
pQ9CgAC01HAUwXVVETPT0c7CXfLVkryIvKmynqBsb60BIthKYF+UrTH9e/cCsPfT17VMvHp/JFbL
h4g1YBx83nK3lA3Q8QbAcTzjLBGEIIQE7cVhWPTEg2P7ZRdcF9uxa1xqb2UvI1oPN5kEWEPmFHBW
n06xcFGHdzc2xh/qMu2OWQS0m4W31UvoXoW6wTKRtjY3R7l4fea6jIYYUB8TV7aXoMeTprLVX9WN
9YJdJ22x9AIAhDSAvOx2e05dIDJLZGZ6921+q6xBrCDsFOz6ppGznrp3RMvvlz10mpGsPR9IgtkF
kRfCylIAUgKwylotzAHIzNdnUqT3RhgBACI9gylv8GsHwq6HcMXtmzfPDDRfE7UxXIn0GACBNYE0
oFljT5MKohWHCHTMxYedMhw3ZEoQpW3LRGAmmFKBVEbhwa4ziLw98ydm4PQPwYs++xTMTLqhbqDW
KbB2wUqBoSGkhI7Xf+b3Fz7zYFbV849NS/zzsVk9qmKzqt778IamVWt72TVVUA4j1K2H7njhuC05
37j8viUy1Cty9Q8uG/qdO95vT+UF2hDIkW3wuyETXyWAiPebsZgFXM1IJl1sqk6eNf3ZZwumHcOg
/ebOX7a9cURjjE622QqnbLVNEyehXBjSgAEXBlxIAAqANAAFAwnmzq4jG5uiDWu+Ob7bFgCYPfuJ
IK2r+JZWNli5AHM6n9TDNWVrxfwMmUPPWFm1bB7L+gZihzzlhTfooRWc+mpj6Ii+4wEsAoAMvfsS
1o2h5iVtS8FFZpA0oAPBRHvIRVSi9bofbIARHKicGIgpPa2mt0ypJDixs1uR7NsDwEYASNmuRHqC
1Zq9mUEztJLYVoPify1YEABwVPI1la/ZmhkeVG4YqpsggmZPiUX65rF4w0FdOgebgb31oU4n+H92
3qpft+JUUbVrKJTy7BEgkNaA1rDtQJfmaP/NTz4+qjA7eJlTVXNJcte2fo37apBqioIJsLIzOatX
pwRZwY+qs4se+OClmW9P+de/Pj9qpA20WoED2v5XTkQ9ICRb7HpV/4i8wa40kFTA6r1u5JrRJw0B
8O6xasBLc2Odfv+m+9D2faFLYkmWlF5WsjbBZHkGNhGAQQxIggQAYmi2ASgUWjb6dg3vmT9/V9/R
o7slhohIp1htZRG0Dei0hRgACQFWGpZuv2zADVuWruta1LnO3r0jD0m0+C69GsYabiIOt6apJWiB
ko2ngZMHlIjxlIqZoQkwmLsDaJcQvYQ4aV3AmnsZkvXe7Nu8RGANuAoU2yPCBU0DkFZgUna9IRWA
/Z4J5QKOrVFeJ8wIF/QHsOJoZBg/frx758u1c4ShpxLS1mgvvBuhAO1YtPz9rQe9MG314vQHhdJ6
TJyemQ+CrNw7XCWaJNjbvxMAVgrCdqAb4kMSD/7h6QaXO8Z37BhXvq9S6kQchpDQhkC4uIvOPrXP
Pl1Y9PCSFSv+csEPfnbcIhBbrcD5dkOsMGy4AdOwEnb6q5UeV4oYCUdge00YLuVNxjFS4Cdfr+7y
743WK6u3ucMaYopsnfZbSg3FjleNXykouFBagcjLBTUlwbQIESuAvkUSgwaHapaWL/I+3PUNfRBr
Ep5rJ11PKZ1Hyq4LqtnXbvKfeemN0b0P/vp91zKv0OmMEOa0QmoNJ5mCRVS8/wq7MysbzBrkFTmG
p1UKrFIgpDLaSzbOPW2ebujMoO1pC5K3DiH2jEDkRAmivmUJXZBlLJNwvkHpvkonmCLpAJVRIaJO
/mQcpQIDQOcgJbVreO9VeFWdQwEgKxL44O5bbz3ojK6gANIQvF+O/TOwBozPDnudSJjMCqzT6YwM
ryxtKoGqtStlZmHXb9gNcUSb4hABCyIrA6Hirm7mgOI5Ki//F6XrX18+7cpHjnuud6v3wKNGdU32
yZdbMkImZNqKygwoaLjaO7u3qomwaJe49qEnnuh4LIRPqKw7aiqd4VKAMi1GTkAhO8jINhQyTI2Q
cAAwHMVQ3sQBVzEcBpSrETYaMfZUc/fexR9ccMtF6UPAFcCuQ6x1et/HLS4eZTsIspnVnm2gcGS9
MK20n/OAiDaloFz3kztHpUDsekK2+Da95HV2Y9C6tt3KBEesToso0D2KtJurOeUs7UoFawdQ+/Wn
OE/MyLZIeQrujQfFgM2EhgRodQXfct/0Z4/aK2E71NVWnqWepAQJiQ7ZkovkrkO6dVrqYdH+II7m
GZjZO2bl07ja+0CptE+0+UwlrRS4sR6N+/agLmXD7NETOaNPr8o/Z9RvrREjh/x5xfbzC86atHja
tOOvvEAbZmAi4hnzqt7JCeKUKgHYLUYYb2HnaEbUNfD+ejv864u/MhHAk+0tfDCjduWIATlN1TEh
tDAgoCFJw5QG2NRi595k4OOtICfhHXLmBU14PyDGsJ4iHqxdfvat0y4ob76nkoZX1Z/TStL88jXD
iccRQ6Rbayyqh0LkF8QoHS/bEr8LzxqowbA/VUKRNQHagHcmG3sKrFywHQOSdf3brXNzejToXcE9
BCML+03RaNZiQUgbzjySFSt2n9b11L0r97jdEAMUexO3y0DUFpi/TeXcMvbMHwL45ZGK8M68eZ3f
2iHPUsr14iAEwzIVRnQTH25a+/ohExpYu+mKlAwi7fUZ7VdKcZCylEoIMB0QuaXTKYnCC3c1+3bh
wgnnLXJll7ve+mjuvBu/d8Mxr7ZxJLQpUmpAZ+MvHcLReDDQnMKw/xOtNSOpNSoagXnbrTsefOaZ
dp25AOC6CR0f76O25t84zMz99hAj98YhVu51pwVzTxscyh0SWdXlmrP4voJMsKB0jCenl3daIGAR
RvbN2PXdy8du+8RNjQCE9CJ/WpbQ7O2FyVaIVZRlr3rnvnB7tUEGrCgZprfr4v2Z1UQEwzTAAau+
5ZdNw1sGtmQcNpeNUUCqEezE89pLLiJiwYkUhEzvG5tDKwEiAVAAsPav2MePH++OGRickxEEhBTQ
JKFZeDEBLmFnPeGDstDtD5d+NOpIZRBZJ0/6uMwOEzQsYgQsRo/8JM7oqf/wf7ccplCi2p/Ef2CQ
vme0J8D97LAP5RUkEbCg06tJrTW09mw6mgjhbsXVm5v2Te5x5qg3b7zjjv8I5QXaqMAn9czZeXoP
uTpoEgwh9seeau9L5yiNWJLx/trEgAEDvnr9sWjAlCmD7EGD6BM/UwaRPeWC0bVOVC/MCmkIov0W
orSiBC2CqeKfmUVFRqSazICG9ALQNbfY170q/zV1mVaS2q3WtJbYDsMEHRjy16wylgUnENrV8stW
QInmIIVm2JuF2XWgU00T3n773kh7ySYCmSBhAWR4A589RSaSYApxQoc+ebJk3YY7z+mpG42QCZIG
FIx0XIBCU4Lx3kZYsZxhf/vDE6Wfu6V6e+XKyAfrkt+sTzIEE0wBdAg7uHxU8JGlr9779uf06ieC
N5pXNc3v8WCDvrwhuiCYU5DSIM8Qy4BiDaW8OPV4RWU+JRPd2qtv2+0dteViIuILh2T/pjDTcS2D
QCRbbPgK3gHbSUdjV62mdzbYv3vzveWnH8/GKQAuU7qcaNoqyeRZI4WEJT/rD6yOpXaLjEybhASI
PAXWDK0ZTIxYbYMoSoW+edTCHApDgqW3k2muPS7Js7ia2dlIZuRv3N+gwGqW5v6phZvP/tGAS6DY
jj6n9pGfm8l0xIjIAb7UZvMUgaQJsopUbV1wx4G/fu6YoTu+dW7m/T1ybW2ELAgDYAEwEZQrUFsH
PPNR8tSC4otfefS1RYfManrjw1W568s6P/b+Oms0uRJBk9EpV+GaCZF/xjcuvqOkpOSwcdUEecCh
DM0lb9KrQyJo97OX9584aQNpzBeG3P+dZ4BdBrsOkjvKxFAZvLzd+ra9XlFbb/DyU/f++8rR1vJI
mGGS5/TX6X2mZoLtAvUJwlvrk8Eq2f2hkpKSdlt+fh62Ul5ZGf7ESgqaASgGK/5Mhkyfi6ZUhzt3
ncWG0bKnb76QGJCxJBoqaodNnz7dbA8ZpaZMr47W/mWfIAFBBqzcvD1bd+97teWXiy6ew1TAzTWP
vR/PWkTsQER3U3YkObjdOlDHIFy1f19O6SW+EQAind964tnN2z99ycDu4bvuPlc8VpxrczhswZAC
TN6S2maBfZUO/vK+PmOfPXTlC/OS97/80b7eT8wuCz4xuyz42pyKnk+/ve+2+Vs7rXp5lbzScQ2K
CIF++VJfOSbznuiOj7/94+vH13++4ArNLjZqrsLRrNFaQx/CMxvu3X8XGxaIhOcN0OzVNHMcqH1V
qN7Z8K0n//Q/XT7/+cePNitwSUmJPqNTzW1justEyDIgYKS1RKf7i5BygOoGhafnu8NPnXDrESes
txWl0sp6gBO/2ccHKJDm7p++hgA2OvV+yLbCgDRB6cgfzxLNIFchtW1jl4kFsYvbQ0aXAj3cRDK9
36b0S5GQwTDy+p288Lwp+4ugyazKUpl/yhKQ2J+j3lLvyYVINAKx3ZOeaqdltOtEQS25s8KLhhIG
yCjgVCTy+MFyoYlIj9+e9917zzem985zdUamhZDleSpAJlyY2Ffr0lPz7cyH5tAPn1+Wuf6jbQV1
C8uy655bk7HxyaWhP7y+SXatT4DCAUbfzm7yslHBX5XP+u0vb50y+ogCQQxhNjv+9v9PZlD6v6R7
8AmcBpyyXmXmtriZuEXhFZCIo3HNyvzLe/W/vT36tr1ol3S/Mwb2m3vt2NAL+VkaAcneHgmU/oJ5
59SkkoR1+xS9tZFu/efMlTcfj8ZJecAr5APKfKf9rYJk8GDXLSyvXRnu1jPFVgBaGp51kj2fsrZT
cKtqREGj0y5tcJLxgIpGQZrTszwBJBDo2pn3ZGXOPPB3iaYozuo1X5jZgDAOSFj3Ioa0nYSuXDlo
ysjeN7ZVLubZBqnGHCb2thxMABsABYHMbhvefmvDh4e6lqaQGjcs43vPXJ95y3eHmCv6F4NDeSay
IgYiJmBKDUe52FOdpBU7kuactU3B91angos2Rc2NlTGqTyholuicH3MmDuObrxoduOtICycA8OLJ
W8InD5h9ob0BLw7ufJmzetnLOYNOjmnThBbNgSvwPAK2A717L/Zs2jZtRenjZ7bHu28P2i1fd9ua
l3/53bPl1uwsDUsQwBKsRYt/2NEC8QTh3+tSgVVV3f/4+AuLfnHsm6fSs67eH1xwQHC7PkTrz732
2j0FQ0Yt1KEgszSgIdJBKhrataFq61Gzr/6sTbNLT2uLdMxMXFl9kUwlQOwVBBQQEJaF7GGnffjx
3174jOtNh89d5AQGMomwl2OatqxDa0DZoMbdQNPKa0tKStr0bt3a8gmyYWu3FqepEN7S2SoEF/X/
7WXXPnXYxAki0j06yIcGh6eP/O1Zm79734WJD6ac4pSP7OeqQf3BPbppFOZoQLuIJYFogtFkM1Ku
AmsXphnHFSNDD181Mv+o3Y+el+iAY1SaFZmRNjQcfAa+9MbvbiwYNuYlFQkB0rO+Nxu+4CqIWAMa
l8wL5DXG7p/3+O8z29K/7UW7KfC3p07d3Td7y3enjo3UWiFACgkImc7h9JJnHJcQb3TxwioVWhUd
9MunZm45pssRC3L/+bAtJUb3G6P1YY6p2xPM+lG4Wy8tLRNCeJFIrDTgKFAygfpVKwLZ1bUPlpZe
0erg6Kp163rrjxcNh5MCgWEAMCwLoZ7FnOpz8jMHi6N9dfaWGUaXKz+AzAbI8IxLOl1HWTuQyXro
XbNOu/P7Rd9ohUgtiNqPLkeiUbJmzxIFAYgQqEPf1Iw5ZUdcmeKii25JjRo69OEpowvG94o/X3z9
mG3Dr+j78XU3n7bxR986T7yZE2b2YifShkIFQCtkZAkUhhofbo2/XWkXzScigQ8I7IA3Mx/udMIP
ayofze0/2CXT8ookpO0lpBTYtmHs24vque8PG2hlvvbhX3+b25Y+bg/atWLGuSOHvzOmcNv1V44K
N4QigCkArwYRtbhkUi5QW6/w4qpUcG5Zh18980HT0/dNf/2Y5A1bAIT6dE0kD5YCh1uTDZo8eWXn
i698iiKZLIR1gDGLoV0XVFuLykULRp1XcNVXWitfbPnCi53KfQYpL7OITBMyJ4zsr1wy/8W3P/rn
wa6ZMmWK3Ugj7xGF4+PSDIHIAGnhGWrAgOuAarcLt2rhDytWPtWqvTAvnW7q6m1ns4p7RQtJACIA
yujCuuOZ902Z8nSrjsuZNm2ac/6QM1Zcd8F5T02ZMPLP3QL8SyEFK0iodISUZgFHAw6H0NBk9mvN
c6QpAdIt74zZW4Mp1tDkHjae/cKrb5xXeNGUvyMSYSENCHDaDsDQrgLbDmj7Ntrz/nvjTomE3t/w
9APtFzzTCtq95M35Z5762hUDy6/9+ohAUyQDMIWAEJ4lUrHXiUprRJsc/HtDU/CRxZia7DR+8XNL
Yje0WHHaCaUSkC0fcGpxv+h0JU11+Aw3fi+684fdLr5iHQcDIMj9hQ21hkok4G7dYdStW//3ta89
O+hoZVs7f3Yf2rL+x5yIeskBJKEjYeSMGlvxwd7YzdNKDn0iQkHvge9Rnx+UIHASwwiChZHepzKg
NEQqCt69bFhWcPEh61cdstEMcjrVTKeGnb1ZO+nEeAtsFTB6nP3WvNV1d7fX+7GgTGYtPJuEgCYB
RQRbS+ytSWHl3uADr727tPvR3jeeTEGr5gy5lmJPUIrhKBcRHTrs9Ysqqn7R6cIpqx3TghYGmFpK
gnhupWQK7paN2PXGm0OK6mrfqv7Xo5cycFRjt6SkRHArP7AHckxqVp01pO+rXx9c8fXvTMhM5uUR
whYgBHleCOH5YxUrNDUxNpRF8dR8p+erq+jRB+bEZzy3rPGS9lJkBeXldR5Y49vLfwQE4OLwmV6X
XnpjdFlBlwldLrysjoImDGF4PlomwFWQ9Q1o/HBufqRiz7+WP/Hnvkcq1/r3ZuRH1qx5Jr56ZXdy
HZAU0AELHUaeWbcqf8DXv3L99Z97JM22+eUPipPvfFlanTwlTu+HCfA+CE01EHs+nnxW5+rHj0aJ
ddX939db3p7Kukl4FT8skFnIoufYpRsbuk0ZP751tcAOhintqCVtZVCLKc7bboEQjys8t0IXL6kf
NPuld9eNPKr7hg047LYkojSHw7JWSKUUXPfwejPhsstqKk869aYu4y5McTgIGN7JTM1h4Vor6FQK
7u4dKH/3gx7uqhUvNT1y98uJlx755tLPcS++98BvispfePi2b/fMmV22qmLrq4/+sKgtfXhMizcv
X7Px9Ll7u7zw6AcNPaqikpIpTvtl03u2dFSMISRCFqNDvsTgnkE9oie93j/HndE50PjxwIHd1x3t
Pqi0tFQWnzJySGW5/N87Z1pfKa9nsrW3ByJiSClRVKTxw/HJDdPG9zzp8+63+IP3J/X8eMkzlW/N
yKKkDaXdlhW1NCW4qBPyxp65vS4Y+tagb/1kFg6TtL359deHGju3PJCcP2es2VQHuA7cgIWOZ4xs
3N715G+cNnXqG0fazt3r1+d3zlj8b73u12dwoprYdQBosBYAGWCzAJTViY0OJ7+wrkbcPvjsv+46
1L3mzft95undxS2iYu7/UM3WkHabQOxAixyI3mdv3hbrM7r/8NvaNa975sKFWa8v67D3jQ3hSDQB
qPSGVRAgpUBAAtlZEhP6WTXnFOyaetlXBr31efecPXu2sSRS99YDq145ty5a7ykyPJOWIANZRgjf
6HfelnH5PX/UMbtwg727esf48eMPatVaPXv21Ly57zxWPv/dgGyKA65XBUWr9B2JACkhIiFYBYUI
de/GGT2LF0cKui1KWeZOV+gKmbAbOGX3k6lEIBVPnpxK2hOTtp3vGMRZRRmzut1454S29OExr76+
YcOGzJ1O5/v/Oqvh2nV7pFEfN+DYgK28jvCUOH2IFTGsIMMISHQvCvPgTiHdP48/7JDpvp1SjVXB
IMCsGIZZTszaVkSCRJELw5Am4NoUYMj+28sxYVN5asCO3a6oiDISrld8TzAgBMMKEjrnOfj6yNjs
H13Y95wjacfqBQtO6rBm1es1rzzVy0omSDsuNLxAeZIElVOAvGFDVUaXjv+KWaHXkJu5WkSC2xsS
tojIYGe4NNSoaTg5tXnrzbFNa3MM7e0vRVYEHcaduXeNlX/ZqK/fsOho+3fr1q3ZxZnr/ukuv/si
kdhK7DjwAhkIBAtsZENkdGHK7lRHmdl/ZuqwXmbnr4MM7IBErh2LDzWUUwy2v6Wq1p5MNVuIOQl2
HFCwiMWAcz7YGCv+2qBB3zomOa5/eWX30keWyGF7agUc5YWrUnq2IxAsCWRGJEYXB92r+jfcu7ts
+d3Tpk061PaCXt344f/+aeW/f7mmZodoSjVBa+VFgIIgSMKkAAqD2biw93DuEeqshncesK+2uvyN
8o0r775l6i27P33Dte99MDZ307IZ+/5dWmDF41Apb3mutFfoj4nAQgCmCUgT2jShg2GISBZ0wIRh
GDCUAQMSihhKMGRRDhf27jt3e5QvHH2IlMgj5bgcn8DMVBF3hr+/PPbHJxbGz9xdZ1FTI5BIeql+
rL38Vibv5UEISClgEiNoErLDJgoyGZlBIGQxLEOCvdwjKNZwXSDhKjREHUQTLhybkHIs2DbSEewa
0iCwAYRDQJ98gQFdTacoOf+7t99wwWNH2o7dixblZ9RWPVxZ+tRlonKPgO14p9G5CkwCTigMo6gL
Qp07wygqhMjIrAezcBOpLLumHrp8H9BQCxIMHTSR07eXCowd8Y8Ne+r+Z+TV3251ovHMmQ8GLjxn
4rdSW576k9z6vEUqBuU6XlQvGWCZCQpkAqFCUKgDEC5gCKsBGhlw4gbitUBTFXSqEaxdUDAMo9fA
JjfntF+/s7TqL209ofDAcfDmotrM8nigpyONLkKletg2//zfq1XXNbtdxGyCcpWXLJkO3TQgIAUh
IywxoEcA1wyMzqDqDdOuvnr8Z1YDTyx/87p5ddsf+2DrSlmbqoXt2mgucEsESDJgwoBFBkwGgjqM
PDcDQ7r2xOiO2Q9eM+66Hx5M7rLlC3pkbd/1SuVrz52Cqj2EeAJuyoZyve2ZghcuyiTSCm1BGwZY
BkCGCYMCYNOCzAogo2c3nTVm2J/36sSdwydNa3O/HtfzT0pLS62B4y+9fMHqxO2zNtinLt3tUlMs
CLIBx3Hhsk7nZXpZI1IICCYYYJgmYAiGIRhSCBDDs25rBdWs/OTNsEKItK/AQEga6FQIFBcwOnWW
TQOyjA9y0PDalrUL53z/psuOuNh4M9OnTzenTpx4fv2b795et3Lu2HBNFSXr62EBYC3gGibYDEJE
QtCBgLfLZu+0AKkVzFAI4V6d3ezBfd6mnr1+94cX58w/miCFw7FgzoyTzhjEt/O2N6eqyoWGdKPe
boVMsBYgWACC0CIMDemFuwKQKRuwAuBINoL52a4uHPjCvA1Nvz3ngl+vbatMT7+1tFM4r2/XWDI0
rLZeTS2vEadVRilk2yxsxBF1XVTFGPUxhVhKIOUyHJ2OStPwVk0EGFIiEjHQvUjg28Oc53Rs1Xev
n/zJsMpfzH3/o9lbFo2uF3WIohEuHLB2IQSlx4y32TZAMCGQIS0UZxRgQHHP8sSSTcMemHZP+aHa
UfqnP4UmXXDO16Lz5t1Ts+DdrqqqEjJlQ7sutFJwGXA1PNepFIA0ATMAlkFIKwMFA/tx7shTV6Bn
/59nDRr6Tnulo56QA4xKS0tl8UnDhqSsgrFby2nKnO10+spKyLomINlkw2QB2ApgF5yugyQFwxIM
KbwkZgGGIoZLAIQDYTCCAYlMi9A1P6g7FYbsoOG+WxSqX9MxEF+dk2Vs37pl+bppU6a0y/msJSUl
4uqzRp0eaawYn2PzudFde85KVtUYKtokUomklxhuEAKhAAIZmTqjqMANhsz3UmHjddWj9+yCMZds
OlaHny/68PFThw/ucD7vW3ke1y8bL+ykUMmEUEkF12XY2oIiASMUgWEGtZmX5QrTmpEU3ecv2Vjx
9oTL/nTUH7ZPv1+Vf8YIFc67edk28/JNuzgYizmwk0zsmiA2oCXDDtgQIQA6CdfQSLkGEk0OYnEB
2wEcJbxTL9nbb0rDQMhi9OsOvmqk9XJi23s3/vj6yfXNz71n7swxOiy/qmUKQnjVJwMBE57HwYbt
unBYobkwtJsCQmZW0qnZ/eKvx954RKWISktLQ+O7dZgQaaw6K1FRe0XjplVdOR4TTjRGjm17NbGJ
YIVDnNGxo87oWFQmST5bVdjxnV2rtywa/zmJGEfLCT+BrLT0ChkpvGJwlejWr14W9ElYxf1q9+oJ
dfVOh5StTFtYLcdkhE1GwGCEpYIllIOgaEra4S15wabl+QF3Z9CK14eUvclAsmndso/LSm6//nid
T0yv/P2hrp06depqJJKhbAARyG4GJ6opFE7YrBp379u774wbfrIb7VyV8HAwM+3Z8Nu+mUGdFxCq
0HFUDxMaQpiAmYXGqLs7nNlhz7L1ZbvPPL9kb9ufCLz2Ufnpe+OZf3x7pR69vcaVdlLAFF4VyZCl
kBMykR0wkZstOVKgokTOnvxgakWOqRuyIjmyvNGe/NKyaMHmygCSUe9gM2hvFvaWwQKRoEa/XiZf
P4ofmzom76bj1Z+fprS01BpSEOxLTfVFATasgHI6C6jtLhTYymLONCv2bqjaMrwd6ogfihOuwAej
pLTUGta1a2FK5IQDgcAn/s37mwUZDsX3bP+4/pqJE9ulTrNP25g9e7axLzzs9zMWqh+u26VEwpUk
NCBJIzuUQq9CAz27BfeGLXrF5Niy7kVq2Y7dH2372adWRKUzZxZ27zXmln8utH/62goONEYZjvKG
qResAkhJyMwAJpzC6iRrzeSfXnNumwukf1H5j1Rgny8Wb6+siKwsD736/EfOOZX1RFprGNJAMKDR
Nxc4e1hgdXEmPbBg0TszHvjx/iXv4Vj08aaLF1cWPfDg+029axskUukKQiJdbM4KSPTI0bh8TPil
n0/K+tqJ7oMTha/APm3i3aVbsz/c3mHOi4tjp9TGNWkXENJAxJIY2p2dKWNCjyyZ/d7P/3DHpUdd
hmblhm39t9YXPPGbV+tH7qg2yXakF+FMClIQskOMc87IrR9ZtGDUtInjN5zovjgRfGFPD/Q58TAz
Ldlb+PeXlzqn1jZpcm2viKshNbrmJtXEQfjlFWdEftAa5QWAUwf02tjd2HTh767KmdGnIMmB9FnZ
AEGDEbcJ26vs7Nz8/u1W4uiLhq/APq1m5urYyTNXuZc0NKXgul5YqgSQaTm4aGhwze75f7kXbTTa
DR8+vCFi7LrpFxdlflyY4bAhmn2uBAWJpmiKKh2jU1ue8UXGV2CfVlFSUiIWr089UF6njZRqSfuB
RYTuOcy9C+XD7eXfHj1oUG0Hs/LqyadwPBAQEORFajERbM1I2W1/xhcVX4F9WsXZF9+at2GvGqPc
dN1sAiQBAYvRJR+OqN8xoz2fN3LkwM3jBhqPFkQ0TIJX+IC8c5KycUJqqv9H4CuwT6tIpOiU2iYK
sOZ0rTuCMASEIRAxtXYzY+1eOznI0VkD8hxYEhCSIYmRlykRdiv+Y+o0H298BfZpFTUpkZHSoqXk
DKVPvSAC4kkSeSKz3Qv5M6jWsgSkJJhCwJCMzoXCXbV47lEngXxZ8BXYp1Uwe3nulD4dgtKnSrgu
oTYeMF0Vvqi9n+lSJLshaUAaApYUMCWjU15g0e9+/uP3TnR/nCh8BfZpFQUZOmYZjpc4kq4XzSDY
ilDeSLSzPrf9it+nSRqhwRVR9urrCUZhFpCHvctOdF+cSHwF9mkVu3YvX98910hK08v8YvIq3ysN
1MUI83cHR/7jXyvPba/nvbRwc9cPN+rbowAMgxAIa4weGGjcveqVv57ovjiR+Ars0yqmXX5W+ZDi
wEvBIME0vDIazadexB3C4rJEaIfq+9JDz668IH2oUquZuXBz1pbqwj/OWpfMNSAQMAW6ZGo+q7f8
7V9+cdt/ZQRWM74C+7SaDrSvpHe2a0eCnlHJO5LEOx86GrPx0vJodpnb741XP3RvnV76bnZrnvHy
7LKcNVWF97+5uOkKhqCAZOSFk3zFGVmv1iz/5x9PdB+caPxYaJ+2QE/PavzjwwuTP9pXw5RIEVT6
sDUJL3E+ZDG6FYb4Kycbe07ubvwuSLEP1i4q2zRt2vBDOm+ZmRZuqC/eVCWvWLJN/GzTjnhuwnbJ
gUDQcnDu0Kyne8rK70+9qG/jie6AE42vwD5tYubmzYHqyk5/feSD+HVVDSTiCUBr1ysix4AEwRKE
UISRnxnkAUUGd8vFvsI8uc0y9DLTEGuFUBwwgaTNuXD1GXFl9t1Srk7avEfJuqhDrnZhCAeFWQaf
MTx3hhHbdcMtvvIC8BXYpx0oLS21ikdPvu3vH8R+OXdtLJiyTbgpBmt49c3gJeIbkhAwNUIBQqYl
EQmaME0CGd6B8KlECo6jkYprOLYEDAeGcNEpW2DgSZllHQutP/PqVX893Oz934avwD7txlMvvjjJ
6nPx92evccYt3py0kjGG40qQBgCG5zcGBBFkus6+gIYQAoYgGEKDpAtihbBhoGthgHt1MtcVdzXf
3bB67u/u+faEVhf++7LiK7BPu/P3Z586u8+IK6Yt3iZHLtmli3fVCGEnXCjXgdbKKxQqACLtFSmU
XqVRy1DoHFHcvWukOlvKhbnB+MxFW2Y8/sgxLEnzRcdXYJ9jRklJiXHSuWePi6LHebVN2V0S2spi
SX1sRYYmDckawYB2A5K2FGRAh9jZ3dnCrNkfzXqn5HtTmk60/D4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+
Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+
Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pv9h/H9iLpNnG3Ki
uQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNC0xMi0yNVQwNDozMjo0MSswMDowMJAYXHAAAAAldEVY
dGRhdGU6bW9kaWZ5ADIwMjQtMTItMjVUMDQ6MzI6NDErMDA6MDDhReTMAAAAKHRFWHRkYXRlOnRp
bWVzdGFtcAAyMDI0LTEyLTI1VDA0OjMyOjQxKzAwOjAwtlDFEwAAAABJRU5ErkJggg==" />
</svg>
`
                },
                {
                    name: "必应",
                    searchUrl: "https://www.bing.com/search?q={keyword}",
                    searchkeyName: ["q"],
                    matchUrl: /bing\.com.*?search\?q=?/g,
                    mark: "Bing",
                    svgCode: `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="240px" height="149px" viewBox="0 0 240 149" enable-background="new 0 0 240 149" xml:space="preserve">  <image id="image0" width="240" height="149" x="0" y="0"
    xlink:href="data:image/png;base64,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" />
</svg>
`
                },
                {
                    name: "百度",
                    searchUrl: "https://search.brave.com/search?q={keyword}",
                    searchkeyName: ["wd", "word"],
                    matchUrl: /baidu\.com.*?w(or)?d=?/g,
                    mark: "Baidu",
                    svgCode: `<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="50px" height="50px" fill-rule="evenodd" clip-rule="evenodd" baseProfile="basic"><linearGradient id="yG17B1EwMCiUUe9ON9hI5a" x1="-329.441" x2="-329.276" y1="-136.877" y2="-136.877" gradientTransform="matrix(217.6 0 0 -255.4727 71694.719 -34944.293)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e68e00"/><stop offset=".437" stop-color="#d75500"/><stop offset=".562" stop-color="#cf3600"/><stop offset=".89" stop-color="#d22900"/><stop offset="1" stop-color="#d42400"/></linearGradient><path fill="url(#yG17B1EwMCiUUe9ON9hI5a)" fill-rule="evenodd" d="M40.635,13.075l0.984-2.418c0,0-1.252-1.343-2.772-2.865	s-4.74-0.627-4.74-0.627L30.439,3H24h-6.439l-3.667,4.165c0,0-3.22-0.895-4.74,0.627s-2.772,2.865-2.772,2.865l0.984,2.418	l-1.252,3.582c0,0,3.682,13.965,4.114,15.671c0.85,3.358,1.431,4.656,3.846,6.358c2.415,1.701,6.797,4.656,7.512,5.104	C22.301,44.237,23.195,45,24,45c0.805,0,1.699-0.763,2.415-1.21c0.715-0.448,5.098-3.403,7.512-5.104	c2.415-1.701,2.996-3,3.846-6.358c0.431-1.705,4.114-15.671,4.114-15.671L40.635,13.075z" clip-rule="evenodd"/><linearGradient id="yG17B1EwMCiUUe9ON9hI5b" x1="19.087" x2="31.755" y1="7.685" y2="32.547" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff"/><stop offset=".24" stop-color="#f8f8f7"/><stop offset="1" stop-color="#e3e3e1"/></linearGradient><path fill="url(#yG17B1EwMCiUUe9ON9hI5b)" fill-rule="evenodd" d="M33.078,9.807c0,0,4.716,5.709,4.716,6.929	s-0.593,1.542-1.19,2.176c-0.597,0.634-3.202,3.404-3.536,3.76c-0.335,0.356-1.031,0.895-0.621,1.866	c0.41,0.971,1.014,2.206,0.342,3.459c-0.672,1.253-1.824,2.089-2.561,1.951c-0.738-0.138-2.471-1.045-3.108-1.459	c-0.637-0.414-2.657-2.082-2.657-2.72c0-0.638,2.088-1.784,2.473-2.044c0.386-0.26,2.145-1.268,2.181-1.663	c0.036-0.396,0.022-0.511-0.497-1.489c-0.519-0.977-1.454-2.281-1.298-3.149c0.156-0.868,1.663-1.319,2.74-1.726	c1.076-0.407,3.148-1.175,3.406-1.295c0.259-0.12,0.192-0.233-0.592-0.308c-0.784-0.074-3.009-0.37-4.012-0.09	c-1.003,0.28-2.717,0.706-2.855,0.932c-0.139,0.226-0.261,0.233-0.119,1.012c0.142,0.779,0.876,4.517,0.948,5.181	c0.071,0.664,0.211,1.103-0.504,1.267c-0.715,0.164-1.919,0.448-2.332,0.448s-1.617-0.284-2.332-0.448	c-0.715-0.164-0.576-0.603-0.504-1.267s0.805-4.402,0.948-5.181c0.142-0.779,0.02-0.787-0.119-1.012	c-0.139-0.226-1.852-0.652-2.855-0.932c-1.003-0.28-3.228,0.016-4.012,0.09c-0.784,0.074-0.851,0.188-0.592,0.308	c0.259,0.119,2.331,0.888,3.406,1.295c1.076,0.407,2.584,0.858,2.74,1.726c0.156,0.868-0.779,2.172-1.298,3.149	c-0.519,0.977-0.533,1.093-0.497,1.489c0.036,0.395,1.795,1.403,2.181,1.663c0.386,0.26,2.473,1.406,2.473,2.044	c0,0.638-2.02,2.306-2.657,2.72c-0.637,0.414-2.37,1.321-3.108,1.459c-0.738,0.138-1.889-0.698-2.561-1.951	c-0.672-1.253-0.068-2.488,0.342-3.459c0.41-0.971-0.287-1.51-0.621-1.866c-0.334-0.356-2.94-3.126-3.536-3.76	c-0.597-0.634-1.19-0.956-1.19-2.176s4.716-6.929,4.716-6.929s3.98,0.761,4.516,0.761c0.537,0,1.699-0.448,2.772-0.806	C23.285,9.404,24,9.401,24,9.401s0.715,0.003,1.789,0.361c1.073,0.358,2.236,0.806,2.772,0.806	C29.098,10.568,33.078,9.807,33.078,9.807z M29.542,31.643c0.292,0.183,0.114,0.528-0.152,0.716	c-0.266,0.188-3.84,2.959-4.187,3.265c-0.347,0.306-0.857,0.812-1.203,0.812c-0.347,0-0.856-0.506-1.203-0.812	c-0.347-0.306-3.921-3.077-4.187-3.265c-0.266-0.188-0.444-0.533-0.152-0.716c0.292-0.183,1.205-0.645,2.466-1.298	c1.26-0.653,2.831-1.208,3.076-1.208c0.245,0,1.816,0.555,3.076,1.208C28.336,30.999,29.25,31.46,29.542,31.643z" clip-rule="evenodd"/><linearGradient id="yG17B1EwMCiUUe9ON9hI5c" x1="-329.279" x2="-329.074" y1="-140.492" y2="-140.492" gradientTransform="matrix(180.608 0 0 -46.0337 59468.86 -6460.583)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e68e00"/><stop offset="1" stop-color="#d42400"/></linearGradient><path fill="url(#yG17B1EwMCiUUe9ON9hI5c)" fill-rule="evenodd" d="M34.106,7.165L30.439,3H24h-6.439l-3.667,4.165	c0,0-3.22-0.895-4.74,0.627c0,0,4.293-0.388,5.769,2.015c0,0,3.98,0.761,4.516,0.761c0.537,0,1.699-0.448,2.772-0.806	C23.285,9.404,24,9.401,24,9.401s0.715,0.003,1.789,0.361c1.073,0.358,2.236,0.806,2.772,0.806c0.537,0,4.516-0.761,4.516-0.761	c1.476-2.403,5.769-2.015,5.769-2.015C37.326,6.27,34.106,7.165,34.106,7.165" clip-rule="evenodd"/></svg>
`
                },
                {
                    name: "alohafind",
                    searchUrl: "https://alohafind.com/search/?q={keyword}",
                    searchkeyName: ["q"],
                    matchUrl: /alohafind\.com.*?q=/g,
                    mark: "alohafind",
                    svgCode: `<svg width="362" height="54" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M35.293 5s-4.23 9.427-6.726 9.48c-1.408.03-3.023-.19-3.544-.302-1.667-.356-4.334-.495-7-.496-2.712 0-5.38.14-7.046.496-.522.112-2.136.333-3.544.302C4.938 14.427.707 5 .707 5S-.13 19.65.017 26.6c.1 4.73-.064 6.52.35 10.305.94 8.555 6.226 1.163 17.61 8.095 10.59-7.316 16.716.46 17.655-8.095.416-3.784.252-5.576.35-10.306.147-6.95-.69-21.6-.69-21.6zm-14.76 28.95l10.478-2.92c.28-.078.59-.005.79.19.2.196.255.474.142.717-.088.188-2.184 4.615-5.69 5.713-.743.233-1.44.35-2.085.35-.75 0-1.43-.158-2.034-.47-1.72-.895-2.105-2.737-2.12-2.815-.068-.336.157-.664.52-.764zM4.2 31.22c.2-.195.51-.267.788-.19l10.477 2.92c.365.1.59.43.524.765-.018.077-.402 1.92-2.123 2.814-.605.312-1.285.47-2.034.47-.645 0-1.342-.117-2.086-.35-3.506-1.098-5.602-5.526-5.69-5.713-.112-.243-.057-.52.142-.717z" fill="#A6B6D5"/><path d="M66.355 31.904V43H58.47V10.297h13.05c2.5 0 4.71.464 6.627 1.393 1.93.913 3.42 2.223 4.47 3.93 1.062 1.692 1.594 3.616 1.594 5.773 0 3.19-1.145 5.742-3.436 7.66-2.276 1.9-5.405 2.85-9.388 2.85h-5.03zm0-6.087h5.165c1.528 0 2.688-.38 3.482-1.145.81-.764 1.213-1.842 1.213-3.235 0-1.527-.412-2.747-1.236-3.66-.824-.914-1.947-1.378-3.37-1.393h-5.255v9.433zm36.43-.27l-2.492-.18c-2.38 0-3.908.75-4.582 2.247V43h-7.568V18.697h7.097l.246 3.122c1.273-2.38 3.047-3.572 5.324-3.572.808 0 1.512.09 2.11.27l-.134 7.03zM113.5 43h-7.592V18.697h7.592V43zm-8.04-30.57c0-1.078.388-1.96 1.167-2.65.78-.69 1.79-1.033 3.032-1.033s2.253.344 3.03 1.033c.78.69 1.17 1.572 1.17 2.65 0 1.08-.39 1.962-1.17 2.65-.777.69-1.788 1.034-3.03 1.034-1.244 0-2.254-.344-3.033-1.033-.78-.688-1.168-1.57-1.168-2.65zm22.415 21.563l3.84-15.296h7.974L131.76 43h-7.726l-7.93-24.303h7.998l3.773 15.296zM155.277 43c-.27-.494-.51-1.22-.718-2.18-1.394 1.753-3.34 2.63-5.84 2.63-2.292 0-4.24-.69-5.84-2.067-1.603-1.393-2.404-3.137-2.404-5.234 0-2.636.973-4.627 2.92-5.975 1.946-1.348 4.776-2.022 8.49-2.022h2.336v-1.28c0-2.23-.966-3.347-2.898-3.347-1.797 0-2.695.884-2.695 2.65h-7.57c0-2.35.995-4.26 2.987-5.727 2.006-1.468 4.56-2.202 7.66-2.202 3.1 0 5.547.756 7.344 2.27 1.798 1.51 2.72 3.585 2.763 6.22v10.76c.03 2.23.375 3.937 1.034 5.12V43h-7.57zm-4.74-4.94c.944 0 1.723-.204 2.337-.608.63-.404 1.078-.86 1.348-1.37v-3.886h-2.2c-2.637 0-3.955 1.183-3.955 3.55 0 .688.232 1.25.697 1.684.464.42 1.055.63 1.774.63zm24.304-25.405v6.042h4v5.256h-4V35.07c0 .915.166 1.55.495 1.91.33.36.98.54 1.954.54.748 0 1.377-.045 1.886-.135v5.413c-1.363.434-2.785.65-4.268.65-2.605 0-4.53-.613-5.772-1.84-1.243-1.228-1.865-3.093-1.865-5.593V23.953h-3.098v-5.256h3.1v-6.042h7.57zm18.756 30.794c-3.73 0-6.746-1.11-9.052-3.325-2.306-2.23-3.46-5.13-3.46-8.692v-.63c0-2.485.458-4.68 1.37-6.58.93-1.902 2.277-3.37 4.044-4.403 1.767-1.048 3.863-1.572 6.29-1.572 3.413 0 6.108 1.063 8.085 3.19 1.977 2.11 2.965 5.06 2.965 8.85v2.942h-15.05c.27 1.362.862 2.433 1.775 3.21.914.78 2.097 1.17 3.55 1.17 2.395 0 4.267-.84 5.615-2.516l3.46 4.088c-.945 1.302-2.285 2.343-4.022 3.122-1.722.763-3.58 1.145-5.57 1.145zm-.854-19.362c-2.216 0-3.534 1.467-3.953 4.402h7.636v-.584c.03-1.213-.277-2.148-.92-2.807-.645-.675-1.566-1.012-2.764-1.012zm42.833 10.22c0-1.153-.412-2.052-1.235-2.696-.81-.644-2.24-1.31-4.29-2-2.052-.688-3.73-1.354-5.03-1.998-4.24-2.08-6.358-4.94-6.358-8.58 0-1.812.524-3.406 1.572-4.784 1.064-1.393 2.56-2.47 4.493-3.234 1.93-.78 4.102-1.168 6.513-1.168 2.35 0 4.455.42 6.312 1.257 1.872.84 3.324 2.037 4.357 3.594 1.032 1.54 1.55 3.31 1.55 5.3h-7.862c0-1.333-.412-2.366-1.236-3.1-.808-.733-1.91-1.1-3.3-1.1-1.41 0-2.525.314-3.348.943-.81.614-1.213 1.4-1.213 2.36 0 .837.45 1.6 1.35 2.29.897.673 2.477 1.377 4.738 2.11 2.26.72 4.118 1.498 5.57 2.337 3.534 2.036 5.3 4.844 5.3 8.423 0 2.86-1.077 5.106-3.233 6.738-2.157 1.633-5.114 2.45-8.872 2.45-2.65 0-5.054-.473-7.21-1.416-2.142-.958-3.76-2.26-4.852-3.908-1.077-1.662-1.616-3.57-1.616-5.728h7.906c0 1.752.45 3.048 1.348 3.886.913.824 2.388 1.236 4.425 1.236 1.302 0 2.328-.278 3.077-.832.763-.57 1.145-1.362 1.145-2.38zm23.337 9.14c-3.728 0-6.746-1.107-9.052-3.323-2.306-2.23-3.46-5.13-3.46-8.692v-.63c0-2.485.458-4.68 1.37-6.58.93-1.902 2.278-3.37 4.044-4.403 1.767-1.048 3.864-1.572 6.29-1.572 3.414 0 6.11 1.063 8.085 3.19 1.976 2.11 2.964 5.06 2.964 8.85v2.942h-15.05c.27 1.362.862 2.433 1.776 3.21.913.78 2.096 1.17 3.55 1.17 2.395 0 4.266-.84 5.614-2.516l3.46 4.088c-.944 1.302-2.285 2.343-4.022 3.122-1.722.763-3.578 1.145-5.57 1.145zm-.853-19.36c-2.218 0-3.535 1.467-3.955 4.402h7.637v-.584c.03-1.213-.277-2.148-.92-2.807-.645-.675-1.565-1.012-2.763-1.012zM285.91 43c-.27-.494-.51-1.22-.72-2.18-1.39 1.753-3.338 2.63-5.838 2.63-2.29 0-4.238-.69-5.84-2.067-1.602-1.393-2.404-3.137-2.404-5.234 0-2.636.974-4.627 2.92-5.975 1.947-1.348 4.777-2.022 8.49-2.022h2.336v-1.28c0-2.23-.965-3.347-2.897-3.347-1.797 0-2.695.884-2.695 2.65h-7.57c0-2.35.996-4.26 2.988-5.727 2.006-1.468 4.56-2.202 7.66-2.202 3.098 0 5.547.756 7.344 2.27 1.796 1.51 2.717 3.585 2.762 6.22v10.76c.03 2.23.375 3.937 1.033 5.12V43h-7.57zm-4.74-4.94c.944 0 1.723-.204 2.337-.608.63-.404 1.078-.86 1.347-1.37v-3.886h-2.2c-2.636 0-3.954 1.183-3.954 3.55 0 .688.232 1.25.696 1.684.465.42 1.056.63 1.775.63zm30.188-12.512l-2.493-.18c-2.38 0-3.908.75-4.582 2.246V43h-7.57V18.697h7.1l.246 3.122c1.27-2.38 3.046-3.572 5.322-3.572.808 0 1.512.09 2.11.27l-.134 7.03zm12.556 12.06c1.063 0 1.887-.283 2.47-.852.585-.584.87-1.393.854-2.426h7.098c0 2.665-.958 4.852-2.875 6.56-1.9 1.706-4.356 2.56-7.366 2.56-3.534 0-6.32-1.11-8.356-3.325-2.036-2.216-3.054-5.286-3.054-9.21v-.313c0-2.456.45-4.62 1.347-6.492.915-1.886 2.225-3.33 3.932-4.335 1.707-1.018 3.728-1.527 6.064-1.527 3.16 0 5.668.876 7.525 2.628 1.858 1.752 2.786 4.125 2.786 7.12h-7.098c0-1.258-.307-2.223-.92-2.897-.615-.675-1.438-1.012-2.47-1.012-1.963 0-3.108 1.25-3.438 3.75-.105.794-.157 1.888-.157 3.28 0 2.44.292 4.133.876 5.076.583.944 1.51 1.415 2.784 1.415zm21.024-16.305c1.617-2.037 3.683-3.055 6.2-3.055 2.68 0 4.7.794 6.063 2.38 1.364 1.588 2.06 3.932 2.09 7.03V43h-7.592V27.84c0-1.29-.262-2.232-.786-2.83-.524-.615-1.415-.922-2.673-.922-1.558 0-2.66.494-3.302 1.482V43h-7.57V8.5h7.57v12.803z" fill="#A6B6D5"/></svg>
`
                },
                {
                    name: "Yandex",
                    searchUrl: "https://yandex.com/search/?text={keyword}",
                    searchkeyName: ["text"],
                    matchUrl: /yandex\.com.*?text=/g,
                    mark: "YandexSearch",
                    svgCode: `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="120px" height="75px" viewBox="0 0 120 75" enable-background="new 0 0 120 75" xml:space="preserve">  <image id="image0" width="120" height="75" x="0" y="0"
    href="data:image/png;base64,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" />
</svg>`
                },
                {
                    name: "kagi",
                    searchUrl: "https://kagi.com/search?q={keyword}",
                    searchkeyName: ["q"],
                    matchUrl: /kagi\.com.*?q=?/g,
                    mark: "kagi",
                    svgCode: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
  <path fill="#FFB319" d="M0 0h20v20H0z"/>
  <g stroke="#18181A" clip-path="url(#a)">
    <path fill="#fff" stroke-linejoin="round" stroke-width=".83" d="M11.572 11.911a1.15 1.15 0 0 1 1.28-.26c.143.058.273.144.382.254l3.37 3.184.416.42c.11.108.198.236.26.377.06.142.09.294.092.448a1.197 1.197 0 0 1-.714 1.091 1.144 1.144 0 0 1-.902.007 1.164 1.164 0 0 1-.383-.254l-.747-.738-3.046-2.852a1.163 1.163 0 0 1 0-1.662l-.008-.015Z"/>
    <path fill="#fff" stroke-width=".83" d="M8.613 14.374a5.761 5.761 0 1 0 0-11.522 5.761 5.761 0 0 0 0 11.522Z"/>
    <path fill="#FFB319" stroke-width=".83" d="M12.363 8.611a3.751 3.751 0 0 1-7.501 0 3.75 3.75 0 1 1 7.501 0Z"/>
    <path stroke-width=".67" d="M12.354 8.35a3.754 3.754 0 0 0-4.463 3.939 3.75 3.75 0 0 0 4.463-3.939ZM9.366 4.974a3.754 3.754 0 0 0-4.463 3.943 3.753 3.753 0 0 0 4.479-3.68c0-.09-.01-.176-.016-.263Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <path fill="#fff" d="M1.665 1.665h16.67v16.67H1.665z"/>
    </clipPath>
  </defs>
</svg>
`
                },
                {
                    name: "哔哩哔哩",
                    searchUrl: "https://you.com/search?keyword={keyword}",
                    searchkeyName: ["keyword"],
                    matchUrl: /you\.com.*?keyword=/g,
                    mark: "you",
                    svgCode: `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="120px" height="75px" viewBox="0 0 120 75" enable-background="new 0 0 120 75" xml:space="preserve">  <image id="image0" width="120" height="75" x="0" y="0"
    href="data:image/png;base64,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
QmCC" />
</svg>
`
                },
                {
                    name: "夸克",
                    searchUrl: "https://search.yahoo.com/search?q={keyword}",
                    searchkeyName: ["q"],
                    matchUrl: /yahoo\.sm\.cn.*?q=/g,
                    mark: "yahoo",
                    svgCode: `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="120px" height="75px" viewBox="0 0 120 75" enable-background="new 0 0 120 75" xml:space="preserve">  <image id="image0" width="120" height="75" x="0" y="0"
    href="data:image/png;base64,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" />
</svg>
`
                },
                
                {
                    name: "扩展搜索",
                    enabled: true,
                    searchUrl: "https://exa.ai/search?q={keyword}",
                    searchkeyName: ['q'],
                    matchUrl: "exa\.ai/search.*?q=",
                    mark: "ExtSearch",
                    svgCode: `
<svg width="800px" height="800px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1{fill:#004e85;}.cls-2{fill:#0068a5;}.cls-3{fill:#a6c1e5;}.cls-4{fill:#002b55;}</style></defs><title/><g data-name="Layer 8" id="Layer_8"><path class="cls-1" d="M22.5,23.5a1,1,0,0,1-.71-.29l-3.43-3.43a1,1,0,0,1,1.42-1.42l3.43,3.43a1,1,0,0,1,0,1.42A1,1,0,0,1,22.5,23.5Z"/><path class="cls-2" d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Z"/><path class="cls-3" d="M12,5a7,7,0,0,0,0,14,7,7,0,0,0,7-7A7,7,0,0,0,12,5Z"/><path class="cls-4" d="M30.52,27.48,24,21a1,1,0,0,0-1.42,0l-1.81,1.81a1,1,0,0,0,0,1.42l6.5,6.5a1,1,0,0,0,1.42,0l1.81-1.81A1,1,0,0,0,30.52,27.48Z"/></g></svg>
                    `
                    },
                
                {
                    name: "知乎",
                    searchUrl: "https://www.tempest.com/search?type=content&q={keyword}",
                    searchkeyName: ["q"],
                    matchUrl: /zhihu\.com.*?q=/g,
                    mark: "Zhihu",
                    svgCode: `<?xml version="1.0" encoding="UTF-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="133" height="133">
<path d="M0 0 C10.30416751 8.3721361 17.79281516 20.31130228 19.29980469 33.65454102 C19.43607573 36.38170246 19.46781012 39.08218397 19.4375 41.8125 C19.42614014 43.25761963 19.42614014 43.25761963 19.41455078 44.73193359 C19.23877515 52.36470173 18.07992625 58.96560055 15 66 C14.54109375 67.05703125 14.0821875 68.1140625 13.609375 69.203125 C11.37404204 73.9796786 9.25421862 77.9589952 5.5 81.6875 C3.37840824 83.98996774 3.37840824 83.98996774 2.96484375 87 C3.48526288 89.40855135 4.20455761 91.66741894 5 94 C5.62779255 96.11814043 6.23143396 98.24356747 6.8125 100.375 C7.10769531 101.37273437 7.40289062 102.37046875 7.70703125 103.3984375 C8 106 8 106 6.91015625 107.71875 C4.56502214 109.29176429 2.29259136 110.19682438 -0.375 111.125 C-1.31085938 111.45757812 -2.24671875 111.79015625 -3.2109375 112.1328125 C-8.54433111 113.79109455 -13.55468186 114.2100694 -19.125 114.25 C-19.82109375 114.270625 -20.5171875 114.29125 -21.234375 114.3125 C-25.55621681 114.34393158 -29.16815667 113.74857577 -33.30859375 112.48828125 C-39.28148478 110.73441947 -44.75677711 110.73570679 -50.9375 110.9375 C-70.45588399 111.272058 -70.45588399 111.272058 -77 108 C-76.125 103.25 -76.125 103.25 -75 101 C-76.02738281 100.70867187 -77.05476563 100.41734375 -78.11328125 100.1171875 C-92.04227485 96.05077107 -105.59357389 90.60963916 -114 78 C-114 76.68 -114 75.36 -114 74 C-112.02 73.01 -110.04 72.02 -108 71 C-108.34933594 70.18015625 -108.69867188 69.3603125 -109.05859375 68.515625 C-109.51363281 67.43796875 -109.96867187 66.3603125 -110.4375 65.25 C-110.88996094 64.18265625 -111.34242187 63.1153125 -111.80859375 62.015625 C-116.9384014 49.03132498 -115.25342367 31.67673972 -110 19 C-105.3774082 8.70174076 -98.43565153 -1.52642642 -89 -8 C-88.01 -8.33 -87.02 -8.66 -86 -9 C-82.61535404 -4.3845737 -81.91092494 0.48086654 -81 6 C-80.17757812 5.40832031 -79.35515625 4.81664062 -78.5078125 4.20703125 C-54.5015501 -12.8793537 -25.45410115 -18.22282241 0 0 Z M-54.3984375 36.87109375 C-59.73029021 43.9585565 -63.14910775 51.70290336 -63.125 60.5625 C-63.12757812 61.51253906 -63.13015625 62.46257812 -63.1328125 63.44140625 C-63.10770994 66.1212438 -63.10770994 66.1212438 -62 69 C-45.62773039 68.59346509 -31.42114857 60.29395273 -20.296875 48.69140625 C-12.23268209 39.29919802 -12.23268209 39.29919802 -9.12890625 27.796875 C-9.86200815 25.8720991 -9.86200815 25.8720991 -11.71484375 24.953125 C-27.43634645 19.97971465 -43.08420328 24.88658499 -54.3984375 36.87109375 Z " fill="#C478CB" transform="translate(114,15)"/>
<path d="M0 0 C9.71463623 3.03582382 17.72577368 11.4367128 22.765625 20 C29.89918804 33.85157872 31.79095367 49.96355906 27.375 65.125 C26.63900555 67.10492872 25.84719773 69.06504223 25 71 C24.54109375 72.05703125 24.0821875 73.1140625 23.609375 74.203125 C21.37404204 78.9796786 19.25421862 82.9589952 15.5 86.6875 C13.37840824 88.98996774 13.37840824 88.98996774 12.96484375 92 C13.48526288 94.40855135 14.20455761 96.66741894 15 99 C15.62779255 101.11814043 16.23143396 103.24356747 16.8125 105.375 C17.10769531 106.37273437 17.40289062 107.37046875 17.70703125 108.3984375 C18 111 18 111 16.91015625 112.71875 C14.56502214 114.29176429 12.29259136 115.19682438 9.625 116.125 C8.68914062 116.45757812 7.75328125 116.79015625 6.7890625 117.1328125 C1.45566889 118.79109455 -3.55468186 119.2100694 -9.125 119.25 C-9.82109375 119.270625 -10.5171875 119.29125 -11.234375 119.3125 C-15.55621681 119.34393158 -19.16815667 118.74857577 -23.30859375 117.48828125 C-29.28148478 115.73441947 -34.75677711 115.73570679 -40.9375 115.9375 C-60.45588399 116.272058 -60.45588399 116.272058 -67 113 C-66.125 108.25 -66.125 108.25 -65 106 C-66.02738281 105.70867187 -67.05476563 105.41734375 -68.11328125 105.1171875 C-82.04227485 101.05077107 -95.59357389 95.60963916 -104 83 C-104 81.68 -104 80.36 -104 79 C-97.13801742 74.78527973 -97.13801742 74.78527973 -92.6875 75.625 C-90 77 -90 77 -87 79 C-87 79.66 -87 80.32 -87 81 C-85.35 81.33 -83.7 81.66 -82 82 C-82 82.66 -82 83.32 -82 84 C-80.989375 84.28875 -79.97875 84.5775 -78.9375 84.875 C-76.58311674 85.54768093 -74.27603657 86.24813638 -71.95703125 87.04296875 C-55.01195714 91.83751394 -33.8984939 87.96787277 -18.5625 79.875 C-16.19148637 78.46685386 -14.01672377 77.01300402 -11.83984375 75.3203125 C-10 74 -10 74 -8 74 C-7.505 72.515 -7.505 72.515 -7 71 C-5.84504034 69.84504034 -4.68788038 68.69219438 -3.51953125 67.55078125 C6.84759643 56.97044786 12.3125 44.01533275 12.3125 29.28100586 C12.10834581 19.00021864 8.91300121 12.12531507 1.609375 4.875 C0 3 0 3 0 0 Z " fill="#AE5AC7" transform="translate(104,10)"/>
<path d="M0 0 C9.42661923 7.11805942 15.91091194 17.30605147 18 29 C19.0871403 41.03228807 18.90568688 52.79565343 14 64 C13.54109375 65.05703125 13.0821875 66.1140625 12.609375 67.203125 C10.37404204 71.9796786 8.25421862 75.9589952 4.5 79.6875 C2.37840824 81.98996774 2.37840824 81.98996774 1.96484375 85 C2.48526288 87.40855135 3.20455761 89.66741894 4 92 C4.62779255 94.11814043 5.23143396 96.24356747 5.8125 98.375 C6.10769531 99.37273437 6.40289062 100.37046875 6.70703125 101.3984375 C7 104 7 104 5.91015625 105.71875 C3.56502214 107.29176429 1.29259136 108.19682438 -1.375 109.125 C-2.31085938 109.45757812 -3.24671875 109.79015625 -4.2109375 110.1328125 C-9.54433111 111.79109455 -14.55468186 112.2100694 -20.125 112.25 C-20.82109375 112.270625 -21.5171875 112.29125 -22.234375 112.3125 C-26.55621681 112.34393158 -30.16815667 111.74857577 -34.30859375 110.48828125 C-40.28148478 108.73441947 -45.75677711 108.73570679 -51.9375 108.9375 C-71.45588399 109.272058 -71.45588399 109.272058 -78 106 C-76.56571821 98.41879625 -76.56571821 98.41879625 -74.390625 96.80859375 C-71.08513813 95.69056143 -68.23217389 95.92723627 -64.75 96.0625 C-44.21604543 96.44681905 -23.30565498 89.5663995 -8.16015625 75.35546875 C4.36194155 61.70117404 10.81207347 46.02450355 10.3828125 27.5625 C9.83058392 18.04350953 5.65258679 10.42911406 0 3 C0 2.01 0 1.02 0 0 Z " fill="#9D4DB2" transform="translate(115,17)"/>
<path d="M0 0 C-0.33 0.66 -0.66 1.32 -1 2 C0.2684375 2.7425 0.2684375 2.7425 1.5625 3.5 C6.09288695 6.52025797 11.05227931 10.95035129 12.69921875 16.25 C12.84810547 17.11625 12.84810547 17.11625 13 18 C11.989375 17.67 10.97875 17.34 9.9375 17 C-4.4628164 13.4697637 -20.29860921 16.29440273 -33.18359375 23.27734375 C-45.78798696 30.98682697 -55.51585353 42.63250573 -59.25 57.1875 C-60.49445669 63.69154725 -60.66952226 70.39914197 -61 77 C-66.50186529 75.38611952 -71.60989167 73.84134479 -76 70 C-76.875 67.375 -76.875 67.375 -77 64 C-77.03738281 63.278125 -77.07476562 62.55625 -77.11328125 61.8125 C-77.55982454 47.14707821 -73.35393783 32.87771466 -63.5625 21.6875 C-62.2940625 20.3571875 -62.2940625 20.3571875 -61 19 C-60.67 18.01 -60.34 17.02 -60 16 C-58.04887273 14.42850383 -56.1359967 13.01568887 -54.0625 11.625 C-53.47275391 11.22651855 -52.88300781 10.82803711 -52.27539062 10.41748047 C-36.96524148 0.23697772 -18.27427051 -4.56856763 0 0 Z " fill="#533B8B" transform="translate(93,5)"/>
<path d="M0 0 C1.3974093 2.79481859 1.13211589 5.13324019 1.125 8.25 C1.12886719 9.92835937 1.12886719 9.92835937 1.1328125 11.640625 C1.00608539 14.84607544 0.6008965 17.85244689 0 21 C-0.515625 20.54625 -1.03125 20.0925 -1.5625 19.625 C-8.1043944 15.26373706 -15.98304562 15.07151233 -23.51171875 16.46484375 C-34.1596226 19.28979783 -42.60296854 25.01756322 -49 34 C-52.7580574 40.79718209 -54.13438468 46.48645487 -54.0625 54.25 C-54.05347656 55.51328125 -54.04445313 56.7765625 -54.03515625 58.078125 C-54.02355469 59.04234375 -54.01195313 60.0065625 -54 61 C-56.35424675 61.02726927 -58.70816962 61.04696719 -61.0625 61.0625 C-63.02896484 61.07990234 -63.02896484 61.07990234 -65.03515625 61.09765625 C-68.8163519 61.00452335 -72.27920707 60.61448726 -76 60 C-75.01 59.505 -75.01 59.505 -74 59 C-74.03480469 58.05640625 -74.06960937 57.1128125 -74.10546875 56.140625 C-74.38012958 43.1138541 -72.54194044 32.93303406 -65 22 C-64.54753906 21.30132812 -64.09507813 20.60265625 -63.62890625 19.8828125 C-55.07132931 7.42220471 -41.26247247 0.18545999 -26.66015625 -2.53125 C-17.47789732 -3.70720632 -8.39154314 -4.36360243 0 0 Z " fill="#755FBF" transform="translate(106,23)"/>
<path d="M0 0 C3.40358431 2.2690562 3.60716307 2.97739485 4.6875 6.75 C4.93886719 7.59046875 5.19023438 8.4309375 5.44921875 9.296875 C6.07495674 12.36787282 6.32617975 14.87445477 6 18 C4.4609375 20.31640625 4.4609375 20.31640625 2.375 22.5625 C-9.0841516 36.11436901 -10.41731369 51.02924311 -10 68 C-13.54453168 66.58218733 -14.8573491 65.10283462 -16.625 61.75 C-17.02976562 61.00234375 -17.43453125 60.2546875 -17.8515625 59.484375 C-22.77554611 48.83249209 -21.77682502 38.90984134 -18.16796875 27.97265625 C-17 25 -17 25 -15.36328125 21.74609375 C-13.85177881 19.21241266 -13.85177881 19.21241266 -14 17 C-14.66 16.67 -15.32 16.34 -16 16 C-6.78108581 3.39054291 -6.78108581 3.39054291 0 0 Z " fill="#8E57C1" transform="translate(27,6)"/>
<path d="M0 0 C2.81388536 2.81388536 3.57544758 6.16761386 4.75 9.875 C4.99621094 10.59558594 5.24242187 11.31617187 5.49609375 12.05859375 C6.42522965 14.97489892 7.14772378 17.30325557 6.50390625 20.33984375 C4.36225896 22.70399984 2.14683458 23.53076873 -0.8125 24.6875 C-1.85019531 25.10386719 -2.88789062 25.52023438 -3.95703125 25.94921875 C-14.53892313 29.60329952 -27.03862842 29.16351036 -37.6171875 25.734375 C-41.05836013 24.67381688 -44.42258392 24.33749208 -48 24 C-48 23.67 -48 23.34 -48 23 C-47.45214844 22.91363281 -46.90429688 22.82726562 -46.33984375 22.73828125 C-34.07317068 20.56418797 -16.76461784 16.48107161 -8 7 C-6.61268295 5.76122932 -5.2164808 4.53235217 -3.8125 3.3125 C-3.09707031 2.68988281 -2.38164063 2.06726563 -1.64453125 1.42578125 C-0.83048828 0.72001953 -0.83048828 0.72001953 0 0 Z " fill="#654CB1" transform="translate(115,101)"/>
<path d="M0 0 C2.6296046 3.50613947 3.5748261 5.22318016 4.6875 9.25 C4.93886719 10.14203125 5.19023438 11.0340625 5.44921875 11.953125 C5.72185547 12.96632813 5.72185547 12.96632813 6 14 C5.34 14.66 4.68 15.32 4 16 C2.68 16 1.36 16 0 16 C0 10.72 0 5.44 0 0 Z " fill="#7159D0" transform="translate(116,107)"/>
<path d="M0 0 C0.66 0.66 1.32 1.32 2 2 C0.71064081 3.14842923 -0.58156579 4.29366227 -1.875 5.4375 C-2.59429688 6.07558594 -3.31359375 6.71367187 -4.0546875 7.37109375 C-6 9 -6 9 -8 10 C-8.66 9.34 -9.32 8.68 -10 8 C-8.71064081 6.85157077 -7.41843421 5.70633773 -6.125 4.5625 C-5.04605469 3.60537109 -5.04605469 3.60537109 -3.9453125 2.62890625 C-2 1 -2 1 0 0 Z " fill="#834485" transform="translate(27,6)"/>
<path d="M0 0 C1.6875 1.5625 1.6875 1.5625 3 3 C2.175 2.855625 1.35 2.71125 0.5 2.5625 C-3.32686278 1.94746848 -7.15216707 1.46439363 -11 1 C-11 0.67 -11 0.34 -11 0 C-3.375 -1.125 -3.375 -1.125 0 0 Z " fill="#322351" transform="translate(78,124)"/>
<path d="M0 0 C3.3 0.99 6.6 1.98 10 3 C9.01 3.66 8.02 4.32 7 5 C3.535 3.02 3.535 3.02 0 1 C0 0.67 0 0.34 0 0 Z " fill="#913360" transform="translate(94,6)"/>
</svg>
`
                },
                {
                    name: "GitHub",
                    searchUrl: "https://github.com/search?q={keyword}+is%3Apublic&type=repositories&s=stars&o=desc",
                    searchkeyName: ["q"],
                    matchUrl: /github\.com.*?search\?q=/,
                    mark: "GitHub",
                    svgCode: `
      <svg class="icon" style="width: 1em;height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="-50 -50 1124 1124" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7138"><path d="M512 95.872a426.666667 426.666667 0 0 0-134.912 831.445333c21.333333 3.754667 29.312-9.045333 29.312-20.266666 0-10.112-0.512-43.733333-0.512-79.445334-107.221333 19.712-134.954667-26.154667-143.488-50.133333a155.136 155.136 0 0 0-43.733333-60.288c-14.933333-7.978667-36.266667-27.733333-0.554667-28.245333a85.376 85.376 0 0 1 65.621333 43.733333 91.178667 91.178667 0 0 0 124.245334 35.2 89.770667 89.770667 0 0 1 27.221333-57.088c-94.933333-10.666667-194.133333-47.445333-194.133333-210.645333a166.058667 166.058667 0 0 1 43.733333-114.688 153.344 153.344 0 0 1 4.266667-113.066667s35.712-11.178667 117.333333 43.733333a402.218667 402.218667 0 0 1 213.333333 0c81.578667-55.466667 117.333333-43.733333 117.333334-43.733333a153.301333 153.301333 0 0 1 4.266666 113.066667 165.077333 165.077333 0 0 1 43.733334 114.688c0 163.712-99.754667 199.978667-194.688 210.645333a101.034667 101.034667 0 0 1 28.8 78.933333c0 57.088-0.512 102.954667-0.512 117.333334 0 11.221333 7.978667 24.533333 29.312 20.266666A426.88 426.88 0 0 0 512 95.872z" fill="#6563FF" p-id="7139"></path></svg>
    `
                },
                {
                    name: "YouTube",
                    searchUrl: "https://www.youtube.com/results?search_query={keyword}",
                    searchkeyName: ["search_query"],
                    matchUrl: "youtube\\.com.*?results\\?search_query=",
                    mark: "YouTube",
                    svgCode: `
      <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 40 16"><path fill="#eab308" d="m5.375 2.647l.006-.028l.016-.118l-.74-.004c-.668-.004-.873 0-.891.017c-.009.008-.24.885-.651 2.473c-.196.758-.361 1.363-.367 1.345s-.24-.883-.522-1.922a107 107 0 0 0-.524-1.901c-.01-.01-.906-.014-1.632-.008c-.105.001-.164-.205.938 3.299c.152.485.381 1.172.507 1.526c.146.408.25.724.321.987c.126.501.13.815.103 1.182c-.032.423-.036 3.413-.005 3.463c.024.038 1.425.056 1.558.02c.021-.006.035-.026.045-.139c.033-.097.036-.484.036-2.09V8.698l.09-.283c.059-.185.206-.672.328-1.082l.327-1.09c.529-1.724 1.033-3.419 1.047-3.516l.011-.079zm7.846 2.488v.107h-.017l-.009 2.953l-.009 2.863l-.229.233c-.257.261-.462.361-.648.314c-.203-.051-.197.028-.214-3.356l-.016-3.115h-1.474v.107h-.017v3.38c0 3.621 0 3.619.184 3.982c.146.29.36.431.725.479c.481.064 1-.154 1.481-.622l.209-.203v.351c0 .303.009.353.064.368c.09.025 1.206.027 1.326.002l.1-.021v-.104l.017-.003V5.114l-1.472.02zM9.483 6.661c-.14-.599-.401-1.002-.832-1.28c-.676-.437-1.449-.484-2.165-.13c-.522.258-.859.686-1.032 1.314a1.4 1.4 0 0 0-.047.231c-.044.222-.049.552-.061 2.093c-.018 2.374.01 2.656.307 3.195c.292.529.897.917 1.556.997c.198.024.6-.013.832-.078c.525-.146 1.029-.561 1.252-1.032a1.8 1.8 0 0 0 .189-.604c.065-.353.07-.925.07-2.381c0-1.857-.006-2.06-.068-2.326zM7.802 11.5a.7.7 0 0 1-.515.098c-.135-.029-.318-.241-.374-.434c-.07-.241-.075-3.594-.015-4.251c.1-.329.378-.501.682-.419c.237.064.358.212.427.523c.051.231.057.518.046 2.207c-.007 1.12-.011 1.668-.048 1.962c-.037.185-.099.235-.203.315zm28.142-3.154h.712l-.011-.645c-.011-.592-.02-.659-.099-.82c-.125-.253-.309-.366-.601-.366c-.351 0-.573.17-.678.518c-.045.148-.092 1.167-.058 1.255c.019.049.121.058.735.058m-4.76-1.467a.49.49 0 0 0-.477-.278a.9.9 0 0 0-.508.203l-.127.097v4.634l.127.097c.288.22.604.266.822.12a.48.48 0 0 0 .186-.263c.057-.164.062-.375.055-2.325c-.008-2.032-.012-2.152-.078-2.285"/><path fill="#eab308" d="M40.014 4.791c-.142-1.701-.255-2.253-.605-2.962C38.944.89 38.273.395 37.317.286c-.739-.084-3.521-.203-6.094-.26c-4.456-.099-11.782.092-12.718.331a2.25 2.25 0 0 0-1.094.634c-.591.588-.944 1.432-1.085 2.6c-.323 2.666-.33 5.886-.019 8.649c.134 1.188.41 1.96.928 2.596c.323.397.881.734 1.379.835c.35.071 2.1.169 4.65.26c.38.014 1.385.037 2.235.052c1.77.031 5.025.013 6.886-.039c1.252-.035 3.534-.128 3.961-.161c.12-.009.398-.027.618-.039c.739-.042 1.209-.196 1.65-.543c.571-.449 1.013-1.278 1.2-2.251c.177-.92.295-2.559.319-4.42c.02-1.555-.007-2.393-.119-3.741zM22.27 4.175l-.828.01l-.036 8.83l-.718.009c-.555.008-.724-.001-.737-.036c-.01-.025-.021-2.016-.026-4.424l-.009-4.379l-1.617-.02v-1.38l4.779.019l.02 1.36zm5.077 5.061v3.797h-1.308v-.4c0-.301-.011-.4-.047-.4c-.026 0-.144.099-.263.22c-.259.263-.565.474-.827.572c-.542.203-1.056.084-1.275-.293c-.201-.345-.204-.423-.204-4.005v-3.29h1.307l.01 3.098c.01 3.044.011 3.1.084 3.224c.097.164.244.209.478.144c.138-.038.232-.105.455-.327l.282-.28V5.437h1.308v3.797zm5.102 3.255c-.115.257-.372.508-.583.57c-.549.162-.99.03-1.499-.449c-.158-.149-.305-.269-.327-.269q-.04 0-.041.345v.345h-1.308V2.785h1.308v1.672c0 .919.012 1.672.027 1.672s.153-.122.307-.27c.354-.341.649-.491 1.024-.519c.669-.051 1.068.294 1.25 1.08c.057.245.062.525.062 2.798c0 2.768 0 2.78-.221 3.273zm5.535-1.52a5 5 0 0 1-.077.727c-.182.674-.666 1.152-1.366 1.348c-.942.264-1.98-.168-2.394-.997c-.232-.465-.241-.558-.241-2.831c0-1.853.007-2.081.066-2.334c.168-.715.584-1.178 1.289-1.435c.204-.074.417-.113.63-.117c.761-.016 1.515.393 1.832 1.059c.213.449.24.642.261 1.908l.019 1.136l-2.789.019l-.01.763c-.015 1.077.058 1.408.349 1.603c.244.165.62.152.824-.027c.192-.168.246-.349.265-.877l.017-.463h1.347z"/></svg>
    `
                },

                {
                    "name": "Baidu图片",
                    "searchUrl": "https://www.baidu.com/sf/vsearch?pd=image_content&from={source}&atn=page&fr=tab&tn=vsearch&ss=100&sa=tb&rsv_sug4={suggestion}&inputT={input_time}&oq={original_query}&word={keyword}",
                    "searchkeyName": ["keyword", "source", "suggestion", "input_time", "original_query"],
                    "matchUrl": /baidu\.com\/sf\/vsearch.*?word=/g,
                    "mark": "Baidutp",
                    "svgCode": ` <svg class="icon" style="width: 1em;height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="-80 -80 1184 1184" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5096" data-spm-anchor-id="a313x.search_index.i1.i0.7d613a81c9IUMe"><path d="M483.84 368.64h30.72v161.28h-71.68c-12.8-2.56-23.04-10.24-30.72-20.48-5.12-7.68-10.24-15.36-10.24-25.6-2.56-10.24-2.56-17.92 0-28.16 2.56-10.24 7.68-20.48 15.36-28.16 5.12-5.12 15.36-10.24 23.04-12.8 2.56 0 7.68-2.56 10.24-2.56h33.28v-43.52m-35.84 71.68c-5.12 2.56-12.8 7.68-15.36 12.8-2.56 5.12-2.56 10.24-2.56 17.92 0 7.68 2.56 15.36 5.12 20.48 5.12 7.68 12.8 10.24 20.48 10.24h25.6v-64h-28.16c0 2.56-2.56 2.56-5.12 2.56z m81.92-25.6h30.72v74.24c0 2.56 0 7.68 2.56 7.68 2.56 2.56 5.12 2.56 10.24 2.56h33.28v-87.04h30.72v112.64H563.2c-7.68 0-15.36-2.56-20.48-7.68-7.68-5.12-10.24-15.36-10.24-23.04-2.56-25.6-2.56-51.2-2.56-79.36z" fill="#FCFBFF" p-id="5097"></path><path d="M468.48 102.4c10.24-2.56 17.92 0 28.16 5.12 12.8 7.68 20.48 20.48 25.6 35.84 7.68 20.48 7.68 46.08-2.56 66.56-5.12 10.24-10.24 20.48-17.92 28.16-7.68 5.12-15.36 10.24-25.6 10.24s-17.92-2.56-25.6-7.68c-10.24-10.24-17.92-23.04-23.04-35.84-5.12-20.48-5.12-43.52 2.56-61.44 5.12-15.36 10.24-25.6 23.04-33.28l15.36-7.68z m138.24 10.24c7.68-2.56 12.8 0 20.48 2.56 7.68 5.12 12.8 12.8 20.48 20.48 7.68 10.24 12.8 23.04 15.36 35.84 2.56 10.24 0 17.92-2.56 28.16-2.56 10.24-7.68 20.48-12.8 30.72-5.12 7.68-12.8 15.36-20.48 20.48-7.68 5.12-17.92 7.68-25.6 5.12-10.24 0-23.04-5.12-30.72-12.8-7.68-7.68-12.8-17.92-15.36-28.16-2.56-10.24-2.56-23.04 0-33.28s5.12-20.48 10.24-28.16c5.12-10.24 12.8-17.92 20.48-23.04 5.12-10.24 12.8-15.36 20.48-17.92z m-245.76 97.28c10.24-2.56 20.48 0 28.16 5.12 12.8 7.68 23.04 17.92 30.72 33.28 2.56 5.12 5.12 10.24 5.12 17.92 2.56 15.36 2.56 30.72-2.56 46.08-2.56 10.24-7.68 20.48-15.36 25.6-10.24 7.68-23.04 12.8-35.84 12.8-10.24 0-20.48-5.12-30.72-10.24-10.24-10.24-17.92-23.04-20.48-35.84-2.56-10.24-2.56-17.92-2.56-28.16 2.56-15.36 7.68-30.72 15.36-46.08 5.12-10.24 15.36-17.92 28.16-20.48z m320 35.84c12.8-2.56 23.04 0 35.84 5.12 10.24 5.12 17.92 12.8 23.04 23.04 5.12 7.68 7.68 17.92 7.68 25.6 0 12.8 0 25.6-2.56 38.4-2.56 10.24-5.12 17.92-10.24 25.6-5.12 7.68-12.8 12.8-23.04 15.36-7.68 2.56-17.92 2.56-25.6 2.56-10.24 0-20.48-5.12-28.16-10.24-7.68-5.12-12.8-12.8-15.36-23.04-2.56-12.8-5.12-25.6-2.56-35.84 0-12.8 2.56-25.6 7.68-38.4 2.56-7.68 10.24-17.92 17.92-23.04 2.56-2.56 7.68-5.12 15.36-5.12z m-161.28 48.64c12.8-2.56 23.04 0 35.84 5.12 17.92 7.68 30.72 23.04 40.96 38.4 12.8 17.92 28.16 33.28 40.96 48.64 15.36 15.36 30.72 28.16 46.08 40.96l7.68 7.68c12.8 12.8 20.48 28.16 20.48 46.08 2.56 17.92-2.56 35.84-10.24 53.76-5.12 12.8-15.36 23.04-25.6 28.16-15.36 7.68-35.84 10.24-53.76 10.24-17.92 0-35.84-5.12-51.2-10.24-20.48-5.12-40.96-7.68-64-5.12-10.24 0-20.48 2.56-28.16 5.12-23.04 2.56-43.52 5.12-66.56 2.56-17.92 0-35.84-10.24-48.64-23.04-7.68-7.68-12.8-17.92-15.36-30.72-2.56-10.24-5.12-20.48-5.12-30.72 0-12.8 5.12-25.6 10.24-35.84 7.68-15.36 23.04-30.72 35.84-40.96 5.12-2.56 7.68-5.12 12.8-10.24 7.68-5.12 15.36-12.8 20.48-17.92 12.8-12.8 25.6-25.6 33.28-40.96 2.56-5.12 5.12-7.68 7.68-12.8 17.92-15.36 35.84-25.6 56.32-28.16m-35.84 74.24v46.08h-33.28c-2.56 0-7.68 0-10.24 2.56-7.68 2.56-15.36 7.68-23.04 12.8-7.68 7.68-12.8 17.92-15.36 28.16-2.56 10.24-2.56 17.92 0 28.16 2.56 7.68 5.12 17.92 10.24 25.6 7.68 10.24 17.92 17.92 30.72 20.48 5.12 2.56 12.8 0 17.92 0h53.76v-161.28c-10.24-2.56-20.48-2.56-30.72-2.56m46.08 46.08v81.92c0 7.68 2.56 17.92 10.24 23.04 5.12 5.12 12.8 7.68 20.48 7.68h74.24v-112.64h-30.72v87.04h-33.28c-2.56 0-7.68 0-10.24-2.56-2.56-2.56-2.56-5.12-2.56-7.68v-74.24c-7.68-2.56-17.92-2.56-28.16-2.56z" fill="#306CFF" p-id="5098"></path><path d="M448 440.32c2.56 0 5.12-2.56 7.68-2.56h28.16v64h-25.6c-7.68 0-17.92-5.12-20.48-10.24-5.12-5.12-5.12-12.8-5.12-20.48 0-5.12 0-12.8 2.56-17.92 2.56-5.12 7.68-10.24 12.8-12.8z" fill="#306CFF" p-id="5099"></path><path d="M294.4 704h33.28v-7.68h43.52v7.68h30.72v23.04h-30.72V768h-43.52v-40.96h-33.28v192H238.08v-250.88H358.4v-10.24h74.24v10.24h87.04v25.6h-225.28v10.24z m0 61.44l7.68-33.28h20.48l-7.68 33.28h-20.48z m102.4 92.16H384l-23.04 61.44h-61.44l25.6-61.44h-25.6v-81.92h53.76l2.56-5.12h64l-2.56 5.12h89.6v81.92h-15.36l-5.12 17.92h12.8v-7.68h12.8l2.56 25.6H460.8v-15.36l7.68-17.92h-15.36v40.96h64v20.48h-122.88l2.56-64z m-17.92-61.44h-25.6v10.24h25.6v-10.24z m-23.04 28.16v12.8h25.6v-12.8h-25.6z m43.52-58.88h-23.04l-5.12-33.28h20.48l7.68 33.28z m2.56 0l7.68-33.28h23.04l-7.68 33.28h-23.04z m33.28-38.4h-30.72v-23.04H435.2v-7.68h43.52v7.68h38.4v23.04h-38.4V768H435.2v-40.96z m20.48 79.36v-10.24h-25.6v10.24h25.6z m0 17.92h-25.6v12.8h25.6v-12.8z m58.88-58.88h-25.6l-7.68-33.28h25.6l7.68 33.28zM545.28 663.04h276.48v256H545.28v-256z m53.76 28.16v202.24H768V691.2h-168.96z m84.48 61.44l20.48-25.6h-102.4l17.92-33.28h56.32l-5.12 7.68h92.16v20.48l-20.48 33.28 25.6 51.2h-61.44l-23.04-46.08-20.48 46.08h-61.44l23.04-51.2-17.92-20.48H665.6l17.92 17.92z m-79.36 58.88l158.72 10.24v25.6l-158.72-10.24v-25.6z m0 64v-25.6l158.72 10.24v25.6l-158.72-10.24z" fill="#306CFF" p-id="5100"></path></svg> `
                },

                {
                    name: "淘宝",
                    enabled: true,
                    searchUrl: "https://www.ebay.com/sch/i.html?_nkw={keyword}",
                    searchkeyName: ['_nkw'],
                    matchUrl: "www\.ebay\.com/sch/i\.html.*?_nkw=",
                    mark: "TaoBao",
                    svgCode: `
<svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M6.056 12.132v-4.92h1.2v3.026c.59-.703 1.402-.906 2.202-.906 1.34 0 2.828.904 2.828 2.855 0 .233-.015.457-.06.668.24-.953 1.274-1.305 2.896-1.344.51-.018 1.095-.018 1.56-.018v-.135c0-.885-.556-1.244-1.53-1.244-.72 0-1.245.3-1.305.81h-1.275c.136-1.29 1.5-1.62 2.686-1.62 1.064 0 1.995.27 2.415 1.02l-.436-.84h1.41l2.055 4.125 2.055-4.126H24l-3.72 7.305h-1.346l1.07-2.04-2.33-4.38c.13.255.2.555.2.93v2.46c0 .346.01.69.04 1.005H16.8a6.543 6.543 0 01-.046-.765c-.603.734-1.32.96-2.32.96-1.48 0-2.272-.78-2.272-1.695 0-.15.015-.284.037-.405-.3 1.246-1.36 2.086-2.767 2.086-.87 0-1.694-.315-2.2-.93 0 .24-.015.494-.04.734h-1.18c.02-.39.04-.855.04-1.245v-1.05h-4.83c.065 1.095.818 1.74 1.853 1.74.718 0 1.355-.3 1.568-.93h1.24c-.24 1.29-1.61 1.725-2.79 1.725C.95 15.009 0 13.822 0 12.232c0-1.754.982-2.91 3.116-2.91 1.688 0 2.93.886 2.94 2.806v.005zm9.137.183c-1.095.034-1.77.233-1.77.95 0 .465.36.97 1.305.97 1.26 0 1.935-.69 1.935-1.814v-.13c-.45 0-.99.006-1.484.022h.012zm-6.06 1.875c1.11 0 1.876-.806 1.876-2.02s-.768-2.02-1.893-2.02c-1.11 0-1.89.806-1.89 2.02s.765 2.02 1.875 2.02h.03zm-4.35-2.514c-.044-1.125-.854-1.546-1.725-1.546-.944 0-1.694.474-1.815 1.546z"></path></svg>
                    `
                    },
                {
                    name: "PubMed",
                    searchUrl: "https://pubmed.ncbi.nlm.nih.gov/?term={keyword}",
                    searchkeyName: ["term"],
                    matchUrl: "pubmed\\.ncbi\\.nlm\\.nih\\.gov.*?term={keyword}",
                    mark: "PubMed",
                    svgCode: `
      <svg xmlns="http://www.w3.org/2000/svg" width="120" height="160" viewBox="0 0 384 512"><path fill="#0284c7" d="M120.193 177.738C123.188 77.35 64.278 64 64.278 64v31.262c-23.443-11.65-45.95-13.332-45.95-13.332v255.179s98.105-11.417 98.105 84.41c0 0 36.584-153.375 248.86 26.481c0-61.593.378-216.94.378-268.285c-195.715-142.584-245.478-1.977-245.478-1.977m187.206 173.82l-12.376-97.654h-.448l-40.728 97.654h-17.56l-38.936-97.654h-.448l-14.176 97.654h-43.875l28.801-169.619h43.427l34.435 90.65l36.466-90.65h43.875l25.682 169.62z"/></svg>
    `
                },
                {
                    name: "DuckDuckGo",
                    searchUrl: "https://duckduckgo.com/?q={keyword}",
                    searchkeyName: ["q"],
                    matchUrl: "duckduckgo\\.com.*?q={keyword}",
                    mark: "DuckDuckGo",
                    svgCode: `
      <svg class="icon" style="width: 1em;height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="940"><path d="M65.3 509.6C65.3 756.7 265.6 957 512.7 957c247.1 0 447.4-200.3 447.4-447.4 0-247.1-200.3-447.4-447.4-447.4-247.1 0.1-447.4 200.4-447.4 447.4z" fill="#CC6633" p-id="941"></path><path d="M98.2 512c0 227.6 184.5 412.1 412.1 412.1 227.6 0 412.1-184.5 412.1-412.1 0-227.6-184.5-412.1-412.1-412.1C282.7 99.9 98.2 284.4 98.2 512z" fill="#FFFFFF" p-id="942"></path><path d="M899.3 515.8c0 183.7-127.2 338.1-298.1 379.6-10.4-19.8-20.3-39.1-28.7-55.1 29.2 25.9 64.5 35.8 84.3 23.5 25.4-15.5 34.4-72.5-5.2-124.3-12.2 0.5-28.3 2.4-46.2 7.5-25.4 7.5-44.3 19.3-56.5 28.3-10.8-16.5-25.9-44.7-33.4-82.4-6.1-30.6-4.7-57-2.4-74.9 13.7 9.4 104.5 40 149.8 39.1 45.2-0.9 119.1-28.3 111.1-50.4-8-22.1-81.5 19.3-158.7 12.2-57-5.2-66.9-30.6-54.2-49.4 16-23.5 44.7 4.2 92.3-9.9 47.6-14.1 114.4-39.6 138.9-53.7 57-32-24-45.2-42.9-36.3-18.4 8.5-81 24.5-110.7 31.6 16.5-57.9-23.1-158.7-67.3-203-14.6-14.6-36.3-23.5-61.2-28.3-9.4-13.2-25-25.9-47.1-37.2-42.4-22.1-90.4-30.1-137.5-22.1h-2.4c-5.6 0.9-8.9 3.3-13.7 3.8 5.6 0.5 26.8 10.4 40.5 16-6.6 2.8-15.5 4.2-22.6 7.1-2.8 0.5-5.2 0.9-8 2.4-6.6 2.8-11.8 14.1-11.3 19.8 32-3.3 79.6-0.9 114.4 9.4-24.5 3.3-47.1 9.9-63.6 18.4-0.5 0.5-0.9 0.5-1.9 0.9-1.9 0.9-4.2 1.4-5.7 2.4-52.3 27.3-75.3 91.8-61.7 169.1 12.2 69.7 63.6 309.4 87.6 423.4-151.2-51.8-260-196.9-260-367.3 0-216.2 175.2-390.9 390.9-390.9 216-0.2 391.2 175 391.2 390.7z" fill="#DE5833" p-id="943"></path><path d="M368.1 452.2c0 16.1 13.1 29.2 29.2 29.2s29.2-13.1 29.2-29.2-13.1-29.2-29.2-29.2-29.2 13.1-29.2 29.2z m0 0M590.8 410.3c-13.7-0.5-25.4 10.4-25.9 24-0.5 13.7 10.4 25.4 24 25.9h1.9c13.7 0 25-11.3 25-25 0-13.6-11.3-24.9-25-24.9z m-185.5-41.9s-21.7-9.9-42.9 3.3c-21.2 13.7-20.3 27.3-20.3 27.3s-11.3-25 18.8-37.2c29.8-12.7 44.9 6.6 44.4 6.6z m200.6-1.9s-15.5-8.9-27.8-8.9c-25 0.5-32 11.3-32 11.3s4.2-26.4 36.3-21.2c10.3 2.3 19.3 8.9 23.5 18.8z m0 0" fill="#336699" p-id="944"></path><path d="M544.7 521.4c22.6-8.9 32.5-8.9 68.3-16 22.6-4.7 52.3-10.8 87.1-21.7 27.8-8.5 33.9-12.7 51.8-14.1 24-1.9 57.5 0.9 61.2 14.1 1.9 6.1-4.2 12.7-9.4 18.8-13.2 15.1-29.7 20.3-56.5 28.3-33.4 10.4-35.8 10.4-47.1 14.1-53.7 17-50.9 21.7-70.6 23.5-35.8 3.3-56-11.8-65.9 0-6.1 7.5-4.2 20.3 0 28.3 6.1 10.8 18.4 14.1 37.7 18.8 23.5 5.6 42.4 5.2 47.1 4.7 17-0.9 29.2-4.2 47.1-9.4 37.7-10.8 48.5-19.8 65.9-14.1 3.3 0.9 17.9 5.7 18.8 14.1 1.9 17-49.4 40-94.2 47.1-43.3 6.6-79.6-2.4-89.5-4.7-6.6-1.9-18.4-5.6-42.4-14.1-27.3-9.4-34.4-12.7-42.4-18.8-8.5-6.6-21.2-16.5-23.5-33-2.4-17 8.5-30.6 14.1-37.7 8.5-10.3 19.8-19.2 42.4-28.2z m0 0" fill="#FDD20A" p-id="945"></path><path d="M521.1 775.7c3.8-3.3 8.5-6.6 14.1-9.4 10.8-5.6 20.7-8.5 28.3-9.4-1.4 3.3-3.3 6.1-4.7 9.4 13.2-6.6 27.3-12.7 42.4-18.8 23.1-9.4 45.2-17 65.9-23.5 7.1 11.3 20.3 33.9 23.5 65.9 3.3 32.5-4.7 58.4-9.4 70.6-5.7 3.3-30.1 16-61.2 9.4s-47.6-27.8-51.8-33c-1.4 4.7-3.3 9.4-4.7 14.1-5.2 0.9-13.7 1.9-23.5 0-10.8-1.9-18.8-6.6-23.5-9.4-22.1 10.8-43.8 22.1-65.9 33-3.3 4.2-9 6.1-14.1 4.7-7.1-1.9-9.4-8.9-9.4-9.4-5.2-15.5-10.4-34.9-14.1-56.5-3.8-23.1-4.7-43.8-4.7-61.2-1.9-5.7 0.5-11.8 4.7-14.1 4.2-2.4 8.9-0.5 9.4 0 17.4 2.4 41 7.1 65.9 18.8 12.6 6.1 23.9 12.7 32.8 18.8z m0 0" fill="#66CC33" p-id="946"></path></svg>
    `
                },

                {
                    name: "矢量图库",
                    searchUrl: "https://www.iconfont.cn/search/index?searchType=icon&q={keyword}",
                    searchkeyName: ["q"],
                    matchUrl: /iconfont\.cn\/search\/index\?searchType=icon&q=/g,
                    mark: "iconfont",
                    svgCode: `
<svg class="icon" style="width: 1em;height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1090 1090" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="37714"><path d="M850.2784 547.9936c5.4784 7.5264 8.192 16.4352 7.5264 25.344-7.5264 183.7568-159.1808 330.4448-345.088 330.4448-185.9584 0-337.6128-146.688-345.1904-330.4448a38.1952 38.1952 0 0 1 7.5776-25.344L483.84 138.752a39.3216 39.3216 0 0 1 62.464 0l303.9744 409.2416z" fill="#00F9E5" p-id="37715"></path><path d="M402.2272 683.7248a170.2912 170.2912 0 0 1-240.128-11.6736 169.9328 169.9328 0 1 1 251.8016-228.2496 169.3184 169.3184 0 0 1-11.6736 239.9232z" fill="#FFFFFF" p-id="37716"></path><path d="M288.3072 743.3728a185.0368 185.0368 0 0 1-137.9328-61.0304c-68.608-76.0832-63.1296-193.9968 13.056-262.5536a182.7328 182.7328 0 0 1 133.7856-47.9744 186.9824 186.9824 0 0 1 129.024 61.0304c68.608 76.0832 63.1296 193.9968-13.056 262.5536a185.4976 185.4976 0 0 1-124.8768 47.9744z m-0.6656-340.0192c-38.4 0-74.8032 13.7216-103.6288 39.7312a154.624 154.624 0 0 0-10.9568 218.0096 152.576 152.576 0 0 0 107.008 50.688 153.6 153.6 0 0 0 111.1552-39.7312 154.624 154.624 0 0 0 11.008-217.9584 152.576 152.576 0 0 0-107.008-50.7392h-7.5776z" fill="#0C6066" p-id="37717"></path><path d="M226.56 489.728a89.2416 89.2416 0 0 0-6.144 126.8224 89.4464 89.4464 0 0 0 126.9248 6.144c12.288-10.9568 20.5824-24.6784 25.344-39.0656L226.56 489.728z" fill="#1E1E1E" p-id="37718"></path><path d="M282.112 382.7712l188.0576-258.4576c10.24-13.6704 26.0608-21.9136 43.2128-21.9136 17.152 0 32.9216 8.192 43.2128 21.9136L741.888 383.488l-37.0176 2.7136-172.2368-242.688a23.0912 23.0912 0 0 0-36.352 0l-180.48 246.784-33.5872-7.5264z m-58.9824 333.824c15.7696 30.208 37.0688 57.6 62.464 82.2784a326.5536 326.5536 0 0 0 225.7408 91.1872c84.3776 0 164.6592-32.256 225.7408-91.136a319.6416 319.6416 0 0 0 65.8432-89.1392l44.5952-24.0128a361.0112 361.0112 0 0 1-88.4736 135.7312 357.6832 357.6832 0 0 1-495.4112 0.6656 356.352 356.352 0 0 1-87.1424-131.584l46.6432 26.0608z" fill="#0C6066" p-id="37719"></path><path d="M444.0576 626.176a170.3936 170.3936 0 0 0-34.9696-187.904 171.8272 171.8272 0 0 0-233.984-8.192c-4.8128 4.8128-9.6256 8.9088-14.4384 14.3872-1.3312 1.3824-0.6656 3.4304 0.7168 4.096l277.8624 178.944c1.3824 0.6656 4.096 0 4.8128-1.3824z" fill="#308DF6" p-id="37720"></path><path d="M444.0576 626.176l14.4384 6.144a186.3168 186.3168 0 0 0-37.7344-205.6704A187.136 187.136 0 0 0 288.256 371.8144c-43.9296 0-88.5248 15.0528-123.4944 46.592-5.4784 4.8128-11.008 10.2912-15.7696 15.104a19.2 19.2 0 0 0-4.8128 13.0048c0 6.144 2.7136 12.3392 8.9088 15.7696l277.1968 178.2272c3.4304 2.048 6.8608 2.7648 10.2912 2.7648a19.3536 19.3536 0 0 0 10.2912-2.7648 29.2352 29.2352 0 0 0 7.5776-8.192l-14.4384-6.144-14.3872-6.1952 11.6736 5.4784-6.8608-10.9568a12.1856 12.1856 0 0 0-4.8128 5.4784l11.6736 5.4784-6.8608-10.9568 6.8608 10.9568v-13.0048a11.6224 11.6224 0 0 0-6.8608 2.048l6.8608 10.9568v-13.0048 13.0048l6.8608-10.9568a13.2608 13.2608 0 0 0-6.8608-2.048v13.0048l6.8608-10.9568-277.9136-178.944-6.8608 10.9568h13.056c0-4.096-2.048-8.192-6.144-10.9568l-6.912 10.9568h13.056-13.056l9.6256 8.9088a14.4384 14.4384 0 0 0 3.4304-8.9088h-13.056l9.6256 8.9088c4.096-4.096 8.192-8.9088 13.0048-13.0048a154.2144 154.2144 0 0 1 102.2464-38.4c39.7824 0 80.2816 15.104 109.7728 45.2608 30.208 30.1568 44.5952 69.2224 44.5952 108.288 0 21.248-4.096 42.496-13.0048 61.696l14.3872 6.8608z" fill="#0C6066" p-id="37721"></path><path d="M621.7728 683.7248a170.2912 170.2912 0 0 0 240.128-11.6736 169.9328 169.9328 0 1 0-251.8016-228.2496 169.3184 169.3184 0 0 0 11.6736 239.9232z" fill="#FFFFFF" p-id="37722"></path><path d="M610.816 695.3984c-76.1856-68.608-81.664-186.4704-13.056-262.5536a185.6512 185.6512 0 0 1 129.024-61.0304 181.76 181.76 0 0 1 133.7856 47.9744c76.1856 68.608 81.664 186.4704 13.056 262.5536a185.0368 185.0368 0 0 1-137.9328 61.0304 185.4976 185.4976 0 0 1-124.928-47.9744z m117.2992-292.0448a153.9072 153.9072 0 0 0-107.008 50.688 154.624 154.624 0 0 0 10.9568 218.0096 154.624 154.624 0 0 0 111.1552 39.7824 153.9072 153.9072 0 0 0 107.008-50.688 154.624 154.624 0 0 0-10.9056-218.0608 153.088 153.088 0 0 0-103.6288-39.7312h-7.5776z" fill="#0C6066" p-id="37723"></path><path d="M797.44 489.0112c37.0688 33.6384 39.7824 90.5216 6.144 126.8224a89.4464 89.4464 0 0 1-126.9248 6.1952 89.8048 89.8048 0 0 1-25.344-39.0656l146.1248-93.952z" fill="#1E1E1E" p-id="37724"></path><path d="M579.9424 625.4592a170.3936 170.3936 0 0 1 34.9696-187.8528 171.8272 171.8272 0 0 1 233.984-8.192c4.8128 4.7616 9.6256 8.9088 14.4384 14.336 1.3312 1.4336 0.6656 3.4816-0.7168 4.1472l-277.8624 178.944c-2.048 1.3312-4.096 0.6656-4.8128-1.3824z" fill="#308DF6" p-id="37725"></path><path d="M579.9424 625.4592l14.3872-6.144a148.7872 148.7872 0 0 1-13.0048-61.7472c0-39.0656 14.3872-78.1312 44.544-108.288a153.7024 153.7024 0 0 1 109.824-45.2608c36.352 0 72.704 13.056 102.2464 38.4 4.8128 4.096 8.9088 8.192 13.0048 13.0048l9.6256-8.9088h-13.056c0 2.7648 1.3824 6.144 3.4304 8.9088l9.6256-8.9088h-13.056 13.056l-6.8608-10.9568c-3.4304 2.7648-6.144 6.8608-6.144 10.9568h13.0048l-6.8608-10.9568-277.9136 178.2272 6.8608 11.008v-13.056a13.2608 13.2608 0 0 0-6.8608 2.048l6.8608 11.008v-13.056 13.056l6.8608-11.008a11.6224 11.6224 0 0 0-6.8608-2.048v13.056l6.8608-11.008-6.8608 11.008 11.6736-5.5296c-1.3824-2.7136-2.7136-4.7616-4.8128-5.4784l-6.8608 11.008 11.6736-5.5296-14.3872 6.144-14.4384 6.1952a14.848 14.848 0 0 0 7.5776 8.2432 17.92 17.92 0 0 0 10.24 2.7648 19.3536 19.3536 0 0 0 10.3424-2.7648l277.8624-178.8928a18.3296 18.3296 0 0 0 8.2432-15.7696 17.6128 17.6128 0 0 0-4.8128-12.3392c-4.7616-5.5296-10.24-10.2912-15.7696-15.104a187.392 187.392 0 0 0-123.4944-46.592c-48.0256 0-96.768 18.4832-132.4544 54.784a186.3168 186.3168 0 0 0-37.7344 205.6704l14.4384-6.144z" fill="#0C6066" p-id="37726"></path></svg>
`
                },

                {
                    name: "搜狗",
                    enabled: true,
                    searchUrl: "https://you.com/search?q={keyword}",
                    searchkeyName: ['q'],
                    matchUrl: "you\.com/search.*?q=",
                    mark: "SoGou",
                    svgCode: `
<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="100px" height="100px"><linearGradient id="C_pbyvtxEsx10IXWAmi4pa" x1="6" x2="42" y1="24" y2="24" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5340ff"/><stop offset=".384" stop-color="#4a31ff"/><stop offset="1" stop-color="#3811ff"/></linearGradient><path fill="url(#C_pbyvtxEsx10IXWAmi4pa)" d="M35,6H13c-3.866,0-7,3.134-7,7v22c0,3.866,3.134,7,7,7h22c3.866,0,7-3.134,7-7V13	C42,9.134,38.866,6,35,6z"/><g opacity=".07"><path d="M18.397,19.831c0.056-0.254,0.141-0.639-0.11-0.957c-0.109-0.138-0.322-0.305-0.715-0.313 c-0.067-0.001-0.139-0.013-0.213-0.024c-0.131-0.019-0.265-0.037-0.392-0.037c-0.348,0-0.948,0.135-1.061,1.04 c-0.079,0.636-0.369,1.186-0.862,1.635c-0.604,0.551-1.322,0.843-2.076,0.843c-1.416,0-2.586-1.009-2.913-2.511 c-0.179-0.821-0.699-0.994-1.104-0.994c-0.108,0-0.22,0.012-0.332,0.025c-0.071,0.008-0.142,0.018-0.209,0.018 c-0.32,0-0.565,0.099-0.728,0.295c-0.252,0.303-0.183,0.679-0.137,0.928l0.02,0.117c0.305,2.149,1.623,3.651,3.81,4.342 c0.371,0.117,0.37,0.146,0.359,0.493c-0.02,0.622-0.019,1.244-0.019,1.866c0,0.578,0.001,1.156-0.015,1.734 c-0.011,0.375,0.08,0.656,0.278,0.859c0.264,0.272,0.631,0.309,0.956,0.309c0.307-0.001,0.754-0.002,1.056-0.322 c0.198-0.21,0.283-0.497,0.261-0.877c-0.025-0.426-0.019-0.849-0.013-1.298c0.003-0.197,0.005-0.395,0.005-0.592V25.91h-0.014 c0-0.015,0-0.03,0.001-0.046c0.005-0.43,0.01-0.874-0.012-1.318c-0.006-0.13,0.007-0.176,0.01-0.184c0,0,0,0,0,0 c0.004,0,0.051-0.031,0.193-0.068c2.053-0.537,3.568-2.207,3.954-4.358L18.397,19.831z"/><path d="M23.381,18.249c-3.171,0-5.751,2.58-5.751,5.751c0,3.171,2.58,5.751,5.751,5.751c3.171,0,5.751-2.58,5.751-5.751 C29.133,20.829,26.553,18.249,23.381,18.249z M26.681,24c0,1.819-1.48,3.299-3.3,3.299c-1.819,0-3.299-1.48-3.299-3.299 c0-1.819,1.48-3.299,3.299-3.299C25.201,20.701,26.681,22.181,26.681,24z"/><path d="M39.274,18.501c-0.676,0-1.226,0.55-1.226,1.226v4.18c0,1.731-1.409,3.14-3.14,3.14s-3.14-1.408-3.14-3.14v-4.18 c0-0.676-0.55-1.226-1.226-1.226s-1.226,0.55-1.226,1.226v4.18c0,3.083,2.508,5.592,5.592,5.592s5.592-2.508,5.592-5.592v-4.18 C40.5,19.051,39.95,18.501,39.274,18.501z"/></g><path d="M39.274,18.001c-0.952,0-1.726,0.774-1.726,1.726v4.18c0,1.456-1.184,2.64-2.64,2.64	s-2.64-1.184-2.64-2.64v-4.18c0-0.952-0.774-1.726-1.726-1.726c-0.952,0-1.726,0.774-1.726,1.726v1.197	c-1.076-1.893-3.107-3.175-5.435-3.175c-1.737,0-3.309,0.713-4.443,1.86c0.035-0.302,0.019-0.691-0.259-1.044	c-0.176-0.223-0.509-0.492-1.097-0.504c-0.047-0.001-0.098-0.011-0.151-0.019C17.303,18.023,17.143,18,16.967,18	c-0.847,0-1.443,0.566-1.557,1.478c-0.064,0.514-0.301,0.961-0.703,1.328c-0.511,0.466-1.112,0.712-1.739,0.712	c-0.977,0-2.106-0.655-2.424-2.118c-0.192-0.882-0.772-1.387-1.593-1.387c-0.127,0-0.259,0.013-0.39,0.029	c-0.051,0.006-0.102,0.015-0.151,0.015c-0.592,0-0.931,0.259-1.112,0.476c-0.402,0.483-0.296,1.061-0.245,1.338l0.017,0.097	c0.334,2.353,1.771,3.995,4.155,4.749c0.003,0.001,0.007,0.002,0.01,0.003c-0.02,0.626-0.019,1.253-0.019,1.88	c0,0.573,0.001,1.147-0.015,1.72c-0.014,0.51,0.127,0.921,0.419,1.222C12.067,30,12.674,30,12.934,30	c0.347-0.001,0.971-0.002,1.42-0.48c0.293-0.311,0.426-0.731,0.396-1.249c-0.024-0.408-0.018-0.823-0.012-1.262	c0.003-0.2,0.005-0.399,0.005-0.599v-1.002h-0.009c0.001-0.224-0.001-0.452-0.008-0.681c0.949-0.28,1.777-0.794,2.452-1.466	C17.149,23.505,17.13,23.75,17.13,24c0,3.447,2.804,6.251,6.251,6.251c2.694,0,4.988-1.716,5.865-4.11	c0.893,2.256,3.092,3.857,5.662,3.857c3.359,0,6.092-2.733,6.092-6.092v-4.18C41,18.775,40.226,18.001,39.274,18.001z M26.181,24	c0,1.544-1.256,2.799-2.8,2.799c-1.544,0-2.799-1.256-2.799-2.799c0-1.544,1.256-2.799,2.799-2.799	C24.925,21.201,26.181,22.456,26.181,24z" opacity=".05"/><path fill="#f7f7fe" d="M13.743,26.411c0,0.64-0.029,1.281,0.008,1.919c0.037,0.633-0.325,0.669-0.808,0.67 c-0.473,0.001-0.759-0.083-0.743-0.653c0.034-1.199-0.004-2.4,0.034-3.599c0.017-0.551-0.106-0.796-0.708-0.986 c-1.913-0.605-3.173-1.87-3.466-3.936c-0.046-0.327-0.217-0.77,0.35-0.77c0.438,0,0.976-0.274,1.156,0.557 c0.614,2.824,3.731,3.832,5.814,1.932c0.578-0.527,0.928-1.189,1.022-1.943c0.107-0.857,0.728-0.55,1.16-0.541 c0.563,0.011,0.376,0.483,0.321,0.788c-0.336,1.872-1.628,3.449-3.588,3.962c-0.47,0.123-0.598,0.318-0.576,0.761 c0.03,0.612,0.008,1.226,0.008,1.839C13.732,26.411,13.737,26.411,13.743,26.411z"/><path fill="#f7f7fe" d="M23.381,29.251c-2.895,0-5.251-2.356-5.251-5.251c0-2.895,2.356-5.251,5.251-5.251 c2.896,0,5.251,2.356,5.251,5.251C28.633,26.896,26.277,29.251,23.381,29.251z M23.381,20.201c-2.095,0-3.799,1.704-3.799,3.799 s1.704,3.8,3.799,3.8s3.8-1.704,3.8-3.8S25.476,20.201,23.381,20.201z"/><path fill="#f7f7fe" d="M34.908,28.999c-2.808,0-5.092-2.284-5.092-5.092v-4.18c0-0.401,0.325-0.726,0.726-0.726 s0.726,0.325,0.726,0.726v4.18c0,2.007,1.633,3.64,3.64,3.64c2.007,0,3.64-1.633,3.64-3.64v-4.18c0-0.401,0.325-0.726,0.726-0.726 c0.401,0,0.726,0.325,0.726,0.726v4.18C40,26.715,37.716,28.999,34.908,28.999z"/></svg>
                    `
                    },

                {
                    name: "猫脚本",
                    searchUrl: "https://scriptcat.org/zh-CN/search?keyword={keyword}",
                    searchkeyName: ["keyword"],
                    matchUrl: /scriptcat\.org\/zh-CN\/search\?keyword=/g,
                    mark: "ScriptCat",
                    svgCode: `
<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="-20 -20 168 168"><image width="128" height="128" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAG1BMVEVMaXERldsSltsSltsSltsRltsSl90Rl9wSlttF1ZwEAAAACHRSTlMATXih5MctGii4iq0AAAAJcEhZcwAACxMAAAsTAQCanBgAAAKeSURBVHic7ZvrdoMgEIT3wmXf/4l7TNuYpCKDslLPYX6L81VwWDeUaGpqampqQ8yZuiszg1dqMLMofe0lmllQ6FL7Vk+Eh/0i4J78c2lHhKe9mdWnQdeLzUIHBFlm9Kn6JMTXy88jvNubxeoI+9QZhE97M6uOCdYNYcPeQusUHEfYskemQLeGtSNs2yOLULcHtiGU7BEAKQ3FEcr2SBJxeTCGsGePBFHaG17/E3Ye4EOpCpArd9hFqNmbAdus2VGEuj2QQ7SVRBsI/EeIPZBDtJ1EvVTPISoHQQ/pHQDEEwCJMvYE4DsAZE8AqNw3RyH+BCXRMSE5RJ5JhOQQeQaB3gNA/ACwkor9APgeAMkPoF6QPeQHQDQ2iQIIEMfmEPkFgd4FQLwA0K9L9gLguwCkwTlEbkmE+lMYm0PklUTxPgA6NofIK4nwLhePjQEaD5AG5xA5JRHuT2FsDpFPECAxwMEsRGEfAJa43J8HtYeAQFKzoQTpKv/SCynXAcj13al38f8EIMfmEBZJchVAcV+Wwf5EmdW1W28WtX42IYkPRVSBN2TxAGj56ZPHFkTkk8oNBRG5dMybDsaYg1r8KYytyMijJsM/zJzew7YDCGnsS0AOi6BtCVD/+hD/NHbKwpYcXJQ7z0FoiaGcuPuGGFU4ARB5sfbrli8YuXqU0FlBywjqbf6DwKOL0lgAiFcBFFIxX+ZfCIV0HYAM/jIyHtwfiNiBVhXO6fTCjGkJt7eHG8o7s6yx+bsyTxLE39RZ4z3u7UuJn9ZdCJ7+xfvXdYbg0/+g9KoipDdBN3+iI53L3bXWLmlMqR6n0t+Vm+ZhZ88/LoYRtO/TX5URBqAHc0b59b8V/iqKq/u3EovoR+kaoqqsAT41NTU1NTU1Rbi+AHOl+uItChMBAAAAAElFTkSuQmCC"/></svg>
`
                },

                {
                    name: "360搜索",
                    enabled: true,
                    searchUrl: "https://www.bing.com/search?showconv=1&sendquery=1&q={keyword}",
                    searchkeyName: ['q'],
                    matchUrl: "www\.bing\.com/search.*?q=",
                    mark: "360Search",
                    svgCode: `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48"><path d="M34.142 7.325A4.63 4.63 0 0029.7 4H28.35a4.63 4.63 0 00-4.554 3.794L21.48 20.407l.575-1.965a4.63 4.63 0 014.444-3.33h7.853l3.294 1.282 3.175-1.283h-.926a4.63 4.63 0 01-4.443-3.325l-1.31-4.461z" fill="url(#prefix__paint0_radial_56201_15503)"/><path d="M14.33 40.656A4.63 4.63 0 0018.779 44h2.87a4.63 4.63 0 004.629-4.51l.312-12.163-.654 2.233a4.63 4.63 0 01-4.443 3.329h-7.919l-2.823-1.532-3.057 1.532h.912a4.63 4.63 0 014.447 3.344l1.279 4.423z" fill="url(#prefix__paint1_radial_56201_15503)"/><path d="M29.5 4H13.46c-4.583 0-7.332 6.057-9.165 12.113C2.123 23.29-.72 32.885 7.503 32.885h6.925a4.63 4.63 0 004.456-3.358 2078.617 2078.617 0 014.971-17.156c.843-2.843 1.544-5.284 2.621-6.805C27.08 4.714 28.086 4 29.5 4z" fill="url(#prefix__paint2_linear_56201_15503)"/><path d="M29.5 4H13.46c-4.583 0-7.332 6.057-9.165 12.113C2.123 23.29-.72 32.885 7.503 32.885h6.925a4.63 4.63 0 004.456-3.358 2078.617 2078.617 0 014.971-17.156c.843-2.843 1.544-5.284 2.621-6.805C27.08 4.714 28.086 4 29.5 4z" fill="url(#prefix__paint3_linear_56201_15503)"/><path d="M18.498 44h16.04c4.582 0 7.332-6.058 9.165-12.115 2.171-7.177 5.013-16.775-3.208-16.775h-6.926a4.63 4.63 0 00-4.455 3.358 2084.036 2084.036 0 01-4.972 17.16c-.842 2.843-1.544 5.285-2.62 6.806-.604.852-1.61 1.566-3.024 1.566z" fill="url(#prefix__paint4_radial_56201_15503)"/><path d="M18.498 44h16.04c4.582 0 7.332-6.058 9.165-12.115 2.171-7.177 5.013-16.775-3.208-16.775h-6.926a4.63 4.63 0 00-4.455 3.358 2084.036 2084.036 0 01-4.972 17.16c-.842 2.843-1.544 5.285-2.62 6.806-.604.852-1.61 1.566-3.024 1.566z" fill="url(#prefix__paint5_linear_56201_15503)"/><defs><radialGradient id="prefix__paint0_radial_56201_15503" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(-10.96051 -13.38922 12.59013 -10.30637 38.005 20.514)"><stop offset=".096" stop-color="#00AEFF"/><stop offset=".773" stop-color="#2253CE"/><stop offset="1" stop-color="#0736C4"/></radialGradient><radialGradient id="prefix__paint1_radial_56201_15503" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="rotate(51.84 -28.201 27.85) scale(15.9912 15.5119)"><stop stop-color="#FFB657"/><stop offset=".634" stop-color="#FF5F3D"/><stop offset=".923" stop-color="#C02B3C"/></radialGradient><radialGradient id="prefix__paint4_radial_56201_15503" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="rotate(109.274 16.301 20.802) scale(38.3873 45.9867)"><stop offset=".066" stop-color="#8C48FF"/><stop offset=".5" stop-color="#F2598A"/><stop offset=".896" stop-color="#FFB152"/></radialGradient><linearGradient id="prefix__paint2_linear_56201_15503" x1="12.5" y1="7.5" x2="14.788" y2="33.975" gradientUnits="userSpaceOnUse"><stop offset=".156" stop-color="#0D91E1"/><stop offset=".487" stop-color="#52B471"/><stop offset=".652" stop-color="#98BD42"/><stop offset=".937" stop-color="#FFC800"/></linearGradient><linearGradient id="prefix__paint3_linear_56201_15503" x1="14.5" y1="4" x2="15.75" y2="32.885" gradientUnits="userSpaceOnUse"><stop stop-color="#3DCBFF"/><stop offset=".247" stop-color="#0588F7" stop-opacity="0"/></linearGradient><linearGradient id="prefix__paint5_linear_56201_15503" x1="42.586" y1="13.346" x2="42.569" y2="21.215" gradientUnits="userSpaceOnUse"><stop offset=".058" stop-color="#F8ADFA"/><stop offset=".708" stop-color="#A86EDD" stop-opacity="0"/></linearGradient></defs></svg>
                    `
                    },

                {
                    name: "Startpage",
                    searchUrl: "https://www.startpage.com/sp/search?query={keyword}",
                    searchkeyName: ["query"],
                    matchUrl: /startpage\.com.*?query=/g,
                    mark: "Startpage",
                    svgCode: `
<svg class="icon" style="width: 1em;height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="21932"><path d="M849.728 748.224l-157.696-105.088a281.856 281.856 0 0 0 38.592-140.672c0-157.312-128-285.312-285.312-285.312-157.376 0-285.376 128-285.376 285.312s128 285.312 285.376 285.312a283.648 283.648 0 0 0 209.152-92.8l159.68 106.496a31.808 31.808 0 0 0 44.352-8.896 31.872 31.872 0 0 0-8.768-44.352z m-404.352-24.384A221.632 221.632 0 0 1 224 502.464c0-122.048 99.328-221.312 221.376-221.312s221.312 99.264 221.312 221.312a221.568 221.568 0 0 1-221.312 221.376z" fill="#F08218" p-id="21933"></path></svg>
`
                },

                {
                    name: "WolframAlpha",
                    searchUrl: "https://www.wolframalpha.com/input?i={keyword}",
                    searchkeyName: ["i"],
                    matchUrl: /wolframalpha\.com.*?i=/g,
                    mark: "WolframAlpha",
                    svgCode: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-165 -92.84 1080 607.68"><g fill="none" stroke-width="2"><path stroke="#e4959a" d="m375.21 0-.17 361.92q0 .84-.75.48l-.6-.29q-.4-.19-.84-.15l-5.44.43q-.5.04-.88-.27c-1.29-1.01-6.75-.84-8.62-.91q-.58-.02-.6.56l-.08 2.58q-.02.65.63.65h1.64q.5 0 .5.5v16.51q0 .45.45.5l1.79.18q.76.08.76-.68v-16.19a.93.93 0 0 1 1.2-.89l4.05 1.22q.46.14.48.63l.59 16.14q.03.76.78.68l1.63-.16q.62-.06.59-.68l-.54-16.58q-.02-.36.34-.41l2.13-.31" vector-effect="non-scaling-stroke"/><path stroke="#f7c7c7" d="m374.25 365.46.46.04" vector-effect="non-scaling-stroke"/><path stroke="#e4959a" d="M374.71 365.5c.18.24.29.37.29.69q-.11 27.91.19 55.81" vector-effect="non-scaling-stroke"/><path stroke="#caccd0" d="M38.46 321.75c-.35 6.76-1.01 15.13 1.24 21.07 3.07 8.08 11.28 15.42 20.55 15.42q123.84.03 247.69-.01 15.37 0 22.42-11.27c3.63-5.79 3.92-13.01 3.68-19.86-.27-7.81-.29-14.38-.33-21.6" vector-effect="non-scaling-stroke"/><path stroke="#fce885" d="M333.71 305.5q.09-110.84.02-221.69c0-1.77-1.26-7.58-3.22-9.48q-.71-.7-1.31-1.51c-5.22-7.06-11.47-10.31-20.46-10.31q-123.9-.03-247.8.01c-6.33 0-12.07 3.45-16.5 7.65-2.05 1.93-2.91 4.72-4.22 7.24-1.91 3.67-2.05 8.17-2.04 11.59q.49 116.37.28 232.75" vector-effect="non-scaling-stroke"/><path stroke="#c6b455" d="M333.71 305.5c-1.21 10.32-.57 20.75-.88 31.13-.28 9.22-6.83 16.59-15.16 19.56q-3.66 1.31-10.13 1.31H66.53q-8.35 0-12.39-1.41c-8.68-3.05-14.36-10.4-15.01-19.68q-.51-7.32-.67-14.66" vector-effect="non-scaling-stroke"/><path stroke="#e4959a" d="m340.84 376.49.46.69q.27.41.32.9l.93 8.88q.08.68.75.78l2.09.32q.76.12.59-.63c-1.16-5.19-1.91-10-1.15-15.46q.65-4.75-.96-9.44-.19-.53-.67-.82-3.04-1.81-6.46-.5-.46.17-.43.65l1.14 24.99q.03.62.65.64l1.81.03q.51.01.49-.49l-.38-10.27q-.06-1.58.82-.27M323.35 373.5q-.93-5.8-1.17-11.66-.03-.6-.62-.51l-1.75.26q-.52.07-.47.6l2.57 25.85q.07.68.75.66l1.41-.06q.63-.02.68-.65l.94-11.95a.38.38 0 0 1 .76-.01l1.09 11.83q.06.57.62.68l1.19.24q.78.16.85-.64l2.4-25.75q.07-.76-.7-.76l-1.52-.01q-.61 0-.61.61.04 6.41-1.06 12.72-.01.05-.06.06-.16.01-.3-.06-.03-.03-.03-.07-.15-5.77-1-11.47-.1-.66-.77-.66h-1.14q-.59 0-.66.59l-1.11 10.15q-.11 1.08-.29.01M295.35 376q-1.07-6.27-1.18-12.62-.01-.63-.64-.63h-1.55q-.76 0-.68.75 1.36 12.6 2.61 25.23c.15 1.5 1.01 1.93 2.38 1.39a.72.7-9.7 0 0 .44-.6l1.09-12.77a.3.3 0 0 1 .6 0l1.12 12.75q.05.59.64.65l1.35.14q.64.06.7-.58l2.33-25.62q.06-.59-.54-.59h-1.67q-.41 0-.44.41l-.99 12.48q-.01.11-.12.11h-.32q-.18 0-.18-.18-.07-5.91-1.14-11.71-.12-.64-.76-.62l-1.17.03q-.56.02-.6.57l-.98 11.4q-.1 1.19-.3.01M355.55 377.14c.05-3.81.9-12.59-3.66-13.19-6.95-.92-4.97 14.47-4.87 20.84.06 3.92 1.46 9.75 7.02 6.34q.44-.27.6-.77c1.52-4.61.86-9.15.91-13.22M312.2 378.81a.25.25 0 0 1 .5-.01l1.4 12.33q.08.71.79.58l1.45-.28q.49-.09.52-.58.81-12.7 1.42-25.43.07-1.41-1.89-.99-.49.1-.51.6l-.54 12.72q-.1 2.48-.46.02l-1.66-11.42q-.09-.58-.68-.58h-1.06q-.69 0-.74.69-.39 5.06-1.04 10.09-.3 2.31-.52-.01l-1.03-10.95q-.08-.77-.82-.57l-1.54.43q-.57.15-.49.74l3.22 25.6q.06.46.52.46h1.47q.52 0 .56-.52l1.13-12.92M364.31 385.3c-1.25-.8-2.62-2.28-4.07-.9q-.33.31-.76.48l-.77.3q-.68.26-.22.82l2.58 3.13q.38.46.76 0l2.59-3.14q.34-.4-.11-.69M370.75 390.3a.25.24 43 0 0 .38-.01l2.52-3.32q.44-.58-.14-1.02-2.93-2.19-5.62.37-.29.28-.03.59l2.89 3.39M335.956 386.616a.65.65 0 0 0-.665-.635l-1.7.039a.65.65 0 0 0-.634.664l.067 2.96a.65.65 0 0 0 .664.635l1.7-.039a.65.65 0 0 0 .635-.664l-.067-2.96" vector-effect="non-scaling-stroke"/><path stroke="#db5d62" d="M374.71 365.5q.21-.93-.02-1.79-.2-.73-.38 0-.21.85-.06 1.75" vector-effect="non-scaling-stroke"/><path stroke="#e4959a" d="M618.84 167.58c-9.58-14.12-1.8-32.35-9.49-46.33q-.23-.41-.01-.83c6.03-11.43 5.52-26.3 3-38.66-3.93-19.28-16.69-19.11-32.84-15.65q-.51.11-.49.63l4.78 102.49a2.13 2.13 0 0 0 2.25 2.03l9.96-.55q.43-.02.41-.45l-1.95-42.03q-.03-.61.57-.67l2.54-.24q.45-.05.64.36 2.83 5.99 2.86 9.57c.12 13.93-.66 25.8 7.25 34.89q.28.32.7.29l9.24-.63q.5-.04.45.46l-.85 9.18q-.05.52.33.88l1.17 1.13q.32.31.76.29l9.41-.47q.52-.03.57-.54l2-21.58q.06-.69.76-.67l7.63.22q.36.01.41.37l3.15 24.8q.09.73.83.71l9.91-.34a2.11 2.1-4.4 0 0 2.02-2.35l-12.63-107q-.08-.72-.8-.68l-14.33.74q-.55.03-.6.58l-9.2 89.95q-.06.6-.41.1M434.81 121.02l-4.63-54.68q-.04-.52-.57-.48l-9.46.74a2.34 2.34 0 0 0-2.15 2.57l10.88 105.87a.4.4 0 0 0 .41.36l10.27-.45a.51.5-88.7 0 0 .48-.46l4.99-53.55q.14-1.49.29 0l5.38 53.55q.05.51.56.51H461a.56.55-87.1 0 0 .55-.5l9.68-104.6a1.94 1.93 3.1 0 0-1.9-2.11l-9.41-.13q-.42-.01-.45.41l-3.64 52.39a.24.24 0 0 1-.48.01l-5.21-48.9q-.06-.57-.63-.57h-9.96q-.46 0-.5.46l-4.09 49.56q-.07.84-.15 0M684.78 123.5l-6.32-51.68q-.07-.57-.65-.57h-13.5q-1.81.01-1.81 1.81v100.53a1.9 1.9 0 0 0 1.9 1.9l7.81.01a2.03 2.02-89.9 0 0 2.03-2.03l.02-42.49q0-1.4.2-.02l6.71 47.05a.58.57-4 0 0 .57.49h5.97q.58 0 .67-.57c.67-4.57 6.29-45.93 7.14-46.59q.23-.17.23.12v44.97a2.06 2.05.3 0 0 2.04 2.05c2.02.02 7.07.54 8.64-.57 1.91-1.35.95-3.04.98-4.68q.67-46.76.28-61.17-.63-23.15.06-35.56.18-3.23-1.36-4.86-.37-.39-.9-.39h-13.3q-.57 0-.64.56l-6.5 51.69q-.14 1.07-.27 0M511.56 154.49c-.05-19.18.45-38.37.11-57.55-.16-8.86-2.78-21.16-11.97-24.63q-5.28-1.98-10.28.18c-11.11 4.79-11.73 19.44-11.83 29.51q-.37 37.35-.43 52.24-.04 9.22 2.54 17.28c4.61 14.4 23.27 15.9 28.72 1.38q3.16-8.42 3.14-18.41M563.82 119.66l-.37-24.92q0-.57.56-.58l11.18-.23a2.62 2.61 89.4 0 0 2.56-2.62V79.47a2.16 2.15-.8 0 0-2.22-2.15l-24.33.72q-.64.02-.63.66.92 51.3 1.81 102.61.04 2.12 1.12 3.18.4.39.95.38l9.93-.17q.58-.01.57-.58l-.62-46.28q-.01-.59.58-.59l9.49-.01a1.9 1.9 0 0 0 1.9-1.95l-.37-14.43q-.01-.61-.63-.61h-10.89q-.58 0-.59-.59M528.66 170.17q-.98-.04-.96-1.02l2.09-88.82a.75.75 0 0 0-.72-.77l-8.82-.36q-.53-.03-.99.25c-2.34 1.43-1.66 2.9-1.71 5.17q-1.14 50.45-2.16 100.95-.02.63.61.65l25.76.83a1.86 1.86 0 0 0 1.92-1.81l.36-13.98q.01-.54-.53-.56l-14.85-.53M484.31 318.67l7.38.33q.67.03.74.7l2.43 24.75a.89.89 0 0 0 .87.8q3.77.01 7.91.01c4.99 0 3.9-3.29 3.59-6.72q-4.6-51.55-9.5-103.35a.5.49 86.7 0 0-.49-.44H482.7q-.58 0-.65.57-6.55 51.34-13.08 102.68c-.61 4.74 8.27 3.25 10.97 3.25q1.05 0 1.18-1.05l2.48-20.93q.08-.63.71-.6M635.92 319.48q.06-.48.54-.46l7.52.31a.73.71 88.2 0 1 .69.66l2.44 24.96q.06.52.58.55l9.89.46a2.02 2.01-.9 0 0 2.11-2.17l-8.78-107.81q-.05-.63-.69-.66l-14.25-.59q-.6-.03-.68.56l-14.3 103.49a2.17 2.16 5.5 0 0 2.04 2.46l9.39.46q.67.03.75-.63l2.75-21.59M526 331.5a.25.25 0 0 1-.25-.25V243a2.25 2.25 0 0 0-2.25-2.25h-9.25q-.5 0-.5.5v104.5A2.25 2.25 0 0 0 516 348h23.5a2.25 2.25 0 0 0 2.25-2.25v-12.12a2.13 2.13 0 0 0-2.13-2.13H526M598.12 284.76l.82-40.74a1.98 1.98 0 0 0-1.98-2.02h-9.92q-.46 0-.47.46l-2.2 102.67q-.01.52.51.54l9.27.37a2.51 2.5-88.1 0 0 2.6-2.44l1.08-41.2q.01-.5.51-.49l7.16.13q.5.01.49.5c-.08 14.66-.55 29.34-.76 44-.03 2.16.89 3.18 3.02 3.19q6.05.02 8.85.02.57 0 .58-.57l2.1-102.98a.42.42 0 0 0-.4-.43l-10.1-.35a1.91 1.9-88.2 0 0-1.97 1.86l-.9 37.78q-.01.47-.47.45l-7.43-.34q-.4-.01-.39-.41M558.7 316.27c8.07-.06 15.28-2.31 18.04-10.34 4-11.66 6.49-34.57-.58-46.34-5.41-9.03-17.66-7.43-26.66-7.86a1.91 1.91 0 0 0-2.01 1.85l-3.27 104.47q-.02.61.59.64l9.72.36q.63.02 1.04-.46c2.02-2.36 1.84-27.18 2.48-41.69q.03-.62.65-.63M427.36 369.02q-.96-3.19-1.39-6.35-.09-.64-.73-.65l-1.92-.03q-.75-.01-.6.72 1.35 6.68 2.69 13.36c.81 4.04.59 7.9.59 11.99q0 .69.7.69h2.11q.71 0 .61-.71c-1.32-9.44.76-17.27 2.28-26q.1-.57-.48-.56l-2.07.03q-.58.01-.66.59l-.95 6.91q-.06.4-.18.01M418.58 366.18q.99 2.55.33 5.15-.17.65.5.65l2.26.03q.57 0 .61-.56c.15-2.5.25-7.56-2.1-9.14-3.49-2.36-6.24 1.34-6.32 4.62q-.18 7.7.44 18.28c.33 5.78 6.85 6.91 7.95 1.04q.68-3.62.48-6.61-.05-.64-.69-.64h-1.99q-.52 0-.48.51c.08 1.47.32 5.88-.98 6.71a.57.57 0 0 1-.87-.42q-1.06-9.68-.58-19.39a.75.74 35.8 0 1 1.44-.23M440.7 366.79l.44 4.71q.05.58.63.53l1.58-.16q.56-.05.6-.61c.22-2.75.73-9.81-4.11-9.55q-3.89.21-4 4.8-.24 9.64.51 19.22c.29 3.69 3.15 5.45 6.42 3.57q.45-.26.64-.75 1.7-4.3.96-8.95-.1-.62-.72-.61l-1.54.03q-.49.01-.52.5l-.31 5.99a.76.76 0 0 1-1.26.53c-1.4-1.21-1.19-16.21-1.22-19.15a.95.95 0 0 1 1.9-.1M388.89 385.43a.36.36 0 0 1-.39-.36v-7.51a.36.36 0 0 1 .43-.35l2.01.38a.36.36 0 0 0 .42-.36l-.05-3.63a.36.36 0 0 0-.36-.35h-2.39a.36.36 0 0 1-.36-.34l-.27-6.16a.36.36 0 0 1 .31-.37l2.95-.44a.36.36 0 0 0 .31-.36v-3.04a.36.36 0 0 0-.38-.36l-6.04.26a.36.36 0 0 0-.34.37l.81 26.42a.36.36 0 0 0 .37.35l6.17-.15a.36.36 0 0 0 .35-.35l.16-3.52a.36.36 0 0 0-.38-.37l-3.33.24M460.64 378q.43 5.22.88 10.32c.08 1 .54 1.86 1.69 1.39q.46-.2.54-.7l1.6-10.77q.4-2.64.4.03v10.85q0 .63.63.63h1.34q.78 0 .78-.78V363q0-.5-.5-.5h-2.98q-.49 0-.55.48l-1.53 11.73q-.19 1.45-.36 0l-1.39-11.65q-.07-.56-.63-.56h-2.93q-.63 0-.63.62v25.25q0 .63.63.63h1.65q.65 0 .66-.65.08-5.2.64-10.35.03-.3.06 0M406.97 385.07c2.6-.69 2.33 4.47 2.53 6.07q.08.61.7.61h1.99q.69 0 .61-.69l-3.17-26.72q-.08-.72-.8-.64l-2.52.26q-.72.07-.8.8l-2.61 25.57q-.07.67.61.67h1.87q.62 0 .66-.62l.29-4.54q.04-.62.64-.77M454.52 367.94a4.11 4.11 0 0 0-4.138-4.08l-.32.001a4.11 4.11 0 0 0-4.081 4.14l.139 19.899a4.11 4.11 0 0 0 4.138 4.08l.32-.002a4.11 4.11 0 0 0 4.081-4.138l-.139-19.9M398.01 368.37a.75.75 0 0 1 1.33.47l.08 5.25q.01.41.42.41h1.88q.45 0 .47-.46c.19-3.86.98-10.75-4.5-9.78-5.23.92-3.55 15.43-3.88 20.79-.13 2.13.15 5.17 1.74 6.89q.36.39.9.35l4.97-.35a.83.82-1.1 0 0 .77-.8l.31-12.2q.01-.57-.55-.59l-3.25-.15q-.63-.02-.72.6l-.28 2.05q-.1.77.66.87l.52.07q.56.08.53.64l-.33 5.58a.77.76-74.8 0 1-1.11.64c-1.42-.71-1.09-18.92.04-20.28M383 388.42a.41.41 0 0 0-.41-.41l-3.35-.03a.41.41 0 0 1-.41-.42l.52-22.64a.41.41 0 0 0-.41-.42h-2.22a.41.41 0 0 0-.41.4l-.44 26.43a.41.41 0 0 0 .41.42h6.31a.41.41 0 0 0 .41-.41v-2.92M434.465 386.449a.46.46 0 0 0-.47-.45l-2.12.044a.46.46 0 0 0-.45.47l.07 3.319a.46.46 0 0 0 .47.45l2.12-.045a.46.46 0 0 0 .45-.47l-.07-3.318" vector-effect="non-scaling-stroke"/><path stroke="#f39b33" d="M159.71 127.75q-20.91-8.92-41.96-17.5-3.09-1.26-4.25-1.46" vector-effect="non-scaling-stroke"/><path stroke="#d07c1b" d="m113.5 108.79-1.11-.68q-.53-.33-.46.29l5.53 52.35" vector-effect="non-scaling-stroke"/><path stroke="#ef8329" d="m117.46 160.75-47.54 8.66q-1.21.22-.35 1.11l34.54 35.84" vector-effect="non-scaling-stroke"/><path stroke="#f0801f" d="m104.11 206.36-40.74 38.36q-.4.38.09.63.58.31 1.29.11" vector-effect="non-scaling-stroke"/><path stroke="#c57c22" d="m64.75 245.46 52.43 8.38" vector-effect="non-scaling-stroke"/><path stroke="#d07c1b" d="M117.18 253.84q-3 27.56-8.07 55.03a.41.4-8.6 0 0 .59.43l48.55-25.09" vector-effect="non-scaling-stroke"/><path stroke="#c57c22" d="m158.25 284.21 25.27 47.05" vector-effect="non-scaling-stroke"/><path stroke="#f0801f" d="M183.52 331.26q-.18.42.17.48.49.09.72-.35l24.92-46.32a.68.66-61.7 0 1 .9-.28l44.8 23.94a.4.4 0 0 0 .59-.36l-1.12-51.58" vector-effect="non-scaling-stroke"/><path stroke="#d07c1b" d="m254.5 256.79 47.75-5.83" vector-effect="non-scaling-stroke"/><path stroke="#f0801f" d="M302.25 250.96q.92.3.95-.06a1.66.41-82.5 0 0-.14-1.29l-33.85-40.11" vector-effect="non-scaling-stroke"/><path stroke="#f39b33" d="m269.21 209.5 33.26-39.2a.49.48-64.2 0 0-.27-.79l-47.29-9.39" vector-effect="non-scaling-stroke"/><path stroke="#f0801f" d="m254.91 160.12 4.27-50.14q.05-.61-.52-.39l-47.51 18.59" vector-effect="non-scaling-stroke"/><path stroke="#f3b04d" d="M211.15 128.18c-1.25-.23-21.8-38.52-24.16-42.79a.42.42 0 0 0-.72-.02l-26.56 42.38" vector-effect="non-scaling-stroke"/><path stroke="#eb6061" d="M211.15 128.18q-13.44 16.38-26.09 33.75" vector-effect="non-scaling-stroke"/><path stroke="#db5d62" d="M185.06 161.93q-.65.21-1.27.82" vector-effect="non-scaling-stroke"/><path stroke="#eb6061" d="M183.79 162.75q-.28-.3-.38-.65" vector-effect="non-scaling-stroke"/><path stroke="#ee7a76" d="m183.41 162.1-23.7-34.35" vector-effect="non-scaling-stroke"/><path stroke="#db4849" d="M229.95 193.38c-1.91 2.25-9.18 3.84-12.16 4.62" vector-effect="non-scaling-stroke"/><path stroke="#e4959a" d="m217.79 198-.03-14.54a.88.88 0 0 0-.92-.88q-16.1.66-32.09.13" vector-effect="non-scaling-stroke"/><path stroke="#d82d34" d="m184.75 182.71-.96-19.96" vector-effect="non-scaling-stroke"/><path stroke="#eb4b48" d="m254.91 160.12-24.96 33.26" vector-effect="non-scaling-stroke"/><path stroke="#d82d34" d="M229.95 193.38q-.67-1.5-.68-2.44c-.05-10.49-.07-26.15.2-45.54q.03-1.69-1.51-.99-21.15 9.58-42.9 17.52" vector-effect="non-scaling-stroke"/><path stroke="#eb4b48" d="M183.41 162.1q-1.26.37-1.94-.28-.29-.27-.66-.42l-41.2-16.83" vector-effect="non-scaling-stroke"/><path stroke="#f49899" d="m184.75 182.71-30.93.26q-.55.01-.56.56l-.26 12.18" vector-effect="non-scaling-stroke"/><path stroke="#eb4b48" d="M153 195.71c-1.63-.47-11.62-4.45-12.21-3.96" vector-effect="non-scaling-stroke"/><path stroke="#e7333e" d="M140.79 191.75v-1.25" vector-effect="non-scaling-stroke"/><path stroke="#eb4b48" d="M269.21 209.5q-8.32-3.18-16.78-5.95c-2.31-.75-4.8-2.14-7.31-2.9-5.29-1.62-9.47-3.46-14.25-5.48a.54.54 0 0 0-.62.85c5.24 5.95 11.19 14.26 14.66 18.71 1.23 1.59 13.69 17.26 13.15 17.57" vector-effect="non-scaling-stroke"/><path stroke="#cb4744" d="m258.06 232.3-44.12 12.18" vector-effect="non-scaling-stroke"/><path stroke="#eb4b48" d="m213.94 244.48-1.65.52" vector-effect="non-scaling-stroke"/><path stroke="#ee7a76" d="m212.29 245-12.06-17.07" vector-effect="non-scaling-stroke"/><path stroke="#f6b2ae" d="m200.23 227.93 16.99-.18q.53-.01.53-.53v-14.95q0-.74-.73-.73l-63.31.16q-.59 0-.59.59l-.1 14.69q-.01.74.73.74l16.64.16" vector-effect="non-scaling-stroke"/><path stroke="#ee7a76" d="m170.39 227.88-12.68 18.37" vector-effect="non-scaling-stroke"/><path stroke="#cb4744" d="M157.71 246.25q-1.24-1.21-2.96-1.46" vector-effect="non-scaling-stroke"/><path stroke="#c0474b" d="m154.75 244.79-44.25-14.58" vector-effect="non-scaling-stroke"/><path stroke="#eb4b48" d="m110.5 230.21 29.79-37.71" vector-effect="non-scaling-stroke"/><path stroke="#ea4d52" d="m140.29 192.5.5-.75" vector-effect="non-scaling-stroke"/><path stroke="#f6b2ae" d="m153 195.71.34 3.07q.05.51.55.43 4.14-.63 8 .31" vector-effect="non-scaling-stroke"/><path stroke="#eb4b48" d="M161.89 199.52q11.39 5.08 23.25 9.08" vector-effect="non-scaling-stroke"/><path stroke="#db4849" d="m185.14 208.6 27.99-9.24" vector-effect="non-scaling-stroke"/><path stroke="#f6b2ae" d="M213.13 199.36c1.4-.51 5.05.61 4.66-1.36" vector-effect="non-scaling-stroke"/><path stroke="#e4959a" d="M213.13 199.36q-13.77-.51-27.49-.03" vector-effect="non-scaling-stroke"/><path stroke="#f49899" d="m185.64 199.33-23.75.19" vector-effect="non-scaling-stroke"/><path stroke="#cb4744" d="M113.5 108.79q.21 1.22 1.19 2.52 12.47 16.71 24.92 33.26" vector-effect="non-scaling-stroke"/><path stroke="#c82c2f" d="M139.61 144.57q.58 17.8.92 35.76c.02 1.23 1.37 10.27.26 10.17" vector-effect="non-scaling-stroke"/><path stroke="#c72f3a" d="m140.79 190.5-23.33-29.75" vector-effect="non-scaling-stroke"/><path stroke="#e7333e" d="M140.29 192.5q-2.03 0-3.76.92c-8.53 4.54-19.18 8.12-28.38 11.23q-2.16.73-4.04 1.71" vector-effect="non-scaling-stroke"/><path stroke="#d82d34" d="M185.14 208.6q-1.41-4.91.5-9.27" vector-effect="non-scaling-stroke"/><path stroke="#9d2833" d="m158.52 247.39-.27 36.82" vector-effect="non-scaling-stroke"/><path stroke="#f7c7c7" d="m200.23 227.93-29.84-.05" vector-effect="non-scaling-stroke"/><path stroke="#eb6061" d="m212.29 245-27.92 39.85" vector-effect="non-scaling-stroke"/><path stroke="#c05c65" d="m184.37 284.85-25.85-37.46" vector-effect="non-scaling-stroke"/><path stroke="#cb5c5d" d="m158.52 247.39-.81-1.14" vector-effect="non-scaling-stroke"/><path stroke="#c82c2f" d="M254.5 256.79q-19.48-6.14-39.26-11.25-.63-.17-1.3-1.06M302.25 250.96l-.65-.87q-.28-.37-.72-.54l-42.82-17.25" vector-effect="non-scaling-stroke"/><path stroke="#bd2c37" d="m183.52 331.26.85-46.41M110.5 230.21c-14.83 5.06-29.58 10.11-44.78 13.97q-.49.12-.68.59l-.29.69" vector-effect="non-scaling-stroke"/><path stroke="#9d2833" d="M154.75 244.79q.3 1.22-.75 1.44-18.91 3.94-36.82 7.61" vector-effect="non-scaling-stroke"/><path stroke="#e4959a" d="m592.48 81.89 1.05 28.54a.51.51 0 0 0 .52.49l.88-.03a9.02 6.87 87.9 0 0 6.54-9.27l-.42-11.53a9.02 6.87 87.9 0 0-7.2-8.76l-.88.03a.51.51 0 0 0-.49.53M639.07 143.59l-2.39-24.84q-.12-1.28-.26 0l-2.68 24.97q-.06.53.48.53h4.26q.66 0 .59-.66M490.01 144.26c-.12 6.9-1.34 17.17 3.02 23.01a1.83 1.82-50.5 0 0 3.11-.3c2.06-4.26 2.56-8.26 2.57-13.48q.09-28.27.01-56.54c-.01-3.77-.52-6-2.3-9.03a2.06 2.06 0 0 0-2.5-.88c-2.67 1.01-3.42 7.39-3.47 9.91-.26 15.78-.17 31.54-.44 47.31M491.07 301.94l-1.94-25.93q-.03-.44-.09 0l-3.32 25.81q-.09.68.6.68h4.2q.59 0 .55-.56M643.53 302.33l-1.6-25.82q-.04-.62-.13-.01l-3.72 25.57q-.09.57.49.6l4.36.26q.63.04.6-.6M559.69 269.16l-1.03 31.05a.54.54 0 0 0 .52.55l.74.03a8.96 6.94-88.1 0 0 7.23-8.73l.47-14.21a8.96 6.94-88.1 0 0-6.64-9.18l-.74-.03a.54.54 0 0 0-.55.52M339.46 364.7l.12 7.88a.19.19 0 0 0 .2.19l.08-.01a3.13 2.2 89.1 0 0 2.16-3.16l-.04-2a3.13 2.2 89.1 0 0-2.24-3.09h-.09a.19.19 0 0 0-.19.19M352.372 368.538a1.15 1.15 0 0 0-1.162-1.138h-.06a1.15 1.15 0 0 0-1.138 1.163l.196 18.719a1.15 1.15 0 0 0 1.162 1.138h.06a1.15 1.15 0 0 0 1.138-1.163l-.196-18.719M407.28 381.26l.78-.02a.2.2 0 0 0 .2-.21l-.01-.12a5.18.47 88.3 0 0-.62-5.16h-.24a5.18.47 88.3 0 0-.32 5.2l.01.12a.2.2 0 0 0 .2.19M451.59 388.39l-.32-20.84a.1.1 0 0 0-.11-.1h-.03a2.25 2.21 89.1 0 0-2.17 2.29l.26 16.54a2.25 2.21 89.1 0 0 2.25 2.21h.03a.1.1 0 0 0 .09-.1" vector-effect="non-scaling-stroke"/></g><path fill="#fff" d="M0 0h375.21l-.17 361.92q0 .84-.75.48l-.6-.29q-.4-.19-.84-.15l-5.44.43q-.5.04-.88-.27c-1.29-1.01-6.75-.84-8.62-.91q-.58-.02-.6.56l-.08 2.58q-.02.65.63.65h1.64q.5 0 .5.5v16.51q0 .45.45.5l1.79.18q.76.08.76-.68v-16.19a.93.93 0 0 1 1.2-.89l4.05 1.22q.46.14.48.63l.59 16.14q.03.76.78.68l1.63-.16q.62-.06.59-.68l-.54-16.58q-.02-.36.34-.41l2.13-.31.46.04c.18.24.29.37.29.69q-.11 27.91.19 55.81H0V0Zm38.46 321.75c-.35 6.76-1.01 15.13 1.24 21.07 3.07 8.08 11.28 15.42 20.55 15.42q123.84.03 247.69-.01 15.37 0 22.42-11.27c3.63-5.79 3.92-13.01 3.68-19.86-.27-7.81-.29-14.38-.33-21.6q.09-110.84.02-221.69c0-1.77-1.26-7.58-3.22-9.48q-.71-.7-1.31-1.51c-5.22-7.06-11.47-10.31-20.46-10.31q-123.9-.03-247.8.01c-6.33 0-12.07 3.45-16.5 7.65-2.05 1.93-2.91 4.72-4.22 7.24-1.91 3.67-2.05 8.17-2.04 11.59q.49 116.37.28 232.75Zm302.38 54.74.46.69q.27.41.32.9l.93 8.88q.08.68.75.78l2.09.32q.76.12.59-.63c-1.16-5.19-1.91-10-1.15-15.46q.65-4.75-.96-9.44-.19-.53-.67-.82-3.04-1.81-6.46-.5-.46.17-.43.65l1.14 24.99q.03.62.65.64l1.81.03q.51.01.49-.49l-.38-10.27q-.06-1.58.82-.27Zm-17.49-2.99q-.93-5.8-1.17-11.66-.03-.6-.62-.51l-1.75.26q-.52.07-.47.6l2.57 25.85q.07.68.75.66l1.41-.06q.63-.02.68-.65l.94-11.95a.38.38 0 0 1 .76-.01l1.09 11.83q.06.57.62.68l1.19.24q.78.16.85-.64l2.4-25.75q.07-.76-.7-.76l-1.52-.01q-.61 0-.61.61.04 6.41-1.06 12.72-.01.05-.06.06-.16.01-.3-.06-.03-.03-.03-.07-.15-5.77-1-11.47-.1-.66-.77-.66h-1.14q-.59 0-.66.59l-1.11 10.15q-.11 1.08-.29.01Zm-28 2.5q-1.07-6.27-1.18-12.62-.01-.63-.64-.63h-1.55q-.76 0-.68.75 1.36 12.6 2.61 25.23c.15 1.5 1.01 1.93 2.38 1.39a.72.7-9.7 0 0 .44-.6l1.09-12.77a.3.3 0 0 1 .6 0l1.12 12.75q.05.59.64.65l1.35.14q.64.06.7-.58l2.33-25.62q.06-.59-.54-.59h-1.67q-.41 0-.44.41l-.99 12.48q-.01.11-.12.11h-.32q-.18 0-.18-.18-.07-5.91-1.14-11.71-.12-.64-.76-.62l-1.17.03q-.56.02-.6.57l-.98 11.4q-.1 1.19-.3.01Zm60.2 1.14c.05-3.81.9-12.59-3.66-13.19-6.95-.92-4.97 14.47-4.87 20.84.06 3.92 1.46 9.75 7.02 6.34q.44-.27.6-.77c1.52-4.61.86-9.15.91-13.22Zm-43.35 1.67a.25.25 0 0 1 .5-.01l1.4 12.33q.08.71.79.58l1.45-.28q.49-.09.52-.58.81-12.7 1.42-25.43.07-1.41-1.89-.99-.49.1-.51.6l-.54 12.72q-.1 2.48-.46.02l-1.66-11.42q-.09-.58-.68-.58h-1.06q-.69 0-.74.69-.39 5.06-1.04 10.09-.3 2.31-.52-.01l-1.03-10.95q-.08-.77-.82-.57l-1.54.43q-.57.15-.49.74l3.22 25.6q.06.46.52.46h1.47q.52 0 .56-.52l1.13-12.92Zm52.11 6.49c-1.25-.8-2.62-2.28-4.07-.9q-.33.31-.76.48l-.77.3q-.68.26-.22.82l2.58 3.13q.38.46.76 0l2.59-3.14q.34-.4-.11-.69Zm6.44 5a.25.24 43 0 0 .38-.01l2.52-3.32q.44-.58-.14-1.02-2.93-2.19-5.62.37-.29.28-.03.59l2.89 3.39Zm-34.794-3.684a.65.65 0 0 0-.665-.635l-1.7.039a.65.65 0 0 0-.634.664l.067 2.96a.65.65 0 0 0 .664.635l1.7-.039a.65.65 0 0 0 .635-.664l-.067-2.96Z"/><path fill="#c82a35" d="M375.21 0H750v422H375.19q-.3-27.9-.19-55.81c0-.32-.11-.45-.29-.69q.21-.93-.02-1.79-.2-.73-.38 0-.21.85-.06 1.75l-2.13.31q-.36.05-.34.41l.54 16.58q.03.62-.59.68l-1.63.16q-.75.08-.78-.68l-.59-16.14q-.02-.49-.48-.63l-4.05-1.22a.93.93 0 0 0-1.2.89v16.19q0 .76-.76.68l-1.79-.18q-.45-.05-.45-.5V365.5q0-.5-.5-.5h-1.64q-.65 0-.63-.65l.08-2.58q.02-.58.6-.56c1.87.07 7.33-.1 8.62.91q.38.31.88.27l5.44-.43q.44-.04.84.15l.6.29q.75.36.75-.48L375.21 0Zm243.63 167.58c-9.58-14.12-1.8-32.35-9.49-46.33q-.23-.41-.01-.83c6.03-11.43 5.52-26.3 3-38.66-3.93-19.28-16.69-19.11-32.84-15.65q-.51.11-.49.63l4.78 102.49a2.13 2.13 0 0 0 2.25 2.03l9.96-.55q.43-.02.41-.45l-1.95-42.03q-.03-.61.57-.67l2.54-.24q.45-.05.64.36 2.83 5.99 2.86 9.57c.12 13.93-.66 25.8 7.25 34.89q.28.32.7.29l9.24-.63q.5-.04.45.46l-.85 9.18q-.05.52.33.88l1.17 1.13q.32.31.76.29l9.41-.47q.52-.03.57-.54l2-21.58q.06-.69.76-.67l7.63.22q.36.01.41.37l3.15 24.8q.09.73.83.71l9.91-.34a2.11 2.1-4.4 0 0 2.02-2.35l-12.63-107q-.08-.72-.8-.68l-14.33.74q-.55.03-.6.58l-9.2 89.95q-.06.6-.41.1Zm-184.03-46.56-4.63-54.68q-.04-.52-.57-.48l-9.46.74a2.34 2.34 0 0 0-2.15 2.57l10.88 105.87a.4.4 0 0 0 .41.36l10.27-.45a.51.5-88.7 0 0 .48-.46l4.99-53.55q.14-1.49.29 0l5.38 53.55q.05.51.56.51H461a.56.55-87.1 0 0 .55-.5l9.68-104.6a1.94 1.93 3.1 0 0-1.9-2.11l-9.41-.13q-.42-.01-.45.41l-3.64 52.39a.24.24 0 0 1-.48.01l-5.21-48.9q-.06-.57-.63-.57h-9.96q-.46 0-.5.46l-4.09 49.56q-.07.84-.15 0Zm249.97 2.48-6.32-51.68q-.07-.57-.65-.57h-13.5q-1.81.01-1.81 1.81v100.53a1.9 1.9 0 0 0 1.9 1.9l7.81.01a2.03 2.02-89.9 0 0 2.03-2.03l.02-42.49q0-1.4.2-.02l6.71 47.05a.58.57-4 0 0 .57.49h5.97q.58 0 .67-.57c.67-4.57 6.29-45.93 7.14-46.59q.23-.17.23.12v44.97a2.06 2.05.3 0 0 2.04 2.05c2.02.02 7.07.54 8.64-.57 1.91-1.35.95-3.04.98-4.68q.67-46.76.28-61.17-.63-23.15.06-35.56.18-3.23-1.36-4.86-.37-.39-.9-.39h-13.3q-.57 0-.64.56l-6.5 51.69q-.14 1.07-.27 0Zm-173.22 30.99c-.05-19.18.45-38.37.11-57.55-.16-8.86-2.78-21.16-11.97-24.63q-5.28-1.98-10.28.18c-11.11 4.79-11.73 19.44-11.83 29.51q-.37 37.35-.43 52.24-.04 9.22 2.54 17.28c4.61 14.4 23.27 15.9 28.72 1.38q3.16-8.42 3.14-18.41Zm52.26-34.83-.37-24.92q0-.57.56-.58l11.18-.23a2.62 2.61 89.4 0 0 2.56-2.62V79.47a2.16 2.15-.8 0 0-2.22-2.15l-24.33.72q-.64.02-.63.66.92 51.3 1.81 102.61.04 2.12 1.12 3.18.4.39.95.38l9.93-.17q.58-.01.57-.58l-.62-46.28q-.01-.59.58-.59l9.49-.01a1.9 1.9 0 0 0 1.9-1.95l-.37-14.43q-.01-.61-.63-.61h-10.89q-.58 0-.59-.59Zm-35.16 50.51q-.98-.04-.96-1.02l2.09-88.82a.75.75 0 0 0-.72-.77l-8.82-.36q-.53-.03-.99.25c-2.34 1.43-1.66 2.9-1.71 5.17q-1.14 50.45-2.16 100.95-.02.63.61.65l25.76.83a1.86 1.86 0 0 0 1.92-1.81l.36-13.98q.01-.54-.53-.56l-14.85-.53Zm-44.35 148.5 7.38.33q.67.03.74.7l2.43 24.75a.89.89 0 0 0 .87.8q3.77.01 7.91.01c4.99 0 3.9-3.29 3.59-6.72q-4.6-51.55-9.5-103.35a.5.49 86.7 0 0-.49-.44H482.7q-.58 0-.65.57-6.55 51.34-13.08 102.68c-.61 4.74 8.27 3.25 10.97 3.25q1.05 0 1.18-1.05l2.48-20.93q.08-.63.71-.6Zm151.61.81q.06-.48.54-.46l7.52.31a.73.71 88.2 0 1 .69.66l2.44 24.96q.06.52.58.55l9.89.46a2.02 2.01-.9 0 0 2.11-2.17l-8.78-107.81q-.05-.63-.69-.66l-14.25-.59q-.6-.03-.68.56l-14.3 103.49a2.17 2.16 5.5 0 0 2.04 2.46l9.39.46q.67.03.75-.63l2.75-21.59ZM526 331.5a.25.25 0 0 1-.25-.25V243a2.25 2.25 0 0 0-2.25-2.25h-9.25q-.5 0-.5.5v104.5A2.25 2.25 0 0 0 516 348h23.5a2.25 2.25 0 0 0 2.25-2.25v-12.12a2.13 2.13 0 0 0-2.13-2.13H526Zm72.12-46.74.82-40.74a1.98 1.98 0 0 0-1.98-2.02h-9.92q-.46 0-.47.46l-2.2 102.67q-.01.52.51.54l9.27.37a2.51 2.5-88.1 0 0 2.6-2.44l1.08-41.2q.01-.5.51-.49l7.16.13q.5.01.49.5c-.08 14.66-.55 29.34-.76 44-.03 2.16.89 3.18 3.02 3.19q6.05.02 8.85.02.57 0 .58-.57l2.1-102.98a.42.42 0 0 0-.4-.43l-10.1-.35a1.91 1.9-88.2 0 0-1.97 1.86l-.9 37.78q-.01.47-.47.45l-7.43-.34q-.4-.01-.39-.41Zm-39.42 31.51c8.07-.06 15.28-2.31 18.04-10.34 4-11.66 6.49-34.57-.58-46.34-5.41-9.03-17.66-7.43-26.66-7.86a1.91 1.91 0 0 0-2.01 1.85l-3.27 104.47q-.02.61.59.64l9.72.36q.63.02 1.04-.46c2.02-2.36 1.84-27.18 2.48-41.69q.03-.62.65-.63Zm-131.34 52.75q-.96-3.19-1.39-6.35-.09-.64-.73-.65l-1.92-.03q-.75-.01-.6.72 1.35 6.68 2.69 13.36c.81 4.04.59 7.9.59 11.99q0 .69.7.69h2.11q.71 0 .61-.71c-1.32-9.44.76-17.27 2.28-26q.1-.57-.48-.56l-2.07.03q-.58.01-.66.59l-.95 6.91q-.06.4-.18.01Zm-8.78-2.84q.99 2.55.33 5.15-.17.65.5.65l2.26.03q.57 0 .61-.56c.15-2.5.25-7.56-2.1-9.14-3.49-2.36-6.24 1.34-6.32 4.62q-.18 7.7.44 18.28c.33 5.78 6.85 6.91 7.95 1.04q.68-3.62.48-6.61-.05-.64-.69-.64h-1.99q-.52 0-.48.51c.08 1.47.32 5.88-.98 6.71a.57.57 0 0 1-.87-.42q-1.06-9.68-.58-19.39a.75.74 35.8 0 1 1.44-.23Zm22.12.61.44 4.71q.05.58.63.53l1.58-.16q.56-.05.6-.61c.22-2.75.73-9.81-4.11-9.55q-3.89.21-4 4.8-.24 9.64.51 19.22c.29 3.69 3.15 5.45 6.42 3.57q.45-.26.64-.75 1.7-4.3.96-8.95-.1-.62-.72-.61l-1.54.03q-.49.01-.52.5l-.31 5.99a.76.76 0 0 1-1.26.53c-1.4-1.21-1.19-16.21-1.22-19.15a.95.95 0 0 1 1.9-.1Zm-51.81 18.64a.36.36 0 0 1-.39-.36v-7.51a.36.36 0 0 1 .43-.35l2.01.38a.36.36 0 0 0 .42-.36l-.05-3.63a.36.36 0 0 0-.36-.35h-2.39a.36.36 0 0 1-.36-.34l-.27-6.16a.36.36 0 0 1 .31-.37l2.95-.44a.36.36 0 0 0 .31-.36v-3.04a.36.36 0 0 0-.38-.36l-6.04.26a.36.36 0 0 0-.34.37l.81 26.42a.36.36 0 0 0 .37.35l6.17-.15a.36.36 0 0 0 .35-.35l.16-3.52a.36.36 0 0 0-.38-.37l-3.33.24Zm71.75-7.43q.43 5.22.88 10.32c.08 1 .54 1.86 1.69 1.39q.46-.2.54-.7l1.6-10.77q.4-2.64.4.03v10.85q0 .63.63.63h1.34q.78 0 .78-.78V363q0-.5-.5-.5h-2.98q-.49 0-.55.48l-1.53 11.73q-.19 1.45-.36 0l-1.39-11.65q-.07-.56-.63-.56h-2.93q-.63 0-.63.62v25.25q0 .63.63.63h1.65q.65 0 .66-.65.08-5.2.64-10.35.03-.3.06 0Zm-53.67 7.07c2.6-.69 2.33 4.47 2.53 6.07q.08.61.7.61h1.99q.69 0 .61-.69l-3.17-26.72q-.08-.72-.8-.64l-2.52.26q-.72.07-.8.8l-2.61 25.57q-.07.67.61.67h1.87q.62 0 .66-.62l.29-4.54q.04-.62.64-.77Zm47.55-17.13a4.11 4.11 0 0 0-4.138-4.08l-.32.001a4.11 4.11 0 0 0-4.081 4.14l.139 19.899a4.11 4.11 0 0 0 4.138 4.08l.32-.002a4.11 4.11 0 0 0 4.081-4.138l-.139-19.9Zm-56.51.43a.75.75 0 0 1 1.33.47l.08 5.25q.01.41.42.41h1.88q.45 0 .47-.46c.19-3.86.98-10.75-4.5-9.78-5.23.92-3.55 15.43-3.88 20.79-.13 2.13.15 5.17 1.74 6.89q.36.39.9.35l4.97-.35a.83.82-1.1 0 0 .77-.8l.31-12.2q.01-.57-.55-.59l-3.25-.15q-.63-.02-.72.6l-.28 2.05q-.1.77.66.87l.52.07q.56.08.53.64l-.33 5.58a.77.76-74.8 0 1-1.11.64c-1.42-.71-1.09-18.92.04-20.28ZM383 388.42a.41.41 0 0 0-.41-.41l-3.35-.03a.41.41 0 0 1-.41-.42l.52-22.64a.41.41 0 0 0-.41-.42h-2.22a.41.41 0 0 0-.41.4l-.44 26.43a.41.41 0 0 0 .41.42h6.31a.41.41 0 0 0 .41-.41v-2.92Zm51.465-1.971a.46.46 0 0 0-.47-.45l-2.12.044a.46.46 0 0 0-.45.47l.07 3.319a.46.46 0 0 0 .47.45l2.12-.045a.46.46 0 0 0 .45-.47l-.07-3.318Z"/><path fill="#f8d00a" d="M333.71 305.5c-1.21 10.32-.57 20.75-.88 31.13-.28 9.22-6.83 16.59-15.16 19.56q-3.66 1.31-10.13 1.31H66.53q-8.35 0-12.39-1.41c-8.68-3.05-14.36-10.4-15.01-19.68q-.51-7.32-.67-14.66.21-116.38-.28-232.75c-.01-3.42.13-7.92 2.04-11.59 1.31-2.52 2.17-5.31 4.22-7.24 4.43-4.2 10.17-7.65 16.5-7.65q123.9-.04 247.8-.01c8.99 0 15.24 3.25 20.46 10.31q.6.81 1.31 1.51c1.96 1.9 3.22 7.71 3.22 9.48q.07 110.85-.02 221.69Zm-174-177.75q-20.91-8.92-41.96-17.5-3.09-1.26-4.25-1.46l-1.11-.68q-.53-.33-.46.29l5.53 52.35-47.54 8.66q-1.21.22-.35 1.11l34.54 35.84-40.74 38.36q-.4.38.09.63.58.31 1.29.11l52.43 8.38q-3 27.56-8.07 55.03a.41.4-8.6 0 0 .59.43l48.55-25.09 25.27 47.05q-.18.42.17.48.49.09.72-.35l24.92-46.32a.68.66-61.7 0 1 .9-.28l44.8 23.94a.4.4 0 0 0 .59-.36l-1.12-51.58 47.75-5.83q.92.3.95-.06a1.66.41-82.5 0 0-.14-1.29l-33.85-40.11 33.26-39.2a.49.48-64.2 0 0-.27-.79l-47.29-9.39 4.27-50.14q.05-.61-.52-.39l-47.51 18.59c-1.25-.23-21.8-38.52-24.16-42.79a.42.42 0 0 0-.72-.02l-26.56 42.38Z"/><path fill="#fff" d="m619.25 167.48 9.2-89.95q.05-.55.6-.58l14.33-.74q.72-.04.8.68l12.63 107a2.11 2.1-4.4 0 1-2.02 2.35l-9.91.34q-.74.02-.83-.71l-3.15-24.8q-.05-.36-.41-.37l-7.63-.22q-.7-.02-.76.67l-2 21.58q-.05.51-.57.54l-9.41.47q-.44.02-.76-.29l-1.17-1.13q-.38-.36-.33-.88l.85-9.18q.05-.5-.45-.46l-9.24.63q-.42.03-.7-.29c-7.91-9.09-7.13-20.96-7.25-34.89q-.03-3.58-2.86-9.57-.19-.41-.64-.36l-2.54.24q-.6.06-.57.67l1.95 42.03q.02.43-.41.45l-9.96.55a2.13 2.13 0 0 1-2.25-2.03l-4.78-102.49q-.02-.52.49-.63c16.15-3.46 28.91-3.63 32.84 15.65 2.52 12.36 3.03 27.23-3 38.66q-.22.42.01.83c7.69 13.98-.09 32.21 9.49 46.33q.35.5.41-.1Zm-26.77-85.59 1.05 28.54a.51.51 0 0 0 .52.49l.88-.03a9.02 6.87 87.9 0 0 6.54-9.27l-.42-11.53a9.02 6.87 87.9 0 0-7.2-8.76l-.88.03a.51.51 0 0 0-.49.53Zm46.59 61.7-2.39-24.84q-.12-1.28-.26 0l-2.68 24.97q-.06.53.48.53h4.26q.66 0 .59-.66ZM434.96 121.02l4.09-49.56q.04-.46.5-.46h9.96q.57 0 .63.57l5.21 48.9a.24.24 0 0 0 .48-.01l3.64-52.39q.03-.42.45-.41l9.41.13a1.94 1.93 3.1 0 1 1.9 2.11l-9.68 104.6a.56.55-87.1 0 1-.55.5h-9.74q-.51 0-.56-.51l-5.38-53.55q-.15-1.49-.29 0l-4.99 53.55a.51.5-88.7 0 1-.48.46l-10.27.45a.4.4 0 0 1-.41-.36L418 69.17a2.34 2.34 0 0 1 2.15-2.57l9.46-.74q.53-.04.57.48l4.63 54.68q.08.84.15 0ZM685.05 123.5l6.5-51.69q.07-.56.64-.56h13.3q.53 0 .9.39 1.54 1.63 1.36 4.86-.69 12.41-.06 35.56.39 14.41-.28 61.17c-.03 1.64.93 3.33-.98 4.68-1.57 1.11-6.62.59-8.64.57a2.06 2.05.3 0 1-2.04-2.05v-44.97q0-.29-.23-.12c-.85.66-6.47 42.02-7.14 46.59q-.09.57-.67.57h-5.97a.58.57-4 0 1-.57-.49l-6.71-47.05q-.2-1.38-.2.02l-.02 42.49a2.03 2.02-89.9 0 1-2.03 2.03l-7.81-.01a1.9 1.9 0 0 1-1.9-1.9V73.06q0-1.8 1.81-1.81h13.5q.58 0 .65.57l6.32 51.68q.13 1.07.27 0ZM511.67 96.94c.34 19.18-.16 38.37-.11 57.55q.02 9.99-3.14 18.41c-5.45 14.52-24.11 13.02-28.72-1.38q-2.58-8.06-2.54-17.28.06-14.89.43-52.24c.1-10.07.72-24.72 11.83-29.51q5-2.16 10.28-.18c9.19 3.47 11.81 15.77 11.97 24.63Zm-21.66 47.32c-.12 6.9-1.34 17.17 3.02 23.01a1.83 1.82-50.5 0 0 3.11-.3c2.06-4.26 2.56-8.26 2.57-13.48q.09-28.27.01-56.54c-.01-3.77-.52-6-2.3-9.03a2.06 2.06 0 0 0-2.5-.88c-2.67 1.01-3.42 7.39-3.47 9.91-.26 15.78-.17 31.54-.44 47.31Z"/><path fill="#fff" d="M564.41 120.25h10.89q.62 0 .63.61l.37 14.43a1.9 1.9 0 0 1-1.9 1.95l-9.49.01q-.59 0-.58.59l.62 46.28q.01.57-.57.58l-9.93.17q-.55.01-.95-.38-1.08-1.06-1.12-3.18-.89-51.31-1.81-102.61-.01-.64.63-.66l24.33-.72a2.16 2.15-.8 0 1 2.22 2.15v11.84a2.62 2.61 89.4 0 1-2.56 2.62l-11.18.23q-.56.01-.56.58l.37 24.92q.01.59.59.59ZM528.66 170.17l14.85.53q.54.02.53.56l-.36 13.98a1.86 1.86 0 0 1-1.92 1.81l-25.76-.83q-.63-.02-.61-.65 1.02-50.5 2.16-100.95c.05-2.27-.63-3.74 1.71-5.17q.46-.28.99-.25l8.82.36a.75.75 0 0 1 .72.77l-2.09 88.82q-.02.98.96 1.02Z"/><path fill="#c82a35" d="M592.48 81.89a.51.51 0 0 1 .49-.53l.88-.03a9.02 6.87 87.9 0 1 7.2 8.76l.42 11.53a9.02 6.87 87.9 0 1-6.54 9.27l-.88.03a.51.51 0 0 1-.52-.49l-1.05-28.54Z"/><path fill="#ee8f8f" d="M211.15 128.18q-13.44 16.38-26.09 33.75-.65.21-1.27.82-.28-.3-.38-.65l-23.7-34.35 26.56-42.38a.42.42 0 0 1 .72.02c2.36 4.27 22.91 42.56 24.16 42.79Z"/><path fill="#c82a35" d="M490.01 144.26c.27-15.77.18-31.53.44-47.31.05-2.52.8-8.9 3.47-9.91a2.06 2.06 0 0 1 2.5.88c1.78 3.03 2.29 5.26 2.3 9.03q.08 28.27-.01 56.54c-.01 5.22-.51 9.22-2.57 13.48a1.83 1.82-50.5 0 1-3.11.3c-4.36-5.84-3.14-16.11-3.02-23.01Z"/><path fill="#a8282b" d="M113.5 108.79q.21 1.22 1.19 2.52 12.47 16.71 24.92 33.26.58 17.8.92 35.76c.02 1.23 1.37 10.27.26 10.17l-23.33-29.75-5.53-52.35q-.07-.62.46-.29l1.11.68Z"/><path fill="#ed655c" d="M113.5 108.79q1.16.2 4.25 1.46 21.05 8.58 41.96 17.5l23.7 34.35q-1.26.37-1.94-.28-.29-.27-.66-.42l-41.2-16.83q-12.45-16.55-24.92-33.26-.98-1.3-1.19-2.52Z"/><path fill="#e83033" d="m254.91 160.12-24.96 33.26q-.67-1.5-.68-2.44c-.05-10.49-.07-26.15.2-45.54q.03-1.69-1.51-.99-21.15 9.58-42.9 17.52 12.65-17.37 26.09-33.75l47.51-18.59q.57-.22.52.39l-4.27 50.14Z"/><path fill="#c82a35" d="m636.68 118.75 2.39 24.84q.07.66-.59.66h-4.26q-.54 0-.48-.53l2.68-24.97q.14-1.28.26 0ZM229.95 193.38c-1.91 2.25-9.18 3.84-12.16 4.62l-.03-14.54a.88.88 0 0 0-.92-.88q-16.1.66-32.09.13l-.96-19.96q.62-.61 1.27-.82 21.75-7.94 42.9-17.52 1.54-.7 1.51.99c-.27 19.39-.25 35.05-.2 45.54q.01.94.68 2.44Z"/><path fill="#e83033" d="m139.61 144.57 41.2 16.83q.37.15.66.42.68.65 1.94.28.1.35.38.65l.96 19.96-30.93.26q-.55.01-.56.56l-.26 12.18c-1.63-.47-11.62-4.45-12.21-3.96v-1.25c1.11.1-.24-8.94-.26-10.17q-.34-17.96-.92-35.76Z"/><path fill="#ed655c" d="m254.91 160.12 47.29 9.39a.49.48-64.2 0 1 .27.79l-33.26 39.2q-8.32-3.18-16.78-5.95c-2.31-.75-4.8-2.14-7.31-2.9-5.29-1.62-9.47-3.46-14.25-5.48a.54.54 0 0 0-.62.85c5.24 5.95 11.19 14.26 14.66 18.71 1.23 1.59 13.69 17.26 13.15 17.57l-44.12 12.18-1.65.52-12.06-17.07 16.99-.18q.53-.01.53-.53v-14.95q0-.74-.73-.73l-63.31.16q-.59 0-.59.59l-.1 14.69q-.01.74.73.74l16.64.16-12.68 18.37q-1.24-1.21-2.96-1.46l-44.25-14.58 29.79-37.71.5-.75c.59-.49 10.58 3.49 12.21 3.96l.34 3.07q.05.51.55.43 4.14-.63 8 .31 11.39 5.08 23.25 9.08l27.99-9.24c1.4-.51 5.05.61 4.66-1.36 2.98-.78 10.25-2.37 12.16-4.62l24.96-33.26Z"/><path fill="#e63548" d="m117.46 160.75 23.33 29.75v1.25l-.5.75q-2.03 0-3.76.92c-8.53 4.54-19.18 8.12-28.38 11.23q-2.16.73-4.04 1.71l-34.54-35.84q-.86-.89.35-1.11l47.54-8.66Z"/><path fill="#fff" d="M184.75 182.71q15.99.53 32.09-.13a.88.88 0 0 1 .92.88l.03 14.54c.39 1.97-3.26.85-4.66 1.36q-13.77-.51-27.49-.03l-23.75.19q-3.86-.94-8-.31-.5.08-.55-.43l-.34-3.07.26-12.18q.01-.55.56-.56l30.93-.26Z"/><path fill="#e83033" d="m140.29 192.5-29.79 37.71c-14.83 5.06-29.58 10.11-44.78 13.97q-.49.12-.68.59l-.29.69q-.71.2-1.29-.11-.49-.25-.09-.63l40.74-38.36q1.88-.98 4.04-1.71c9.2-3.11 19.85-6.69 28.38-11.23q1.73-.92 3.76-.92ZM269.21 209.5l33.85 40.11a1.66.41-82.5 0 1 .14 1.29q-.03.36-.95.06l-.65-.87q-.28-.37-.72-.54l-42.82-17.25c.54-.31-11.92-15.98-13.15-17.57-3.47-4.45-9.42-12.76-14.66-18.71a.54.54 0 0 1 .62-.85c4.78 2.02 8.96 3.86 14.25 5.48 2.51.76 5 2.15 7.31 2.9q8.46 2.77 16.78 5.95Z"/><path fill="#c82a35" d="m213.13 199.36-27.99 9.24q-1.41-4.91.5-9.27 13.72-.48 27.49.03Z"/><path fill="#e83033" d="m161.89 199.52 23.75-.19q-1.91 4.36-.5 9.27-11.86-4-23.25-9.08Z"/><path fill="#fff" d="m200.23 227.93-29.84-.05-16.64-.16q-.74 0-.73-.74l.1-14.69q0-.59.59-.59l63.31-.16q.73-.01.73.73v14.95q0 .52-.53.53l-16.99.18Z"/><path fill="#ee8f8f" d="m170.39 227.88 29.84.05L212.29 245l-27.92 39.85-25.85-37.46-.81-1.14 12.68-18.37Z"/><path fill="#92283a" d="m110.5 230.21 44.25 14.58q.3 1.22-.75 1.44-18.91 3.94-36.82 7.61l-52.43-8.38.29-.69q.19-.47.68-.59c15.2-3.86 29.95-8.91 44.78-13.97Z"/><path fill="#a8282b" d="m258.06 232.3 42.82 17.25q.44.17.72.54l.65.87-47.75 5.83q-19.48-6.14-39.26-11.25-.63-.17-1.3-1.06l44.12-12.18Z"/><path fill="#fff" d="m483.6 319.27-2.48 20.93q-.13 1.05-1.18 1.05c-2.7 0-11.58 1.49-10.97-3.25q6.53-51.34 13.08-102.68.07-.57.65-.57h14.54a.5.49 86.7 0 1 .49.44q4.9 51.8 9.5 103.35c.31 3.43 1.4 6.72-3.59 6.72q-4.14 0-7.91-.01a.89.89 0 0 1-.87-.8l-2.43-24.75q-.07-.67-.74-.7l-7.38-.33q-.63-.03-.71.6Zm7.47-17.33-1.94-25.93q-.03-.44-.09 0l-3.32 25.81q-.09.68.6.68h4.2q.59 0 .55-.56ZM635.92 319.48l-2.75 21.59q-.08.66-.75.63l-9.39-.46a2.17 2.16 5.5 0 1-2.04-2.46l14.3-103.49q.08-.59.68-.56l14.25.59q.64.03.69.66l8.78 107.81a2.02 2.01-.9 0 1-2.11 2.17l-9.89-.46q-.52-.03-.58-.55l-2.44-24.96a.73.71 88.2 0 0-.69-.66l-7.52-.31q-.48-.02-.54.46Zm7.61-17.15-1.6-25.82q-.04-.62-.13-.01l-3.72 25.57q-.09.57.49.6l4.36.26q.63.04.6-.6ZM526 331.5h13.62a2.13 2.13 0 0 1 2.13 2.13v12.12a2.25 2.25 0 0 1-2.25 2.25H516a2.25 2.25 0 0 1-2.25-2.25v-104.5q0-.5.5-.5h9.25a2.25 2.25 0 0 1 2.25 2.25v88.25a.25.25 0 0 0 .25.25ZM598.51 285.17l7.43.34q.46.02.47-.45l.9-37.78a1.91 1.9-88.2 0 1 1.97-1.86l10.1.35a.42.42 0 0 1 .4.43l-2.1 102.98q-.01.57-.58.57-2.8 0-8.85-.02c-2.13-.01-3.05-1.03-3.02-3.19.21-14.66.68-29.34.76-44q.01-.49-.49-.5l-7.16-.13q-.5-.01-.51.49l-1.08 41.2a2.51 2.5-88.1 0 1-2.6 2.44l-9.27-.37q-.52-.02-.51-.54l2.2-102.67q.01-.46.47-.46h9.92a1.98 1.98 0 0 1 1.98 2.02l-.82 40.74q-.01.4.39.41Z"/><path fill="#a8282b" d="M154.75 244.79q1.72.25 2.96 1.46l.81 1.14-.27 36.82-48.55 25.09a.41.4-8.6 0 1-.59-.43q5.07-27.47 8.07-55.03 17.91-3.67 36.82-7.61 1.05-.22.75-1.44Z"/><path fill="#e83033" d="M213.94 244.48q.67.89 1.3 1.06 19.78 5.11 39.26 11.25l1.12 51.58a.4.4 0 0 1-.59.36l-44.8-23.94a.68.66-61.7 0 0-.9.28l-24.92 46.32q-.23.44-.72.35-.35-.06-.17-.48l.85-46.41L212.29 245l1.65-.52Z"/><path fill="#92283a" d="m158.52 247.39 25.85 37.46-.85 46.41-25.27-47.05.27-36.82Z"/><path fill="#fff" d="M558.05 316.9c-.64 14.51-.46 39.33-2.48 41.69q-.41.48-1.04.46l-9.72-.36q-.61-.03-.59-.64l3.27-104.47a1.91 1.91 0 0 1 2.01-1.85c9 .43 21.25-1.17 26.66 7.86 7.07 11.77 4.58 34.68.58 46.34-2.76 8.03-9.97 10.28-18.04 10.34q-.62.01-.65.63Zm1.64-47.74-1.03 31.05a.54.54 0 0 0 .52.55l.74.03a8.96 6.94-88.1 0 0 7.23-8.73l.47-14.21a8.96 6.94-88.1 0 0-6.64-9.18l-.74-.03a.54.54 0 0 0-.55.52Z"/><path fill="#c82a35" d="M559.69 269.16a.54.54 0 0 1 .55-.52l.74.03a8.96 6.94-88.1 0 1 6.64 9.18l-.47 14.21a8.96 6.94-88.1 0 1-7.23 8.73l-.74-.03a.54.54 0 0 1-.52-.55l1.03-31.05ZM489.13 276.01l1.94 25.93q.04.56-.55.56h-4.2q-.69 0-.6-.68l3.32-25.81q.06-.44.09 0ZM641.93 276.51l1.6 25.82q.03.64-.6.6l-4.36-.26q-.58-.03-.49-.6l3.72-25.57q.09-.61.13.01Z"/><path fill="#9498a0" d="M333.71 305.5c.04 7.22.06 13.79.33 21.6.24 6.85-.05 14.07-3.68 19.86q-7.05 11.27-22.42 11.27-123.85.04-247.69.01c-9.27 0-17.48-7.34-20.55-15.42-2.25-5.94-1.59-14.31-1.24-21.07q.16 7.34.67 14.66c.65 9.28 6.33 16.63 15.01 19.68q4.04 1.41 12.39 1.41h241.01q6.47 0 10.13-1.31c8.33-2.97 14.88-10.34 15.16-19.56.31-10.38-.33-20.81.88-31.13Z"/><path fill="#c82a35" d="m340.02 376.76.38 10.27q.02.5-.49.49l-1.81-.03q-.62-.02-.65-.64l-1.14-24.99q-.03-.48.43-.65 3.42-1.31 6.46.5.48.29.67.82 1.61 4.69.96 9.44c-.76 5.46-.01 10.27 1.15 15.46q.17.75-.59.63l-2.09-.32q-.67-.1-.75-.78l-.93-8.88q-.05-.49-.32-.9l-.46-.69q-.88-1.31-.82.27Zm-.56-12.06.12 7.88a.19.19 0 0 0 .2.19l.08-.01a3.13 2.2 89.1 0 0 2.16-3.16l-.04-2a3.13 2.2 89.1 0 0-2.24-3.09h-.09a.19.19 0 0 0-.19.19ZM323.64 373.49l1.11-10.15q.07-.59.66-.59h1.14q.67 0 .77.66.85 5.7 1 11.47 0 .04.03.07.14.07.3.06.05-.01.06-.06 1.1-6.31 1.06-12.72 0-.61.61-.61l1.52.01q.77 0 .7.76l-2.4 25.75q-.07.8-.85.64l-1.19-.24q-.56-.11-.62-.68l-1.09-11.83a.38.38 0 0 0-.76.01l-.94 11.95q-.05.63-.68.65l-1.41.06q-.68.02-.75-.66l-2.57-25.85q-.05-.53.47-.6l1.75-.26q.59-.09.62.51.24 5.86 1.17 11.66.18 1.07.29-.01Z"/><path fill="#fff" d="m427.54 369.01.95-6.91q.08-.58.66-.59l2.07-.03q.58-.01.48.56c-1.52 8.73-3.6 16.56-2.28 26q.1.71-.61.71h-2.11q-.7 0-.7-.69c0-4.09.22-7.95-.59-11.99q-1.34-6.68-2.69-13.36-.15-.73.6-.72l1.92.03q.64.01.73.65.43 3.16 1.39 6.35.12.39.18-.01ZM418.58 366.18a.75.74 35.8 0 0-1.44.23q-.48 9.71.58 19.39a.57.57 0 0 0 .87.42c1.3-.83 1.06-5.24.98-6.71q-.04-.51.48-.51h1.99q.64 0 .69.64.2 2.99-.48 6.61c-1.1 5.87-7.62 4.74-7.95-1.04q-.62-10.58-.44-18.28c.08-3.28 2.83-6.98 6.32-4.62 2.35 1.58 2.25 6.64 2.1 9.14q-.04.56-.61.56l-2.26-.03q-.67 0-.5-.65.66-2.6-.33-5.15ZM440.7 366.79a.95.95 0 0 0-1.9.1c.03 2.94-.18 17.94 1.22 19.15a.76.76 0 0 0 1.26-.53l.31-5.99q.03-.49.52-.5l1.54-.03q.62-.01.72.61.74 4.65-.96 8.95-.19.49-.64.75c-3.27 1.88-6.13.12-6.42-3.57q-.75-9.58-.51-19.22.11-4.59 4-4.8c4.84-.26 4.33 6.8 4.11 9.55q-.04.56-.6.61l-1.58.16q-.58.05-.63-.53l-.44-4.71ZM388.89 385.43l3.33-.24a.36.36 0 0 1 .38.37l-.16 3.52a.36.36 0 0 1-.35.35l-6.17.15a.36.36 0 0 1-.37-.35l-.81-26.42a.36.36 0 0 1 .34-.37l6.04-.26a.36.36 0 0 1 .38.36v3.04a.36.36 0 0 1-.31.36l-2.95.44a.36.36 0 0 0-.31.37l.27 6.16a.36.36 0 0 0 .36.34h2.39a.36.36 0 0 1 .36.35l.05 3.63a.36.36 0 0 1-.42.36l-2.01-.38a.36.36 0 0 0-.43.35v7.51a.36.36 0 0 0 .39.36ZM460.58 378q-.56 5.15-.64 10.35-.01.65-.66.65h-1.65q-.63 0-.63-.63v-25.25q0-.62.63-.62h2.93q.56 0 .63.56l1.39 11.65q.17 1.45.36 0l1.53-11.73q.06-.48.55-.48H468q.5 0 .5.5v25.97q0 .78-.78.78h-1.34q-.63 0-.63-.63v-10.85q0-2.67-.4-.03l-1.6 10.77q-.08.5-.54.7c-1.15.47-1.61-.39-1.69-1.39q-.45-5.1-.88-10.32-.03-.3-.06 0Z"/><path fill="#c82a35" d="m295.65 375.99.98-11.4q.04-.55.6-.57l1.17-.03q.64-.02.76.62 1.07 5.8 1.14 11.71 0 .18.18.18h.32q.11 0 .12-.11l.99-12.48q.03-.41.44-.41h1.67q.6 0 .54.59l-2.33 25.62q-.06.64-.7.58l-1.35-.14q-.59-.06-.64-.65l-1.12-12.75a.3.3 0 0 0-.6 0l-1.09 12.77a.72.7-9.7 0 1-.44.6c-1.37.54-2.23.11-2.38-1.39q-1.25-12.63-2.61-25.23-.08-.75.68-.75h1.55q.63 0 .64.63.11 6.35 1.18 12.62.2 1.18.3-.01Z"/><path fill="#ee8f8f" d="m374.71 365.5-.46-.04q-.15-.9.06-1.75.18-.73.38 0 .23.86.02 1.79Z"/><path fill="#c82a35" d="M355.55 377.14c-.05 4.07.61 8.61-.91 13.22q-.16.5-.6.77c-5.56 3.41-6.96-2.42-7.02-6.34-.1-6.37-2.08-21.76 4.87-20.84 4.56.6 3.71 9.38 3.66 13.19Zm-3.178-8.602a1.15 1.15 0 0 0-1.162-1.138h-.06a1.15 1.15 0 0 0-1.138 1.163l.196 18.719a1.15 1.15 0 0 0 1.162 1.138h.06a1.15 1.15 0 0 0 1.138-1.163l-.196-18.719Z"/><path fill="#fff" d="m406.33 385.84-.29 4.54q-.04.62-.66.62h-1.87q-.68 0-.61-.67l2.61-25.57q.08-.73.8-.8l2.52-.26q.72-.08.8.64l3.17 26.72q.08.69-.61.69h-1.99q-.62 0-.7-.61c-.2-1.6.07-6.76-2.53-6.07q-.6.15-.64.77Zm.95-4.58.78-.02a.2.2 0 0 0 .2-.21l-.01-.12a5.18.47 88.3 0 0-.62-5.16h-.24a5.18.47 88.3 0 0-.32 5.2l.01.12a.2.2 0 0 0 .2.19ZM454.66 387.84a4.11 4.11 0 0 1-4.082 4.139l-.32.002a4.11 4.11 0 0 1-4.138-4.081l-.14-19.9a4.11 4.11 0 0 1 4.082-4.139l.32-.002a4.11 4.11 0 0 1 4.138 4.081l.14 19.9Zm-3.07.55-.32-20.84a.1.1 0 0 0-.11-.1h-.03a2.25 2.21 89.1 0 0-2.17 2.29l.26 16.54a2.25 2.21 89.1 0 0 2.25 2.21h.03a.1.1 0 0 0 .09-.1Z"/><path fill="#c82a35" d="m312.2 378.81-1.13 12.92q-.04.52-.56.52h-1.47q-.46 0-.52-.46l-3.22-25.6q-.08-.59.49-.74l1.54-.43q.74-.2.82.57l1.03 10.95q.22 2.32.52.01.65-5.03 1.04-10.09.05-.69.74-.69h1.06q.59 0 .68.58l1.66 11.42q.36 2.46.46-.02l.54-12.72q.02-.5.51-.6 1.96-.42 1.89.99-.61 12.73-1.42 25.43-.03.49-.52.58l-1.45.28q-.71.13-.79-.58l-1.4-12.33a.25.25 0 0 0-.5.01Z"/><path fill="#fff" d="M398.01 368.37c-1.13 1.36-1.46 19.57-.04 20.28a.77.76-74.8 0 0 1.11-.64l.33-5.58q.03-.56-.53-.64l-.52-.07q-.76-.1-.66-.87l.28-2.05q.09-.62.72-.6l3.25.15q.56.02.55.59l-.31 12.2a.83.82-1.1 0 1-.77.8l-4.97.35q-.54.04-.9-.35c-1.59-1.72-1.87-4.76-1.74-6.89.33-5.36-1.35-19.87 3.88-20.79 5.48-.97 4.69 5.92 4.5 9.78q-.02.46-.47.46h-1.88q-.41 0-.42-.41l-.08-5.25a.75.75 0 0 0-1.33-.47ZM339.46 364.7a.19.19 0 0 1 .19-.19h.09a3.13 2.2 89.1 0 1 2.24 3.09l.04 2a3.13 2.2 89.1 0 1-2.16 3.16l-.08.01a.19.19 0 0 1-.2-.19l-.12-7.88ZM383 388.42v2.92a.41.41 0 0 1-.41.41h-6.31a.41.41 0 0 1-.41-.42l.44-26.43a.41.41 0 0 1 .41-.4h2.22a.41.41 0 0 1 .41.42l-.52 22.64a.41.41 0 0 0 .41.42l3.35.03a.41.41 0 0 1 .41.41Z"/><rect width="2.36" height="21.02" x="-1.18" y="-10.51" fill="#fff" rx="1.15" transform="rotate(-.6 36263.062 -33356.462)"/><path fill="#c82a35" d="M451.59 388.39a.1.1 0 0 1-.09.1h-.03a2.25 2.21 89.1 0 1-2.25-2.21l-.26-16.54a2.25 2.21 89.1 0 1 2.17-2.29h.03a.1.1 0 0 1 .11.1l.32 20.84ZM407.28 381.26a.2.2 0 0 1-.2-.19l-.01-.12a5.18.47 88.3 0 1 .32-5.2h.24a5.18.47 88.3 0 1 .62 5.16l.01.12a.2.2 0 0 1-.2.21l-.78.02ZM360.24 384.4c1.45-1.38 2.82.1 4.07.9q.45.29.11.69l-2.59 3.14q-.38.46-.76 0l-2.58-3.13q-.46-.56.22-.82l.77-.3q.43-.17.76-.48ZM370.75 390.3l-2.89-3.39q-.26-.31.03-.59 2.69-2.56 5.62-.37.58.44.14 1.02l-2.52 3.32a.25.24 43 0 1-.38.01Z"/><rect width="3" height="4.26" x="-1.5" y="-2.13" fill="#c82a35" rx=".65" transform="rotate(-1.3 17272.827 -14547.507)"/><rect width="3.04" height="4.24" x="-1.52" y="-2.12" fill="#fff" rx=".46" transform="rotate(-1.2 18748.132 -20478.446)"/></svg>`
                },

                {
                    name: "谷歌学术",
                    searchUrl: "https://scholar.google.com/scholar?q={keyword}",
                    searchkeyName: ["q"],
                    matchUrl: /scholar\.google\..*?q=/g,
                    mark: "GoogleScholar",
                    svgCode: `<svg height="2500" width="2500" xmlns="http://www.w3.org/2000/svg" viewBox="-144 -144 800 800"><g fill="none" fill-rule="evenodd"><path d="M256 411.12L0 202.667 256 0z" fill="#4285f4"/><path d="M256 411.12l256-208.453L256 0z" fill="#356ac3"/><circle cx="256" cy="362.667" fill="#a0c3ff" r="149.333"/><path d="M121.037 298.667c23.968-50.453 75.392-85.334 134.963-85.334s110.995 34.881 134.963 85.334H121.037z" fill="#76a7fa"/></g></svg>`
                },

                {
                    name: "百度学术",
                    searchUrl: "https://xueshu.baidu.com/s?wd={keyword}",
                    searchkeyName: ["wd"],
                    matchUrl: /xueshu\.baidu\.com.*?wd=/g,
                    mark: "BaiduScholar",
                    svgCode: `<svg class="icon" style="width: 1em;height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="-150 -150 1324 1324" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5105"><path d="M511.986 414.714c-191.674 0-334.943 197.644-334.943 374.347 0 56.378 14.317 95.128 43.637 118.527 31.017 24.782 74.386 27.934 108.671 27.934 24.707 0 51.605-1.884 80.119-3.886 65.727-4.578 139.383-4.578 205.072 0 28.512 2.001 55.451 3.886 80.079 3.886 75.346 0 152.308-17.394 152.308-146.462 0-176.702-143.228-374.346-334.943-374.346z" fill="#FCB814" p-id="5106"></path><path d="M655.237 453.999c68.496 73.199 110.236 174.568 110.236 269.898 0 129.067-76.962 146.463-152.306 146.463-24.628 0-51.566-1.884-80.08-3.886-65.687-4.577-139.343-4.577-205.07 0-28.515 2.001-55.412 3.886-80.119 3.886-17.92 0-38.303-0.954-58.124-5.313 7.207 17.536 17.388 31.754 30.907 42.541 31.015 24.783 74.383 27.937 108.672 27.937 24.705 0 51.604-1.886 80.118-3.885 65.727-4.579 139.383-4.579 205.072 0 28.514 2 55.451 3.885 80.079 3.885 75.346 0 152.308-17.397 152.308-146.463-0.001-128.817-76.165-268.669-191.693-335.063z" fill="#070707" p-id="5107"></path><path d="M237.652 524.078c22.742-9.311 40.099-27.78 48.835-51.947 11.542-31.902 7.464-70.421-11.199-105.673-32.443-61.263-103.939-95.43-155.965-74.038-22.784 9.315-40.099 27.824-48.873 52.026-11.542 31.863-7.464 70.385 11.199 105.673 25.59 48.33 74.117 80.812 120.718 80.812 12.388 0 24.279-2.309 35.285-6.853z m184.597-115.633c5.001 0 10.005-0.501 15.006-1.501 58.685-12.008 94.047-90.663 80.579-179.056-13.43-88.237-72.076-149.925-130.912-137.919-58.726 11.968-94.047 90.589-80.579 179.018 12.315 80.812 61.031 139.458 115.906 139.458z m531.315-63.998c-8.736-24.162-26.13-42.711-48.875-52.026-52.14-21.471-123.523 12.775-155.964 74.038-18.662 35.288-22.74 73.809-11.2 105.673 8.736 24.167 26.095 42.597 48.835 51.947 11.006 4.505 22.898 6.814 35.326 6.814h0.04c46.56 0 95.009-32.479 120.598-80.773 18.663-35.248 22.78-73.77 11.24-105.673z m-327.366 62.497a76.259 76.259 0 0 0 14.971 1.501h0.039c54.796 0 103.552-58.646 115.905-139.458 13.47-88.429-21.933-167.05-80.579-179.018-58.915-12.006-117.521 49.682-130.914 137.919-13.545 88.393 21.857 167.048 80.578 179.056z" fill="#FCB814" p-id="5108"></path><path d="M275.289 366.46c-23.675-44.709-68.142-74.863-110.671-79.648 24.92 14.012 47.279 35.939 61.799 63.358 18.662 35.25 22.74 73.771 11.199 105.671-8.736 24.167-26.095 42.638-48.835 51.949-11.006 4.541-22.898 6.851-35.287 6.851-3.52 0-7.053-0.54-10.585-0.902 18.873 10.818 39.294 17.195 59.457 17.195 12.39 0 24.283-2.312 35.288-6.853 22.742-9.311 40.099-27.782 48.835-51.947 11.54-31.904 7.462-70.424-11.2-105.674z m242.545-138.572c-10.639-69.9-49.68-122.978-94.686-136.117 22.373 24.913 39.354 61.09 45.814 103.536 13.468 88.39-21.894 167.049-80.58 179.057a76.202 76.202 0 0 1-15.005 1.499c-7.383 0-14.639-1.141-21.727-3.178 20.023 22.467 44.589 35.759 70.599 35.759a76.22 76.22 0 0 0 15.006-1.499c58.686-12.007 94.048-90.667 80.579-179.057z m435.728 116.557c-7.446-20.595-21.444-36.713-39.424-46.911 2.576 4.557 5.003 9.244 6.842 14.33 11.542 31.906 7.425 70.425-11.237 105.676-25.59 48.293-74.038 80.771-120.599 80.771h-0.04c-12.427 0-24.32-2.307-35.326-6.814-3.357-1.38-6.334-3.353-9.448-5.118 9.65 17.085 24.055 30.31 42.03 37.701 11.006 4.505 22.898 6.813 35.326 6.813h0.04c46.56 0 95.009-32.479 120.598-80.77 18.663-35.252 22.78-73.771 11.238-105.678zM714.244 109.321c12.178 31.099 16.525 69.845 10.287 110.795-12.353 80.81-61.108 139.455-115.905 139.455h-0.04c-4.961 0-9.965-0.497-14.969-1.499-14.055-2.876-26.726-9.657-37.759-19.385 14.119 36.054 38.816 61.81 70.341 68.257a76.174 76.174 0 0 0 14.969 1.499h0.04c54.796 0 103.552-58.645 115.905-139.455 10.246-67.271-7.837-128.771-42.869-159.667z" fill="#070707" p-id="5109"></path></svg>`
                },

                {
                    name: "CNKI",
                    searchUrl: "https://search.cnki.net/search.aspx?q={keyword}",
                    searchkeyName: ["q"],
                    matchUrl: /cnki\.net.*?q=/g,
                    mark: "CNKI",
                    svgCode: `<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M571.1 254v527.7h52.3l19 66.2 92-66.2h129.4V254H571.1z m233.3 467.8h-60.8L666 781l-16.9-59.2h-16v-409h171.3v409zM540.7 552.6s0-56.4-27.8-59.5c-27.9-3.1-114.5 0-114.5 0V317.5h128.4s-1.5-58-26.3-58H291.6l32.5-95.6s-52.6 3.1-71.2 36c-18.5 33-78.9 202.2-78.9 202.2s20.1 9.4 54.2-15.7c34-25.1 44.9-69 44.9-69l61.9-3.1 1.5 178.7s-106.8-1.6-128.4 0c-21.7 1.6-34 59.5-34 59.5h162.5s-13.9 98.7-55.7 170.8C239 795.5 160.1 851.9 160.1 851.9s57.2 23.5 112.9-9.4 96.8-177.7 96.8-177.7l130.7 162s11.9-77.1-2.1-98.9c-14-21.8-90.4-109.3-90.4-109.3l-33.3 29.8 23.7-95.8h142.3z" fill="#ffc168"></path></svg>`
                },

                {
                    name: "StackOverflow",
                    searchUrl: "https://search.yahoo.com/search?p={keyword}",
                    searchkeyName: ["q"],
                    matchUrl: /stackoverflow\.com.*?search\?q=/g,
                    mark: "StackOverflow",
                    svgCode: `<svg class="icon" style="width: 1em;height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="-100 -100 1224 1224" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5564"><path d="M512 64C264.896 64 64 264.896 64 512s200.896 448 448 448 448-200.896 448-448S759.104 64 512 64z" fill="#F48024" p-id="5565"></path><path d="M625.28 587.616l-237.792-34.4 8.224-52.064 232.576 44.704-2.976 41.76zM629.504 532.16l-210.464-98.208 19.296-42.08 210.464 98.24-19.296 42.08zM657.6 479.552l-178.912-149.088 29.792-35.072 178.912 149.12-29.824 35.04zM555.84 249.792l36.832-28.064 138.56 185.92-36.8 28.064-138.56-185.92zM626.016 656.704h-245.568v-52.608h245.568v52.608z" fill="#FFFFFF" p-id="5566"></path><path d="M661.088 551.456v140.32h-315.712v-140.288H292.768v192.928h420.928v-192.96H661.12z" fill="#FFFFFF" p-id="5567"></path></svg>`
                },

                {
                    name: "MDN",
                    searchUrl: "https://developer.mozilla.org/zh-CN/search?q={keyword}",
                    searchkeyName: ["q"],
                    matchUrl: /developer\.mozilla\.org.*?q=/g,
                    mark: "MDN",
                    svgCode: `<svg class="icon" style="width: 1em;height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="-100 -100 1224 1224" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10685"><path d="M393.155 131.134L167.583 857.539h-92.28l224.784-726.405h93.068z m82.026 0v726.405h-82.026V131.134h82.026z m317.852 0L568.25 857.539h-92.28l224.783-726.405h92.28z m82.026 0v726.405h-82.026V131.134h82.026z" fill="#0069C2" p-id="10686"></path></svg> `
                },

                {
                    name: "Coursera",
                    searchUrl: "https://www.coursera.org/search?query={keyword}",
                    searchkeyName: ["query"],
                    matchUrl: /coursera\.org.*?query=/g,
                    mark: "Coursera",
                    svgCode: `<svg class="icon" style="width: 1em;height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="-200 -200 1424 1424" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2406" data-spm-anchor-id="a313x.search_index.i1.i4.24d13a817z7S6A"><path d="M1023.65408 503.712a215.904 215.904 0 0 0-0.832-12.768l0.064 0.864v-0.16a254.4 254.4 0 0 0-42.816-120.96l0.576 0.896a268.128 268.128 0 0 0-36.896-44.256l-0.096-0.064a268.704 268.704 0 0 0-68.384-47.52l-1.6-0.704a295.104 295.104 0 0 0-127.52-28.512h-2.816 0.128-1.28a312.864 312.864 0 0 0-109.504 19.648l2.176-0.704a269.76 269.76 0 0 0-78.304 42.944l0.576-0.448a280 280 0 0 0-14.368 12.512l0.16-0.16-3.616 3.616-4.992 5.344h0.032l-2.4 2.336-1.12 1.184-6.016 6.272c-4.448 4.992-8.608 9.984-12.64 14.88v-0.096L512.00608 357.728a258.24 258.24 0 0 0-21.344 29.568c-3.808 5.984-7.52 12.064-11.04 18.208l-48.928 98.944 0.096 0.032-2.56 5.024-5.376 10.912c-10.72 21.728-22.24 43.392-35.04 61.216-28.672 31.456-61.056 46.848-102.656 46.848a120.96 120.96 0 0 1-8.928-0.352c-25.088-0.992-46.592-6.912-65.664-18.208a110.528 110.528 0 0 1-42.112-43.36l-0.288-0.576a112 112 0 0 1-13.92-58.624v0.192l0.096-1.44c1.312-32.416 13.696-57.696 38.56-79.392 6.048-5.28 12.416-9.728 19.04-13.664 0.896-0.544 1.888-1.024 2.784-1.536 18.528-10.112 39.552-15.136 63.648-15.136l7.52 0.224c38.368 1.44 67.936 13.408 91.52 36.832l73.984-132.832a288 288 0 0 0-57.696-29.632l-2.016-0.672c-0.8-0.288-1.696-0.672-2.56-0.928-2.656-0.928-5.248-1.92-7.936-2.784a307.04 307.04 0 0 0-72.064-14.784l-1.152-0.064-3.2-0.384 1.248 0.128c-3.872-0.224-7.84-0.672-11.744-0.864a350.304 350.304 0 0 0-12.48-0.288h-4.16c-46.336 0-90.208 10.56-129.344 29.376l1.792-0.768a265.6 265.6 0 0 0-106.144 91.456l-0.608 0.96a253.856 253.856 0 0 0-43.36 142.624v1.728-0.096c-0.096 66.72 24.224 125.344 72.576 174.624 50.528 51.68 116.096 79.52 194.848 82.816 5.024 0.224 10.016 0.352 15.072 0.352 44.576 0 85.792-7.936 122.784-23.808a288 288 0 0 0 27.392-13.728c4.992-2.848 9.728-5.92 14.432-9.184l3.424-2.336 5.856-3.968c7.008-5.024 13.536-10.496 19.936-16.256l2.208-2.144a295.36 295.36 0 0 0 11.04-10.88l13.28-15.008 5.024-6.304 2.4-3.456 2.336-3.36c19.712-33.12 83.84-153.632 83.84-153.632v-0.256l3.84-7.328 3.168-5.76c9.472-17.184 16.288-29.408 25.344-42.24l0.256-0.416c21.024-30.592 57.344-52.352 100.096-56.032 71.68-6.176 134.496 40.928 140.256 105.184 5.76 64.288-47.648 121.44-119.392 127.616a145.12 145.12 0 0 1-44.096-2.912l0.96 0.192-0.384 0.128c-52.576-10.976-86.048-49.28-102.56-66.464l-68.992 126.88s21.472 21.6 36.128 32.384a279.008 279.008 0 0 0 48.896 28 299.616 299.616 0 0 0 121.088 25.12c5.152 0 4.128 0 9.472-0.224 78.688-3.296 148.864-33.44 199.456-85.12 47.904-49.056 73.952-105.088 74.144-171.424v-2.016l-0.48-10.976z" fill="#2A73CC" p-id="2407"></path></svg>`
                },

                {
                    name: "京东",
                    searchUrl: "https://search.jd.com/Search?keyword={keyword}",
                    searchkeyName: ["keyword"],
                    matchUrl: /jd\.com.*?keyword=/g,
                    mark: "JD",
                    svgCode: `<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#ff4f81" style="height: 100px; width: 100px;"><path d="M744.031 425.741v-45.281h-169.537v45.394h72.056v43.256c0 7.959-1.406 11.981-4.162 14.4s-7.003 3.684-12.6 3.797v13.472c14.569-0.478 25.2-3.6 31.978-9.506 6.722-5.85 10.125-14.85 10.125-26.944v-38.447h72.141v-0.141zM719.591 411.734h-120.628v-17.156h120.628v17.156zM671.975 346.091h-25.453v10.659h-78.216v14.119h181.912v-14.119h-78.216l-0.028-10.659zM568.306 500.356h14.428c30.825-26.859 38.841-65.166 38.841-65.166h-27.816c-3.347 27.084-14.766 49.922-25.453 65.166v0 0zM696.922 435.191c0 0 8.044 38.306 38.841 65.166h14.428c-10.659-15.244-22.078-38.081-25.481-65.166h-27.787zM776.909 500.356h14.456c30.825-26.859 38.841-65.166 38.841-65.166h-27.816c-3.403 27.084-14.794 49.922-25.481 65.166v0 0zM905.525 435.191c0 0 8.044 38.306 38.841 65.166h14.456c-10.688-15.244-22.106-38.081-25.481-65.166h-27.816zM840.894 356.75l4.95-10.744h-25.481l-5.006 10.744h-38.475v14.119h31.866l-25.65 54.956h73.8v43.256c0 8.353-1.378 11.981-4.134 14.4-2.784 2.419-7.003 3.684-12.6 3.797v13.472c14.541-0.478 25.2-3.6 31.978-9.506 6.75-5.85 10.125-14.878 10.125-26.944v-38.475h70.313v-14.119h-70.313v-30.375h-25.341v30.375h-41.4l18.844-40.838h124.453v-14.119h-117.928zM462.078 385.325c-32.203-28.238-79.509-42.525-140.512-42.525h-71.916v338.372h71.916c61.003 0 108.394-14.316 140.512-42.469 32.006-28.012 48.881-71.803 48.881-126.647-0.028-54.9-16.903-98.803-48.881-126.731M425.15 602.45c-21.488 19.631-54.225 29.644-97.313 29.644h-25.003v-239.934h25.003c43.088 0 75.853 9.984 97.313 29.531 21.094 19.181 32.203 50.4 32.203 90.422-0.028 39.909-11.109 71.1-32.203 90.337v0 0zM156.613 546.959c0 22.275-1.491 37.969-4.444 46.659-2.756 8.241-7.566 15.159-14.203 20.419-8.044 6.159-17.887 10.688-29.194 13.584-11.053 2.813-24.919 4.275-41.119 4.416h-5.653v49.022h5.4c1.238 0.084 2.222 0 2.616 0 46.969 0 83.784-9.984 106.566-29.503 23.316-20.025 35.128-50.287 35.128-90.197v-218.475h-55.069l-0.028 204.075zM746.056 543.416c-37.266 0-67.584 30.291-67.584 67.556s30.319 67.584 67.584 67.584 67.584-30.319 67.584-67.584-30.319-67.556-67.584-67.556M746.056 658.306c-26.072 0-47.306-21.263-47.306-47.334 0-26.1 21.206-47.334 47.306-47.334 26.1 0 47.306 21.234 47.306 47.334s-21.206 47.334-47.306 47.334v0 0zM525.894 628.466c-7.144 0-12.938 5.794-12.938 12.966 0 7.144 5.794 12.938 12.938 12.938s12.938-5.794 12.938-12.938c0.028-7.172-5.794-12.966-12.938-12.966v0 0zM940.906 547.381l-45.563 85.387-45.563-85.388h-21.066v127.266h19.969v-85.922l46.631 84.178 46.631-84.206v85.95h20.053v-127.294l-21.094 0.028zM662.891 646.409c-8.663 7.622-19.772 11.897-31.303 11.897-26.072 0-47.306-21.206-47.306-47.334 0-26.072 21.206-47.278 47.306-47.278 11.531 0 22.669 4.191 31.331 11.897l1.575 1.35 14.344-14.316-1.772-1.603c-12.459-11.362-28.631-17.634-45.478-17.634-37.266 0-67.556 30.319-67.556 67.556 0 37.294 30.319 67.556 67.556 67.556 16.847 0 33.019-6.272 45.506-17.606l1.688-1.603-14.287-14.316-1.603 1.434zM662.891 646.409z"></path></svg>`
                },

                {
                    name: "亚马逊",
                    searchUrl: "https://www.amazon.com/s?k={keyword}",
                    searchkeyName: ["k"],
                    matchUrl: /amazon\..*?k=/g,
                    mark: "Amazon",
                    svgCode: `
<svg class="icon" style="width: 1em;height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4883"><path d="M832 696c-6.72 5.44-12.88 2.4-10.16-4.88 9.52-24 31.28-77.6 21.2-90.64s-68.08-6.08-93.84-3.04c-8 0.88-9.2-5.76-1.84-10.96 46-32 121.44-22.72 130.32-12.08S874.64 660.56 832 696z m-22.72-57.6c-80.72 58.88-197.6 90.08-298.16 90.08a542.24 542.24 0 0 1-363.84-137.36c-8-6.64-0.88-16 8-10.56a737.6 737.6 0 0 0 364.08 95.52 733.44 733.44 0 0 0 277.68-56c14.08-5.76 25.44 8.8 11.92 18.56z m25.2-309.6c0 9.12-1.84 11.52-6.16 12.08s-3.68-3.6-22.72-9.04-56-7.28-69.92 6.08-8.88 34.24 13.76 43.36c37.44 16 93.6 16 97.28 72-1.2 61.52-66.88 67.6-86.48 67.6a184 184 0 0 1-60.8-12.16c-14.4-5.76-13.76-13.6-13.76-13.6v-17.68c0-8 15.36 0 15.36 0a144 144 0 0 0 56 10.64c31.04 0.56 47.28-7.6 48.48-30s-28.8-29.76-45.52-34.64-72-15.44-72-64.56S735.36 296 765.76 296s48 6.08 59.2 12.16 9.2 11.84 9.2 11.84v8.8zM600.4 513.52a103.36 103.36 0 0 1-10.8 1.52h-15.28a28.8 28.8 0 0 1-10.8-3.04c-4.88-2.72-6.08-12.08-8-17.84s-36.56-144-36.56-144L482.88 503.2a19.2 19.2 0 0 1-6.16 8.8 49.92 49.92 0 0 1-13.76 3.04h-13.2a17.04 17.04 0 0 1-12.24-4.56 56.8 56.8 0 0 1-9.2-19.44l-54.32-177.36s-4.88-12.08 4.56-12.08h25.76s10.8-3.68 15.36 15.12 39.6 154.64 39.6 154.64L497.28 312a24 24 0 0 1 4.64-9.12 61.68 61.68 0 0 1 19.6-1.52h12.32s7.36-1.2 10.72 9.12S584 472.88 584 472.88l42.64-159.2a59.6 59.6 0 0 1 3.12-7.52c1.84-3.68 3.68-4.56 9.2-4.56h24a5.6 5.6 0 0 1 6.08 6.08c0 2.72-60.72 195.2-60.72 195.2s-4.32 9.76-8 10.64z m-259.84 1.52s-6.72 3.04-13.84-6.08a171.52 171.52 0 0 1-13.76-22.4A88 88 0 0 1 244.56 520c-45.76 0.56-69.36-24-70-63.04s35.28-68.56 74.56-67.68a271.28 271.28 0 0 1 62.32 8v-23.52s-1.6-30.64-19.68-39.12-42.96-6.64-64-1.2a115.76 115.76 0 0 0-24 7.28 20.48 20.48 0 0 1-8 3.04c-4.96 0.88-6.16-2.16-6.16-4.56v-17.92s-2.48-5.12 8-10.64a160 160 0 0 1 66.88-15.12c30.64 0 56 6.08 69.92 24S350.96 352 350.96 384v61.6s-3.04 28.8 8 40.64c0 0 6.16 6.64 3.12 12.08a98.96 98.96 0 0 1-21.2 16.72zM312 423.44a176.72 176.72 0 0 0-54.56-6c-24 2.4-41.76 13.04-40 42.08s32.88 33.12 53.12 27.04c31.68-9.44 41.44-27.04 41.44-63.12z" fill="#473EE5" p-id="4884"></path></svg>
`
                },

                {
                    name: "AliExpress",
                    searchUrl: "https://www.aliexpress.com/wholesale?SearchText={keyword}",
                    searchkeyName: ["SearchText"],
                    matchUrl: /aliexpress\.com.*?SearchText=/g,
                    mark: "AliExpress",
                    svgCode: `<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24"><path fill="#dc2626" d="M5.166 9.096a.02.02 0 0 0-.022.021c0 .396-.32.717-.713.717a.02.02 0 0 0-.021.022c0 .012.01.021.021.021c.394 0 .713.322.713.718q.002.02.022.021c.011 0 .021-.01.021-.021A.717.717 0 0 1 5.9 9.88a.021.021 0 0 0 0-.043a.716.716 0 0 1-.713-.718v-.002a.02.02 0 0 0-.006-.015a.02.02 0 0 0-.015-.006m-3.693.526L0 13.462h.48l.355-.922h1.782l.354.922h.481L1.98 9.622zm2.264.002v3.838h.491V9.624zm2.375 0v3.838h2.413v-.502H6.613v-1.19H8.19v-.477H6.613v-1.166h1.773v-.502zm-4.386.592l.698 1.82H1.028zm14.689.402a1.47 1.47 0 0 0-.966.366V10.7h-.491v2.763h.49c.002-.477 0-.955.002-1.433a.97.97 0 0 1 .965-.918zm4.18.007q-.079 0-.158.01c-.315.031-.606.175-.753.377a.7.7 0 0 0-.14.465c.007.2.066.357.233.496c.184.147.42.2.657.259c.311.067.426.095.546.186c.08.07.133.127.136.27c0 .25-.221.372-.42.41a.89.89 0 0 1-.894-.344l-.371.288c.33.382.777.505 1.09.5c.54-.01.891-.217 1.029-.534c.066-.153.063-.309.063-.38a.68.68 0 0 0-.267-.545c-.228-.177-.583-.228-.636-.242c-.437-.078-.658-.196-.697-.341c-.043-.192.102-.35.297-.411a.76.76 0 0 1 .857.277l.367-.247a1.17 1.17 0 0 0-.939-.494m2.387 0q-.079 0-.157.01c-.316.031-.607.175-.753.377a.7.7 0 0 0-.14.465c.006.2.065.357.233.496c.183.147.42.2.657.259c.31.067.426.095.545.186c.081.07.134.127.136.27c.001.25-.221.372-.42.41a.89.89 0 0 1-.894-.344l-.371.288c.33.382.777.505 1.09.5c.541-.01.891-.217 1.03-.534c.065-.153.062-.309.062-.38a.68.68 0 0 0-.267-.545c-.227-.177-.583-.228-.636-.242c-.437-.078-.658-.196-.696-.341c-.043-.192.101-.35.297-.411a.76.76 0 0 1 .857.277l.367-.247a1.17 1.17 0 0 0-.94-.494m-9.84.002a1.46 1.46 0 0 0-1.42 1.117a1.3 1.3 0 0 0-.041.327v2.833h.491v-1.813c.17.18.487.42.96.454a1.45 1.45 0 0 0 1.208-.627a1.457 1.457 0 0 0-1.199-2.292zm4.804 0a1.448 1.448 0 0 0-1.288 2.08c.255.53.811.87 1.412.833a1.45 1.45 0 0 0 1.012-.51l-.363-.291a.97.97 0 0 1-1.106.273a1.01 1.01 0 0 1-.602-.69h2.239l.002-.427a1.295 1.295 0 0 0-1.306-1.268m-9.2.08l1.062 1.377l-1.062 1.378h.581l.779-1.01l.778 1.01h.581l-1.062-1.378l1.062-1.378h-.581l-.778 1.01l-.779-1.01zm-3.825.015v2.74h.49v-2.74zm8.233.37a.96.96 0 0 1 .95.993a.963.963 0 0 1-.863.998a.96.96 0 0 1-1.034-.739c-.074-.382 0-.746.307-1.019a.96.96 0 0 1 .64-.233m4.79.015a.823.823 0 0 1 .819.755h-1.76a.964.964 0 0 1 .94-.755z"/></svg>`
                },

                {
                    name: "微博",
                    searchUrl: "https://s.weibo.com/weibo?q={keyword}",
                    searchkeyName: ["q"],
                    matchUrl: /weibo\.com.*?q=/g,
                    mark: "Weibo",
                    svgCode: `<svg class="icon" viewBox="100 100 824 824" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M213 630.4c-33-1-64.7-7.1-93.5-23.9-21.6-12.6-39.8-29.2-41.7-55.6-1-13.5 1.1-28.7 6.7-40.8 21.8-47.5 57.5-81.8 105.9-102.2 6-2.6 12.9-3.8 19.5-4.2 21.1-1.1 32.4 12.7 28.2 33.4-1 4.9-0.9 10.1-1.3 15.1 5.1-1.2 10.1-2.5 15.3-3.5 13.1-2.4 26.1-6.1 39.3-6.6 22.5-0.8 33.7 14.2 26.5 35.6-3.6 10.7-0.7 14.3 9.3 18 36.9 13.4 44.5 49.1 17.5 80.9-25 29.6-58.4 43.9-95.7 50.2-11.9 1.9-24 2.5-36 3.6z m-17-18.8c34.7 0.5 64-8 88.9-29.2 21.3-18.1 27.4-44.1 13.3-65.3-6.1-9.1-15.5-16.9-25-22.5-24.4-14.6-51.8-15.5-79-12.2-23.6 2.9-45.3 11.5-63.8 27.1-31 26-28.5 65.2 5.8 86.3 19.1 11.7 40 16.4 59.8 15.8z" fill="#F70B19"></path><path d="M588.4 544.6c-0.5-2.7-1.9-5.6-1.2-7.8 8.1-25.7 16.9-51.1 24.6-76.9 2-6.5 4.6-8.7 11-8.2 7 0.4 14 0.1 21.5 0.1-0.5-3.7-0.8-6.5-1.2-9.7 2.5-0.9 5-1.8 8.4-3.1 1.6 4.3 3.1 8.1 4.8 12.8h29.6c-4.7 15.8-8.8 30.4-13.6 44.8-0.6 1.7-4.7 3.1-7.3 3.2-10 0.4-20 0.2-31.7 0.2 2.9 6.5 5.1 11.4 7.6 17.2 10.6-5 20.2-9.5 29.8-14 5 6.1 5.1 6.2-1 9.2-7.1 3.4-14.4 6.5-24.5 11 9.9 4.4 17.5 7.8 25.3 11.3-3.2 7.3-8.2 7.6-15.6 4.6-17.7-7.3-27.1-20.9-31.1-38.2-11.1-3.7-16.2 0.5-17.9 10.9-1.1 6.5-3.5 12.7-5.9 20.8 9.6-2.8 18.1-5.2 26.5-7.6-0.7 9-3.2 10.3-38.1 19.4z m30.4-72.7c14.4 0 28.4-0.6 42.4 0.2 9.3 0.5 11.6-3.7 11.3-12.6-13.4 0-26.7 0.6-40-0.2-8.9-0.6-13.1 2.5-13.7 12.6z m-5.5 20.2c14.1 0 28.1-0.6 42.1 0.2 9.4 0.5 11.3-4 10.9-12.7-13.2 0-26.2 0.5-39.1-0.2-8.7-0.5-14.3 1.3-13.9 12.7z"></path><path d="M401.6 451.3c-1.8 9.3-2.2 17.3-5.2 24.1-1.9 4.1-8.1 9.1-12 8.9-7.2-0.5-8.4-7.5-7-14.1 3.1-14.8 2.9-29.4-3.1-43.4-10.2-23.8-33.8-38.7-59.9-38.1-4.4 0.1-9.1 1.5-13 0.2-4-1.4-7.1-5.3-10.6-8.1 3.1-3.8 5.7-10.3 9.3-10.9 41.9-7.1 78.3 11.1 95 52.8 3.8 9.2 4.6 19.8 6.5 28.6z" fill="#FC7F06"></path><path d="M919.1 506.2c-0.4-1.9-1.1-5.4-1.2-5.3-7.3 1-16.2-4.9-21.7 5-0.6 1.1-6 1.2-7.2 0-6.7-7.5-17.2-7.7-23.7-0.3-1.7 2-5.3 2.3-9.8 4.1 4.1-14.1 7.1-26 11.1-37.5 0.9-2.7 5.3-5.4 8.4-5.8 6.2-0.9 12.7 0 19.1-0.4 2.5-0.2 4.9-1.8 7.3-2.8-0.2-1-0.4-1.9-0.6-2.9h-35.9c-0.3-7 2.8-8.6 8.4-8.4 9.7 0.3 19.5 0.1 29 0.1 5.1-3.2 1.9-15.4 13.2-11.2-0.5 3.4-1 6.9-1.6 10.8h16.5c-1.4-2.9-2.6-5.3-4.1-8.3 1.1-0.9 3-2.9 3.5-2.6 4.1 2.5 7.9 5.5 11.8 8.3l-1.8 2.7c3.2 0.2 6.4 0.3 9.7 0.5l1.8 2.7c-2.7 1.7-5.2 4.6-8 4.8-8.7 0.6-17.5 0-26.2 0.4-2.8 0.1-5.5 1.8-8.2 2.8 0.3 1 0.5 2.1 0.8 3.1h29.9c-4 13.5-7.3 25.8-11.7 37.8-0.6 1.6-6.2 1.5-9.5 2.1 0.3-0.1 0.7 0.3 0.7 0.3z m-26.9-18.7c-20.2-1.1-20.2-1.1-21.1 5.8 19 2.1 19.4 2 21.1-5.8z m7.9 5.7c20 2.3 21.4 1.9 23.7-5.8-7.6 1.7-16.5-4.6-23.7 5.8z m-25.3-14.7c7.5-0.2 15.8 5.1 21.6-3.3-7.6 0-15.8-4.9-21.6 3.3z m54.6-3.3c-15.9-3.2-21.3-2.1-22.8 4.8 7.4-1.7 15.9 3.8 22.8-4.8zM888.5 627.8c2.4-8.3 5.1-16.5 7.1-25 0.7-2.9 0.7-7.5-1-9.1-1.9-1.7-6.9-2-9.2-0.7-4.1 2.3-8.2 5.8-10.3 9.9-2.9 5.5-4.5 11.9-5.6 18-1.6 9-6.7 10.4-15.6 7.7 2.4-8.9 5-17.6 7.2-26.5 0.7-2.7 0.9-7.7-0.2-8.2-3-1.4-7.7-2.2-10.2-0.7-4.2 2.6-8.2 6.6-10.6 11-2.7 4.8-4.1 10.6-5 16.1-1.6 9.6-6.9 10.9-15.5 8.2 4.4-15.3 8.8-30.2 13.5-46.6 4.6 1.3 8.4 2.4 12.3 3.5-0.3 0.7-0.5 1.4-0.8 2.1 5.9-1.7 11.8-4.6 17.7-4.6 5.2 0 10.4 3.4 15.6 5.3 6.3-1.7 13.8-4.8 21.4-5.3 9-0.6 13.1 4.6 11.2 13.5-2.1 10.1-4.6 20.3-8.6 29.7-1.2 2.8-7.8 3.4-12 5-0.5-1.2-0.9-2.2-1.4-3.3zM566.7 448.8c-2.2 1.7-4.3 4.4-6.7 4.8-9 1.2-18 2.2-27 2-6.9-0.1-10.4 2-11.6 8.9-1 5.5-2.9 10.8-4.8 17.6h42.9c0.3 1.3 0.5 2.5 0.8 3.8-3 0.9-6.1 2.7-9.1 2.5-8.2-0.7-11.7 2.9-13.6 10.7-3.2 13.2-8 26.1-11.5 39.2-1.7 6.3-4.7 7.3-10.7 4.8 5.2-17.6 10.4-35 15.5-52.4-14.2-4.4-15.2-3.8-19.8 9.1-6.1 17.4-15.7 32.5-31.1 44.3-1.6-1.7-3.3-3.5-5.6-6 26.3-19.5 30.1-49.8 38.7-77.5 2.7-8.8 6.1-12.7 15.5-12.7 11.9 0 23.9-1.6 35.8-2.5 0.7 1.2 1.5 2.3 2.3 3.4zM769.6 485.9c9.1-13.2 18.1-26.5 27.5-39.5 2-2.7 5.7-4.2 8.7-6.2 0.7 0.8 1.5 1.6 2.2 2.4-3 5.3-5.9 10.7-9.6 17.3h25.8c-0.9 2.6-1 5.2-1.9 5.5-12.1 3.9-11.7 16.4-17.2 24.9-3.3 5.1-5.4 11.1-9.4 15.4-8.4 9-5.3 16.7 1 24.6 1.5 1.8 3.2 3.5 5.5 6-2.4 2.6-4.7 5.3-7.9 8.8-4.3-6.9-8.1-13-12-19.2-8.7 5.8-17.8 11.9-27.1 17.8-0.2 0.1-2.3-2.8-4.1-5 20-11.1 35.9-24.3 27.5-48.8-3.3-1.5-6.3-2.9-9.3-4.3l0.3 0.3z m36.7-16.4c-0.7-1.1-1.4-2.1-2.1-3.2-4.7 2.1-12.7 3.2-13.6 6.3-2.7 9.5-2.7 19.7-3.7 29.6 1.1 0.3 2.2 0.5 3.4 0.8 5.3-11.1 10.7-22.3 16-33.5zM442.7 602c-11.5 8.4-9.7 28.6-29.8 28.1-1.1-15.9-2.1-31-3.2-46.7h12.4c1 9 1.9 17.7 3.1 29.1 5.3-8.8 9.7-15.3 13.2-22.3s8.2-9 16.3-6v26.1c12.1-7.2 10.9-26.2 30.4-28.3-4.5 7.7-7.7 13.3-11 18.7-4.6 7.4-9.9 14.4-13.9 22-3.7 7-8.4 8.9-16 5.8-0.6-8.6-1-17.2-1.5-26.5zM575.7 624.2c-3.5 2.4-6.2 4.3-8.9 6.2-0.7-0.6-1.5-1.1-2.2-1.7 5.9-20.5 11.8-41.1 17.7-61.5h12.4c-1.6 6.4-3.1 12.1-4.6 17.9 1 0.1 1.6 0.5 2 0.3 7.9-4.7 16.5-7.7 24.2-1.1 7.7 6.7 5.3 15.8 2.4 24.2-3.6 10.4-10.2 17.9-20.9 21.4-8.6 2.8-16 1.5-22.1-5.7z m26.8-33.5c-11.2-0.3-17.8 6.4-19.9 18.5-0.6 3.5 0.1 9.4 2.2 10.6 3.1 1.7 10.4 1.8 11.8-0.2 4.7-7.1 8-15.2 10.8-23.2 0.4-1.4-4-4.6-4.9-5.7zM796.2 582.5c16.4-0.1 23.8 10.3 18.1 25.8-5.2 14-15.7 21.4-30.2 22.7-16.4 1.5-25-10.2-19.8-25.8 4.6-13.8 16.9-22.6 31.9-22.7z m-14.6 39.1c12.5 0.4 20.5-8.9 21-20.5 0.2-5.4-1.1-10-8-10.2-8.6-0.3-19.1 10.8-18.5 21.2 0.2 3.8 4.2 7.4 5.5 9.5zM659.6 582.6c17.5 0.2 24.8 13.2 16.3 29.9-6 11.6-16.4 17.5-29.1 18.6-15.8 1.3-24.4-10.1-19.6-25.2 4.5-14.4 17.2-23.5 32.4-23.3zM645 621.9c12.4-0.1 21.7-11.3 21.1-22-0.3-5.5-3.3-9.3-9.6-9-8.7 0.3-17.5 10.8-16.8 21.6 0.2 3.7 4 7.2 5.3 9.4z"></path><path d="M338.4 456.3c0.7-17.9-7.1-25.6-25-27.1-4.3-0.4-8.2-5-12.3-7.7 3.6-3 6.9-8.2 10.7-8.6 31.2-3.2 48.5 24.5 43.5 45.3-1.3 5.5-1.5 11.9-9.5 11.8-6.1-0.1-7.8-3.5-7.4-13.7z" fill="#FC7F06"></path><path d="M527.4 617.8c-6.7 9.4-16.1 13.5-27.4 13.4-15.2-0.1-22.4-10.4-17.9-25 5.3-16.9 23-27.2 40.3-23.3 9.3 2.1 12.5 9.4 10.1 24.9-9.7 0-19.7 0.2-29.6-0.1-5.2-0.1-10.8 0.2-8.9 6.7 1.1 3.5 6.5 7.1 10.5 8 3.1 0.7 7-3 10.8-4.4 3.6-1.3 7.5-2.2 11.2-3.2 0.3 0.9 0.6 2 0.9 3z m-7.5-17.2c0.9-0.8 1.9-1.5 2.8-2.3-2.7-2.8-5.1-7.4-8.2-8-7.5-1.3-13.9 1.6-17 10.2 8.1 0.1 15.2 0.1 22.4 0.1zM918.7 505.8c-0.1 2-0.3 3.9-0.5 6.7h16.1c0.6 1.1 1.1 2.2 1.7 3.2-2.7 1.5-5.5 4.5-7.9 4.2-10.1-1.4-14.9 2.3-17.3 12.3-2.5 9.9-23.1 16.8-32.4 11.5-1.5-0.8-1.7-3.8-2.5-5.7 8.8-1.7 17.1-2.3 24.6-5.1 2.6-1 3-7.4 4.8-12.2h-40.8c4.5 3.8 7.9 6.6 11.3 9.5-6.8 6.3-6.8 6.3-18.9-4.1 1.1-1.7 2.2-3.3 4-6.1h-16.2c-0.4-1-0.8-2.1-1.3-3.1 2.7-1.4 5.4-3.8 8.2-4 9-0.5 18-0.7 27-0.1 14 0.9 27.5-0.8 40.4-6.5 0.1-0.1-0.3-0.5-0.3-0.5zM823.7 477c4.8-3.3 7.5-6.5 10.3-6.7 5.4-0.3 7.6-2.1 8.6-7.4 1.1-5.8 3-11.7 5.5-17.1 1.4-3 4.8-5 7.3-7.4 1 0.7 2 1.5 3 2.2-2.6 9.4-5.2 18.8-8 28.6 3.1 0.5 6 1 12.7 2-4.1 3.3-6.4 6.5-8.2 6.4-6.9-0.7-8.4 3.3-9.9 8.6-4.9 17.3-9.9 34.6-15.5 51.7-1.1 3.2-4.9 5.5-7.5 8.2-1.1-0.8-2.2-1.6-3.3-2.3 3.1-10.7 6.2-21.3 9.3-32 3.2-10.8 6.5-21.6 9.9-33.1-3.9-0.4-7.4-0.9-14.2-1.7zM755 611.2c-0.2 3.8 0 4.6-0.3 5-7.4 11.6-21.7 17.7-32.7 14.1-8.8-2.9-11.5-9.6-10.9-18.1 1-13.8 13.4-27.6 26-29.5 13.8-2 20.3 0.4 22.5 8.9 0.5 2.1-0.2 6.2-1.3 6.5-2.6 0.8-6 0.7-8.5-0.5-3.7-1.6-8-7.1-10-6.2-4.7 2-8.6 6.6-12.2 10.6-1.6 1.8-2.6 4.9-2.4 7.4 0.3 3.7 1.1 9.9 2.9 10.3 3.9 1 8.8-0.4 12.9-1.8 4.5-1.4 8.5-3.9 14-6.7zM473.3 487.8l-0.7 9.1h21.5l1.2 3.6c-2.8 1.3-5.4 3.4-8.3 3.6-17.9 1-18 0.9-23.4 18.6-6.2 20.1-8.2 21.4-32.7 18.9 4.3-3.3 6.8-6.8 8.9-6.6 9.5 1.2 13.2-3.6 15-11.9 1.2-5.8 3.1-11.5 5.2-18.9h-22.8c-0.5-0.6-1-1.3-1.5-1.9 1.8-1.6 3.5-4.2 5.5-4.6 3.9-0.8 8-0.6 12-0.3 5.4 0.4 9.6-0.3 11.6-6.5 0.7-2.2 4-3.5 6.2-5.3 0.9 0.7 1.6 1.4 2.3 2.2zM748.4 511.5c-10.8-2.9-17.1-2.1-21 9.3-2.8 8.3-10.1 15-15.4 22.4-1.4-0.7-2.8-1.3-4.2-2 0.7-2.8 0.9-5.9 2.3-8.3 4.1-7.5 9.6-14.3 12.6-22.1 2.1-5.5 4.4-7.4 9.9-7.3 8.3 0.3 16.6 0.1 25.6 0.1-1.2 5.8-2.1 10.6-3.3 16.7 4.5-2.4 7.7-4.2 13.5-7.3-1.6 4.5-1.8 8-3.6 9.4-5.2 4.1-11 7.5-16.9 10.7-1.6 0.9-4.1 0.2-6.2 0.2 0.2-2.1 0-4.2 0.7-6.1 1.7-5.3 3.9-10.4 6-15.7zM743.8 470.5c2.6-2.2 6.3-3.8 7.7-6.6 2.6-5.3 3.6-11.4 5.9-16.9 1-2.4 3.6-4.2 5.5-6.3 1 0.5 1.9 1 2.9 1.6-2.3 8.7-4.5 17.3-6.8 26.1 11.5 3.9 10.4-5.2 12.3-10.2 1.7-4.7 1.9-10.3 10.5-7.4-2 6.9-3.7 13.9-6.3 20.6-0.8 2.1-4.1 4.5-6.3 4.6-12.4 0.4-24.8 0.2-39 0.2 5.3-9.5 3.2-20.9 12.2-26.7 1.1 0.4 2.2 0.9 3.3 1.3l-4.2 16.8c0.7 0.9 1.5 1.9 2.3 2.9zM722.5 469.8c2 1 4.1 2 6.1 2.9-0.2 0.9-0.2 1.7-0.6 2.1-15.7 13.4-16.6 33.4-22.9 50.9-1.6 4.4-2.2 9.1-4.3 13.2-1.3 2.7-4.5 4.5-6.8 6.7-0.8-0.7-1.6-1.4-2.4-2 3.9-13.5 7.8-26.9 12.1-42-4.8 3.6-8.2 6.1-11.6 8.6-0.8-0.5-1.6-0.9-2.4-1.4 1.4-3 2.2-6.7 4.4-8.8 10.3-9.1 21-17.8 31.5-26.6-1-1.1-2.1-2.3-3.1-3.6zM438.7 479.9c6.4-1 12.9-1.9 20.4-3.1-1.2-3.7-2.5-7.6-4-12.2 9.6-8.2 9.5 3.1 13.9 7.1-2.2 1.8-4 3.4-5.8 4.9l0.3 1.8c4.5-0.8 9.7-0.6 13.4-2.8 4.8-2.8 8.1-8.1 12.6-11.4 2.3-1.6 6-1.3 9.1-1.8 0.2 1 0.5 1.9 0.7 2.9-3.8 3.6-7.5 7.1-12.8 12.1 6.6 0.3 11.3 0.6 18.3 1-2.3 2.8-3.5 5.3-4.7 5.3-20.3 0.2-40.6 0.2-60.9 0.2-0.1-1.4-0.3-2.7-0.5-4zM562.4 584.5c-3.8 13.7-7.1 27.5-11.8 40.9-1 2.8-7.4 3.8-11.3 5.6-0.6-0.9-1.3-1.8-1.9-2.7 4-13.9 7.6-27.9 12.4-41.5 0.9-2.7 6.8-3.6 10.3-5.3 0.8 1 1.6 2 2.3 3zM508.5 455.9c-2.5 1.3-4.9 3.7-7.4 3.8-17 0.3-34 0.2-52.5 0.2 6.8-14.1 19.2-4.4 26.6-8.4 2-4.2 3.9-8.2 5.7-12.1 1.1 0.2 2.1 0.4 3.2 0.6 1.4 3.6 2.8 7.2 4.6 11.9h18c0.6 1.3 1.2 2.6 1.8 4zM588.4 504.9c-8.5 13.4-16.7 26.2-25.1 39.5-3.1-0.9-5.9-1.7-8.9-2.5 0.3-1 0.3-2 0.7-2.7 7.3-11.1 15-22 21.8-33.4 3.5-5.8 6.5-5.2 11.5-0.9zM769.3 485.6c-0.4 6.7-4 8.8-10.6 8.5-10-0.5-20-0.1-30-0.1-0.5-1-1-2-1.6-2.9 2.8-1.7 5.5-4.6 8.3-4.7 11.3-0.6 22.7-0.3 34.1-0.3 0.1-0.2-0.2-0.5-0.2-0.5zM738.5 446.2c-11.1 10-22.2 20.1-33.4 30.1-1-0.6-2-1.2-3-1.9 1.5-3.1 2.2-7.4 4.6-8.9 10.6-6.6 16.4-20.4 29.4-23.4 0.9 1.4 1.6 2.8 2.4 4.1zM605.2 458l-8.1 5.4c-4.8-5.4-9.3-10.5-14.3-16.1 2.7-2.3 4.9-4.1 7.6-6.5 5 5.8 9.5 11.1 14.8 17.2zM585.8 490.6c-1.7-1.4-2.9-2.4-4.2-3.5-4-3.5-8-6.9-12-10.4 8.6-9 8.6-9 24.4 7-2.6 2.3-5.3 4.5-8.2 6.9z"></path><path d="M426.4 529.8c10.4-16.4 16.5-21.1 22.9-17.3-10.2 16.7-16 21.1-22.9 17.3zM485.4 523.9c-2.7 1.7-4.8 3.1-8.1 5.2-2.4-5.1-4.6-9.6-6.8-14.1 8.2-7.3 8.9-6.9 14.9 8.9zM697.7 618c0.2 10.8-4.9 13.7-14.2 11.1 0.3-12.1 0.7-12.4 14.2-11.1zM566.7 567.1c0.4 10.3-4.8 12-12.9 9.6-2-11.6 5.3-10.6 12.9-9.6z"></path><path d="M196 611.6c-19.8 0.6-40.7-4.1-59.8-15.8-34.3-21.1-36.9-60.2-5.8-86.3 18.6-15.6 40.3-24.2 63.8-27.1 27.2-3.3 54.6-2.4 79 12.2 9.5 5.7 18.9 13.5 25 22.5 14.1 21.2 8 47.2-13.3 65.3-24.9 21.2-54.2 29.7-88.9 29.2z m9.2-103.6c-0.3-0.9-0.6-1.7-1-2.6-11 4.1-22.9 6.8-32.9 12.6-18.8 11-26.8 31.8-21.3 49.5 7.7 24.4 34 36.8 62 28.7 19.8-5.8 35-17.7 39.1-38.8 5.3-28.1-15-49.3-45.9-49.4z" fill="#FFFFFF"></path><path d="M205.2 508c31 0.1 51.3 21.3 45.9 49.4-4.1 21.1-19.2 33-39.1 38.8-27.9 8.2-54.3-4.3-62-28.7-5.5-17.6 2.5-38.5 21.3-49.5 10-5.9 33.5-10.9 33.9-10z m-3.9 53.1c0.5-9.3-4.1-14.6-13.3-15.1-11.6-0.7-21.4 7.2-21.7 17.5-0.2 8.3 5.5 14.4 14.2 15 10.6 0.7 20.2-7.3 20.8-17.4z m10-25.6c-3.4 4.2-6.2 6.5-7 9.4-0.3 1.2 4.4 5.5 5.3 5.1 2.8-1.2 5.5-3.8 7-6.5 0.6-1-2.5-3.9-5.3-8z"></path><path d="M201.3 561.1c-0.6 10.1-10.1 18.1-20.7 17.3-8.7-0.6-14.5-6.7-14.2-15 0.3-10.3 10.1-18.2 21.7-17.5 9 0.7 13.7 6 13.2 15.2zM211.3 535.5c2.8 4 5.9 7 5.3 8-1.4 2.7-4.2 5.3-7 6.5-1 0.4-5.7-3.9-5.3-5.1 0.9-2.8 3.7-5.1 7-9.4z" fill="#FFFFFF"></path></svg>`
                },

                {
                    name: "抖音",
                    enabled: true,
                    searchUrl: "https://dict.youdao.com/result?word={keyword}&lang=en",
                    searchkeyName: ['word'],
                    matchUrl: "dict\.youdao\.com/result.*?word=",
                    mark: "DouYin",
                    svgCode: `
<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="24.000000pt" height="24.000000pt" viewBox="0 0 24.000000 24.000000" preserveAspectRatio="xMidYMid meet"><metadata>Created by potrace 1.16, written by Peter Selinger 2001-2019</metadata><g transform="translate(0.000000,24.000000) scale(0.002344,-0.002344)" stroke="none"><path d="M0 5120 l0 -5120 5120 0 5120 0 0 5120 0 5120 -5120 0 -5120 0 0 -5120z m3193 1849 c133 -67 244 -123 246 -125 7 -6 -33 -86 -113 -229 -40 -71 -72 -131 -71 -133 4 -5 1054 37 1210 49 137 10 391 38 491 54 l41 7 -13 -101 c-8 -56 -16 -107 -20 -113 -13 -20 -135 -69 -237 -93 -119 -29 -266 -51 -392 -60 -106 -7 -1183 -55 -1237 -55 -36 0 -38 -3 -134 -142 -53 -79 -117 -169 -141 -200 -24 -32 -40 -58 -34 -58 5 0 47 14 93 31 190 70 460 127 706 149 172 16 530 8 627 -14 302 -69 479 -200 553 -409 44 -125 42 -226 -12 -606 -25 -179 -46 -330 -46 -337 0 -7 19 -24 43 -37 23 -13 99 -56 168 -95 278 -155 389 -175 473 -82 99 110 74 281 -57 379 -43 32 -221 127 -269 143 -9 3 -2 72 27 279 21 151 41 277 44 281 4 5 47 -13 96 -38 347 -178 524 -402 542 -684 13 -213 -90 -420 -271 -545 -30 -21 -53 -41 -51 -46 8 -12 288 -162 399 -214 332 -154 676 -256 1012 -300 404 -53 790 -36 1118 50 257 67 530 200 726 353 l65 51 7 -62 c4 -34 5 -70 2 -81 -9 -29 -229 -250 -324 -326 -302 -240 -653 -393 -1019 -444 -144 -20 -419 -21 -581 -1 -603 74 -1387 372 -2107 801 l-122 72 -6 -41 c-4 -23 -28 -190 -53 -372 l-48 -330 -74 -3 c-149 -7 -467 39 -655 93 -240 70 -406 158 -535 285 -70 69 -95 101 -129 170 -124 252 -84 532 102 714 164 161 389 230 741 225 l181 -2 19 131 c11 73 16 135 12 140 -4 4 -72 6 -150 5 -438 -7 -772 -137 -1026 -399 -208 -215 -329 -465 -415 -857 -43 -196 -75 -268 -159 -351 -66 -66 -150 -113 -252 -141 -54 -15 -304 -34 -304 -23 0 2 24 51 54 109 97 185 170 437 226 777 32 193 150 1008 150 1037 0 19 4 21 -152 -111 -110 -95 -235 -177 -328 -216 -128 -53 -276 -50 -346 8 -25 21 -27 25 -13 34 217 131 441 362 689 710 78 110 269 410 303 477 l17 31 -198 -1 c-220 -2 -237 2 -312 69 -55 50 -80 121 -80 229 0 47 3 85 6 85 3 0 40 -17 82 -37 l76 -38 261 2 c143 1 279 5 301 8 l41 6 76 157 c63 132 178 392 200 455 4 9 9 17 12 17 3 0 114 -55 248 -121z m4670 0 c133 -67 244 -123 246 -125 7 -6 -62 -83 -189 -213 -67 -68 -119 -125 -117 -127 13 -14 537 31 722 61 49 8 90 13 91 12 1 -1 -5 -49 -12 -107 -10 -76 -19 -108 -31 -118 -63 -46 -313 -110 -518 -131 -91 -10 -477 -31 -567 -31 -32 0 -51 -12 -150 -97 l-113 -98 170 -6 c528 -20 755 -185 755 -548 0 -43 -38 -335 -85 -666 -47 -324 -93 -641 -102 -703 l-16 -112 -40 -11 c-201 -54 -469 -83 -767 -84 -357 0 -573 31 -850 121 -130 42 -420 176 -420 194 0 5 13 91 30 192 36 221 164 1123 180 1263 16 145 14 140 67 163 121 51 352 114 551 149 39 7 51 17 126 108 46 55 82 102 80 104 -1 2 -178 -5 -393 -14 -424 -20 -466 -17 -546 29 -54 32 -90 86 -111 166 -15 58 -15 162 -1 177 3 2 31 -9 63 -26 103 -51 125 -54 407 -46 233 7 258 9 254 24 -3 9 -38 90 -77 181 -40 91 -73 176 -73 190 -2 22 15 31 241 128 134 57 246 102 248 100 2 -2 17 -98 34 -214 42 -290 56 -373 63 -380 3 -4 40 -3 81 1 l74 7 155 206 c85 114 184 251 221 305 37 53 69 97 72 97 2 0 113 -55 247 -121z m-2518 -634 c210 -127 366 -294 433 -465 34 -89 44 -139 44 -235 0 -76 -20 -198 -38 -227 -2 -3 -28 18 -57 49 -102 109 -258 218 -440 309 -50 26 -93 48 -95 49 -3 3 64 490 73 533 3 12 9 22 13 22 5 0 34 -16 67 -35z"></path><path d="M3530 5629 c-101 -11 -254 -45 -348 -75 -97 -32 -247 -105 -290 -141 l-33 -28 -39 -269 c-22 -147 -40 -270 -40 -271 0 -2 48 45 108 104 216 216 506 365 864 445 122 27 333 56 410 56 l49 0 -15 29 c-35 66 -135 122 -261 146 -83 16 -280 18 -405 4z"></path><path d="M3710 4331 c-92 -28 -169 -100 -190 -176 -8 -27 -11 -75 -8 -119 10 -147 95 -260 260 -340 93 -46 197 -80 209 -67 4 3 28 154 55 334 40 276 46 330 34 337 -46 29 -297 50 -360 31z"></path><path d="M6958 5735 c-125 -18 -233 -47 -323 -89 -61 -28 -74 -38 -79 -62 -13 -62 -47 -306 -44 -314 2 -4 32 9 66 30 208 126 578 210 930 210 108 0 113 7 60 86 -37 54 -112 105 -193 130 -70 22 -295 27 -417 9z"></path><path d="M6964 5160 c-231 -31 -431 -121 -492 -223 -18 -30 -58 -244 -48 -254 3 -3 17 4 33 15 47 33 163 88 254 120 171 60 398 97 672 108 l166 7 7 46 c4 25 8 66 8 90 l1 44 -50 14 c-145 39 -391 53 -551 33z"></path><path d="M6869 4575 c-175 -24 -330 -79 -423 -150 -45 -35 -93 -112 -78 -127 18 -18 176 -66 294 -90 149 -29 443 -32 583 -5 110 22 205 48 205 56 0 3 9 62 20 131 11 69 20 128 20 131 0 11 -162 48 -256 59 -116 13 -245 11 -365 -5z"></path></g></svg>
                    `
                    },

                {
                    name: "小红书",
                    enabled: true,
                    searchUrl: "https://developer.mozilla.org/en-US/search?q={keyword}",
                    searchkeyName: ['q'],
                    matchUrl: "developer\.mozilla\.org/en\-US/search.*?q=",
                    mark: "XiaoHongShu",
                    svgCode: `
<svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M0 0v24h24V0zm10.564 4.969c.667-.047 1.001.066 1.59.242l.436.13.152.046.557.17c.365.099.748.105 1.115.017a2.033 2.033 0 011.48.174c.409.233.684.648.737 1.115.048.413.288.78.648.989.537.293 1.096.538 1.672.736.407.156.815.331 1.219.488.2.077.377.203.514.37a.87.87 0 01.197.49c.025.359.068.722.086 1.084h-.002c.028.5-.08.997-.317 1.439-.087.165-.183.321-.263.486a.616.616 0 01-.635.367.417.417 0 00-.277.09c-.246.161-.497.32-.75.471-.35.193-.77.216-1.141.06a5.36 5.36 0 00-1.908-.351 2.11 2.11 0 00-1.7.775 2.62 2.62 0 00-.38.77c-.223.55-.414 3.838-.414 4.676 0 0-3.161-.615-6.13-3.653l.774-2.03H5.4l1.754-1.856H4.14l1.752-1.858H3.029l3.188-3.383a7.349 7.349 0 013.549-1.95c.318-.055.576-.089.798-.104z"></path></svg>
                    `
                    },

                {
                    name: "豆瓣",
                    searchUrl: "https://www.douban.com/search?q={keyword}",
                    searchkeyName: ["q"],
                    matchUrl: /douban\.com.*?q=/g,
                    mark: "Douban",
                    svgCode: `<svg class="icon" viewBox="-50 -50 1124 1124" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#3369e7"><path d="M356.648079 392.557654l283.467431 0 0 117.680213-283.467431 0 0-117.680213ZM510.739747 65.657372c-245.837897 0-445.131875 198.960401-445.131875 444.35946 0 245.399059 199.293978 444.335924 445.131875 444.335924 245.841991 0 445.135968-198.936865 445.135968-444.335924C955.876739 264.617773 756.582761 65.657372 510.739747 65.657372zM261.476703 227.805356l495.300494 0 0 45.025473-495.300494 0L261.476703 227.805356zM711.749879 343.438956l0 211.824383-425.712821 0 0-211.824383L711.749879 343.438956zM756.777197 746.621599l-519.860849 0 0-46.048779 162.975353 0c-14.174395-49.118698-32.648899-66.770729-55.598504-101.091396l55.598504-19.459191c22.069526 32.588209 41.747487 71.431889 59.172035 120.550587l105.184837 0c20.833321-49.118698 39.121576-80.002079 54.858623-123.092479l60.440987 24.537859c-15.792308 36.347836-32.866872 49.435922-50.93613 98.55462l128.166166 0L756.77822 746.621599z"></path></svg>`
                },

                {
                    name: "IMDb",
                    searchUrl: "https://www.imdb.com/find?q={keyword}",
                    searchkeyName: ["q"],
                    matchUrl: /imdb\.com.*?q=/g,
                    mark: "IMDb",
                    svgCode: `<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 32 32"><path fill="#eab308" d="M0 7v18h32V7zm2 2h28v14H2zm3 2.688v8.624h2v-8.625zm3.094 0v8.624H10V15.5l.906 4.813h1.281L13 15.5v4.813h1.813v-8.625H12l-.5 4.124l-.688-4.124zm7.812 0v8.5h2.406c1.301 0 1.79-.2 2.188-.5c.398-.2.594-.688.594-1.188v-5.188c0-.601-.196-1.113-.594-1.312c-.5-.2-.688-.313-2.188-.313zm6.188.124v8.5h1.812s.086-.601.188-.5c.199 0 1.008.375 1.406.375c.5 0 .7.008 1-.093c.398-.2.5-.48.5-.782v-5c0-.699-.71-1.218-1.313-1.218c-.601 0-1.175.394-1.375.594v-1.876zM18 13c.398 0 .813.008.813.406v5c0 .399-.512.407-.813.407zm6.594 1c.101 0 .218.105.218.406v4.281c0 .2-.019.407-.218.407c-.102 0-.188-.106-.188-.407v-4.28c0-.2-.011-.407.188-.407"/></svg>`
                },

                {
                    name: "RottenTomatoes",
                    searchUrl: "https://www.rottentomatoes.com/search?search={keyword}",
                    searchkeyName: ["search"],
                    matchUrl: /rottentomatoes\.com.*?search=/g,
                    mark: "RottenTomatoes",
                    svgCode: `<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="-6 -6 36 36"><path fill="#000000" d="M5.866 0L4.335 1.262l2.082 1.8c-2.629-.989-4.842 1.4-5.012 2.338c1.384-.323 2.24-.422 3.344-.335c-7.042 4.634-4.978 13.148-1.434 16.094c5.784 4.612 13.77 3.202 17.91-1.316C27.26 13.363 22.993.65 10.86 2.766c.107-1.17.633-1.503 1.243-1.602c-.89-1.493-3.67-.734-4.556 1.374C7.52 2.602 5.866 0 5.866 0M4.422 7.217H6.9c2.673 0 2.898.012 3.55.202c1.06.307 1.868.973 2.313 1.904q.074.158.13.305l7.623.008l.027 2.912l-2.745-.024v7.549l-2.982-.016v-7.522l-2.127.016a2.9 2.9 0 0 1-1.056 1.134c-.287.176-.3.19-.254.264c.127.2 2.125 3.642 2.125 3.659l-3.39.019l-2.013-3.376c-.034-.047-.122-.068-.344-.084l-.297-.02l.037 3.48l-3.075-.038zm3.016 2.288l.024.338c.014.186.024.729.024 1.206v.867l.582-.025c.32-.013.695-.049.833-.078c.694-.146 1.048-.478 1.087-1.018c.027-.378-.063-.636-.303-.87c-.318-.309-.761-.416-1.733-.418Z"/></svg>`
                },

                {
                    name: "Steam",
                    searchUrl: "https://store.steampowered.com/search/?term={keyword}",
                    searchkeyName: ["term"],
                    matchUrl: /steampowered\.com.*?term=/g,
                    mark: "Steam",
                    svgCode: `
<svg class="icon" style="width: 1em;height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="22418"><path d="M511.7 155C321.2 155 165 301.9 150.2 488.7L344.6 569c17-11.6 37.2-17.9 57.8-17.8 1.9 0 3.8 0.1 5.7 0.2l86.5-125.2v-1.8c0.1-75.5 61.3-136.7 136.8-136.8 75.4 0 136.8 61.4 136.8 136.9s-61.4 136.8-136.8 136.8h-3.2l-123.2 88c0 1.6 0.1 3.2 0.1 4.8 0 27.2-10.8 53.3-30 72.6-19.2 19.3-45.3 30.1-72.5 30.1-48.9-0.2-90.9-34.6-100.7-82.5l-139.2-57.7c43.1 152.3 182.9 264 349 264 200.4 0 362.8-162.5 362.8-362.8C874.5 317.4 712 155 511.7 155zM377.5 705.6L333 687.2c7.9 16.4 21.6 30.2 39.7 37.8 28.8 11.9 61.9 5.4 84-16.6s28.7-55.1 16.9-83.9c-15.9-38.5-59.5-57.4-98.4-42.7l46.1 19c28.9 12.1 42.6 45.3 30.6 74.3-12.2 28.8-45.4 42.5-74.4 30.5z m345.1-281.3c-0.1-50.3-40.8-91.1-91.2-91.2-50.3 0-91.2 40.8-91.2 91.2 0 50.3 40.8 91.2 91.2 91.2 50.4-0.1 91.2-40.9 91.2-91.2z m-159.4-0.2c0-24.5 13.1-47.1 34.2-59.3 21.2-12.2 47.3-12.2 68.5 0 21.2 12.2 34.2 34.8 34.2 59.3 0 37.8-30.7 68.5-68.5 68.5-18.2 0-35.6-7.2-48.4-20.1-12.8-12.8-20-30.2-20-48.4z m0 0" p-id="22419"></path></svg>
`
                },

                {
                    name: "Spotify",
                    searchUrl: "https://open.spotify.com/search/{keyword}",
                    searchkeyName: ["q"],
                    matchUrl: /open\.spotify\.com.*?search/g,
                    mark: "Spotify",
                    svgCode: `<svg class="icon" style="width: 1em;height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10682"><path d="M512 141.21142578C307.21236968 141.21142578 141.21142578 307.21236968 141.21142578 512S307.21236968 882.78857422 512 882.78857422 882.78857422 716.78763032 882.78857422 512C882.78857422 307.23767093 716.78763032 141.23672703 512 141.21142578z m170.04913027 534.76542529c-6.65420651 10.93010342-20.89876221 14.34576069-31.77826313 7.69155419-87.0613093-53.20835015-196.66595633-65.22640372-325.72719931-35.75054648-12.4481734 2.85903192-24.8457443-4.93372725-27.67947425-17.38190064-2.85903192-12.4481734 4.908426-24.8457443 17.38189994-27.67947425C455.47719687 570.59749847 576.64447712 584.48783808 674.38287734 644.19858724c10.87950092 6.70480902 14.34576069 20.89876221 7.66625293 31.77826384z m45.36498917-100.92634767c-8.37468578 13.61202658-26.18670551 17.86262225-39.77343157 9.51323771-99.63598823-61.25412037-251.59478573-78.99023709-369.47291352-43.21438938-15.28190334 4.63011297-31.42404706-3.99758387-36.07946128-19.25418668-4.60481171-15.28190334 4.02288512-31.39874581 19.27948796-36.05416076 134.6528006-40.86138174 302.07061019-21.07587023 416.50777945 49.26136877 13.61202658 8.37468578 17.91322474 26.16140498 9.53853897 39.74813034z m3.89637959-105.15164209c-119.52270402-70.9697681-316.66938194-77.49746837-430.77763639-42.88547457-18.3180433 5.56625635-37.69873626-4.78192047-43.23969135-23.09996378-5.5409551-18.3180433 4.78192047-37.69873626 23.12526502-43.2649926 130.98413154-39.74813033 348.70065686-32.0818774 486.2883924 49.59028358 16.47105851 9.79155076 21.88550808 31.06983099 12.11925787 47.51558825-9.74094826 16.49635976-31.06983099 21.93610986-47.51558755 12.14455912z" fill="#2EBD59" p-id="10683"></path></svg>`
                },

                {
                    name: "网易云音乐",
                    searchUrl: "https://music.163.com/#/search/m/?s={keyword}",
                    searchkeyName: ["s"],
                    matchUrl: /music\.163\.com.*?s=/g,
                    mark: "NeteaseMusic",
                    svgCode: `<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M244.5 496.1v55.1c0 11-9 22.1-17.9 26.6-5 2.5-10.3 3.2-15.9 3.2-34.9-0.1-69.9-0.1-104.8-0.1-17.3 0-31.7-15.8-31.6-31.6 0.2-36 0.1-72 0.1-108.1 0-11.7 8.3-22.8 18.5-27.6 4.7-2.2 9.6-3.1 14.8-3.1 35.3 0.1 70.6 0.1 105.9 0.1 12.1 0 23 8.2 28 18.4 2.3 4.7 3.1 9.6 3.1 14.8-0.3 17.5-0.2 34.9-0.2 52.3z m-62.7-19c0.2 0 0.8 0.1 1.3 0.1 0.5 0.1 1 0.1 1.4 0.4 8.5 4.5 14.9 11.3 16.9 20.7 2.4 11.5 0.1 22.3-7.8 31.5-12.7 14.8-36.2 18.4-53.4 9.4-18.7-9.7-30-34.5-21.8-55.9 4.2-11 10.7-19.8 21.4-25.2 2.8-1.4 5.8-2.7 8.4-4.5 3.5-2.4 4.1-6.3 2-9.8-1.8-3.1-6-4.5-9.3-3.2-19.1 7.5-31.7 20.8-38.1 40.5-4.7 14.6-3 28.5 2.9 42.2 4.2 9.6 10.6 17.5 19.1 24 7 5.3 14.6 8.9 22.9 10.8 13.3 3 26.3 1.2 38.8-4.4 22.2-9.9 37.2-35.5 29.2-61.3-4.3-13.8-13.4-23.2-26.4-28.9-4.2-1.8-8.8-2.7-13.6-4-0.4-3.1-1.1-6.5-1.3-9.9-0.2-4.3 4-6.9 7.9-5.1 2 0.9 3.9 2.2 5.8 3.3 5.3 3.1 10.2 1.9 12.2-3.2 1.1-2.9-0.2-7.4-3.5-9.4-3.6-2.2-7.6-3.8-11.5-5.5-9-4-20.7 2.5-25.3 10.6-3.1 5.4-2.3 11.3-0.8 17 0.5 2.1 2 4.4-1.1 5.8-1.5 0.7-3 1.3-4.5 2-13.5 5.8-21.6 23.6-17.7 38.2 3.4 12.6 18.5 23.2 31.6 18.7 8.3-2.8 19-12.8 17.8-23.5-0.6-7-2.2-14.1-3.5-21.4z" fill="#E00000"></path><path d="M285.6 555.4V438.8c5.6 3.4 11.6 2.3 17.3 2.3 27.1 0.2 54.3 0 81.4 0.2 4.1 0 8.3 1 12.2 2.2 5 1.5 6.7 5.8 7 10.6 0.3 4.5 0.1 9.1 0.1 13.7 0 23.4-0.2 46.8 0.1 70.3 0.2 13.5-5.1 16-15.9 17.3-5.8 0.7-11.7 0.1-17.5 0.1-1.1-4.5 0.2-6.1 4.4-6.5 3.4-0.3 6.9-1 10.1-2 2.3-0.7 3.9-2.4 3.9-5.4-0.1-28.3 0-56.7-0.1-85 0-4.2-3.2-7-8.2-7-10-0.1-19.9 0-29.9 0-15.5 0-31 0.1-46.5-0.1-3 0-3.9 0.9-3.9 3.9 0.1 32.8 0 65.6 0.2 98.4 0 3.3-0.9 4.2-4.1 3.9-3.4-0.5-6.9-0.3-10.6-0.3zM887.7 461c4.6 0 8.9-0.1 13.1 0.1 0.6 0 1.6 1.5 1.6 2.4 0.1 6.5 0.2 13 0 19.5-0.1 3.1 0.7 4.2 4 4.1 12.4-0.2 24.7-0.1 37.1-0.1 5.2 0 7.6 2.4 7.9 8.1-0.8 0.1-1.6 0.2-2.3 0.2-14.4 0-28.8 0.1-43.2 0-2.7 0-3.5 0.9-3.5 3.5 0.1 13.9 0.1 27.9 0.1 41.8 0 10.3-3.1 14-13.2 14.8-6.6 0.5-13.2 0.1-19.8 0.1 1-5.5 2.1-6.2 7.5-6.7 2.7-0.2 5.6-0.8 7.9-2.1 1.5-0.9 2.6-3.6 2.6-5.4 0.2-14.4 0-28.8 0.1-43.2 0-2.8-1.7-2.7-3.6-2.7-10.1 0-20.2 0.1-30.3-0.1-3-0.1-6.3-0.6-9-1.9-4.5-2-6.3-6.5-6.1-11 0.8-14.2 2.1-28.4 3.3-42.9h20.9c26.8-0.2 53.6-0.3 80.3-0.6 2.5 0 2.9 1.2 2.9 3-0.1 1.9 0.4 4.2-2.9 4.3l-68.4 1.5c-5.2 0.1-10.3 0.1-15.5 0-1.9 0-2.8 0.5-3 2.6-0.6 10.2-1.4 20.3-2.2 30.5-0.4 5.2 0.6 6.2 5.7 6.3 7.9 0 15.9-0.1 23.8 0.1 3.2 0.1 4.1-1.1 4-4.2 0.1-7.3 0.2-14.5 0.2-22zM710.1 493.7c4.3 0.3 8.1 0.7 11.9 0.7 22.6 0.1 45.2 0 67.7 0 4.1 0 8.2 0.2 12.2 0.5 6.4 0.4 10.9 5.1 11 12.7 0.3 15 0.1 30 0.2 45 0 2.6-1.5 2.8-3.5 2.8-12.5-0.1-25 0-37.5 0-15.3 0-30.5 0.1-45.8-0.1-3.8 0-7.6-0.7-11.4-1.3-2.7-0.5-5-4.7-5-9.1v-50.1c0.1-0.4 0.2-0.9 0.2-1.1z m51.4 35.1c-11.1 0-22.1 0.1-33.2 0-2.6 0-3.7 0.8-3.5 3.5 0.2 2.5 0 5 0.1 7.6 0 4.8 2 7.2 6.8 7.2 21 0.1 42 0.1 63.1 0.1 2.1 0 3-0.8 2.9-3-0.2-3.7-0.3-7.5 0-11.2 0.3-3.3-0.7-4.4-4.1-4.3-10.7 0.2-21.4 0.1-32.1 0.1z m-0.3-8.5c10.9 0 21.8-0.1 32.8 0.1 2.6 0 3.8-0.7 3.6-3.4-0.2-2.9 0-5.8 0-8.6 0-5-0.8-6.1-5.8-6.1-21.1-0.1-42.2-0.1-63.3-0.1-2.6 0-3.7 1.2-3.6 3.8 0.1 3.5 0.2 7 0 10.4-0.3 3.2 0.9 4.1 4.1 4.1 10.6-0.3 21.4-0.2 32.2-0.2zM419.2 542.6c8.4-6.1 16.9-12 25.1-18.4 8.3-6.5 15.1-14.4 21.8-23.8-7.1 0-13.1-0.1-19 0.1-0.9 0-1.8 1.4-2.6 2.3-4.1 4.7-7.9 10-14 12.3-3.6 1.3-7.5 1.7-12.3 2.6 4.9-4.9 9.7-8.3 12.6-13 2.9-4.7 3.9-10.5 5.7-16.1 4.2 4.7 10 3.9 15.5 3.9 24.9 0.1 49.7 0.3 74.6-0.1 10.6-0.2 16.8 6.1 18.7 15.8 1.8 9.5 1.4 19-0.6 28.2-2.2 9.8-8.2 16.4-20.5 17.6-7.4 0.8-14.7 1.2-22 1.8-1.1-5.7-0.2-6.9 4.6-6.9 8.1-0.1 15.5-1.9 20.4-8.9 1.7-2.5 3-5.8 3.2-8.8 0.6-7.2 0.6-14.4 0.6-21.6 0-5.9-1.7-7.9-7-9.2-2.1-0.5-4.3-0.4-6.4-0.1-1 0.1-2.3 1.2-2.6 2-2.3 9.1-7.4 16.6-13.5 23.5-10.2 11.6-22.6 20.4-37 26.1-5.3 2.1-11.1 2.7-16.6 4.1-0.2-0.6-0.4-1.1-0.6-1.7 2.4-1.3 4.8-2.7 7.3-4 20-10.7 34.5-26.6 44.5-46.8 1.2-2.4 1.1-3.6-2-3.5-4.2 0.1-8.4-0.1-12.6 0.1-1.2 0.1-3 0.8-3.5 1.8-6.7 11.9-17 20.1-27.8 27.8-7.2 5.1-14.7 9.9-23.5 12-3.4 0.8-6.9 1-10.3 1.4-0.1 0-0.2-0.2-0.2-0.5zM658.7 512.1c5.2 0 9.7-0.1 14.3 0.1 0.7 0 1.7 0.9 1.9 1.6 2.2 7.5 4.6 15 6.4 22.6 1.3 5.7-0.8 14.8-6.4 16.9-3.1 1.1-6.4 2.1-9.6 2.1-27.3 0.2-54.5 0.2-81.8 0-6.4-0.1-13.5-1.1-15.8-8.5-1.2-3.9-1.3-8.6-0.4-12.6 1.9-8 4.9-15.7 7.5-23.5 1.9-5.6 3.9-11.1 5.9-16.7 1.7-4.6 1.1-5.8-3.8-5.8-3.5 0-7 0.1-10.4 0-5.1-0.1-7.1-2.1-7.4-7.6 0.6-0.1 1.1-0.2 1.7-0.2h116c5.8 0 7.3 1.5 7.8 7.5-1.3 0.1-2.5 0.3-3.8 0.3-26.5 0-53.1 0.1-79.6-0.1-3.3 0-4.6 1.6-5.4 4.2-3.3 10.1-6.4 20.3-9.7 30.4-1.2 3.8-2.8 7.6-4.1 11.3-2.6 7.2 1.4 13.1 9.2 13.1 22.5 0.1 44.9 0 67.4 0.1 7.2 0 10-3.5 8.1-10.5-2-7.4-4.3-14.8-6.5-22.1-0.3-0.8-0.8-1.3-1.5-2.6zM536.9 486.4c-28.2 0-55.9 0-83.6-0.1-3.1 0-6.3-0.3-9.1-1.4-4-1.6-5.7-5.6-5.8-9.5-0.4-12-0.1-24-0.1-36 0-0.2 0.2-0.4-0.1 0.1 3.4 0.5 6.5 1.3 9.6 1.3 22.9 0.2 45.8 0.1 68.8 0.4 4.5 0.1 9.1 1.2 13.6 2.3 4.7 1.1 6.5 5.3 6.7 9.2 0.3 11.2 0 22.3 0 33.7z m-49.1-19.5h-31.3c-1.1 0-2.6 0.2-3.2 0.9-1.8 2.3-0.2 8.2 2.6 9.4 1.9 0.8 4.1 1.3 6.2 1.3 17.3 0.1 34.6 0.1 51.9 0.1 8.7 0 8.6 0 8.2-8.5-0.1-2.5-0.9-3.3-3.4-3.2-10.4 0.1-20.7 0-31 0z m-0.5-7.9c10.4 0 20.9 0 31.3-0.1 1.1 0 2.6-0.3 3.1-1 2.3-3.2-0.3-8.4-4.4-8.5-20.6-0.1-41.2-0.1-61.9 0-0.9 0-2.1 1.4-2.5 2.4-0.4 0.9 0 2.1-0.1 3.2-0.3 2.9 0.8 4 3.9 3.9 10.2 0 20.4 0.1 30.6 0.1zM697.9 480.4h17.6c4.1 0 3.8 0.1 2.8-3.8-0.9-3.7-1-7.6-1.4-11.7h15.6v6.9c0.1 5.7 3 8.6 8.5 8.6h41c5.2 0 8.7-3.4 8.8-8.6v-7h15.6c-0.7 4.2-1.3 8.1-2.1 12-0.5 2.3-0.5 3.8 2.5 3.7 3.8-0.1 7.7 0 11.5 0 5.1 0.1 6.8 2.2 6 7.7H706.7c-6.8 0-7.5-0.6-8.8-7.8z"></path><path d="M306.4 462.7c3.7 0 7.1 0.2 10.4-0.1 2.2-0.1 2.4 0.6 2.7 2.6 0.8 7.5 2 14.9 3.1 22.3 0.1 0.5 0.6 0.9 1.6 2.5 2.7-9.4 4.1-18.1 4.5-27.1h13.4c-0.7 3.4-1.1 6.8-2.2 10-3.4 9.8-7.5 19.4-10.6 29.2-0.9 2.8 0 6.7 1.4 9.4 2.8 5.6 6.7 10.6 9.6 16.1 1.4 2.6 1.4 6 1.5 9.2-7.5-6.3-13.2-13.7-17.9-22.6-6.2 8-12.1 15.7-18.1 23.4-0.4-0.2-0.9-0.5-1.3-0.7 0.2-3.1-0.6-6.2 1.4-9.4 4.3-6.7 8.2-13.5 12-20.5 0.6-1.1 0.5-3 0.1-4.3-2.3-7.1-5.1-14-7.3-21.1-1.7-5.4-2.9-11-4.3-16.5v-2.4zM383.3 537.4c-2.4-2.7-5.1-5.2-7.3-8.1-3.1-4.1-5.8-8.4-8.8-12.6-0.6-0.8-1.4-1.4-2.2-2.1-0.5 0.7-1.1 1.4-1.6 2.1-4.3 7.4-9.5 14.3-16.2 20.5-1.1-3.5-1.1-6.5 0.7-9.4 4-6.5 7.8-13.2 11.7-19.7 2.1-3.5-0.5-6.2-1.5-9.1-2.5-7.2-5.2-14.4-7.7-21.6-1.5-4.6-2.6-9.3-4.1-14.6 4.6 0 8.5-0.1 12.3 0.1 0.5 0 1.3 1.5 1.5 2.4 1.2 6.9 2.1 13.9 3.3 20.9 0.2 1 1.1 1.9 1.7 2.8 0.5-1 1.4-1.9 1.5-2.9 1.1-7.7 2.2-15.3 3.2-23.1h12.8c-3.1 13.8-6.3 27.2-12.3 39.8-1.6 3.3 0.8 5.8 2.1 8.3 2.7 5.2 5.7 10.3 9.2 15.1 2.6 3.2 3.1 6.7 1.7 11.2zM701.8 447.1c0.9-0.1 1.8-0.2 2.7-0.2 15 0 30-0.1 45 0.1 3.6 0 5.2-0.9 4.6-4.6-0.2-1.4 0-2.8 0-4.7 4.7 0 9.1-0.1 13.5 0.1 0.5 0 1.3 1.2 1.4 1.9 0.2 1.2 0.1 2.4 0 3.6-0.3 2.8 0.9 3.8 3.7 3.7 13.9-0.1 27.8-0.1 41.8-0.1 5.3 0 7.2 2.2 6.6 7.9H709c-5.7-0.3-6.8-1.5-7.2-7.7zM681.2 451h-3.1c-36.1 0-72.2 0-108.4 0.1-3.7 0-5.5-1.1-6.6-4.8-0.9-3.2 0.3-3.2 2.7-3.2H672.4c6.6 0.2 7 0.6 8.8 7.9zM836 550.5c2.1-4.7 4.7-9.2 6.4-14 2.8-8.4 5-16.9 7.5-25.4 0.3-0.9 0.9-2.5 1.4-2.5 4.7-0.2 9.4-0.1 14.4-0.1-4 18.7-11 34.4-28.5 42.9-0.5-0.3-0.9-0.6-1.2-0.9zM953.3 550.7c-11.1 0.4-29.2-26.2-28.9-42.4H939c2.8 14.6 6.5 29.2 14.3 42.4z"></path><path d="M181.8 477.1c1.3 7.4 2.9 14.4 3.7 21.6 1.2 10.7-9.5 20.7-17.8 23.5-13.1 4.5-28.2-6.2-31.6-18.7-3.9-14.6 4.2-32.4 17.7-38.2 1.5-0.7 3-1.3 4.5-2 3.1-1.4 1.6-3.7 1.1-5.8-1.4-5.8-2.2-11.6 0.8-17 4.5-8.1 16.2-14.5 25.3-10.6 3.9 1.7 7.9 3.3 11.5 5.5 3.3 2 4.6 6.5 3.5 9.4-1.9 5-6.9 6.3-12.2 3.2-1.9-1.1-3.8-2.4-5.8-3.3-3.9-1.8-8.1 0.8-7.9 5.1 0.1 3.4 0.8 6.8 1.3 9.9 4.8 1.4 9.4 2.2 13.6 4 12.9 5.7 22.1 15 26.4 28.9 8 25.8-7 51.5-29.2 61.3-12.5 5.6-25.5 7.4-38.8 4.4-8.3-1.9-15.9-5.5-22.9-10.8-8.5-6.5-14.9-14.3-19.1-24-6-13.6-7.6-27.5-2.9-42.2 6.3-19.7 18.9-33.1 38.1-40.5 3.4-1.3 7.5 0.1 9.3 3.2 2.1 3.5 1.4 7.4-2 9.8-2.6 1.8-5.6 3-8.4 4.5-10.6 5.4-17.2 14.2-21.4 25.2-8.2 21.4 3.1 46.2 21.8 55.9 17.2 9 40.7 5.4 53.4-9.4 7.9-9.2 10.2-20.1 7.8-31.5-2-9.4-8.4-16.1-16.9-20.7-0.4-0.2-0.9-0.3-1.4-0.4-0.7-0.3-1.3-0.3-1.5-0.3z m-16.3 0c-12.6 2.9-18.3 15.7-12.8 26 1.9 3.6 6.6 5.6 10 4.6 4.7-1.4 8-4.8 7.3-9.2-1.1-7.2-3-14.3-4.5-21.4z" fill="#FFFFFF"></path><path d="M165.5 477.1c1.5 7.1 3.4 14.2 4.5 21.4 0.7 4.4-2.6 7.8-7.3 9.2-3.4 1-8.1-1-10-4.6-5.5-10.4 0.1-23.2 12.8-26z" fill="#E00000"></path></svg>`
                },

                {
                    name: "priv",
                    searchUrl: "https://priv.au/?preferences=eJx1WMuy47gN_Zp4oxrXTHoqqSy8Sk3yAZm9CiIhiSOK0OXDtu7XB9TDAi33wrdbhxQI4nkgBRE78gbDrUOHHuzFgusSdHgDyw-kwOIN3QVSJEXjZDHirfFwx0sLd6PI1R4D2Tv6W0fUWbyYkV-vJ0_P-fanT3gZMfakb__9489LgBYDglf97ddL7HHEWzBZ6oWlJBtDzQIdPuoIzfqyJnOcQMCPV_LdZX2rDnFm_UZQqjcQ6aLQRfQ1WNO5kf9_-w_YgBfQd3AKdb2dvaJfCf1cG1dHE1nKcty6IWuhVtvM_I5FFdflnuKAc7hpbIHVvSRv65b8CDEa190mjzHOF20CNJaPQ9cZx8b98Y9fN8H1Zue__f3fL7C6G40U6nr9l5f-1UFX18QG8vwEqk1OrLIRGqwCO2So68Xab-gq8PMbFSRteG1Mwai8ZCdWsbLGpWc1gRqyOBYb85pzEKqsormj0McFqLOXFtHTUI3Ge_JyA3BgaNjFkK1WNaW6DJ7uvVhjVeVhBrO978yTggTAR6OkLB9DhGjYaxJ8mntdB2WQXc9AA04rGKfj7g0YnaRLFuCs6woPYNr9SlmZCbWB4m1jTf6JCzUcFR_kZTTb72XFBTmZozFR9SliCTVJDRg3RRoCrz2C5qiXqkxN8Ri16URE0YSO8ymgUGrM17kqpa5aHqhA9XPF9n-LDdVjO1CO6F2o8hSCx1banLGHvhtOaKHNjNPb49lEGSwspJL3LHSWb2rE73zv3Z8alzAIh04a7wZc5AARsjPI8SmP07qrOKeNMzmKQnEIJw36qk_NdvOshbJ0Tmjkyxp9HJ6DREMsYkSz8_Kvo_OdxdopFMRaYRaBPxDywSINJy6R1QiTMAiO9NceuTvGpQtnLG4S55EcJ6LI-t-eQtVWe5JXZcvp2EMcuaLLbdaowUvAI9chauMDPFbaeK6sucaulm29cYMBmdrt7LTUrJ1ncWyH5rvnWi4RZ1I4QoKfI9Emv-M6D83xcPhUkcYGfXesIecCjfsz0ZJk8qCl2Z2duOGFkzbs5NQND6onC17mzbYyWZgrduP53GVlJE4tKZD7EHoDXG7f4rsH7tn5z3ahHnJQr0quAD53U3gWEq5mN1q_HLg9GFtNFOLrZn3quMN1Lah9h0CqHPwBY_iwFLicvGqJGXVz3NCMXZIxYxyIK3Lwes7SWW74MrMsun-Z0NMhbwDuz1unPblLLhY-GzhyIQjDWxzHueKYGFOuEnhaSoEr6juYrfVRCMelxA37x89VDvRgPixQy2-5jpmQ1J4ztLsX9cVSEyJe_W5am5TRRZkHz05gglS8xjaIpMm9X-KF9xD6CJ1c0m47g_kdqAlejyZ3As7xyrJdD_TJRTPpIzVH-u5NocRjbKwEXA5j_gnfumnPSTcDSEW5cuAe3qTngLKLkbUw7s07dz_g0nOE55F4-9qUGq5dsHWDt3Wbk6XENj9J7TPMpkEq-26IXAMjV-US5iNJWHfttibsfX7SDcozJ3yilaEwMTXN_OclwGQmjEE2vsnk3G5gltuewMA5MfaFU9GaiFlU4J6hsxVecjz-LMWOpSLB2MLMNO77_RZ7V5pGMG6VcRDPQ1RqmKYUdpinnRV-JfCDdMACnPX5ejAjKHVZoZ_sPFnAAzPoquFuHyT74IDSJh4m8cjUzR-HeIoxdyMu0iSrx2qccQ4mFk2Y5462D_FUywNOBnb28VIqUEcFl12A851W-HSnFX6g4ib-0jhQYspcZi0zLDUQk8fW0mPn42FITXIxbc8hcZFO4ZWOPA-pFMJ1mnkQ3AuCAq3n615PdwowmV-4GeIJD8gZzqz_U7MMmd9NOWIKpx7w2Qjc3kdBgGiYOXu4awwgUoiHTqOZnviyVscshNWAwtwS3RSIRVtLLnDTDr0kuZCT6AP5XfHF5IflZ-BWXF5xphRTIwvdC3lxYjCWydw6HL223c1YDIiZqjZEQ8F8M1gcl4GvRGWYZpADxaszOqFa-uRP4MODDGcFlwIq2XOeUZYYKCXcac6fGN7QHDKcKdeTOeXiKfDl4ttoLJdaY2XOPsi2njuKnfqS3hsVv8kVuo0zs2ImuVX0PDlbrsAFo_3tx49_ikKqk0YRg0zXET8UsQ0v3LPQwclYEkXILS2MGeE92Xxink_jvDCzBsJO2hywpc-HrHBxxgqdS2Jq5g7HnXVMiP4tMJfxkpUa8jT4wEbGLJRjXX4-K-MTswMp8UFeOzNIpzzNQI67ShVmR24exfgS7l1usUIgzwUxzy1yZErPB1MqsenOY87yQUIM_iOPiUXwxeivRjht-T52jsMVPk_5C1xYmdnEQeHW5OrTa-SPv4tRfhq6a0eikwamGMozQ_1K4vqsMzKzZ1K2fkdZ8AtzmeI71Tox8t_8rcjLTz5UEDMu-OWHj2yzT0OuRLttkDgQQb5_Ar8i7Vh90YmP4IcXli5edMa9MZRBtxIaifREZZFp5rJBf7vcRkSqL1lZUNicL4WtsrdfwPGpcLKJfRBuBPX6yfPBPsQlTH2telTDy1v71szJt4e8zy8zXZ0_SXouOPf1owxYlbjm0DJZueULB_6PCbq1S09iwsL0gvfGjYvYtuZtlAVyj6hzMbtwf-Sguv0fHjpeAA==&q={keyword}",
                    searchkeyName: ["q"],
                    matchUrl: /priv.au\..*?q=/g,
                    mark: "priv",
                    svgCode: `<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg width="800px" height="800px" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="21" cy="44" r="8" fill="#FDAFA4"/>
<circle cx="45" cy="44" r="8" fill="#FDAFA4"/>
<path d="M17.7018 37.2516C18.6335 36.657 19.6965 36.25 20.8376 36.0839L19.0527 51.4396C17.9955 51.0204 17.0488 50.3824 16.2687 49.5814L17.7018 37.2516Z" fill="white"/>
<path d="M41.7018 37.2516C42.6335 36.657 43.6965 36.25 44.8376 36.0839L43.0527 51.4396C41.9955 51.0204 41.0488 50.3824 40.2687 49.5814L41.7018 37.2516Z" fill="white"/>
<circle cx="21" cy="44" r="8" stroke="#0F277F" stroke-width="3"/>
<circle cx="45" cy="44" r="8" stroke="#0F277F" stroke-width="3"/>
<path d="M29 44C29.6667 43.3333 30.5 42 33 42C35.5 42 36.3333 43.3333 37 44" stroke="#0F277F" stroke-width="3" stroke-linecap="round"/>
<path d="M32 26C40.4047 26 45.4019 27.8277 52.2018 31.121C53.1515 31.581 52.8192 33 51.7639 33H12.2361C11.1808 33 10.8485 31.581 11.7982 31.121C18.5981 27.8277 23.5953 26 32 26Z" fill="#0F277F"/>
<path d="M23.7774 13.3355C23.888 12.6719 24.6092 12.3046 25.211 12.6055L28.9359 14.4679C29.6194 14.8097 30.4076 14.8777 31.1396 14.6581L38.9129 12.3261C39.4897 12.1531 40.0876 12.5255 40.1866 13.1196L41.8059 22.8356C41.9075 23.4451 41.4375 24 40.8195 24H23.1805C22.5625 24 22.0925 23.4451 22.1941 22.8356L23.7774 13.3355Z" fill="#0F277F"/>
</svg>`
                },

                {
                    name: "Flickr",
                    searchUrl: "https://www.flickr.com/search/?text={keyword}",
                    searchkeyName: ["text"],
                    matchUrl: /flickr\.com.*?text=/g,
                    mark: "Flickr",
                    svgCode: `<svg class="icon" style="width: 1.0546875em;height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="-50 -50 1180 1124" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4547"><path d="M487.747368 48.505263c-241.100261 0-436.547368 195.447107-436.547368 436.547369s195.447107 436.547368 436.547368 436.547368c3.637895 0 7.178779-0.407444 10.763318-0.606316 1.261137-0.067907 2.522274-0.087309 3.788261-0.150366a936.927663 936.927663 0 0 0 13.644531-0.756682c31.853406-2.046922 62.717305-7.804497 92.305516-16.370527 27.521886-7.974265 53.937853-18.344691 78.976269-31.227688 87.746021-45.129297 157.360775-119.371453 197.809314-209.634897 0.305583-0.679074 0.761533-1.285389 1.062265-1.969313 8.250745-18.674526 15.608994-37.809853 21.221053-57.750367 4.365474-15.516834 8.114931-31.276194 10.763318-47.442998 2.905465-17.752926 4.637103-35.884194 5.456842-54.267688 0.242526-5.456842 0.756682-10.855478 0.756682-16.370526 0-17.704421-1.435756-34.991697-3.487529-52.143158-0.412295-3.482678-1.168977-6.853794-1.668581-10.307369C888.740379 211.216168 707.548968 48.505263 487.747368 48.505263z" fill="#285DBA" p-id="4548"></path><path d="M487.747368 242.536017c-133.942434 0-242.526316 108.603284-242.526315 242.526316 0 133.942434 108.583882 242.506914 242.526315 242.506913s242.526316-108.56448 242.526316-242.506913c0-133.923032-108.593583-242.526316-242.526316-242.526316z m-93.003991 317.660968c-42.160775 0-76.337583-34.147705-76.337583-76.30848 0-42.180177 34.176808-76.327882 76.337583-76.327882 42.165625 0 76.327882 34.147705 76.327882 76.327882-0.009701 42.165625-34.162257 76.30848-76.327882 76.30848z m191.532732 0c-42.165625 0-76.327882-34.147705-76.327882-76.30848 0-42.180177 34.162257-76.327882 76.327882-76.327882 42.141373 0 76.327882 34.147705 76.327883 76.327882 0 42.165625-34.186509 76.30848-76.327883 76.30848z" fill="#ECECEC" p-id="4549" data-spm-anchor-id="a313x.search_index.i1.i1.620c3a814GzNtL"></path><path d="M482.896842 48.505263C241.796581 48.505263 46.349474 243.952371 46.349474 485.052632s195.447107 436.547368 436.547368 436.547368V48.505263z" fill="#FFFFFF" opacity=".15" p-id="4550"></path></svg>`
                },

                {
                    name: "维基百科",
                    searchUrl: "https://zh.wikipedia.org/w/index.php?search={keyword}",
                    searchkeyName: ["search"],
                    matchUrl: /wikipedia\.org.*?search=/g,
                    mark: "Wikipedia",
                    svgCode: `<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="-3 -3 30 30"><path fill="#333333" d="m14.97 18.95l-2.56-6.03c-1.02 1.99-2.14 4.08-3.1 6.03c-.01.01-.47 0-.47 0C7.37 15.5 5.85 12.1 4.37 8.68C4.03 7.84 2.83 6.5 2 6.5v-.45h5.06v.45c-.6 0-1.62.4-1.36 1.05c.72 1.54 3.24 7.51 3.93 9.03c.47-.94 1.8-3.42 2.37-4.47c-.45-.88-1.87-4.18-2.29-5c-.32-.54-1.13-.61-1.75-.61c0-.15.01-.25 0-.44l4.46.01v.4c-.61.03-1.18.24-.92.82c.6 1.24.95 2.13 1.5 3.28c.17-.34 1.07-2.19 1.5-3.16c.26-.65-.13-.91-1.21-.91c.01-.12.01-.33.01-.43c1.39-.01 3.48-.01 3.85-.02v.42c-.71.03-1.44.41-1.82.99L13.5 11.3c.18.51 1.96 4.46 2.15 4.9l3.85-8.83c-.3-.72-1.16-.87-1.5-.87v-.45l4 .03v.42c-.88 0-1.43.5-1.75 1.25c-.8 1.79-3.25 7.49-4.85 11.2z"/></svg>`
                },

                {
                    name: "ArchWiki",
                    searchUrl: "https://wiki.archlinux.org/index.php?search={keyword}",
                    searchkeyName: ["search"],
                    matchUrl: /archlinux\.org.*?search=/g,
                    mark: "ArchWiki",
                    svgCode: `<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="-3 -3 54 54"><path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M28.24 36.93a11.89 11.89 0 0 0 .24-2.14c.11-3.95-1.8-7.34-4.18-7.54S19.8 30 19.7 34v.21a11.27 11.27 0 0 0 .3 2.69c-4.47.83-9.26 3-15.44 6.6c7.87-14.12 11.16-20.28 13.64-25.44c1.68 1.34 4.06 1.73 6.15 2a24 24 0 0 1-4.75-5.11c1.93-4.18 2.65-6.27 4.4-10.45c3.57 8.36 3.6 9.45 14 28.85c-1.68-1-2.74-.83-4.56-.6a55.28 55.28 0 0 1 7 5.15c1 1.94 1.82 3.39 3 5.6c-6.1-3.52-10.83-5.71-15.25-6.57Z"/></svg>`
                },

                {
                    name: "微信读书",
                    searchUrl: "https://weread.qq.com/web/search/books?keyword={keyword}",
                    searchkeyName: ["keyword"],
                    matchUrl: /weread\.qq\.com.*?keyword=/g,
                    mark: "WeRead",
                    svgCode: `<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#6E99FF"><path d="M474.697931 463.133036c52.537564-55.155181 119.125121-74.453712 197.466374-70.189595-1.747807-8.009418-1.814322-14.22191-4.389984-19.11843-12.712533-24.170492-22.698978-50.789757-39.787168-71.474868-102.242616-123.764791-308.057121-138.461515-427.463652-31.18935-61.691037 55.423287-87.38421 124.68986-69.739341 206.809159 11.298324 52.575426 43.588751 92.715635 85.609797 124.551714 13.697977 10.382465 15.916505 19.665899 10.030447 34.608216-7.30436 18.535145-12.809747 37.781488-19.0908 56.720839 17.596773-3.874237 31.816636-9.761318 44.911886-17.542538 30.707372-18.24555 61.189617-28.17162 98.18623-16.900925 22.337751 6.800893 47.565319 4.123924 74.762751 5.92085C405.477406 585.486688 421.574013 518.909363 474.697931 463.133036zM497.939261 319.220369c19.834744-0.284479 31.798217 10.92277 32.226982 30.178323 0.442068 19.85521-10.726296 31.997762-29.841655 32.44597-21.970384 0.51677-38.566364-12.741185-38.723953-30.930453C461.449185 333.410556 477.38411 319.510988 497.939261 319.220369zM309.594639 381.837498c-21.693068 0.073678-37.788651-13.573133-37.541011-31.828916 0.233314-17.353227 16.143679-30.628578 36.897352-30.79333 19.576871-0.150426 33.157167 13.06148 32.867572 31.983435C341.537142 369.591593 328.722278 381.778146 309.594639 381.837498z"></path><path d="M835.363224 471.499587c-81.796958-78.773088-215.099986-91.444689-312.212768-29.66974-125.474736 79.81379-124.392078 243.768933 2.771113 320.735885 61.081147 36.97103 127.145795 47.321772 196.581214 28.592198 14.377452-3.879354 26.002211-2.758834 38.630832 5.067412 17.174148 10.645454 35.464723 19.495006 53.278437 29.115108 1.274016-0.950651 2.548032-1.901303 3.822049-2.852978-4.882194-17.019629-10.796904-33.842783-14.117532-51.16531-1.249457-6.507204 1.530866-15.896038 5.932106-20.968567 11.326976-13.038968 25.615401-23.515576 36.914748-36.58115C913.685034 636.613112 908.943033 542.366611 835.363224 471.499587zM589.682755 564.978609c-14.864546 0.228197-26.891464-11.264555-26.424836-25.248034 0.456395-13.707187 11.322883-23.429619 26.14752-23.38971 16.312524 0.041956 29.684066 11.452843 29.205159 24.921599C618.16239 553.809221 604.82257 564.746318 589.682755 564.978609zM737.859539 565.009308c-13.485129-0.203638-26.317389-11.747555-26.63359-23.958668-0.340761-13.07069 12.692067-24.846898 27.374464-24.735357 16.766872 0.12996 28.897144 11.084453 28.241204 25.499767C766.255263 554.683125 753.061776 565.241598 737.859539 565.009308z"></path></svg>`
                },

                {
                    name: "presearch",
                    searchUrl: "https://presearch.com/search?key={keyword}",
                    searchkeyName: ["key"],
                    matchUrl: /presearch\.com.*?key=/g,
                    mark: "presearch",
                    svgCode: `<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 370 370"><defs><style>.cls-1{fill:#2d8eff;}</style></defs><title>presearch-logo-border-blue-transparent</title><path class="cls-1" d="M135.17,225.38h32.71a63,63,0,0,0,27.06-6,68,68,0,0,0,21-16.16,75,75,0,0,0,13.33-23.42,76.44,76.44,0,0,0,4.84-27.06,66.16,66.16,0,0,0-5.25-26.25,80.79,80.79,0,0,0-14.13-23,70.91,70.91,0,0,0-21.41-16.55,58,58,0,0,0-27-6.47h-86V289.19h54.92Zm0-94.5H163a15,15,0,0,1,10.1,4.85c3.23,3.23,5.25,8.89,5.25,17.77s-2,14.13-4.85,17c-2.42,2.83-5.65,4.85-9.28,4.85H135.17Z"/><path class="cls-1" d="M9.44,30.1V339.9A20.1,20.1,0,0,0,29.54,360h309.8a20.1,20.1,0,0,0,20.1-20.1V30.1A20.1,20.1,0,0,0,339.34,10H29.54A20.1,20.1,0,0,0,9.44,30.1ZM298.11,318.77H70.35a20.1,20.1,0,0,1-20.11-20.1V70.91a20.1,20.1,0,0,1,20.11-20.1H298.11a20.1,20.1,0,0,1,20.1,20.1V298.67A20.1,20.1,0,0,1,298.11,318.77Z"/><rect class="cls-1" x="159.8" y="250.02" width="128.83" height="39.58"/></svg>`
                },
                {
                    name: "qmamu",
                    searchUrl: "https://qmamu.com/search?q={keyword}",
                    searchkeyName: ["q"],
                    matchUrl: "qmamu\\.com.*?search\\?q=",
                    mark: "qmamu",
                    svgCode: `
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="245" height="61" viewBox="0 0 245 61">
  <defs>
    <clipPath id="clip-path">
      <path id="Path_59" data-name="Path 59" d="M-1865.57-127.05a24.179,24.179,0,0,1-2.683,6,24.04,24.04,0,0,1-4.2,5.03,23.894,23.894,0,0,1-5.48,3.76l7.136,10.672h-10.478l-5.529-8.293a6.043,6.043,0,0,1-.852.064h-.787a23.3,23.3,0,0,1-6.317-.852,23.846,23.846,0,0,1-5.689-2.41,24.058,24.058,0,0,1-4.838-3.745,24.081,24.081,0,0,1-3.746-4.838,23.881,23.881,0,0,1-2.41-5.689,23.282,23.282,0,0,1-.852-6.317,23.441,23.441,0,0,1,.852-6.332,23.534,23.534,0,0,1,2.41-5.69,24.283,24.283,0,0,1,3.746-4.821,23.6,23.6,0,0,1,4.838-3.729,24.315,24.315,0,0,1,5.689-2.394,23.3,23.3,0,0,1,6.317-.852,23.461,23.461,0,0,1,6.332.852,23.96,23.96,0,0,1,5.69,2.394,23.805,23.805,0,0,1,4.822,3.729,23.785,23.785,0,0,1,3.729,4.821,23.954,23.954,0,0,1,2.394,5.69,23.463,23.463,0,0,1,.852,6.332,23.3,23.3,0,0,1-.948,6.621Zm-9.369-12.327a14.819,14.819,0,0,0-3.134-4.661,14.813,14.813,0,0,0-4.661-3.134,14.251,14.251,0,0,0-5.7-1.157,14.224,14.224,0,0,0-5.722,1.157,15.057,15.057,0,0,0-4.66,3.134,14.674,14.674,0,0,0-3.15,4.661,14.251,14.251,0,0,0-1.157,5.7,14.03,14.03,0,0,0,1.157,5.674,14.956,14.956,0,0,0,3.15,4.645,14.92,14.92,0,0,0,4.66,3.15,14.228,14.228,0,0,0,5.722,1.157,14.258,14.258,0,0,0,5.7-1.157,14.681,14.681,0,0,0,4.661-3.15,15.108,15.108,0,0,0,3.134-4.645,14.032,14.032,0,0,0,1.157-5.674,14.253,14.253,0,0,0-1.157-5.7Zm50.465,28.559v-21.857a4.359,4.359,0,0,0-.337-1.7,4.385,4.385,0,0,0-.948-1.414,4.386,4.386,0,0,0-1.415-.948,4.344,4.344,0,0,0-1.7-.338,4.231,4.231,0,0,0-1.688.338,4.245,4.245,0,0,0-1.382.948,4.509,4.509,0,0,0-.932,1.414,4.34,4.34,0,0,0-.337,1.7v21.858h-8.775v-21.858a4.341,4.341,0,0,0-.339-1.7,4.371,4.371,0,0,0-.948-1.414,4.393,4.393,0,0,0-1.414-.948,4.342,4.342,0,0,0-1.7-.338,4.225,4.225,0,0,0-1.687.338,4.249,4.249,0,0,0-1.383.948,4.493,4.493,0,0,0-.932,1.414,4.338,4.338,0,0,0-.338,1.7v21.858h-8.776v-34.426h2.121l2.379,2.636a14.152,14.152,0,0,1,4.034-2.394,12.591,12.591,0,0,1,4.58-.852,12.813,12.813,0,0,1,4.709.9,9.548,9.548,0,0,1,4.034,3.118,8.914,8.914,0,0,1,1.832-1.865,10.282,10.282,0,0,1,2.169-1.253,10.691,10.691,0,0,1,2.363-.691,14.306,14.306,0,0,1,2.411-.209,12.855,12.855,0,0,1,5.126,1.028,13.228,13.228,0,0,1,4.179,2.813,13.191,13.191,0,0,1,2.813,4.195,12.966,12.966,0,0,1,1.028,5.143v21.858h-8.743Zm46.351,0-3.407-4.725a28.183,28.183,0,0,1-2.652,2.105,19.567,19.567,0,0,1-2.941,1.7,18.013,18.013,0,0,1-3.167,1.141,13.19,13.19,0,0,1-3.295.418,18.985,18.985,0,0,1-6.83-1.221,16.221,16.221,0,0,1-5.593-3.552,16.631,16.631,0,0,1-3.777-5.706,20.119,20.119,0,0,1-1.382-7.683,19.2,19.2,0,0,1,1.382-7.376,17.553,17.553,0,0,1,3.777-5.77,17.038,17.038,0,0,1,5.593-3.745,17.569,17.569,0,0,1,6.83-1.334,13.329,13.329,0,0,1,3.311.419,17.167,17.167,0,0,1,3.182,1.157,19.761,19.761,0,0,1,2.942,1.736,24.387,24.387,0,0,1,2.62,2.153l3.407-4.083H-1776v34.362Zm-7.41-21.006a10.027,10.027,0,0,0-1.88-2.989,9.353,9.353,0,0,0-2.78-2.09,7.548,7.548,0,0,0-3.392-.787,9.384,9.384,0,0,0-3.391.611,7.739,7.739,0,0,0-2.765,1.8,8.448,8.448,0,0,0-1.848,2.941,11.078,11.078,0,0,0-.674,4,11.084,11.084,0,0,0,.674,4,8.446,8.446,0,0,0,1.848,2.941,7.739,7.739,0,0,0,2.765,1.8,9.373,9.373,0,0,0,3.391.61,7.542,7.542,0,0,0,3.392-.787,9.355,9.355,0,0,0,2.78-2.09,10.006,10.006,0,0,0,1.88-2.989,9.13,9.13,0,0,0,.692-3.488,9.123,9.123,0,0,0-.692-3.487Zm51.253,21.006v-21.857a4.36,4.36,0,0,0-.337-1.7,4.39,4.39,0,0,0-.948-1.414,4.386,4.386,0,0,0-1.414-.948,4.341,4.341,0,0,0-1.7-.338,4.234,4.234,0,0,0-1.688.338,4.238,4.238,0,0,0-1.382.948,4.517,4.517,0,0,0-.933,1.414,4.34,4.34,0,0,0-.337,1.7v21.858h-8.775v-21.858a4.351,4.351,0,0,0-.338-1.7,4.384,4.384,0,0,0-.949-1.414,4.38,4.38,0,0,0-1.414-.948,4.345,4.345,0,0,0-1.7-.338,4.222,4.222,0,0,0-1.687.338,4.259,4.259,0,0,0-1.383.948,4.5,4.5,0,0,0-.932,1.414,4.351,4.351,0,0,0-.337,1.7v21.858h-8.776v-34.426h2.122l2.379,2.636a14.154,14.154,0,0,1,4.034-2.394,12.59,12.59,0,0,1,4.58-.852,12.81,12.81,0,0,1,4.709.9,9.544,9.544,0,0,1,4.034,3.118,8.9,8.9,0,0,1,1.833-1.865,10.263,10.263,0,0,1,2.169-1.253,10.689,10.689,0,0,1,2.363-.691,14.308,14.308,0,0,1,2.411-.209,12.856,12.856,0,0,1,5.126,1.028,13.226,13.226,0,0,1,4.179,2.813,13.185,13.185,0,0,1,2.813,4.195,12.97,12.97,0,0,1,1.028,5.143v21.858h-8.743Zm43.329,0-2.893-4.018a23.965,23.965,0,0,1-2.267,1.817,17,17,0,0,1-2.523,1.479,15.592,15.592,0,0,1-2.716,1,11.1,11.1,0,0,1-2.845.37,15.877,15.877,0,0,1-5.979-1.125,14.75,14.75,0,0,1-4.9-3.2,14.764,14.764,0,0,1-3.311-5.047,17.594,17.594,0,0,1-1.206-6.67v-19.029h8.743v19.029a8.515,8.515,0,0,0,.53,3.1,6.82,6.82,0,0,0,1.431,2.3,5.988,5.988,0,0,0,2.1,1.414,6.9,6.9,0,0,0,2.588.482,5.452,5.452,0,0,0,2.555-.627,7.172,7.172,0,0,0,2.105-1.656,7.935,7.935,0,0,0,1.415-2.33,7.237,7.237,0,0,0,.514-2.684v-19.029h8.776v34.426h-2.121Z" transform="translate(1912.29 157.49)"/>
    </clipPath>
    <pattern id="pattern" preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 5120 1360">
      <image width="5120" height="1360" xlink:href="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEASABIAAD/7AARRHVja3kAAQAEAAAAHgAA/+4AIUFkb2JlAGTAAAAAAQMAEAMCAwYAAF5nAABefwAAYcT/2wCEABALCwsMCxAMDBAXDw0PFxsUEBAUGx8XFxcXFx8eFxoaGhoXHh4jJSclIx4vLzMzLy9AQEBAQEBAQEBAQEBAQEABEQ8PERMRFRISFRQRFBEUGhQWFhQaJhoaHBoaJjAjHh4eHiMwKy4nJycuKzU1MDA1NUBAP0BAQEBAQEBAQEBAQP/CABEIBVAUAAMBIgACEQEDEQH/xABxAAEBAQEAAAAAAAAAAAAAAAAAAQcGAQEBAQEAAAAAAAAAAAAAAAAAAQUDEAADAQEBAQAAAAAAAAAAAABQgAUDsODQEQEBAAAAAAAAAAAAAAAAAADg0BIAAQQDAQAAAAAAAAAAAAAAA1CAwYIBwoOw/9oADAMBAAIRAxEAAADPwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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"/>
    </pattern>
  </defs>
  <g id="Group_54" data-name="Group 54" transform="translate(-2422 -267)">
    <rect id="Rectangle_13" data-name="Rectangle 13" width="245" height="61" transform="translate(2422 267)" fill="none"/>
    <g id="Group_49" data-name="Group 49" transform="translate(2433 270)" clip-path="url(#clip-path)">
      <rect id="Rectangle_12" data-name="Rectangle 12" width="258" height="69" transform="translate(-17.399 -6.482)" fill="url(#pattern)"/>
    </g>
  </g>
</svg>
    `
                },                          
            ];
                                 
         // ===== 常量定义区 =====
const CLASS_NAMES = Object.freeze({
    ENGINE_CONTAINER: 'engine-container',
    ENGINE_DISPLAY: 'engine-display',
    ENGINE_BUTTON: 'engine-button',
    HAMBURGER_MENU: 'punkjet-hamburger-menu',
    SEARCH_OVERLAY: 'punkjet-search-overlay',
    MANAGEMENT_PANEL: 'engine-management-panel',
    ENGINE_CARD: 'engine-card',
    DRAGGING: 'dragging',
    DRAG_OVER: 'drag-over'
});

const STORAGE_KEYS = Object.freeze({
    USER_SEARCH_ENGINES: 'userSearchEngines',
    PUNK_SETUP_SEARCH: 'punk_setup_search',
    LAST_SUCCESSFUL_KEYWORDS: 'last_successful_keywords',
    CURRENT_INPUT: 'currentInput',
    ENGINE_BAR_OFFSET: 'engineBarOffset'
});

const DEFAULT_CONFIG = {
    PUNK_DEFAULT_MARK: 'Bing-Google-Baidu-MetaSo-YandexSearch-Bilibili-ApkPure-Quark-Zhihu',
    SEARCH_PARAMS: ['q', 'query', 'search', 'keyword', 'keywords', 'wd', 'key'],
    MONITORED_INPUT_SELECTOR: 'input[type="text"], input[type="search"], textarea, input#kw',
    CHECK_SCOPE_INTERVAL: 1000,
    SHOW_SEARCH_BOX_DELAY: 10000,
    SCROLL_TIMEOUT_DURATION: 150,
    BAIDU_INPUT_DELAY: 500,
    DRAG_SORT_DELAY: 500,
    ENGINE_BAR_OFFSET_DEFAULT: 0
};

// ===== 可访问性模块 =====
const accessibility = {
    initKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            if (e.altKey && e.key === 's') {
                e.preventDefault();
                searchOverlay.showSearchOverlay();
            }
            if (e.key === 'Escape') {
                if (appState.searchOverlayVisible) searchOverlay.hideSearchOverlay();
                if (appState.hamburgerMenuOpen) hamburgerMenu.hideHamburgerMenu();
                const panel = document.getElementById(CLASS_NAMES.MANAGEMENT_PANEL);
                if (panel && panel.style.display === 'block') managementPanel.closeManagementPanel();
            }
            if (e.altKey && e.key === 'm') {
                e.preventDefault();
                hamburgerMenu.toggleHamburgerMenu();
            }
            if (e.altKey && e.key === 'e') {
                e.preventDefault();
                managementPanel.showManagementPanel();
            }
        });
    },

    enhanceAriaLabels() {
        const buttons = document.querySelectorAll(`.${CLASS_NAMES.ENGINE_BUTTON}`);
        buttons.forEach(button => {
            const engineName = button.getAttribute('title');
            button.setAttribute('aria-label', `使用${engineName}搜索`);
            button.setAttribute('role', 'button');
            button.setAttribute('tabindex', '0');
        });
        const hamburgerButton = document.querySelector('.engine-hamburger-button');
        if (hamburgerButton) {
            hamburgerButton.setAttribute('aria-label', '打开菜单');
            hamburgerButton.setAttribute('aria-expanded', 'false');
            hamburgerButton.setAttribute('aria-haspopup', 'true');
        }
        const overlay = document.getElementById(CLASS_NAMES.SEARCH_OVERLAY);
        if (overlay) {
            const searchInput = overlay.querySelector('input');
            if (searchInput) searchInput.setAttribute('aria-label', '搜索关键词或网址');
        }
    },

    updateHamburgerAriaState() {
        const hamburgerButton = document.querySelector('.engine-hamburger-button');
        if (hamburgerButton) {
            hamburgerButton.setAttribute('aria-expanded', appState.hamburgerMenuOpen.toString());
        }
    },

    trapFocus(element) {
        const focusableElements = element.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        const handleKeyDown = (e) => {
            if (e.key !== 'Tab') return;
            if (e.shiftKey) {
                if (document.activeElement === firstElement) {
                    lastElement.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === lastElement) {
                    firstElement.focus();
                    e.preventDefault();
                }
            }
        };
        element.addEventListener('keydown', handleKeyDown);
        if (!element._focusTrapHandler) element._focusTrapHandler = handleKeyDown;
        setTimeout(() => firstElement.focus(), 100);
    },

    removeFocusTrap(element) {
        if (element._focusTrapHandler) {
            element.removeEventListener('keydown', element._focusTrapHandler);
            delete element._focusTrapHandler;
        }
    },

    init() {
        this.initKeyboardNavigation();
        setTimeout(() => this.enhanceAriaLabels(), 1000);
        const observer = new MutationObserver(() => this.enhanceAriaLabels());
        observer.observe(document.body, { childList: true, subtree: true });
    }
};

// ===== 防抖工具模块 =====
const debounceUtils = {
    timers: new Map(),

    debounce(key, fn, delay = 300, immediate = false) {
        if (this.timers.has(key)) clearTimeout(this.timers.get(key));
        if (immediate && !this.timers.has(key)) {
            fn();
            this.timers.set(key, setTimeout(() => this.timers.delete(key), delay));
        } else {
            const timer = setTimeout(() => {
                fn();
                this.timers.delete(key);
            }, delay);
            this.timers.set(key, timer);
        }
    },

    throttle(key, fn, limit = 300) {
        if (!this.timers.has(key)) {
            fn();
            this.timers.set(key, setTimeout(() => this.timers.delete(key), limit));
        }
    },

    cancel(key) {
        if (this.timers.has(key)) {
            clearTimeout(this.timers.get(key));
            this.timers.delete(key);
        }
    },

    clearAll() {
        this.timers.forEach((timer) => clearTimeout(timer));
        this.timers.clear();
    }
};

// ===== 工具函数库 =====
const utils = {
    clearAllTimeouts() {
        if (appState.scrollTimeout) clearTimeout(appState.scrollTimeout);
        if (appState.hideTimeout) clearTimeout(appState.hideTimeout);
        debounceUtils.clearAll();
    },

    isEngineContainerExists() {
        return document.querySelector(`.${CLASS_NAMES.ENGINE_CONTAINER}`) !== null;
    },

    isValidScope() {
        return appState.searchUrlMap.some(item => window.location.href.match(item.matchUrl) !== null);
    },

    recordEngineUsage(mark) {
        if (hamburgerMenu.sortMode !== 'smart') return;
        const usageCounts = GM_getValue('engine_usage_counts', {});
        usageCounts[mark] = (usageCounts[mark] || 0) + 1;
        GM_setValue('engine_usage_counts', usageCounts);
    },

    isValidUrl(string) {
        try {
            const url = new URL(string);
            return url.protocol === 'http:' || url.protocol === 'https:';
        } catch (_) {
            return false;
        }
    },

    getKeywords() {
        try {
            const url = new URL(window.location.href);
            const searchParams = url.searchParams;
            let keywords = '';
            for (const param of DEFAULT_CONFIG.SEARCH_PARAMS) {
                if (searchParams.has(param)) {
                    keywords = searchParams.get(param).trim();
                    if (keywords) break;
                }
            }
            if (!keywords) {
                for (const urlItem of appState.searchUrlMap) {
                    if (window.location.href.match(urlItem.matchUrl) !== null) {
                        for (const keyItem of urlItem.searchkeyName) {
                            if (searchParams.has(keyItem)) {
                                keywords = searchParams.get(keyItem).trim();
                                if (keywords) break;
                            }
                        }
                        if (keywords) break;
                    }
                }
            }
            if (keywords) {
                localStorage.setItem(STORAGE_KEYS.LAST_SUCCESSFUL_KEYWORDS, keywords);
                sessionStorage.setItem(STORAGE_KEYS.LAST_SUCCESSFUL_KEYWORDS, keywords);
            } else {
                keywords = sessionStorage.getItem(STORAGE_KEYS.LAST_SUCCESSFUL_KEYWORDS) ||
                    localStorage.getItem(STORAGE_KEYS.LAST_SUCCESSFUL_KEYWORDS) || '';
            }
            return keywords;
        } catch (error) {
            console.error("获取关键词失败:", error.message, "当前URL:", window.location.href);
            return "";
        }
    },

    getSearchKeywords() {
        let keywords = "";
        if (appState.searchOverlayVisible) {
            const searchInput = document.getElementById("overlay-search-input");
            if (searchInput && searchInput.value.trim()) return searchInput.value.trim();
        }
        const baiduInput = document.querySelector('input#kw, input[name="wd"], input[name="word"]');
        if (baiduInput && baiduInput.value.trim()) return baiduInput.value.trim();
        const allInputs = document.querySelectorAll(DEFAULT_CONFIG.MONITORED_INPUT_SELECTOR);
        for (const input of allInputs) {
            const inputVal = input.value.trim();
            if (inputVal) {
                keywords = inputVal;
                break;
            }
        }
        if (!keywords) keywords = this.getKeywords().trim();
        if (!keywords) keywords = sessionStorage.getItem(STORAGE_KEYS.CURRENT_INPUT) || "";
        return keywords;
    },

    markUnsavedChanges() {
        appState.hasUnsavedChanges = true;
        const indicator = document.getElementById("unsaved-indicator");
        const saveBtn = document.getElementById("panel-save-btn");
        if (indicator) indicator.style.display = "block";
        if (saveBtn) {
            saveBtn.style.opacity = "1";
            saveBtn.style.pointerEvents = "auto";
            saveBtn.style.background = "#e67e22";
            saveBtn.innerHTML = this.createInlineSVG('save') + ' 保存更改';
            const handleHover = function(isEnter) {
                this.style.transform = isEnter ? "translateY(-2px)" : "translateY(0)";
                this.style.boxShadow = isEnter ? "0 4px 8px rgba(0,0,0,0.2)" : "none";
            };
            saveBtn.removeEventListener("mouseenter", () => {});
            saveBtn.removeEventListener("mouseleave", () => {});
            saveBtn.addEventListener("mouseenter", () => handleHover.call(saveBtn, true));
            saveBtn.addEventListener("mouseleave", () => handleHover.call(saveBtn, false));
        }
    },

    clearUnsavedChanges() {
        appState.hasUnsavedChanges = false;
        const indicator = document.getElementById("unsaved-indicator");
        const saveBtn = document.getElementById("panel-save-btn");
        if (indicator) indicator.style.display = "none";
        if (saveBtn) {
            saveBtn.style.opacity = "0.7";
            saveBtn.style.pointerEvents = "none";
            saveBtn.style.background = "#95a5a6";
            saveBtn.innerHTML = this.createInlineSVG('save') + ' 保存设置';
            setTimeout(() => {
                if (!appState.hasUnsavedChanges) {
                    saveBtn.innerHTML = this.createInlineSVG('check') + ' 已保存';
                    saveBtn.style.background = "#27ae60";
                    setTimeout(() => {
                        if (!appState.hasUnsavedChanges) {
                            saveBtn.innerHTML = this.createInlineSVG('save') + ' 保存设置';
                            saveBtn.style.background = "#95a5a6";
                        }
                    }, 2000);
                }
            }, 100);
        }
    },

    updateSelectedCount() {
        const checkboxes = document.querySelectorAll(`#engine-management-list input[type="checkbox"]:checked`);
        const countElement = document.getElementById("selected-count");
        if (countElement) {
            countElement.innerHTML = this.createInlineSVG('check-circle') + ` 已选择 ${checkboxes.length} 个引擎`;
        }
    },

    saveButtonOrder() {
        const container = document.querySelector(`.${CLASS_NAMES.ENGINE_DISPLAY}`);
        if (!container) return;
        const buttons = container.querySelectorAll(`.${CLASS_NAMES.ENGINE_BUTTON}`);
        const newOrder = Array.from(buttons)
            .map(btn => btn.getAttribute('data-mark'))
            .filter(mark => mark !== null)
            .join('-');
        GM_setValue(STORAGE_KEYS.PUNK_SETUP_SEARCH, newOrder);
    },

    createInlineSVG(iconName, color = 'currentColor') {
        const icons = {
            search: `<svg width="16" height="16" viewBox="0 0 16 16" fill="${color}"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/></svg>`,
            cog: `<svg width="16" height="16" viewBox="0 0 24 24"><g fill="none" stroke="#666666" stroke-linejoin="round"><path stroke-linecap="round" d="M4.524 14.444c-1.531-1.58-1.29-4.294.53-5.548c1.43-.985 3.29-.084 4.563-1.302c1.432-1.382.473-3.54 1.898-5.01c1.354-1.398 3.604-1.428 4.961-.028c1.35 1.393 1.35 3.707 0 5.1c-1.524 1.572-3.668.357-5.11 1.777c-1.279 1.233-.55 3.052-1.464 4.465c-1.182 1.825-3.836 2.137-5.378.546"/><path d="M11 19a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0"/></g></svg>`,
            sort: `<svg width="16" height="16" viewBox="0 0 24 24"><path fill="none" stroke="#666666" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 14h4.421c.93 0 1.395 0 1.52.28c.123.28-.193.616-.826 1.288l-3.638 3.864c-.633.672-.95 1.008-.826 1.288s.59.28 1.52.28H10M4 9l2.106-4.695C6.496 3.435 6.69 3 7 3s.504.435.894 1.305L10 9m7.5 11V4m0 16c-.7 0-2.008-1.994-2.5-2.5m2.5 2.5c.7 0 2.009-1.994 2.5-2.5"/></svg>`,
            sog: `<svg width="16" height="16" viewBox="0 0 16 16" fill="${color}"><path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/><path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/></svg>`,
            save: `<svg width="16" height="16" viewBox="0 0 16 16" fill="${color}"><path d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z"/></svg>`,
            check: `<svg width="16" height="16" viewBox="0 0 16 16" fill="${color}"><path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/></svg>`,
            'check-circle': `<svg width="16" height="16" viewBox="0 0 16 16" fill="${color}"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/></svg>`,
            times: `<svg width="16" height="16" viewBox="0 0 16 16" fill="${color}"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg>`,
            plus: `<svg width="16" height="16" viewBox="0 0 16 16" fill="${color}"><path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/></svg>`,
            globe: `<svg width="16" height="16" viewBox="0 0 16 16" fill="${color}"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.026a6.8 6.8 0 0 0-.34 2.5h2.49zM4.847 5.12c.38-.59.853-1.108 1.4-1.536.165-.13.335-.252.51-.367a6.7 6.7 0 0 1-.597.933A9.252 9.252 0 0 0 5.794 5.5H4.847zM8.5 1.077V4h1.191a7.9 7.9 0 0 0-1.318-1.142C8.072 2.702 7.78 2.275 8.5 1.077zM9.92 5.5H8.754a9.3 9.3 0 0 1-.64 1.539 6.7 6.7 0 0 1-.597.933c.23-.174.48-.34.743-.492.547-.428 1.02-.946 1.4-1.536zM13.974 7.5H11.49c.174.782.282 1.623.312 2.5h2.49a6.8 6.8 0 0 0 .34-2.5zm-1.487 3.5c-.165.13-.335.252-.51.367.13-.195.248-.4.352-.614.204-.67.382-1.375.429-2.153h2.205a6.7 6.7 0 0 1-.34 2.5h-2.136zm-2.572 2.072c.67-.204 1.335-.82 1.887-1.855.165.38.31.767.429 1.153H8.5v2.923zM11.145 12a7.9 7.9 0 0 0 1.318-1.142c.272.208.56.396.86.572a7.025 7.025 0 0 1-2.178 1.57h.001z"/></svg>`,
            undo: `<svg width="16" height="16" viewBox="0 0 16 16" fill="${color}"><path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/><path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/></svg>`,
            eye: `<svg width="16" height="16" viewBox="0 0 16 16" fill="${color}"><path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/><path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/></svg>`,
            trash: `<svg width="16" height="16" viewBox="0 0 16 16" fill="${color}"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/><path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/></svg>`,
            list: `<svg width="16" height="16" viewBox="0 0 16 16" fill="${color}"><path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/></svg>`,
            magic: `<svg width="16" height="16" viewBox="0 0 16 16" fill="${color}"><path d="M9.5 2.672a.5.5 0 1 0 1 0V.843a.5.5 0 0 0-1 0v1.829zm4.5.035A.5.5 0 0 0 13.293 2L12 3.293a.5.5 0 1 0 .707.707L14 2.707zM7.293 4A.5.5 0 1 0 8 3.293L6.707 2A.5.5 0 0 0 6 2.707L7.293 4zm-.621 2.5a.5.5 0 1 0 0-1H4.843a.5.5 0 1 0 0 1h1.829zm8.485 0a.5.5 0 1 0 0-1h-1.829a.5.5 0 0 0 0 1h1.829zM13.293 10A.5.5 0 1 0 14 9.293L12.707 8a.5.5 0 1 0-.707.707L13.293 10zM9.5 11.157a.5.5 0 0 0 1 0V9.328a.5.5 0 0 0-1 0v1.829zm1.854-5.097a.5.5 0 0 0 0-.706l-.708-.708a.5.5 0 0 0-.707 0L8.646 5.94a.5.5 0 0 0 0 .707l.708.708a.5.5 0 0 0 .707 0l1.293-1.293zm-3 3a.5.5 0 0 0 0-.706l-.708-.708a.5.5 0 0 0-.707 0L.646 13.94a.5.5 0 0 0 0 .707l.708.708a.5.5 0 0 0 .707 0L8.354 9.06z"/></svg>`,
            palette: `<svg width="16" height="16" viewBox="0 0 16 16" fill="${color}"><path d="M8 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm4 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM5.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/><path d="M16 8c0 3.15-1.866 2.585-3.567 2.07C11.42 9.763 10.465 9.473 10 10c-.603.683-.475 1.819-.351 2.92C9.826 14.495 9.996 16 8 16a8 8 0 1 1 8-8zm-8 7c.611 0 .654-.171.655-.176.078-.146.124-.464.07-1.119-.014-.168-.037-.37-.061-.591-.052-.464-.112-1.005-.118-1.462-.01-.707.083-1.61.704-2.314.369-.417.845-.578 1.272-.618.404-.038.812.026 1.16.104.343.077.702.186 1.025.284l.028.008c.346.105.658.199.953.266.653.148.904.083.991.024C14.717 9.38 15 9.161 15 8a7 7 0 1 0-7 7z"/></svg>`,
            circle: `<svg width="16" height="16" viewBox="0 0 16 16" fill="${color}"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/></svg>`,
            'paper-plane': `<svg width="16" height="16" viewBox="0 0 16 16" fill="${color}"><path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11zm-6.636 13.727L14.354 1.88 2.833 6.735l3.178 4.995 3.207-4.857z"/></svg>`,
            'info-circle': `<svg width="16" height="16" viewBox="0 0 16 16" fill="${color}"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg>`
        };
        return icons[iconName] || icons['circle'];
    },

    getEngineBarOffset() {
        return GM_getValue(STORAGE_KEYS.ENGINE_BAR_OFFSET, DEFAULT_CONFIG.ENGINE_BAR_OFFSET_DEFAULT);
    },

    setEngineBarOffset(value) {
        GM_setValue(STORAGE_KEYS.ENGINE_BAR_OFFSET, parseInt(value));
    }
};

// ===== DOM操作模块 =====
const domHandler = {
    injectStyle() {
        if (document.querySelector(`style#${CLASS_NAMES.ENGINE_CONTAINER}-style`)) return;
        const cssNode = document.createElement("style");
        cssNode.id = `${CLASS_NAMES.ENGINE_CONTAINER}-style`;
        cssNode.textContent = `
            .${CLASS_NAMES.ENGINE_CONTAINER} {
                display: flex;
                position: fixed;
                bottom: 0px;
                left: 2%;
                width: 96%;
                height: 36px;
                overflow: hidden;
                justify-content: center;
                align-items: center;
                z-index: 1000;
                background-color: rgba(255, 255, 255, 0);
                margin-top: 1px;
                transition: all 0.3s ease;
                transform: translateY(0);
                opacity: 1;
                overflow-y: hidden;
                overflow-x: visible;
            }
            .${CLASS_NAMES.ENGINE_CONTAINER}.hidden {
                transform: translateY(100%);
                opacity: 0;
            }
            .${CLASS_NAMES.ENGINE_DISPLAY} {
                display: flex;
                overflow-x: auto;
                overflow-y: hidden;
                white-space: nowrap;
                height: 100%;
                gap: 0px;
                flex-grow: 1;
                scrollbar-width: none;
                -ms-overflow-style: none;
            }
            .${CLASS_NAMES.ENGINE_DISPLAY}::-webkit-scrollbar {
                display: none;
            }
            .${CLASS_NAMES.ENGINE_BUTTON} {
                width: 55.5px;
                height: 32px;
                padding: 0;
                border: 1px solid #f0f0f0;
                border-radius: 8px;
                background-color: rgba(255, 255, 255, 1);
                color: transparent;
                font-size: 14px;
                cursor: pointer;
                margin: 2px;
                background-size: contain;
                background-repeat: no-repeat;
                background-position: center;
                backdrop-filter: blur(5px);
                box-shadow: 
                    1px 1px 1px rgba(0, 0, 0, 0.1),
                    0px 0px 0px rgba(255, 255, 255, 0.5),
                    6px 6px 10px rgba(0, 0, 0, 0.1) inset,
                    -6px -6px 10px rgba(255, 255, 255, 0) inset;
                transition: all 0.3s ease;
                flex-shrink: 0;
                overflow: hidden;
            }
            .${CLASS_NAMES.ENGINE_BUTTON}:focus {
                border: 2px dashed #2196F3;
                background-color: #f0f8ff;
            }
            .${CLASS_NAMES.ENGINE_BUTTON}.selected {
                border: 2px dashed #2196F3;
                background-color: #f0f8ff;
            }
            .${CLASS_NAMES.ENGINE_BUTTON}.${CLASS_NAMES.DRAGGING} {
                opacity: 0.5;
                transform: rotate(5deg);
            }
            .${CLASS_NAMES.ENGINE_BUTTON}.${CLASS_NAMES.DRAG_OVER} {
                border: 2px dashed #2196F3;
                background-color: #f0f8ff;
            }
            .${CLASS_NAMES.ENGINE_CARD} {
                transition: all 0.3s ease;
            }
            #${CLASS_NAMES.MANAGEMENT_PANEL} {
                animation: slideIn 0.3s ease;
            }
            #${CLASS_NAMES.HAMBURGER_MENU} {
                animation: slideInLeft 0.3s ease;
            }
            #${CLASS_NAMES.SEARCH_OVERLAY} {
                animation: fadeIn 0.3s ease;
            }
            @keyframes slideIn {
                from { opacity: 0; transform: translate(-50%, -48%); }
                to { opacity: 1; transform: translate(-50%, -50%); }
            }
            @keyframes slideInLeft {
                from { opacity: 0; transform: translateX(-10px); }
                to { opacity: 1; transform: translateX(0); }
            }
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
        `;
        document.head.appendChild(cssNode);
    },

    monitorInputFields() {
        const setupInputMonitoring = (input) => {
            if (input.dataset.monitored) return;
            input.dataset.monitored = true;
            const updateCurrentInput = (event) => {
                debounceUtils.debounce('input_monitor', () => {
                    appState.currentInput = event.target.value.trim();
                    sessionStorage.setItem(STORAGE_KEYS.CURRENT_INPUT, appState.currentInput);
                }, 500);
            };
            input.addEventListener('input', updateCurrentInput);
            input.addEventListener('change', updateCurrentInput);
        };
        document.querySelectorAll(DEFAULT_CONFIG.MONITORED_INPUT_SELECTOR).forEach(setupInputMonitoring);
        const observer = new MutationObserver(() => {
            document.querySelectorAll(`${DEFAULT_CONFIG.MONITORED_INPUT_SELECTOR}:not([data-monitored])`).forEach(setupInputMonitoring);
        });
        observer.observe(document.body, { childList: true, subtree: true });
    },

    updateSearchBoxPosition() {
        const punkJetBox = document.getElementById("punkjet-search-box");
        if (!punkJetBox) return;
        const offsetValue = utils.getEngineBarOffset();
        const shouldOffset = document.activeElement && (
            document.activeElement.tagName === 'INPUT' || 
            document.activeElement.tagName === 'TEXTAREA'
        ) && !appState.isInteractingWithEngineBar;
        punkJetBox.style.bottom = shouldOffset ? `${offsetValue}px` : '0px';
        punkJetBox.style.left = '2%';
        punkJetBox.style.width = '96%';
        punkJetBox.style.transform = appState.punkJetBoxVisible ? "translateY(0)" : "translateY(100%)";
        punkJetBox.style.opacity = appState.punkJetBoxVisible ? "1" : "0";
    },

    createEngineButton(item) {
        const button = document.createElement('button');
        button.className = CLASS_NAMES.ENGINE_BUTTON;
        button.style.backgroundImage = `url('data:image/svg+xml;utf8,${encodeURIComponent(item.svgCode)}')`;
        button.setAttribute("url", item.searchUrl);
        button.setAttribute("title", item.name);
        button.setAttribute("data-mark", item.mark);
        button.innerHTML = '';
        const handleMouseEnter = () => {
            button.style.backgroundColor = 'rgba(241, 241, 241, 1)';
            button.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
        };
        const handleMouseLeave = () => {
            button.style.backgroundColor = 'rgba(240, 240, 244, 1)';
            button.style.boxShadow = '1px 1px 1px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(255, 255, 255, 0.5), 6px 6px 10px rgba(0, 0, 0, 0.1) inset, -6px -6px 10px rgba(255, 255, 255, 0) inset';
        };
        button.addEventListener('mouseover', handleMouseEnter);
        button.addEventListener('mouseout', handleMouseLeave);
        button.addEventListener('touchstart', (e) => {
            appState.isInteractingWithEngineBar = true;
            e.stopPropagation();
        }, { passive: true });
        button.addEventListener('touchend', (e) => {
            setTimeout(() => appState.isInteractingWithEngineBar = false, 150);
            e.stopPropagation();
        }, { passive: true });
        button.addEventListener('click', (event) => {
            event.preventDefault();
            event.stopPropagation();
            const url = button.getAttribute("url");
            const keywords = utils.getSearchKeywords();
            const mark = button.getAttribute('data-mark');
            utils.recordEngineUsage(mark);
            if (url && keywords) {
                const finalUrl = url.replace('{keyword}', encodeURIComponent(keywords));
                window.open(finalUrl, '_blank');
                if (appState.searchOverlayVisible) searchOverlay.hideSearchOverlay();
            } else {
                searchOverlay.showSearchOverlay();
            }
        });
        return button;
    },

    createHamburgerButton() {
        const hamburgerButton = document.createElement('button');
        hamburgerButton.className = "engine-hamburger-button";
        hamburgerButton.innerHTML = utils.createInlineSVG('paper-plane');
        hamburgerButton.title = "菜单 (Alt+M)";
        hamburgerButton.style.cssText = `
            width: 32px;
            height: 32px;
            border: 1px solid #f0f0f0;
            border-radius: 7px;
            background-color: rgba(255, 255, 255, 1);
            box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1), 
                        0px 0px 0px rgba(255, 255, 255, 0.5), 
                        6px 6px 10px rgba(0, 0, 0, 0.1) inset, 
                        -6px -6px 10px rgba(255, 255, 255, 0) inset;
            cursor: pointer;
            margin: 3px;
            flex-shrink: 0;
            display: flex;
            justify-content: center; 
            align-items: center;      
            font-size: 16px;
            color: #999999;
            transition: all 0.3s ease;
            padding: 0;
            outline: none;
        `;
        hamburgerButton.addEventListener('mouseenter', () => {
            hamburgerButton.style.backgroundColor = 'rgba(241, 241, 241, 1)';
            hamburgerButton.style.transform = 'translateY(-2px)';
            hamburgerButton.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
        });
        hamburgerButton.addEventListener('mouseleave', () => {
            hamburgerButton.style.backgroundColor = 'white';
            hamburgerButton.style.transform = 'translateY(0)';
            hamburgerButton.style.boxShadow = '1px 1px 1px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(255, 255, 255, 0.5), 6px 6px 10px rgba(0, 0, 0, 0.1) inset, -6px -6px 10px rgba(255, 255, 255, 0) inset';
        });
        hamburgerButton.addEventListener('mousedown', (e) => e.preventDefault());
        hamburgerButton.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            hamburgerButton.blur();
            appState.hamburgerMenuOpen ? hamburgerMenu.hideHamburgerMenu() : hamburgerMenu.showHamburgerMenu();
        });
        return hamburgerButton;
    },

    addSearchBox() {
        try {
            if (utils.isEngineContainerExists()) return;
            const punkJetBox = document.createElement("div");
            punkJetBox.id = "punkjet-search-box";
            punkJetBox.className = CLASS_NAMES.ENGINE_CONTAINER;
            punkJetBox.style.cssText = `
                display: flex;
                z-index: 9999;
                position: fixed;
                transition: all 0.3s ease;
            `;
            this.updateSearchBoxPosition();
            const ulList = document.createElement('div');
            ulList.className = CLASS_NAMES.ENGINE_DISPLAY;
            ulList.style.cssText = `
                overflow-x: auto;
                overflow-y: hidden;
                display: flex;
                flex-grow: 1;
            `;
            const hamburgerButton = this.createHamburgerButton();
            punkJetBox.appendChild(hamburgerButton);
            const fragment = document.createDocumentFragment();
            const showList = GM_getValue(STORAGE_KEYS.PUNK_SETUP_SEARCH, DEFAULT_CONFIG.PUNK_DEFAULT_MARK).split('-');
            showList.forEach(showMark => {
                const item = appState.searchUrlMap.find(engine => engine.mark === showMark);
                if (item) fragment.appendChild(this.createEngineButton(item));
            });
            ulList.appendChild(fragment);
            punkJetBox.appendChild(ulList);
            document.body.appendChild(punkJetBox);
            appState.containerAdded = true;
            this.initScrollListener();
            window.addEventListener('resize', () => this.updateSearchBoxPosition());
            document.addEventListener('focusin', () => this.updateSearchBoxPosition());
            document.addEventListener('focusout', () => this.updateSearchBoxPosition());
            document.addEventListener('click', (e) => {
                if (!e.target.closest(`#${CLASS_NAMES.HAMBURGER_MENU}`) && !e.target.closest('.engine-hamburger-button')) {
                    hamburgerMenu.hideHamburgerMenu();
                }
            });
            setTimeout(() => this.enableDragAndSort(), DEFAULT_CONFIG.DRAG_SORT_DELAY);
        } catch (error) {
            console.error("添加搜索框失败:", error.message);
        }
    },

    enableDragAndSort() {
        const container = document.querySelector(`.${CLASS_NAMES.ENGINE_DISPLAY}`);
        if (!container) return;
        const buttons = container.querySelectorAll(`.${CLASS_NAMES.ENGINE_BUTTON}`);
        buttons.forEach(button => {
            button.draggable = true;
            button.addEventListener('dragstart', (e) => {
                button.classList.add(CLASS_NAMES.DRAGGING);
                e.dataTransfer.effectAllowed = 'move';
                e.dataTransfer.setData('text/plain', button.getAttribute('url'));
            });
            button.addEventListener('dragend', () => {
                button.classList.remove(CLASS_NAMES.DRAGGING);
                utils.saveButtonOrder();
            });
            button.addEventListener('dragover', (e) => e.preventDefault());
            button.addEventListener('dragenter', (e) => {
                e.preventDefault();
                button.classList.add(CLASS_NAMES.DRAG_OVER);
            });
            button.addEventListener('dragleave', () => {
                button.classList.remove(CLASS_NAMES.DRAG_OVER);
            });
            button.addEventListener('drop', (e) => {
                e.preventDefault();
                button.classList.remove(CLASS_NAMES.DRAG_OVER);
                const draggingButton = document.querySelector(`.${CLASS_NAMES.DRAGGING}`);
                if (draggingButton && draggingButton !== button) {
                    const buttonsArray = Array.from(container.querySelectorAll(`.${CLASS_NAMES.ENGINE_BUTTON}`));
                    const draggedIndex = buttonsArray.indexOf(draggingButton);
                    const targetIndex = buttonsArray.indexOf(button);
                    if (draggedIndex < targetIndex) {
                        container.insertBefore(draggingButton, button.nextSibling);
                    } else {
                        container.insertBefore(draggingButton, button);
                    }
                    utils.markUnsavedChanges();
                }
            });
        });
    },

    initScrollListener() {
        const passiveOptions = { passive: true };
        const handleScroll = () => {
            const st = window.pageYOffset || document.documentElement.scrollTop;
            const isInteractingWithSearchBar = document.querySelector(`.${CLASS_NAMES.ENGINE_CONTAINER}:hover`) !== null;
            if (isInteractingWithSearchBar) return;
            utils.clearAllTimeouts();
            appState.isScrolling = true;
            debounceUtils.debounce('scroll_hide', () => {
                if (st > appState.lastScrollTop && st > 50) {
                    this.hideSearchBox();
                } else {
                    this.showSearchBoxImmediately();
                }
                appState.lastScrollTop = st <= 0 ? 0 : st;
            }, 50);
            appState.scrollTimeout = setTimeout(() => {
                appState.isScrolling = false;
                this.showSearchBoxDelayed();
            }, DEFAULT_CONFIG.SCROLL_TIMEOUT_DURATION);
        };
        
        const handleTouchStart = (e) => {
            const isTouchingEngineBar = e.target.closest(`.${CLASS_NAMES.ENGINE_CONTAINER}`) !== null;
            if (isTouchingEngineBar) {
                appState.isInteractingWithEngineBar = true;
                if (e.target.closest(`.${CLASS_NAMES.ENGINE_BUTTON}`)) {
                    e.preventDefault();
                }
            } else {
                appState.isInteractingWithEngineBar = false;
            }
            appState.touchStartY = e.touches[0].clientY;
        };

        const handleTouchMove = (e) => {
            if (appState.isInteractingWithEngineBar) return;
            if (appState.touchStartY === null) return;
            if (e.target.closest(`.${CLASS_NAMES.ENGINE_CONTAINER}`)) return;
            const touchY = e.touches[0].clientY;
            const diff = appState.touchStartY - touchY;
            debounceUtils.throttle('touch_move', () => {
                if (Math.abs(diff) > 10) {
                    diff > 0 ? this.hideSearchBox() : this.showSearchBoxImmediately();
                }
            }, 100);
        };

        const handleTouchEnd = (e) => {
            if (appState.isInteractingWithEngineBar) {
                setTimeout(() => {
                    appState.isInteractingWithEngineBar = false;
                }, 100);
            }
            appState.touchStartY = null;
            this.showSearchBoxDelayed();
        };

        const handleWheel = (e) => {
            if (e.target.closest(`.${CLASS_NAMES.ENGINE_CONTAINER}`)) return;
            setTimeout(() => {
                const st = window.pageYOffset || document.documentElement.scrollTop;
                if (st > appState.lastScrollTop && st > 50) {
                    this.hideSearchBox();
                } else {
                    this.showSearchBoxImmediately();
                }
                appState.lastScrollTop = st <= 0 ? 0 : st;
                this.showSearchBoxDelayed();
            }, 10);
        };

        window.addEventListener('scroll', handleScroll, passiveOptions);
        window.addEventListener('wheel', handleWheel, passiveOptions);
        window.addEventListener('touchstart', handleTouchStart, passiveOptions);
        window.addEventListener('touchmove', handleTouchMove, passiveOptions);
        window.addEventListener('touchend', handleTouchEnd, passiveOptions);

        this.initEngineBarTouchHandling();

        document.addEventListener('click', (e) => {
            if (e.target.closest(`.${CLASS_NAMES.ENGINE_CONTAINER}`)) return;
            if (!e.target.closest(`#${CLASS_NAMES.MANAGEMENT_PANEL}`) &&
                !e.target.closest(`.${CLASS_NAMES.ENGINE_CONTAINER}`)) {
                this.showSearchBoxImmediately();
            }
        });

        document.addEventListener('focusin', (e) => {
            if (e.target.matches('input, textarea')) {
                this.showSearchBoxImmediately();
            }
        });

        document.addEventListener('mouseenter', (e) => {
            if (e.target.closest(`.${CLASS_NAMES.ENGINE_CONTAINER}`) ||
                e.target.closest(`.${CLASS_NAMES.ENGINE_BUTTON}`)) {
                this.showSearchBoxImmediately();
            }
        }, true);

        const stopPropagationHandler = (e) => {
            if (e.target.closest(`.${CLASS_NAMES.ENGINE_CONTAINER}`)) {
                e.stopPropagation();
            }
        };
        document.addEventListener('wheel', stopPropagationHandler, passiveOptions);
        document.addEventListener('touchmove', stopPropagationHandler, passiveOptions);
    },

    initEngineBarTouchHandling() {
        const engineContainer = document.querySelector(`.${CLASS_NAMES.ENGINE_CONTAINER}`);
        if (!engineContainer) return;
        const preventPropagation = (e) => {
            e.stopPropagation();
        };
        const touchEvents = ['touchstart', 'touchmove', 'touchend', 'touchcancel'];
        touchEvents.forEach(eventType => {
            engineContainer.addEventListener(eventType, preventPropagation, { passive: true });
            const buttons = engineContainer.querySelectorAll(`.${CLASS_NAMES.ENGINE_BUTTON}`);
            buttons.forEach(button => {
                button.addEventListener(eventType, preventPropagation, { passive: true });
            });
        });
        engineContainer.addEventListener('touchstart', (e) => {
            if (e.target.closest(`.${CLASS_NAMES.ENGINE_BUTTON}`)) {
                appState.isInteractingWithEngineBar = true;
            }
        }, { passive: true });
        engineContainer.addEventListener('touchend', () => {
            setTimeout(() => {
                appState.isInteractingWithEngineBar = false;
            }, 150);
        }, { passive: true });
    },

    showSearchBoxImmediately() {
        utils.clearAllTimeouts();
        if (!appState.punkJetBoxVisible) {
            appState.punkJetBoxVisible = true;
            this.updateSearchBoxPosition();
        }
    },

    showSearchBoxDelayed() {
        utils.clearAllTimeouts();
        appState.hideTimeout = setTimeout(() => {
            this.showSearchBoxImmediately();
        }, DEFAULT_CONFIG.SHOW_SEARCH_BOX_DELAY);
    },

    hideSearchBox() {
        if (appState.punkJetBoxVisible) {
            appState.punkJetBoxVisible = false;
            this.updateSearchBoxPosition();
        }
    },

    hideHamburgerMenu() {
        hamburgerMenu.hideHamburgerMenu();
    },

    showHamburgerMenu() {
        hamburgerMenu.showHamburgerMenu();
    },

    toggleHamburgerMenu() {
        hamburgerMenu.toggleHamburgerMenu();
    }
};

// ===== 搜索遮罩层模块 =====
const searchOverlay = {
    createSearchOverlay() {
        let overlay = document.getElementById(CLASS_NAMES.SEARCH_OVERLAY);
        if (overlay) return overlay;
        overlay = document.createElement("div");
        overlay.id = CLASS_NAMES.SEARCH_OVERLAY;
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(255, 255, 255, 0.98);
            z-index: 9998;
            display: none;
            flex-direction: column;
            backdrop-filter: blur(10px);
            overflow: hidden;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        `;
        const scrollContainer = document.createElement("div");
        scrollContainer.style.cssText = `
            width: 100%;
            height: 100%;
            overflow-y: auto;
            overflow-x: hidden;
            -webkit-overflow-scrolling: touch;
            padding: 10px 0;
            box-sizing: border-box;
        `;
        const searchContainer = document.createElement("div");
        searchContainer.style.cssText = `
            width: 95%;
            max-width: 900px;
            min-height: min-content;
            background: linear-gradient(145deg, #f8f9fa, #ffffff);
            border-radius: 20px;
            padding: 25px 20px;
            box-shadow: 
                0 10px 40px rgba(0, 0, 0, 0.1),
                0 2px 10px rgba(0, 0, 0, 0.05);
            position: relative;
            border: 1px solid rgba(255, 255, 255, 0.5);
            margin: 10px auto;
            box-sizing: border-box;
        `;
        const updateSearchContainerStyle = () => {
            const isMobile = window.innerWidth <= 768;
            if (isMobile) {
                searchContainer.style.width = '92%';
                searchContainer.style.padding = '20px 15px';
                searchContainer.style.borderRadius = '16px';
                searchContainer.style.margin = '5px auto';
            } else {
                searchContainer.style.width = '95%';
                searchContainer.style.padding = '25px 20px';
                searchContainer.style.borderRadius = '20px';
                searchContainer.style.margin = '10px auto';
            }
        };
        updateSearchContainerStyle();
        window.addEventListener('resize', updateSearchContainerStyle);
        const closeBtn = document.createElement("button");
        closeBtn.innerHTML = utils.createInlineSVG('times');
        closeBtn.setAttribute('aria-label', '关闭搜索');
        closeBtn.style.cssText = `
            position: absolute;
            top: 16px;
            right: 16px;
            background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
            border: none;
            font-size: 18px;
            color: #64748b;
            cursor: pointer;
            padding: 3px;
            border-radius: 50%;
            width: 24px;
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 
                0 4px 12px rgba(0, 0, 0, 0.1),
                0 2px 6px rgba(0, 0, 0, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.8);
            z-index: 1;
            backdrop-filter: blur(10px);
        `;
        closeBtn.addEventListener('mouseenter', () => {
            closeBtn.style.background = 'linear-gradient(135deg, #ff4757 0%, #ff3742 100%)';
            closeBtn.style.color = 'white';
            closeBtn.style.transform = 'scale(1.1) rotate(90deg)';
            closeBtn.style.boxShadow = '0 8px 25px rgba(255, 71, 87, 0.4)';
        });
        closeBtn.addEventListener('mouseleave', () => {
            closeBtn.style.background = 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)';
            closeBtn.style.color = '#64748b';
            closeBtn.style.transform = 'scale(1) rotate(0deg)';
            closeBtn.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1), 0 2px 6px rgba(0, 0, 0, 0.05)';
        });
        closeBtn.addEventListener('click', () => this.hideSearchOverlay());
        const title = document.createElement("h2");
        title.innerHTML = utils.createInlineSVG('search') + ' 快捷搜索 (Alt+S)';
        title.style.cssText = `
            margin: 0 0 20px 0;
            color: #2c3e50;
            text-align: center;
            font-size: clamp(18px, 4vw, 24px);
            text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            flex-wrap: wrap;
            word-break: break-word;
        `;
        const searchInput = document.createElement("input");
        searchInput.type = "text";
        searchInput.placeholder = "输入关键词或网址...";
        searchInput.id = "overlay-search-input";
        searchInput.setAttribute('autocomplete', 'off');
        searchInput.setAttribute('autocorrect', 'off');
        searchInput.setAttribute('autocapitalize', 'off');
        searchInput.setAttribute('spellcheck', 'false');
        searchInput.style.cssText = `
            width: 100%;
            padding: 20px 24px; 
            box-sizing: border-box;
            background: linear-gradient(135deg, #ffffff 0%, #fafbfc 100%);
            border-radius: 16px;
            font-size: 18px;
            color: #1e293b;
            outline: none;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 
                inset 3px 3px 6px rgba(0, 0, 0, 0.04),
                inset -3px -3px 6px rgba(255, 255, 255, 0.8),
                0 8px 30px rgba(0, 0, 0, 0.08);
            border: 2px solid transparent; 
            margin-bottom: 28px;
            -webkit-appearance: none;
            font-weight: 500;
            line-height: 1.5;
            min-height: 64px; 
        `;
        if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
            searchInput.style.fontSize = '16px';
            searchInput.style.padding = '20px 22px'; 
            searchInput.style.minHeight = '50px';
        }
        searchInput.addEventListener('focus', () => {
            searchInput.style.boxShadow = 
                'inset 3px 3px 6px rgba(0, 0, 0, 0.06), inset -3px -3px 6px rgba(255, 255, 255, 0.9), 0 12px 40px rgba(99, 102, 241, 0.15)'; 
            searchInput.style.borderColor = 'transparent'; 
            searchInput.style.background = 'linear-gradient(135deg, #ffffff 0%, #fefefe 100%)';
            searchInput.style.transform = 'translateY(-2px)';
        });
        searchInput.addEventListener('blur', () => {
            searchInput.style.boxShadow = 
                'inset 3px 3px 6px rgba(0, 0, 0, 0.04), inset -3px -3px 6px rgba(255, 255, 255, 0.8), 0 8px 30px rgba(0, 0, 0, 0.08)';
            searchInput.style.borderColor = 'transparent'; 
            searchInput.style.transform = 'translateY(0)';
        });
        const navigationSection = document.createElement("div");
        navigationSection.style.cssText = `margin-top: 10px;`;
        const navTitle = document.createElement("h3");
        navTitle.innerHTML = utils.createInlineSVG('globe') + ' 常用网站导航';
        navTitle.style.cssText = `
            color: #2c3e50;
            margin-bottom: 15px;
            font-size: clamp(16px, 3.5vw, 18px);
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            border-bottom: 2px solid #3498db;
            padding-bottom: 8px;
            text-align: center;
            flex-wrap: wrap;
        `;
        navigationSection.appendChild(navTitle);
        const categoriesContainer = document.createElement("div");
        categoriesContainer.style.cssText = `
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 16px;
            margin-top: 10px;
        `;
        const updateGridLayout = () => {
            const width = window.innerWidth;
            if (width <= 480) {
                categoriesContainer.style.gridTemplateColumns = '1fr';
                categoriesContainer.style.gap = '12px';
            } else if (width <= 768) {
                categoriesContainer.style.gridTemplateColumns = 'repeat(auto-fit, minmax(250px, 1fr))';
                categoriesContainer.style.gap = '14px';
            } else {
                categoriesContainer.style.gridTemplateColumns = 'repeat(auto-fit, minmax(280px, 1fr))';
                categoriesContainer.style.gap = '16px';
            }
        };
        updateGridLayout();
        window.addEventListener('resize', updateGridLayout);
        const websiteCategories = [
            {
                title: "🔧 逆向论坛区",
                sites: [
                    { name: "MT论坛", url: "https://bbs.binmt.cc" },
                    { name: "吾爱破解", url: "https://www.52pojie.cn" },
                    { name: "看雪论坛", url: "https://bbs.pediy.com" },            
                    { name: "飘云阁", url: "https://www.chinapyg.com" },
                    { name: "卡饭论坛", url: "https://www.kafan.cn" },
                    { name: "绿盟科技社区", url: "https://www.nsfocus.net" },
                    { name: "乌云漏洞平台", url: "https://wooyun.x10sec.org" },
                    { name: "渗透测试论坛", url: "https://www.hetianlab.com" },
                    { name: "XDA Developers", url: "https://forum.xda-developers.com" },
                    { name: "Reddit ReverseEngineering", url: "https://www.reddit.com/r/ReverseEngineering" },
                    { name: "CrackWatch", url: "https://www.reddit.com/r/CrackWatch" }
                ]
            },
            {
                title: "💎 软件资源区",
                sites: [  
                    { name: "GETMODS", url: "https://getmodsapk.com/" },
                    { name: "APKdone", url: "https://apkdone.com/" },
                    { name: "LITEAPKS", url: "https://liteapks.com/" },
                    { name: "APKMODY", url: "https://apkmody.com/" },
                    { name: "423Down", url: "https://www.423down.com" },
                    { name: "果核剥壳", url: "https://www.ghxi.com" },
                    { name: "大眼仔旭", url: "https://www.dayanzai.me" },
                    { name: "ZD423", url: "https://www.zdfans.com" },         
                    { name: "软件缘", url: "https://www.appcgn.com" },
                    { name: "小众软件", url: "https://www.appinn.com" },         
                    { name: "Rutor", url: "http://rutor.info" },
                    { name: "RuTracker", url: "https://rutracker.org" }
                ]
            },
            {
                title: "🤖 AI工具",
                sites: [
                    { name: "ChatGPT", url: "https://chat.openai.com" },
                    { name: "deepseek", url: "https://www.deepseek.com/" },
                    { name: "Claude", url: "https://claude.ai" },
                    { name: "文心一言", url: "https://yiyan.baidu.com" },
                    { name: "豆包", url: "https://www.doubao.com/chat/" },
                    { name: "讯飞星火", url: "https://xinghuo.xfyun.cn" },
                    { name: "智谱清言", url: "https://chatglm.cn" },
                    { name: "Midjourney", url: "https://www.midjourney.com" },
                    { name: "Stable Diffusion", url: "https://stability.ai" },
                    { name: "Notion AI", url: "https://www.notion.so" }
                ]
            },
            {
                title: "🎬 影视区",
                sites: [
                    { name: "网飞猫", url: "https://www.ncat21.com/" },
                    { name: "毒舌电影", url: "https://www.ncat21.com/" },
                    { name: "诺影导航", url: "https://nuoin.com/" },
                    { name: "哔哩哔哩", url: "https://www.bilibili.com" },
                    { name: "YouTube", url: "https://www.youtube.com" },
                    { name: "Netflix", url: "https://www.netflix.com" },
                    { name: "低端影视", url: "https://ddys.tv" },
                    { name: "NT动漫", url: "https://ntdm8.com/" },
                    { name: "AGE动漫", url: "https://m.agedm.io/#/" },
                    { name: "樱花动漫", url: "https://www.yhdm.io" },
                    { name: "樱花动漫2", url: "https://www.295yhw.com/" },
                    { name: "腾讯视频", url: "https://v.qq.com" },
                    { name: "爱奇艺", url: "https://www.iqiyi.com" },
                    { name: "芒果TV", url: "https://www.mgtv.com" },
                    { name: "1905电影网", url: "https://www.1905.com" }                     
                ]
            },
            {
                title: "🛠️ 工具区",
                sites: [
                    { name: "ProcessOn", url: "https://www.processon.com" },
                    { name: "SmallPDF", url: "https://smallpdf.com" },
                    { name: "iLovePDF", url: "https://www.ilovepdf.com" },
                    { name: "TinyPNG", url: "https://tinypng.com" },
                    { name: "RemoveBG", url: "https://www.remove.bg" },
                    { name: "Canva", url: "https://www.canva.com" },
                    { name: "草料二维码", url: "https://cli.im" },
                    { name: "石墨文档", url: "https://shimo.im" },
                    { name: "腾讯文档", url: "https://docs.qq.com" },
                    { name: "讯飞听见", url: "https://www.iflyrec.com" },
                    { name: "格式工厂在线版", url: "https://www.pcgeshi.com" },
                    { name: "Figma", url: "https://www.figma.com" },
                    { name: "Excalidraw", url: "https://excalidraw.com" },
                    { name: "Photopea", url: "https://www.photopea.com" }
                ]
            },
            {
                title: "📚 学习资源",
                sites: [
                    { name: "知乎", url: "https://www.zhihu.com" },
                    { name: "豆瓣", url: "https://www.douban.com" },
                    { name: "慕课网", url: "https://www.imooc.com" },
                    { name: "B站学习区", url: "https://www.bilibili.com" },
                    { name: "Coursera", url: "https://www.coursera.org" },
                    { name: "网易云课堂", url: "https://study.163.com" },
                    { name: "腾讯课堂", url: "https://ke.qq.com" },
                    { name: "可汗学院", url: "https://www.khanacademy.org" },
                    { name: "中国大学MOOC", url: "https://www.icourse163.org" },
                    { name: "知乎大学", url: "https://www.zhihu.com/university" },
                    { name: "豆包文库", url: "https://www.docin.com" },
                    { name: "Library Genesis", url: "http://libgen.is" },
                    { name: "Z-Library", url: "https://z-lib.is" },
                    { name: "Sci-Hub", url: "https://sci-hub.se" }
                ]
            },
            {
                title: "🛒 生活购物",
                sites: [
                    { name: "淘宝", url: "https://www.taobao.com" },
                    { name: "京东", url: "https://www.jd.com" },
                    { name: "拼多多", url: "https://www.pinduoduo.com" },
                    { name: "美团", url: "https://www.meituan.com" },
                    { name: "饿了么", url: "https://www.ele.me" },
                    { name: "苏宁易购", url: "https://www.suning.com" },
                    { name: "唯品会", url: "https://www.vip.com" },          
                    { name: "闲鱼", url: "https://2.taobao.com" },
                    { name: "盒马鲜生", url: "https://www.hemaxiansheng.com" },
                    { name: "每日优鲜", url: "https://www.missfresh.cn" },
                    { name: "亚马逊", url: "https://www.amazon.cn" },
                    { name: "当当网", url: "https://www.dangdang.com" },
                    { name: "考拉海购", url: "https://www.kaola.com" }
                ]
            },
            {
                title: "📰 新闻资讯",
                sites: [
                    { name: "微博", url: "https://weibo.com" },
                    { name: "今日头条", url: "https://www.toutiao.com" },
                    { name: "澎湃新闻", url: "https://www.thepaper.cn" },
                    { name: "虎嗅", url: "https://www.huxiu.com" },
                    { name: "36氪", url: "https://www.36kr.com" },
                    { name: "人民日报网", url: "https://www.people.com.cn" },
                    { name: "新华网", url: "https://www.xinhuanet.com" },
                    { name: "央视新闻", url: "https://news.cctv.com" },
                    { name: "财新网", url: "https://www.caixin.com" },
                    { name: "第一财经", url: "https://www.yicai.com" },
                    { name: "界面新闻", url: "https://www.jiemian.com" },
                    { name: "华尔街见闻", url: "https://wallstreetcn.com" },
                    { name: "雪球", url: "https://xueqiu.com" }
                ]
            },
            {
                title: "🎵 音乐娱乐",
                sites: [
                    { name: "网易云音乐", url: "https://music.163.com" },
                    { name: "QQ音乐", url: "https://y.qq.com" },
                    { name: "酷狗音乐", url: "https://www.kugou.com" },
                    { name: "Spotify", url: "https://open.spotify.com" },
                    { name: "喜马拉雅", url: "https://www.ximalaya.com" },
                    { name: "酷我音乐", url: "https://www.kuwo.cn" },
                    { name: "咪咕音乐", url: "https://music.migu.cn" },
                    { name: "荔枝FM", url: "https://www.lizhi.fm" },
                    { name: "蜻蜓FM", url: "https://www.qingting.fm" },
                    { name: "网易云音乐播客", url: "https://music.163.com/podcast" },
                    { name: "Bandcamp（独立音乐）", url: "https://bandcamp.com" },
                    { name: "SoundCloud", url: "https://soundcloud.com" },
                    { name: "Audius", url: "https://audius.co" }
                ]
            },
            {
                title: "💻 技术社区",
                sites: [
                    { name: "V2EX", url: "https://www.v2ex.com" },
                    { name: "掘金", url: "https://juejin.cn" },
                    { name: "SegmentFault", url: "https://segmentfault.com" },
                    { name: "CSDN", url: "https://www.csdn.net" },
                    { name: "开源中国", url: "https://www.oschina.net" },
                    { name: "GitHub", url: "https://github.com" },
                    { name: "GitLab", url: "https://about.gitlab.com" },
                    { name: "Stack Overflow", url: "https://stackoverflow.com" },
                    { name: "华为开发者联盟", url: "https://developer.huawei.com" },
                    { name: "小米开发者平台", url: "https://dev.mi.com" },
                    { name: "阿里开发者社区", url: "https://developer.aliyun.com" },
                    { name: "腾讯云开发者社区", url: "https://cloud.tencent.com/developer" },
                    { name: "字节跳动技术团队", url: "https://techblog.bytedance.com" }
                ]
            },
            {
                title: "🎮 游戏区",
                sites: [
                    { name: "Steam", url: "https://store.steampowered.com" },
                    { name: "Epic Games", url: "https://www.epicgames.com" },
                    { name: "GOG", url: "https://www.gog.com" },
                    { name: "3DMGAME", url: "https://www.3dmgame.com" },
                    { name: "游民星空", url: "https://www.gamersky.com" },
                    { name: "游侠网", url: "https://www.ali213.net" },
                    { name: "NGA玩家社区", url: "https://bbs.nga.cn" },
                    { name: "TapTap", url: "https://www.taptap.cn" },
                    { name: "好游快爆", url: "https://www.3839.com" },
                    { name: "itch.io", url: "https://itch.io" },
                    { name: "GameJolt", url: "https://gamejolt.com" }
                ]
            },
            {
                title: "🔐 网络安全",
                sites: [
                    { name: "FreeBuf", url: "https://www.freebuf.com" },
                    { name: "安全客", url: "https://www.anquanke.com" },
                    { name: "SecWiki", url: "https://www.sec-wiki.com" },
                    { name: "HackerOne", url: "https://www.hackerone.com" },
                    { name: "Bugcrowd", url: "https://www.bugcrowd.com" },
                    { name: "Exploit Database", url: "https://www.exploit-db.com" },
                    { name: "Metasploit", url: "https://www.metasploit.com" },
                    { name: "Kali Linux", url: "https://www.kali.org" },
                    { name: "OWASP", url: "https://owasp.org" },
                    { name: "SANS Institute", url: "https://www.sans.org" }
                ]
            },
            {
                title: "📱 应用下载",
                sites: [
                    { name: "Google Play", url: "https://play.google.com" },
                    { name: "APKPure", url: "https://apkpure.com" },
                    { name: "APKMirror", url: "https://www.apkmirror.com" },
                    { name: "F-Droid", url: "https://f-droid.org" },
                    { name: "Aptoide", url: "https://www.aptoide.com" },
                    { name: "豌豆荚", url: "https://www.wandoujia.com" },
                    { name: "应用宝", url: "https://sj.qq.com" },
                    { name: "小米应用商店", url: "https://app.mi.com" },
                    { name: "华为应用市场", url: "https://appgallery.huawei.com" },
                    { name: "酷安", url: "https://www.coolapk.com" }
                ]
            },
            {
                title: "🌐 开发者工具",
                sites: [
                    { name: "CodePen", url: "https://codepen.io" },
                    { name: "JSFiddle", url: "https://jsfiddle.net" },
                    { name: "Replit", url: "https://replit.com" },
                    { name: "Glitch", url: "https://glitch.com" },
                    { name: "CodeSandbox", url: "https://codesandbox.io" },
                    { name: "Postman", url: "https://www.postman.com" },
                    { name: "Swagger", url: "https://swagger.io" },
                    { name: "JSON Formatter", url: "https://jsonformatter.org" },
                    { name: "RegExr", url: "https://regexr.com" },
                    { name: "DevDocs", url: "https://devdocs.io" }
                ]
            },
            {
                title: "🎨 设计资源",
                sites: [
                    { name: "Dribbble", url: "https://dribbble.com" },
                    { name: "Behance", url: "https://www.behance.net" },
                    { name: "UI中国", url: "https://www.ui.cn" },
                    { name: "站酷", url: "https://www.zcool.com.cn" },
                    { name: "花瓣网", url: "https://huaban.com" },
                    { name: "Pinterest", url: "https://www.pinterest.com" },
                    { name: "Unsplash", url: "https://unsplash.com" },
                    { name: "Pexels", url: "https://www.pexels.com" },
                    { name: "Iconfont", url: "https://www.iconfont.cn" },
                    { name: "Flaticon", url: "https://www.flaticon.com" }
                ]
            },
            {
                title: "📊 数据资源",
                sites: [
                    { name: "Kaggle", url: "https://www.kaggle.com" },
                    { name: "天池大数据", url: "https://tianchi.aliyun.com" },
                    { name: "和鲸社区", url: "https://www.kesci.com" },
                    { name: "Data.gov", url: "https://www.data.gov" },
                    { name: "Google Dataset", url: "https://datasetsearch.research.google.com" },
                    { name: "UCI数据集", url: "https://archive.ics.uci.edu" },
                    { name: "国家统计局", url: "https://www.stats.gov.cn" },
                    { name: "世界银行数据", url: "https://data.worldbank.org" },
                    { name: "GitHub数据集", url: "https://github.com/awesomedata/awesome-public-datasets" }
                ]
            }
        ];
        websiteCategories.forEach(category => {
            const categoryElement = document.createElement("div");
            categoryElement.style.cssText = `
                background: rgba(255, 255, 255, 0.9);
                border-radius: 12px;
                padding: 16px;
                box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
                border: 1px solid rgba(0, 0, 0, 0.06);
                transition: transform 0.2s ease;
                break-inside: avoid;
            `;
            categoryElement.addEventListener('mouseenter', () => {
                categoryElement.style.transform = 'translateY(-2px)';
                categoryElement.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.12)';
            });
            categoryElement.addEventListener('mouseleave', () => {
                categoryElement.style.transform = 'translateY(0)';
                categoryElement.style.boxShadow = '0 2px 12px rgba(0, 0, 0, 0.08)';
            });
            const categoryTitle = document.createElement("h4");
            categoryTitle.textContent = category.title;
            categoryTitle.style.cssText = `
                margin: 0 0 12px 0;
                color: #2c3e50;
                font-size: 14px;
                font-weight: 600;
                border-bottom: 1px solid #ecf0f1;
                padding-bottom: 8px;
                word-break: break-word;
            `;
            const sitesContainer = document.createElement("div");
            sitesContainer.style.cssText = `
                display: flex;
                flex-wrap: wrap;
                gap: 6px;
            `;
            category.sites.forEach(site => {
                const siteLink = document.createElement("a");
                siteLink.textContent = site.name;
                siteLink.href = site.url;
                siteLink.target = "_blank";
                siteLink.rel = "noopener noreferrer";
                siteLink.style.cssText = `
                    display: inline-block;
                    padding: 6px 10px;
                    background: linear-gradient(145deg, #f8f9fa, #ffffff);
                    border: 1px solid #e9ecef;
                    border-radius: 6px;
                    text-decoration: none;
                    color: #495057;
                    font-size: 12px;
                    transition: all 0.2s ease;
                    cursor: pointer;
                    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    max-width: 100%;
                    flex-shrink: 0;
                `;
                siteLink.addEventListener('mouseenter', () => {
                    siteLink.style.background = 'linear-gradient(145deg, #3498db, #2980b9)';
                    siteLink.style.color = 'white';
                    siteLink.style.transform = 'translateY(-1px)';
                    siteLink.style.boxShadow = '0 3px 8px rgba(0, 0, 0, 0.15)';
                    siteLink.style.borderColor = '#2980b9';
                });
                siteLink.addEventListener('mouseleave', () => {
                    siteLink.style.background = 'linear-gradient(145deg, #f8f9fa, #ffffff)';
                    siteLink.style.color = '#495057';
                    siteLink.style.transform = 'translateY(0)';
                    siteLink.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.08)';
                    siteLink.style.borderColor = '#e9ecef';
                });
                siteLink.addEventListener('touchstart', () => {
                    siteLink.style.background = 'linear-gradient(145deg, #3498db, #2980b9)';
                    siteLink.style.color = 'white';
                }, { passive: true });
                sitesContainer.appendChild(siteLink);
            });
            categoryElement.appendChild(categoryTitle);
            categoryElement.appendChild(sitesContainer);
            categoriesContainer.appendChild(categoryElement);
        });
        navigationSection.appendChild(categoriesContainer);
        searchContainer.appendChild(closeBtn);
        searchContainer.appendChild(title);
        searchContainer.appendChild(searchInput);
        searchContainer.appendChild(navigationSection);
        scrollContainer.appendChild(searchContainer);
        overlay.appendChild(scrollContainer);
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.performOverlaySearch();
            }
        });
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                this.hideSearchOverlay();
            }
        });
        searchContainer.addEventListener('click', (e) => {
            e.stopPropagation();
        });
        document.body.appendChild(overlay);
        return overlay;
    },

    showSearchOverlay() {
        const overlay = this.createSearchOverlay();
        const searchInput = document.getElementById("overlay-search-input");
        overlay.style.display = 'flex';
        appState.searchOverlayVisible = true;
        accessibility.trapFocus(overlay);
        setTimeout(() => {
            searchInput.focus();
            searchInput.select();
        }, 100);
        domHandler.hideHamburgerMenu();
        document.body.style.overflow = 'hidden';
    },

    hideSearchOverlay() {
        const overlay = document.getElementById(CLASS_NAMES.SEARCH_OVERLAY);
        if (overlay) {
            overlay.style.display = 'none';
            appState.searchOverlayVisible = false;
            accessibility.removeFocusTrap(overlay);
            document.body.style.overflow = '';
        }
    },

    performOverlaySearch() {
        const searchInput = document.getElementById("overlay-search-input");
        const query = searchInput.value.trim();
        if (!query) {
            searchInput.focus();
            return;
        }
        if (utils.isValidUrl(query)) {
            window.open(query, '_blank');
            this.hideSearchOverlay();
            return;
        }
        const showList = GM_getValue(STORAGE_KEYS.PUNK_SETUP_SEARCH, DEFAULT_CONFIG.PUNK_DEFAULT_MARK).split('-');
        if (showList.length > 0) {
            const firstEngine = appState.searchUrlMap.find(item => item.mark === showList[0]);
            if (firstEngine) {
                const searchUrl = firstEngine.searchUrl.replace('{keyword}', encodeURIComponent(query));
                window.open(searchUrl, '_blank');
                this.hideSearchOverlay();
            }
        }
    }
};

// ===== 汉堡菜单模块 =====
const hamburgerMenu = {
    sortMode: GM_getValue('engine_sort_mode', 'default'),
    
    createHamburgerMenu() {
        let menu = document.getElementById(CLASS_NAMES.HAMBURGER_MENU);
        if (menu) return menu;
        menu = document.createElement("div");
        menu.id = CLASS_NAMES.HAMBURGER_MENU;
        menu.style.cssText = `
            position: fixed;
            bottom: 50px;
            left: 20px;
            background: rgba(255, 255, 255, 0.95);
            border-radius: 15px;
            box-shadow: 0 5px 25px rgba(0, 0, 0, 0.15);
            backdrop-filter: blur(5px);
            z-index: 10001;
            display: none;
            flex-direction: column;
            padding: 10px;
            gap: 5px;
            min-width: 180px;
            border: 1px solid rgba(255, 255, 255, 0.2);
        `;
        const menuItems = [
            {
                icon: 'search',
                text: '快捷搜索 (Alt+S)',
                action: () => searchOverlay.showSearchOverlay()
            },
            {
                icon: 'cog',
                text: '引擎管理 (Alt+E)',
                action: () => managementPanel.showManagementPanel()
            },
            {
                icon: 'sort',
                text: '引擎排序设置',
                action: (e) => this.showSortContextMenu(e)
            }
        ];
        menuItems.forEach(item => {
            const menuItem = document.createElement("button");
            menuItem.innerHTML = utils.createInlineSVG(item.icon) + ` ${item.text}`;
            menuItem.style.cssText = `
                display: flex;
                align-items: center;
                gap: 10px;
                padding: 12px 15px;
                border: none;
                background: none;
                border-radius: 8px;
                cursor: pointer;
                font-size: 14px;
                color: #2c3e50;
                transition: all 0.3s ease;
                text-align: left;
                outline: none;
            `;
            menuItem.addEventListener('mouseenter', () => {
                menuItem.style.background = 'rgba(52, 152, 219, 0.1)';
            });
            menuItem.addEventListener('mouseleave', () => {
                menuItem.style.background = 'none';
            });
            menuItem.addEventListener('mousedown', (e) => {
                e.preventDefault();
            });
            menuItem.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                menuItem.blur();
                item.action(e);
                if (item.icon !== 'sort') {
                    this.hideHamburgerMenu();
                }
            });
            menu.appendChild(menuItem);
        });
        const setOffsetButton = document.createElement('button');
        setOffsetButton.innerHTML = utils.createInlineSVG('sog') + ' 设置底部偏移';
        setOffsetButton.style.cssText = `
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 12px 15px;
            border: none;
            background: none;
            border-radius: 8px;
            cursor: pointer;
            font-size: 14px;
            color: #2c3e50;
            transition: all 0.3s ease;
            text-align: left;
            margin-top: 5px;
            outline: none;
        `;
        setOffsetButton.addEventListener('mouseenter', () => {
            setOffsetButton.style.background = 'rgba(52, 152, 219, 0.1)';
        });
        setOffsetButton.addEventListener('mouseleave', () => {
            setOffsetButton.style.background = 'none';
        });
        setOffsetButton.addEventListener('mousedown', (e) => {
            e.preventDefault();
        });
        setOffsetButton.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            setOffsetButton.blur();
            const currentValue = utils.getEngineBarOffset();
            const userValue = prompt(`请输入搜索栏在输入法弹出时的底部偏移（单位px）：`, currentValue);
            if (userValue !== null && !isNaN(userValue)) {
                utils.setEngineBarOffset(userValue);
                alert(`偏移值已设置为 ${userValue}px`);
                domHandler.updateSearchBoxPosition();
            }
            this.hideHamburgerMenu();
        });
        menu.appendChild(setOffsetButton);
        document.body.appendChild(menu);
        return menu;
    },
    
    showSortContextMenu(event) {
        this.removeSortContextMenu();
        const contextMenu = document.createElement('div');
        contextMenu.id = 'sort-context-menu';
        contextMenu.style.cssText = `
            position: absolute;
        top: 0;  
        left: 160px;      
        background: white;
        border-radius: 8px;
        box-shadow: 0 3px 15px rgba(0,0,0,0.2);
        padding: 5px 0;
        min-width: 150px;
        z-index: 10002;
        border: 1px solid #eee;
    `;
        const sortOptions = [
            {
                text: '默认模式',
                mode: 'default',
                description: '保持拖拽排序'
            },
            {
                text: '智能排序',
                mode: 'smart',
                description: '按使用频率自动排列'
            },
            {
                text: '关闭',
                mode: 'close',
                description: ''
            }
        ];
        sortOptions.forEach(option => {
            const optionItem = document.createElement('button');
            optionItem.style.cssText = `
                width: 100%;
                text-align: left;
                padding: 8px 15px;
                border: none;
                background: none;
                cursor: pointer;
                font-size: 13px;
                display: flex;
                align-items: center;
                gap: 8px;
            `;
            if (option.mode !== 'close') {
                const checkIcon = document.createElement('span');
                checkIcon.innerHTML = this.sortMode === option.mode 
                    ? utils.createInlineSVG('check', '#27ae60') 
                    : '<span style="width:16px;display:inline-block;"></span>';
                optionItem.appendChild(checkIcon);
                const textContainer = document.createElement('div');
                textContainer.style.cssText = `display: flex; flex-direction: column;`;
                const mainText = document.createElement('span');
                mainText.textContent = option.text;
                mainText.style.fontWeight = '500';
                const descText = document.createElement('span');
                descText.textContent = option.description;
                descText.style.fontSize = '11px';
                descText.style.color = '#7f8c8d';
                textContainer.appendChild(mainText);
                textContainer.appendChild(descText);
                optionItem.appendChild(textContainer);
            } else {
                optionItem.textContent = option.text;
                optionItem.style.justifyContent = 'center';
                optionItem.style.color = '#e74c3c';
                optionItem.style.marginTop = '5px';
                optionItem.style.borderTop = '1px solid #eee';
            }
            optionItem.addEventListener('click', () => {
                if (option.mode === 'close') {
                    this.removeSortContextMenu();
                    return;
                }
                this.sortMode = option.mode;
                GM_setValue('engine_sort_mode', option.mode);
                this.applyEngineSort();
                this.removeSortContextMenu();
                this.showHamburgerMenu();
            });
            optionItem.addEventListener('mouseenter', () => {
                optionItem.style.background = 'rgba(52, 152, 219, 0.1)';
            });
            optionItem.addEventListener('mouseleave', () => {
                optionItem.style.background = 'none';
            });
            contextMenu.appendChild(optionItem);
        });
        const hamburgerMenuEl = document.getElementById(CLASS_NAMES.HAMBURGER_MENU);
        hamburgerMenuEl.appendChild(contextMenu);
        document.addEventListener('click', (e) => this.handleClickOutsideContextMenu(e));
    },
    
    removeSortContextMenu() {
        const contextMenu = document.getElementById('sort-context-menu');
        if (contextMenu) contextMenu.remove();
        document.removeEventListener('click', (e) => this.handleClickOutsideContextMenu(e));
    },
    
    handleClickOutsideContextMenu(e) {
        const contextMenu = document.getElementById('sort-context-menu');
        const hamburgerMenuEl = document.getElementById(CLASS_NAMES.HAMBURGER_MENU);
        const sortMenuItem = hamburgerMenuEl?.querySelector('button:has(svg[aria-label="sort"])');
        if (contextMenu && !contextMenu.contains(e.target) && e.target !== sortMenuItem) {
            this.removeSortContextMenu();
        }
    },
    
    applyEngineSort() {
        const engineDisplay = document.querySelector(`.${CLASS_NAMES.ENGINE_DISPLAY}`);
        if (!engineDisplay) return;
        const buttons = Array.from(engineDisplay.querySelectorAll(`.${CLASS_NAMES.ENGINE_BUTTON}`));
        if (buttons.length === 0) return;
        engineDisplay.innerHTML = '';
        if (this.sortMode === 'default') {
            const originalOrder = GM_getValue(STORAGE_KEYS.PUNK_SETUP_SEARCH, DEFAULT_CONFIG.PUNK_DEFAULT_MARK).split('-');
            const sortedButtons = originalOrder.map(mark => 
                buttons.find(btn => btn.getAttribute('data-mark') === mark)
            ).filter(btn => btn);
            sortedButtons.forEach(btn => engineDisplay.appendChild(btn));
            domHandler.enableDragAndSort();
        } else if (this.sortMode === 'smart') {
            const usageCounts = GM_getValue('engine_usage_counts', {});
            const sortedButtons = [...buttons].sort((a, b) => {
                const aMark = a.getAttribute('data-mark');
                const bMark = b.getAttribute('data-mark');
                const aCount = usageCounts[aMark] || 0;
                const bCount = usageCounts[bMark] || 0;
                return bCount - aCount;
            });
            sortedButtons.forEach(btn => engineDisplay.appendChild(btn));
            buttons.forEach(btn => {
                btn.draggable = false;
                btn.style.cursor = 'default';
            });
        }
    },
    
    showHamburgerMenu() {
        const menu = this.createHamburgerMenu();
        menu.style.display = 'flex';
        appState.hamburgerMenuOpen = true;
        accessibility.updateHamburgerAriaState();
        accessibility.trapFocus(menu);
    },
    
    hideHamburgerMenu() {
        const menu = document.getElementById(CLASS_NAMES.HAMBURGER_MENU);
        if (menu) {
            menu.style.display = 'none';
            appState.hamburgerMenuOpen = false;
            accessibility.updateHamburgerAriaState();
            accessibility.removeFocusTrap(menu);
            this.removeSortContextMenu();
        }
    },
    
    toggleHamburgerMenu() {
        appState.hamburgerMenuOpen ?
            this.hideHamburgerMenu() :
            this.showHamburgerMenu();
    }
};

// ===== 管理面板模块 =====
const managementPanel = {
    createActionButton(html, color, title) {
        const button = document.createElement("button");
        button.innerHTML = html;
        button.title = title;
        button.style.cssText = `
            padding: 10px 15px;
            background-color: ${color};
            color: white;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-size: 14px;
            min-width: 120px;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 5px;
            justify-content: center;
        `;
        button.addEventListener("mouseenter", () => {
            button.style.transform = "translateY(-2px)";
            button.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
        });
        button.addEventListener("mouseleave", () => {
            button.style.transform = "translateY(0)";
            button.style.boxShadow = "none";
        });
        return button;
    },

    extractSearchEngineFromPage() {
        const searchInfo = { name: "", searchUrl: "", searchkeyName: [], matchUrl: "", mark: "", found: false };
        try {
            const formResult = this.extractFromSearchForms();
            if (formResult.found) return { ...searchInfo, ...formResult };
            const inputResult = this.extractFromSearchInputs();
            if (inputResult.found) return { ...searchInfo, ...inputResult };
            const metaResult = this.extractFromMetaTags();
            if (metaResult.found) return { ...searchInfo, ...metaResult };
            const urlResult = this.extractFromURLParameters();
            if (urlResult.found) return { ...searchInfo, ...urlResult };
            const commonResult = this.extractFromCommonPatterns();
            if (commonResult.found) return { ...searchInfo, ...commonResult };
        } catch (error) {
            console.warn('搜索引擎信息提取失败:', error);
        }
        return searchInfo;
    },

    extractFromSearchForms() {
        const searchForms = document.querySelectorAll('form');
        const result = { found: false };
        for (const form of searchForms) {
            const action = form.getAttribute('action') || '';
            const method = (form.getAttribute('method') || 'get').toLowerCase();
            const isSearchForm = this.isSearchForm(form, action);
            if (!isSearchForm) continue;
            const baseUrl = action.startsWith('http') ? action : new URL(action, window.location.origin).href;
            const keyParams = this.extractKeyParamsFromForm(form);
            if (keyParams.length === 0) continue;
            const searchUrl = this.buildSearchUrl(baseUrl, method, keyParams);
            const domain = new URL(baseUrl).hostname;
            const engineInfo = this.generateEngineInfo(domain, keyParams, searchUrl);
            return { ...engineInfo, found: true };
        }
        return result;
    },

    extractFromSearchInputs() {
        const searchInputSelectors = [
            'input[type="search"]', 'input[name*="search"]', 'input[name*="query"]', 'input[name*="q"]',
            'input[name*="keyword"]', 'input[name*="key"]', 'input[name*="wd"]', 'input[name*="kw"]',
            'input[placeholder*="搜索"]', 'input[placeholder*="search"]', 'input[placeholder*="查询"]',
            'input[aria-label*="搜索"]', 'input[aria-label*="search"]'
        ];
        const searchInputs = document.querySelectorAll(searchInputSelectors.join(','));
        const result = { found: false };
        if (searchInputs.length > 0) {
            const input = searchInputs[0];
            const name = input.getAttribute('name') || 'q';
            const domain = window.location.hostname;
            let searchUrl = '';
            const form = input.form;
            if (form && form.action) {
                const baseUrl = form.action.startsWith('http') ? form.action : new URL(form.action, window.location.origin).href;
                const method = (form.getAttribute('method') || 'get').toLowerCase();
                searchUrl = this.buildSearchUrl(baseUrl, method, [name]);
            } else {
                searchUrl = `${window.location.origin}/search?${name}={keyword}`;
            }
            const engineInfo = this.generateEngineInfo(domain, [name], searchUrl);
            return { ...engineInfo, found: true };
        }
        return result;
    },

    extractFromMetaTags() {
        const result = { found: false };
        const ogSiteName = document.querySelector('meta[property="og:site_name"]');
        const applicationName = document.querySelector('meta[name="application-name"]');
        if (ogSiteName || applicationName) {
            const siteName = (ogSiteName?.getAttribute('content') || applicationName?.getAttribute('content') || '').toLowerCase();
            const knownEngines = ['google', 'bing', 'baidu', 'duckduckgo', 'yahoo', 'yandex'];
            const isKnownEngine = knownEngines.some(engine => siteName.includes(engine));
            if (isKnownEngine) {
                const domain = window.location.hostname;
                const keyParams = this.guessKeyParameters();
                const searchUrl = `${window.location.origin}/search?${keyParams[0]}={keyword}`;
                const engineInfo = this.generateEngineInfo(domain, keyParams, searchUrl);
                return { ...engineInfo, found: true };
            }
        }
        return result;
    },

    extractFromURLParameters() {
        const result = { found: false };
        const urlParams = new URLSearchParams(window.location.search);
        const searchParams = [
            'q', 'query', 'search', 'keyword', 'keywords', 'searchword', 'searchquery', 'searchterm', 
            'searchtext', 'searchkey', 'key', 'wd', 'kw', 'p', 's', 'string', 'phrase', 'terms', 'ask'
        ];
        for (const param of searchParams) {
            if (urlParams.has(param)) {
                const domain = window.location.hostname;
                const searchUrl = `${window.location.origin}${window.location.pathname}?${param}={keyword}`;
                const engineInfo = this.generateEngineInfo(domain, [param], searchUrl);
                return { ...engineInfo, found: true };
            }
        }
        return result;
    },

    extractFromCommonPatterns() {
        const result = { found: false };
        const domain = window.location.hostname;
        const knownPatterns = {
            'google': { key: 'q', path: '/search' },
            'bing': { key: 'q', path: '/search' },
            'baidu': { key: 'wd', path: '/s' },
            'duckduckgo': { key: 'q', path: '/' },
            'yahoo': { key: 'p', path: '/search' },
            'yandex': { key: 'text', path: '/search' },
            'github': { key: 'q', path: '/search' }
        };
        for (const [engine, pattern] of Object.entries(knownPatterns)) {
            if (domain.includes(engine)) {
                const searchUrl = `${window.location.origin}${pattern.path}?${pattern.key}={keyword}`;
                const engineInfo = this.generateEngineInfo(domain, [pattern.key], searchUrl);
                return { ...engineInfo, found: true };
            }
        }
        return result;
    },

    isSearchForm(form, action) {
        const formHtml = form.outerHTML.toLowerCase();
        const actionLower = action.toLowerCase();
        const searchIndicators = ['search', 'query', 'find', 'seek', 'lookup', 'q='];
        if (searchIndicators.some(indicator => actionLower.includes(indicator) || formHtml.includes(indicator))) {
            return true;
        }
        const inputs = form.querySelectorAll('input[type="text"], input[type="search"]');
        for (const input of inputs) {
            const name = (input.getAttribute('name') || '').toLowerCase();
            const placeholder = (input.getAttribute('placeholder') || '').toLowerCase();
            if (searchIndicators.some(indicator => name.includes(indicator) || placeholder.includes(indicator))) {
                return true;
            }
        }
        return false;
    },

    extractKeyParamsFromForm(form) {
        const keyParams = [];
        const inputs = form.querySelectorAll('input[name]');
        const searchParamPatterns = [
            /^q$/, /^query/, /^search/, /^keyword/, /^key/, /^wd$/, /^kw$/,
            /^string/, /^phrase/, /^terms/, /^ask/, /^find/, /^seek/
        ];
        for (const input of inputs) {
            const name = input.getAttribute('name');
            if (!name) continue;
            const isSearchParam = searchParamPatterns.some(pattern => pattern.test(name));
            if (isSearchParam) keyParams.push(name);
        }
        if (keyParams.length === 0 && inputs.length > 0) {
            const firstName = inputs[0].getAttribute('name');
            if (firstName) keyParams.push(firstName);
        }
        return keyParams;
    },

    buildSearchUrl(baseUrl, method, keyParams) {
        if (method === 'post') {
            return `${baseUrl}?${keyParams[0]}={keyword}`;
        } else {
            const separator = baseUrl.includes('?') ? '&' : '?';
            return `${baseUrl}${separator}${keyParams[0]}={keyword}`;
        }
    },

    generateEngineInfo(domain, keyParams, searchUrl) {
        const cleanDomain = domain.replace('www.', '');
        const name = cleanDomain.split('.')[0].charAt(0).toUpperCase() + cleanDomain.split('.')[0].slice(1);
        const mark = cleanDomain.replace(/\./g, '_');
        return {
            name: name,
            searchUrl: searchUrl,
            searchkeyName: keyParams,
            matchUrl: `.*${cleanDomain}.*`,
            mark: mark
        };
    },

    guessKeyParameters() {
        const commonParams = ['q', 'query', 'search', 'keyword', 'key', 'wd', 'kw'];
        return commonParams.slice(0, 1);
    },

    extractFromCurrentPage() {
        const searchInfo = this.extractSearchEngineFromPage();
        if (!searchInfo.found) {
            alert("无法自动识别当前页面的搜索引擎，请手动添加。");
            return;
        }
        this.showAddForm(true);
        document.getElementById("engine-name").value = searchInfo.name;
        document.getElementById("engine-mark").value = searchInfo.mark;
        document.getElementById("engine-url").value = searchInfo.searchUrl;
        document.getElementById("engine-keys").value = searchInfo.searchkeyName.join(",");
        const favicon = document.querySelector('link[rel*="icon"]');
        if (favicon) {
            const iconUrl = favicon.href;
            if (!iconUrl.startsWith('data:')) {
                document.getElementById("icon-type").value = "image";
                document.getElementById("icon-input").value = iconUrl;
                this.previewIcon();
            }
        }
        alert(`✅ 已自动识别 ${searchInfo.name} 搜索引擎！请检查并保存。`);
    },

    showAddForm(show) {
        const formSection = document.getElementById("add-engine-form");
        const engineList = document.getElementById("engine-management-list");
        const listTitle = formSection?.previousElementSibling;
        if (!formSection || !engineList || !listTitle) return;
        if (show) {
            formSection.style.display = "block";
            engineList.style.display = "none";
            listTitle.style.display = "none";
            document.getElementById("engine-name").value = "";
            document.getElementById("engine-mark").value = "";
            document.getElementById("engine-url").value = "";
            document.getElementById("engine-keys").value = "";
            document.getElementById("icon-input").value = "";
            document.getElementById("icon-preview").innerHTML = "";
        } else {
            formSection.style.display = "none";
            engineList.style.display = "grid";
            listTitle.style.display = "block";
        }
    },

    previewIcon() {
        const type = document.getElementById("icon-type").value;
        const value = document.getElementById("icon-input").value.trim();
        const preview = document.getElementById("icon-preview");
        preview.innerHTML = "";
        preview.style.backgroundImage = "none";
        preview.style.backgroundColor = "#ecf0f1";
        if (!value) return;
        try {
            switch (type) {
                case "svg":
                    const parser = new DOMParser();
                    const svgDoc = parser.parseFromString(value, "image/svg+xml");
                    if (svgDoc.querySelector("parsererror")) throw new Error("无效的SVG代码");
                    preview.innerHTML = value;
                    break;
                case "image":
                    preview.style.backgroundImage = `url(${value})`;
                    preview.style.backgroundSize = "contain";
                    preview.style.backgroundRepeat = "no-repeat";
                    preview.style.backgroundPosition = "center";
                    break;
                case "text":
                    const displayText = value.length > 4 ? value.substring(0, 4) : value;
                    preview.textContent = displayText;
                    preview.style.fontSize = value.length > 4 ? "14px" : "18px";
                    preview.style.color = "#2c3e50";
                    preview.style.fontWeight = "bold";
                    break;
                case "emoji":
                    preview.textContent = value;
                    preview.style.fontSize = "24px";
                    break;
            }
        } catch (e) {
            alert(`图标预览失败: ${e.message}`);
        }
    },

    saveNewEngine() {
        const name = document.getElementById("engine-name").value.trim();
        const mark = document.getElementById("engine-mark").value.trim();
        const url = document.getElementById("engine-url").value.trim();
        const keys = document.getElementById("engine-keys").value.split(',').map(k => k.trim());
        const iconType = document.getElementById("icon-type").value;
        const iconValue = document.getElementById("icon-input").value.trim();
        if (!name || !mark || !url || keys.length === 0) {
            alert("请填写所有必填字段");
            return;
        }
        if (appState.searchUrlMap.some(engine => engine.mark === mark)) {
            alert("标识已存在，请使用其他标识");
            return;
        }
        const newEngine = {
            name,
            searchUrl: url,
            searchkeyName: keys,
            matchUrl: new RegExp(`.*${new URL(url).hostname}.*`),
            mark,
            svgCode: "",
            custom: true
        };
        if (iconValue) {
            switch (iconType) {
                case "svg":
                    newEngine.svgCode = iconValue;
                    break;
                case "image":
                    newEngine.svgCode = `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                        <style>.bg-img {background-image: url(${iconValue}); background-size: contain; background-repeat: no-repeat; background-position: center; width: 100%; height: 100%;}</style>
                        <foreignObject width="100%" height="100%"><div class="bg-img" xmlns="http://www.w3.org/1999/xhtml"></div></foreignObject>
                    </svg>`;
                    break;
                case "text":
                    newEngine.svgCode = `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                        <style>.text {font-size: 12px; fill: #333; text-anchor: middle; dominant-baseline: middle; font-weight: bold;}</style>
                        <text x="50%" y="50%" class="text">${iconValue}</text>
                    </svg>`;
                    break;
                case "emoji":
                    newEngine.svgCode = `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                        <style>.emoji {font-size: 20px; text-anchor: middle; dominant-baseline: middle;}</style>
                        <text x="50%" y="50%" class="emoji">${iconValue}</text>
                    </svg>`;
                    break;
            }
        }
        appState.userSearchEngines.push(newEngine);
        GM_setValue(STORAGE_KEYS.USER_SEARCH_ENGINES, appState.userSearchEngines);
        appState.searchUrlMap = [...defaultSearchEngines, ...appState.userSearchEngines];
        const currentSetup = GM_getValue(STORAGE_KEYS.PUNK_SETUP_SEARCH, DEFAULT_CONFIG.PUNK_DEFAULT_MARK);
        GM_setValue(STORAGE_KEYS.PUNK_SETUP_SEARCH, `${currentSetup}-${mark}`);
        utils.markUnsavedChanges();
        alert("✅ 搜索引擎添加成功!");
        this.showAddForm(false);
        this.refreshEngineList();
    },

    resetToDefault() {
        if (confirm("⚠️ 确定要恢复默认设置吗？这将删除所有自定义搜索引擎。")) {
            appState.userSearchEngines = [];
            GM_setValue(STORAGE_KEYS.USER_SEARCH_ENGINES, []);
            GM_setValue(STORAGE_KEYS.PUNK_SETUP_SEARCH, DEFAULT_CONFIG.PUNK_DEFAULT_MARK);
            appState.searchUrlMap = [...defaultSearchEngines];
            utils.markUnsavedChanges();
            alert("✅ 已恢复默认设置");
            this.refreshEngineList();
        }
    },

    refreshEngineList() {
        const engineList = document.getElementById("engine-management-list");
        const activeMarks = GM_getValue(STORAGE_KEYS.PUNK_SETUP_SEARCH, DEFAULT_CONFIG.PUNK_DEFAULT_MARK).split("-");
        if (!engineList) return;
        engineList.innerHTML = "";
        appState.searchUrlMap.forEach((engine) => {
            const engineCard = document.createElement("div");
            engineCard.className = CLASS_NAMES.ENGINE_CARD;
            engineCard.style.cssText = `
                display: flex;
                align-items: center;
                padding: 15px;
                background: white;
                border: 2px solid ${activeMarks.includes(engine.mark) ? '#27ae60' : '#ecf0f1'};
                border-radius: 10px;
                transition: all 0.3s ease;
                cursor: grab;
                min-height: 60px;
                box-sizing: border-box;
            `;
            engineCard.addEventListener("mouseenter", () => {
                engineCard.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
                engineCard.style.transform = "translateY(-2px)";
            });
            engineCard.addEventListener("mouseleave", () => {
                engineCard.style.boxShadow = "none";
                engineCard.style.transform = "translateY(0)";
            });
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.dataset.mark = engine.mark;
            checkbox.checked = activeMarks.includes(engine.mark);
            checkbox.style.cssText = `margin-right: 15px; transform: scale(1.2);`;
            checkbox.addEventListener("change", () => {
                utils.updateSelectedCount();
                utils.markUnsavedChanges();
            });
            const iconPreview = document.createElement("div");
            iconPreview.style.cssText = `
                width: 40px;
                height: 25px;
                background-image: url('data:image/svg+xml;utf8,${encodeURIComponent(engine.svgCode)}');
                background-size: contain;
                background-repeat: no-repeat;
                background-position: center;
                margin-right: 15px;
                border: 1px solid #eee;
                border-radius: 5px;
                flex-shrink: 0;
            `;
            const infoContainer = document.createElement("div");
            infoContainer.style.cssText = `flex-grow: 1; min-width: 0;`;
            const name = document.createElement("div");
            name.textContent = engine.name;
            name.style.cssText = `
                font-weight: bold;
                color: #2c3e50;
                margin-bottom: 5px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            `;
            const url = document.createElement("div");
            url.textContent = engine.searchUrl;
            url.style.cssText = `
                font-size: 0.8em;
                color: #7f8c8d;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            `;
            infoContainer.appendChild(name);
            infoContainer.appendChild(url);
            const actions = document.createElement("div");
            actions.style.cssText = `display: flex; gap: 5px; flex-shrink: 0;`;
            if (engine.custom) {
                const deleteBtn = document.createElement("button");
                deleteBtn.innerHTML = utils.createInlineSVG('trash', 'white');
                deleteBtn.title = "删除";
                deleteBtn.style.cssText = `
                    padding: 8px 12px;
                    border: none;
                    background: #e74c3c;
                    color: white;
                    border-radius: 5px;
                    cursor: pointer;
                    flex-shrink: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                `;
                actions.appendChild(deleteBtn);
                deleteBtn.addEventListener("click", (e) => {
                    e.stopPropagation();
                    if (confirm(`确定要删除 ${engine.name} 吗?`)) {
                        appState.userSearchEngines = appState.userSearchEngines.filter(e => e.mark !== engine.mark);
                        GM_setValue(STORAGE_KEYS.USER_SEARCH_ENGINES, appState.userSearchEngines);
                        const currentSetup = GM_getValue(STORAGE_KEYS.PUNK_SETUP_SEARCH, DEFAULT_CONFIG.PUNK_DEFAULT_MARK);
                        const newSetup = currentSetup.split("-").filter(m => m !== engine.mark).join("-");
                        GM_setValue(STORAGE_KEYS.PUNK_SETUP_SEARCH, newSetup);
                        appState.searchUrlMap = [...defaultSearchEngines, ...appState.userSearchEngines];
                        utils.markUnsavedChanges();
                        this.refreshEngineList();
                    }
                });
            }
            engineCard.appendChild(checkbox);
            engineCard.appendChild(iconPreview);
            engineCard.appendChild(infoContainer);
            engineCard.appendChild(actions);
            engineList.appendChild(engineCard);
        });
        utils.updateSelectedCount();
    },

    saveEngineSettings() {
        const checkboxes = document.querySelectorAll('#engine-management-list input[type="checkbox"]');
        const activeMarks = [];
        checkboxes.forEach(checkbox => {
            if (checkbox.checked) activeMarks.push(checkbox.dataset.mark);
        });
        if (activeMarks.length === 0) {
            alert("⚠️ 请至少选择一个搜索引擎");
            return;
        }
        GM_setValue(STORAGE_KEYS.PUNK_SETUP_SEARCH, activeMarks.join("-"));
        utils.clearUnsavedChanges();
        setTimeout(() => {
            this.closeManagementPanel();
            appInitializer.reloadScript();
        }, 1000);
    },

    closeManagementPanel() {
        const panel = document.getElementById(CLASS_NAMES.MANAGEMENT_PANEL);
        if (!panel) return;
        if (appState.hasUnsavedChanges && !confirm("⚠️ 您有未保存的更改，确定要关闭吗？")) return;
        panel.style.display = "none";
        appState.hasUnsavedChanges = false;
        accessibility.removeFocusTrap(panel);
    },

    createManagementPanel() {
        let panel = document.getElementById(CLASS_NAMES.MANAGEMENT_PANEL);
        if (panel) return panel;
        panel = document.createElement("div");
        panel.id = CLASS_NAMES.MANAGEMENT_PANEL;
        panel.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 90%;
            max-width: 800px;
            height: 90vh;
            max-height: 90vh;
            background-color: #ffffff;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            padding: 0;
            z-index: 10000;
            display: none;
            overflow: hidden;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
        `;
        const header = document.createElement("div");
        header.style.cssText = `
            height: 15vh;
            min-height: 80px;
            max-height: 120px;
            background-color: #2c3e50;
            color: white;
            padding: 20px;
            border-radius: 15px 15px 0 0;
            position: relative;
            box-sizing: border-box;
            flex-shrink: 0;
        `;
        const title = document.createElement("h2");
        title.innerHTML = utils.createInlineSVG('cog', 'white') + ' 搜索引擎管理中心';
        title.style.cssText = `
            margin: 0;
            font-size: 1.5em;
            font-weight: 300;
            display: flex;
            align-items: center;
            gap: 10px;
        `;
        const subtitle = document.createElement("p");
        subtitle.textContent = "管理您的搜索快捷方式";
        subtitle.style.cssText = `margin: 5px 0 0 0; opacity: 0.8; font-size: 0.9em;`;
        const unsavedIndicator = document.createElement("div");
        unsavedIndicator.id = "unsaved-indicator";
        unsavedIndicator.innerHTML = utils.createInlineSVG('circle', '#e74c3c') + ' 有未保存的更改';
        unsavedIndicator.style.cssText = `
            position: absolute;
            top: 15px;
            right: 20px;
            color: #e74c3c;
            font-size: 0.8em;
            display: none;
            align-items: center;
            gap: 5px;
        `;
        header.appendChild(title);
        header.appendChild(subtitle);
        header.appendChild(unsavedIndicator);
        panel.appendChild(header);
        const content = document.createElement("div");
        content.style.cssText = `
            height: 65vh;
            min-height: 300px;
            position: relative;
            overflow: hidden;
            padding: 0;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            flex-shrink: 0;
        `;
        const quickActions = document.createElement("div");
        quickActions.style.cssText = `
            padding: 20px;
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
            justify-content: space-between;
            background-color: #ffffff;
            border-bottom: 1px solid #ecf0f1;
            box-sizing: border-box;
            flex-shrink: 0;
        `;
        const leftActionGroup = document.createElement("div");
        leftActionGroup.style.cssText = `display: flex; gap: 10px; flex-wrap: wrap;`;
        const extractBtn = this.createActionButton(utils.createInlineSVG('globe') + ' 自动添加', "#3498db", "自动识别当前页面的搜索引擎");
        const addBtn = this.createActionButton(utils.createInlineSVG('plus') + ' 手动添加', "#27ae60", "手动添加新的搜索引擎");
        leftActionGroup.appendChild(extractBtn);
        leftActionGroup.appendChild(addBtn);
        const rightActionGroup = document.createElement("div");
        rightActionGroup.style.cssText = `display: flex; gap: 10px; flex-wrap: wrap;`;
        const saveBtn = document.createElement("button");
        saveBtn.id = "panel-save-btn";
        saveBtn.innerHTML = utils.createInlineSVG('save') + ' 保存设置';
        saveBtn.title = "保存当前设置";
        saveBtn.style.cssText = `
            padding: 10px 20px;
            background: #95a5a6;
            color: white;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-size: 14px;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 5px;
            transition: all 0.3s ease;
            opacity: 0.7;
            pointer-events: none;
            min-width: 120px;
            justify-content: center;
        `;
        const resetBtn = this.createActionButton(utils.createInlineSVG('undo') + ' 恢复默认', "#e74c3c", "恢复默认搜索引擎设置");
        rightActionGroup.appendChild(saveBtn);
        rightActionGroup.appendChild(resetBtn);
        quickActions.appendChild(leftActionGroup);
        quickActions.appendChild(rightActionGroup);
        content.appendChild(quickActions);
        const listSection = document.createElement("div");
        listSection.style.cssText = `
            flex: 1;
            overflow: hidden;
            padding: 0 20px;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            overflow: auto;
        `;
        const listTitle = document.createElement("h3");
        listTitle.innerHTML = utils.createInlineSVG('list') + ' 已配置的搜索引擎';
        listTitle.style.cssText = `
            color: #2c3e50;
            margin: 15px 0;
            font-weight: 500;
            flex-shrink: 0;
            display: flex;
            align-items: center;
            gap: 10px;
        `;
        const engineList = document.createElement("div");
        engineList.id = "engine-management-list";
        engineList.style.cssText = `
            flex: 1;
            overflow-y: auto;
            overflow-x: hidden;
            display: grid;
            gap: 10px;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            padding-bottom: 10px;
            box-sizing: border-box;
        `;
        listSection.appendChild(listTitle);
        listSection.appendChild(engineList);
        const formSection = document.createElement("div");
        formSection.id = "add-engine-form";
        formSection.style.cssText = `
            display: none;
            background-color: #f8f9fa;
            padding: 20px;
            border-radius: 10px;
            margin: 10px 0;
            box-sizing: border-box;
            flex-shrink: 0;
        `;
        const formTitle = document.createElement("h3");
        formTitle.innerHTML = utils.createInlineSVG('magic') + ' 添加新搜索引擎';
        formTitle.style.cssText = `
            color: #2c3e50;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
            gap: 10px;
        `;
        formSection.appendChild(formTitle);
        const form = document.createElement("div");
        form.style.cssText = `display: grid; gap: 15px; grid-template-columns: 1fr 1fr;`;
        const fields = [
            { label: "引擎名称", placeholder: "例如: Google", type: "text", id: "engine-name", required: true },
            { label: "唯一标识", placeholder: "例如: google", type: "text", id: "engine-mark", required: true },
            { label: "搜索URL", placeholder: "使用 {keyword} 作为占位符", type: "text", id: "engine-url", required: true, fullWidth: true },
            { label: "关键词参数", placeholder: "例如: q,query,search", type: "text", id: "engine-keys", required: true, fullWidth: true }
        ];
        fields.forEach(field => {
            const container = document.createElement("div");
            if (field.fullWidth) container.style.gridColumn = "1 / -1";
            const label = document.createElement("label");
            label.textContent = field.label;
            label.style.cssText = `display: block; margin-bottom: 5px; font-weight: 500; color: #34495e;`;
            const input = document.createElement("input");
            input.type = field.type;
            input.placeholder = field.placeholder;
            input.id = field.id;
            input.required = field.required;
            input.style.cssText = `width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 5px; font-size: 14px;`;
            container.appendChild(label);
            container.appendChild(input);
            form.appendChild(container);
        });
        const iconContainer = document.createElement("div");
        iconContainer.style.gridColumn = "1 / -1";
        const iconTitle = document.createElement("h4");
        iconTitle.innerHTML = utils.createInlineSVG('palette') + ' 图标设置';
        iconTitle.style.cssText = `margin-bottom: 10px; color: #34495e; display: flex; align-items: center; gap: 10px;`;
        iconContainer.appendChild(iconTitle);
        const iconGrid = document.createElement("div");
        iconGrid.style.cssText = `display: grid; grid-template-columns: 1fr 2fr 1fr; gap: 10px; align-items: end;`;
        const typeGroup = document.createElement("div");
        const typeLabel = document.createElement("label");
        typeLabel.textContent = "图标类型";
        typeLabel.style.cssText = `display: block; margin-bottom: 5px; font-weight: 500;`;
        typeGroup.appendChild(typeLabel);
        const iconTypeSelect = document.createElement("select");
        iconTypeSelect.id = "icon-type";
        iconTypeSelect.style.cssText = `width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 5px;`;
        ["svg", "image", "text", "emoji"].forEach(type => {
            const option = document.createElement("option");
            option.value = type;
            option.textContent = type.charAt(0).toUpperCase() + type.slice(1);
            iconTypeSelect.appendChild(option);
        });
        typeGroup.appendChild(iconTypeSelect);
        const inputGroup = document.createElement("div");
        const inputLabel = document.createElement("label");
        inputLabel.textContent = "图标内容";
        inputLabel.style.cssText = `display: block; margin-bottom: 5px; font-weight: 500;`;
        inputGroup.appendChild(inputLabel);
        const iconInput = document.createElement("input");
        iconInput.type = "text";
        iconInput.id = "icon-input";
        iconInput.placeholder = "SVG代码、图片URL、文字或表情符号";
        iconInput.style.cssText = `width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 5px;`;
        inputGroup.appendChild(iconInput);
        const previewGroup = document.createElement("div");
        const previewButton = document.createElement("button");
        previewButton.innerHTML = utils.createInlineSVG('eye') + ' 预览图标';
        previewButton.style.cssText = `
            width: 100%;
            padding: 10px;
            background-color: #3498db;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 5px;
        `;
        previewButton.id = "preview-icon";
                    previewGroup.appendChild(previewButton);
                    // 组装图标设置网格
                    iconGrid.appendChild(typeGroup);
                    iconGrid.appendChild(inputGroup);
                    iconGrid.appendChild(previewGroup);
                    iconContainer.appendChild(iconGrid);
                    // 图标预览区域
                    const previewContainer = document.createElement("div");
                    previewContainer.style.gridColumn = "1 / -1";
                    previewContainer.style.cssText = `
            margin-top: 15px;
            text-align: center;
        `;
                    const previewLabel = document.createElement("label");
                    previewLabel.textContent = "图标预览 (推荐比例 8:5)";
                    previewLabel.style.cssText = `
            display: block;
            margin-bottom: 10px;
            font-weight: 500;
        `;
                    const iconPreview = document.createElement("div");
                    iconPreview.id = "icon-preview";
                    iconPreview.style.cssText = `
            width: 88px;
            height: 55px;
            border: 2px dashed #bdc3c7;
            border-radius: 8px;
            margin: 0 auto;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            background: #ecf0f1;
        `;
                    previewContainer.appendChild(previewLabel);
                    previewContainer.appendChild(iconPreview);
                    iconContainer.appendChild(previewContainer);
                    form.appendChild(iconContainer);
                    // 表单操作按钮
                    const formActions = document.createElement("div");
                    formActions.style.cssText = `
            grid-column: 1 / -1;
            display: flex;
            gap: 10px;
            margin-top: 20px;
        `;
                    const saveFormBtn = this.createActionButton(utils.createInlineSVG('save') + ' 保存引擎', "#27ae60", "");
                    const cancelFormBtn = this.createActionButton(utils.createInlineSVG('times') + ' 取消', "#95a5a6", "");
                    formActions.appendChild(saveFormBtn);
                    formActions.appendChild(cancelFormBtn);
                    formSection.appendChild(form);
                    formSection.appendChild(formActions);
                    listSection.appendChild(formSection);
                    content.appendChild(listSection);
                    panel.appendChild(content);

                    // 4. 面板底部
                    const footer = document.createElement("div");
                    footer.style.cssText = `
            height: 20vh;
            min-height: 60px;
            max-height: 90px;
            background-color: #ecf0f1;
            padding: 15px 20px;
            border-top: 1px solid #bdc3c7;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-sizing: border-box;
            flex-shrink: 0;
            border-radius: 0 0 15px 15px;
        `;
                    const selectedCount = document.createElement("span");
                    selectedCount.id = "selected-count";
                    selectedCount.innerHTML = utils.createInlineSVG('check-circle') + ' 已选择 0 个引擎';
                    selectedCount.style.cssText = `
            color: #7f8c8d;
            font-size: 0.9em;
            display: flex;
            align-items: center;
            gap: 5px;
        `;
                    const footerActions = document.createElement("div");
                    footerActions.style.cssText = `
            display: flex;
            gap: 10px;
        `;
                    const closeBtn = this.createActionButton(utils.createInlineSVG('times') + ' 关闭', "#95a5a6", "");
                    footerActions.appendChild(closeBtn);
                    footer.appendChild(selectedCount);
                    footer.appendChild(footerActions);
                    panel.appendChild(footer);

                    // 5. 绑定事件
                    extractBtn.addEventListener("click", () => this.extractFromCurrentPage());
                    addBtn.addEventListener("click", () => this.showAddForm(true));
                    resetBtn.addEventListener("click", () => this.resetToDefault());
                    previewButton.addEventListener("click", () => this.previewIcon());
                    saveFormBtn.addEventListener("click", () => this.saveNewEngine());
                    cancelFormBtn.addEventListener("click", () => this.showAddForm(false));
                    saveBtn.addEventListener("click", () => this.saveEngineSettings());
                    closeBtn.addEventListener("click", () => this.closeManagementPanel());
                    // 点击面板背景关闭
                    panel.addEventListener("click", (e) => {
                        if (e.target === panel) {
                            this.closeManagementPanel();
                        }
                    });

                    document.body.appendChild(panel);
                    return panel;
                },

    /**
     * 显示管理面板
     */
    showManagementPanel() {
        const panel = this.createManagementPanel();
        // 重置未保存状态
        appState.hasUnsavedChanges = false;
        utils.clearUnsavedChanges();
        // 刷新引擎列表
        this.refreshEngineList();
        // 显示面板
        panel.style.display = "block";

        // 应用焦点陷阱
        accessibility.trapFocus(panel);

        // 隐藏汉堡菜单
        hamburgerMenu.hideHamburgerMenu();
    },

/**
 * 创建管理面板DOM结构（核心配置界面）
 */
createManagementPanel() {
    let panel = document.getElementById(CLASS_NAMES.MANAGEMENT_PANEL);
    if (panel) return panel;
    // 1. 面板主容器
    panel = document.createElement("div");
    panel.id = CLASS_NAMES.MANAGEMENT_PANEL;
    panel.style.cssText = `
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 90%;
max-width: 800px;
height: 90vh;
max-height: 90vh;
background-color: #ffffff;
border-radius: 15px;
box-shadow: 0 10px 30px rgba(0,0,0,0.3);
padding: 0;
z-index: 10000;
display: none;
overflow: hidden;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
display: flex;
flex-direction: column;
box-sizing: border-box;
`;
    // 2. 面板头部
    const header = document.createElement("div");
    header.style.cssText = `
height: 15vh;
min-height: 80px;
max-height: 120px;
background-color: #2c3e50;
color: white;
padding: 20px;
border-radius: 15px 15px 0 0;
position: relative;
box-sizing: border-box;
flex-shrink: 0;
`;
    const title = document.createElement("h2");
    title.innerHTML = utils.createInlineSVG('cog', 'white') + ' 搜索引擎管理中心';
    title.style.cssText = `
margin: 0;
font-size: 1.5em;
font-weight: 300;
display: flex;
align-items: center;
gap: 10px;
`;
    const subtitle = document.createElement("p");
    subtitle.textContent = "管理您的搜索快捷方式";
    subtitle.style.cssText = `
margin: 5px 0 0 0;
opacity: 0.8;
font-size: 0.9em;
`;
    // 未保存更改指示器
    const unsavedIndicator = document.createElement("div");
    unsavedIndicator.id = "unsaved-indicator";
    unsavedIndicator.innerHTML = utils.createInlineSVG('circle', '#e74c3c') + ' 有未保存的更改';
    unsavedIndicator.style.cssText = `
position: absolute;
top: 15px;
right: 20px;
color: #e74c3c;
font-size: 0.8em;
display: none;
align-items: center;
gap: 5px;
`;
    header.appendChild(title);
    header.appendChild(subtitle);
    header.appendChild(unsavedIndicator);
    panel.appendChild(header);
    // 3. 面板内容区
    const content = document.createElement("div");
    content.style.cssText = `
height: 65vh;
min-height: 300px;
position: relative;
overflow: hidden;
padding: 0;
box-sizing: border-box;
display: flex;
flex-direction: column;
flex-shrink: 0;
`;
    // 3.1 快捷操作栏
    const quickActions = document.createElement("div");
    quickActions.style.cssText = `
padding: 20px;
display: flex;
gap: 10px;
flex-wrap: wrap;
justify-content: space-between;
background-color: #ffffff;
border-bottom: 1px solid #ecf0f1;
box-sizing: border-box;
flex-shrink: 0;
`;
    // 左侧操作组
    const leftActionGroup = document.createElement("div");
    leftActionGroup.style.cssText = `
display: flex;
gap: 10px;
flex-wrap: wrap;
`;
    const extractBtn = this.createActionButton(utils.createInlineSVG('globe') + ' 自动添加', "#3498db", "自动识别当前页面的搜索引擎");
    const addBtn = this.createActionButton(utils.createInlineSVG('plus') + ' 手动添加', "#27ae60", "手动添加新的搜索引擎");
    leftActionGroup.appendChild(extractBtn);
    leftActionGroup.appendChild(addBtn);
    // 右侧操作组
    const rightActionGroup = document.createElement("div");
    rightActionGroup.style.cssText = `
display: flex;
gap: 10px;
flex-wrap: wrap;
`;
    const saveBtn = document.createElement("button");
    saveBtn.id = "panel-save-btn";
    saveBtn.innerHTML = utils.createInlineSVG('save') + ' 保存设置';
    saveBtn.title = "保存当前设置";
    saveBtn.style.cssText = `
padding: 10px 20px;
background: #95a5a6;
color: white;
border: none;
border-radius: 8px;
cursor: pointer;
font-size: 14px;
font-weight: 600;
display: flex;
align-items: center;
gap: 5px;
transition: all 0.3s ease;
opacity: 0.7;
pointer-events: none;
min-width: 120px;
justify-content: center;
`;
    const resetBtn = this.createActionButton(utils.createInlineSVG('undo') + ' 恢复默认', "#e74c3c", "恢复默认搜索引擎设置");
    rightActionGroup.appendChild(saveBtn);
    rightActionGroup.appendChild(resetBtn);
    quickActions.appendChild(leftActionGroup);
    quickActions.appendChild(rightActionGroup);
    content.appendChild(quickActions);
    // 3.2 引擎列表区
    const listSection = document.createElement("div");
    listSection.style.cssText = `
flex: 1;
overflow: hidden;
padding: 0 20px;
box-sizing: border-box;
display: flex;
flex-direction: column;
overflow: auto;
`;
    const listTitle = document.createElement("h3");
    listTitle.innerHTML = utils.createInlineSVG('list') + ' 已配置的搜索引擎';
    listTitle.style.cssText = `
color: #2c3e50;
margin: 15px 0;
font-weight: 500;
flex-shrink: 0;
display: flex;
align-items: center;
gap: 10px;
`;
    const engineList = document.createElement("div");
    engineList.id = "engine-management-list";
    engineList.style.cssText = `
flex: 1;
overflow-y: auto;
overflow-x: hidden;
display: grid;
gap: 10px;
grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
padding-bottom: 10px;
box-sizing: border-box;
`;
    listSection.appendChild(listTitle);
    listSection.appendChild(engineList);
    // 3.3 添加引擎表单
    const formSection = document.createElement("div");
    formSection.id = "add-engine-form";
    formSection.style.cssText = `
display: none;
background-color: #f8f9fa;
padding: 20px;
border-radius: 10px;
margin: 10px 0;
box-sizing: border-box;
flex-shrink: 0;
`;
    const formTitle = document.createElement("h3");
    formTitle.innerHTML = utils.createInlineSVG('magic') + ' 添加新搜索引擎';
    formTitle.style.cssText = `
color: #2c3e50;
margin-bottom: 15px;
display: flex;
align-items: center;
gap: 10px;
`;
    formSection.appendChild(formTitle);
    // 表单字段容器
    const form = document.createElement("div");
    form.style.cssText = `
display: grid;
gap: 15px;
grid-template-columns: 1fr 1fr;
`;
    // 表单字段配置
    const fields = [{
            label: "引擎名称",
            placeholder: "例如: Google",
            type: "text",
            id: "engine-name",
            required: true
        },
        {
            label: "唯一标识",
            placeholder: "例如: google",
            type: "text",
            id: "engine-mark",
            required: true
        },
        {
            label: "搜索URL",
            placeholder: "使用 {keyword} 作为占位符",
            type: "text",
            id: "engine-url",
            required: true,
            fullWidth: true
        },
        {
            label: "关键词参数",
            placeholder: "例如: q,query,search",
            type: "text",
            id: "engine-keys",
            required: true,
            fullWidth: true
        }
    ];
    // 创建表单字段
    fields.forEach(field => {
        const container = document.createElement("div");
        if (field.fullWidth) {
            container.style.gridColumn = "1 / -1";
        }
        const label = document.createElement("label");
        label.textContent = field.label;
        label.style.cssText = `
display: block;
margin-bottom: 5px;
font-weight: 500;
color: #34495e;
`;
        const input = document.createElement("input");
        input.type = field.type;
        input.placeholder = field.placeholder;
        input.id = field.id;
        input.required = field.required;
        input.style.cssText = `
width: 100%;
padding: 10px;
border: 1px solid #ddd;
border-radius: 5px;
font-size: 14px;
`;
        container.appendChild(label);
        container.appendChild(input);
        form.appendChild(container);
    });
    // 图标设置区域
    const iconContainer = document.createElement("div");
    iconContainer.style.gridColumn = "1 / -1";
    const iconTitle = document.createElement("h4");
    iconTitle.innerHTML = utils.createInlineSVG('palette') + ' 图标设置';
    iconTitle.style.cssText = `
margin-bottom: 10px;
color: #34495e;
display: flex;
align-items: center;
gap: 10px;
`;
    iconContainer.appendChild(iconTitle);
    // 图标设置网格
    const iconGrid = document.createElement("div");
    iconGrid.style.cssText = `
display: grid;
grid-template-columns: 1fr 2fr 1fr;
gap: 10px;
align-items: end;
`;
    // 图标类型选择
    const typeGroup = document.createElement("div");
    const typeLabel = document.createElement("label");
    typeLabel.textContent = "图标类型";
    typeLabel.style.cssText = `
display: block;
margin-bottom: 5px;
font-weight: 500;
`;
    typeGroup.appendChild(typeLabel);
    const iconTypeSelect = document.createElement("select");
    iconTypeSelect.id = "icon-type";
    iconTypeSelect.style.cssText = `
width: 100%;
padding: 10px;
border: 1px solid #ddd;
border-radius: 5px;
`;
    ["svg", "image", "text", "emoji"].forEach(type => {
        const option = document.createElement("option");
        option.value = type;
        option.textContent = type.charAt(0).toUpperCase() + type.slice(1);
        iconTypeSelect.appendChild(option);
    });
    typeGroup.appendChild(iconTypeSelect);
    // 图标内容输入
    const inputGroup = document.createElement("div");
    const inputLabel = document.createElement("label");
    inputLabel.textContent = "图标内容";
    inputLabel.style.cssText = `
display: block;
margin-bottom: 5px;
font-weight: 500;
`;
    inputGroup.appendChild(inputLabel);
    const iconInput = document.createElement("input");
    iconInput.type = "text";
    iconInput.id = "icon-input";
    iconInput.placeholder = "SVG代码、图片URL、文字或表情符号";
    iconInput.style.cssText = `
width: 100%;
padding: 10px;
border: 1px solid #ddd;
border-radius: 5px;
`;
    inputGroup.appendChild(iconInput);
    // 预览按钮
    const previewGroup = document.createElement("div");
    const previewButton = document.createElement("button");
    previewButton.innerHTML = utils.createInlineSVG('eye') + ' 预览图标';
    previewButton.style.cssText = `
width: 100%;
padding: 10px;
background-color: #3498db;
color: white;
border: none;
border-radius: 5px;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
gap: 5px;
`;
    previewButton.id = "preview-icon";
    previewGroup.appendChild(previewButton);
    // 组装图标设置网格
    iconGrid.appendChild(typeGroup);
    iconGrid.appendChild(inputGroup);
    iconGrid.appendChild(previewGroup);
    iconContainer.appendChild(iconGrid);
    // 图标预览区域
    const previewContainer = document.createElement("div");
    previewContainer.style.gridColumn = "1 / -1";
    previewContainer.style.cssText = `
margin-top: 15px;
text-align: center;
`;
    const previewLabel = document.createElement("label");
    previewLabel.textContent = "图标预览 (推荐比例 8:5)";
    previewLabel.style.cssText = `
display: block;
margin-bottom: 10px;
font-weight: 500;
`;
    const iconPreview = document.createElement("div");
    iconPreview.id = "icon-preview";
    iconPreview.style.cssText = `
width: 88px;
height: 55px;
border: 2px dashed #bdc3c7;
border-radius: 8px;
margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
background: #ecf0f1;
`;
    previewContainer.appendChild(previewLabel);
    previewContainer.appendChild(iconPreview);
    iconContainer.appendChild(previewContainer);
    form.appendChild(iconContainer);
    // 表单操作按钮
    const formActions = document.createElement("div");
    formActions.style.cssText = `
grid-column: 1 / -1;
display: flex;
gap: 10px;
margin-top: 20px;
`;
    const saveFormBtn = this.createActionButton(utils.createInlineSVG('save') + ' 保存引擎', "#27ae60", "");
    const cancelFormBtn = this.createActionButton(utils.createInlineSVG('times') + ' 取消', "#95a5a6", "");
    formActions.appendChild(saveFormBtn);
    formActions.appendChild(cancelFormBtn);
    formSection.appendChild(form);
    formSection.appendChild(formActions);
    listSection.appendChild(formSection);
    content.appendChild(listSection);
    panel.appendChild(content);
    // 4. 面板底部
    const footer = document.createElement("div");
    footer.style.cssText = `
height: 20vh;
min-height: 60px;
max-height: 90px;
background-color: #ecf0f1;
padding: 15px 20px;
border-top: 1px solid #bdc3c7;
display: flex;
justify-content: space-between;
align-items: center;
box-sizing: border-box;
flex-shrink: 0;
border-radius: 0 0 15px 15px;
`;
    const selectedCount = document.createElement("span");
    selectedCount.id = "selected-count";
    selectedCount.innerHTML = utils.createInlineSVG('check-circle') + ' 已选择 0 个引擎';
    selectedCount.style.cssText = `
color: #7f8c8d;
font-size: 0.9em;
display: flex;
align-items: center;
gap: 5px;
`;
    const footerActions = document.createElement("div");
    footerActions.style.cssText = `
display: flex;
gap: 10px;
`;
    const closeBtn = this.createActionButton(utils.createInlineSVG('times') + ' 关闭', "#95a5a6", "");
    footerActions.appendChild(closeBtn);
    footer.appendChild(selectedCount);
    footer.appendChild(footerActions);
    panel.appendChild(footer);
    // 5. 绑定事件
    extractBtn.addEventListener("click", () => this.extractFromCurrentPage());
    addBtn.addEventListener("click", () => this.showAddForm(true));
    resetBtn.addEventListener("click", () => this.resetToDefault());
    previewButton.addEventListener("click", () => this.previewIcon());
    saveFormBtn.addEventListener("click", () => this.saveNewEngine());
    cancelFormBtn.addEventListener("click", () => this.showAddForm(false));
    saveBtn.addEventListener("click", () => this.saveEngineSettings());
    closeBtn.addEventListener("click", () => this.closeManagementPanel());
    // 点击面板背景关闭
    panel.addEventListener("click", (e) => {
        if (e.target === panel) {
            this.closeManagementPanel();
        }
    });
    document.body.appendChild(panel);
    return panel;
},
/**
 * 显示管理面板
 */
showManagementPanel() {
    const panel = this.createManagementPanel();
    // 重置未保存状态
    appState.hasUnsavedChanges = false;
    utils.clearUnsavedChanges();
    // 刷新引擎列表
    this.refreshEngineList();
    // 显示面板
    panel.style.display = "block";
    // 应用焦点陷阱
    accessibility.trapFocus(panel);
    // 隐藏汉堡菜单
    hamburgerMenu.hideHamburgerMenu();
}
};
// ===== 应用初始化模块 =====
/**
 * 应用初始化模块 - 封装初始化、脚本重载、页面事件监听等入口逻辑
 */
const appInitializer = {
    /**
     * 重新加载脚本（清理DOM、重置状态、重新初始化）
     */
    reloadScript() {
        // 1. 清理所有创建的DOM元素
        [
            "#punkjet-search-box",
            `#${CLASS_NAMES.HAMBURGER_MENU}`,
            `#${CLASS_NAMES.SEARCH_OVERLAY}`,
            `#${CLASS_NAMES.MANAGEMENT_PANEL}`
        ].forEach(selector => {
            const element = document.querySelector(selector);
            if (element) {
                // 移除焦点陷阱
                accessibility.removeFocusTrap(element);
                element.remove();
            }
        });
        // 2. 清除所有定时器和防抖器
        utils.clearAllTimeouts();
        debounceUtils.clearAll();
        // 3. 移除全局事件监听器
        const events = ['scroll', 'wheel', 'touchstart', 'touchmove', 'touchend'];
        events.forEach(event => {
            window.removeEventListener(event, () => {});
        });
        // 4. 重置应用状态
        appState.scriptLoaded = false;
        appState.containerAdded = false;
        appState.hamburgerMenuOpen = false;
        appState.searchOverlayVisible = false;
        // 5. 重新初始化
        this.init();
    },
    /**
     * 百度搜索特殊处理（延迟同步输入框内容）
     */
    handleBaiduSpecialCase() {
        if (window.location.hostname.includes('baidu')) {
            setTimeout(() => {
                const baiduInput = document.querySelector('input#kw');
                if (baiduInput && baiduInput.value) {
                    appState.currentInput = baiduInput.value.trim();
                    sessionStorage.setItem(STORAGE_KEYS.CURRENT_INPUT, appState.currentInput);
                }
            }, DEFAULT_CONFIG.BAIDU_INPUT_DELAY);
        }
    },
/**
 * 初始化应用
 */
init() {
    try {
        // 前置校验
        if (appState.containerAdded || appState.scriptLoaded) {
            return;
        }

        // 初始化搜索引擎功能
        if (utils.isValidScope()) {
            // 1. 初始化默认存储配置
            if (!GM_getValue(STORAGE_KEYS.PUNK_SETUP_SEARCH)) {
                GM_setValue(STORAGE_KEYS.PUNK_SETUP_SEARCH, DEFAULT_CONFIG.PUNK_DEFAULT_MARK);
            }

            // 2. 从sessionStorage恢复当前输入内容
            appState.currentInput = sessionStorage.getItem(STORAGE_KEYS.CURRENT_INPUT) || '';

            // 3. 执行初始化流程
            domHandler.monitorInputFields();
            domHandler.addSearchBox();
            domHandler.injectStyle();
            accessibility.init();
            this.handleBaiduSpecialCase();

            // 4. 更新初始化状态
            appState.scriptLoaded = true;

            // 应用引擎排序
            setTimeout(() => {
                hamburgerMenu.applyEngineSort();
            }, 500);
        }

        // 初始化 GitHub 增强功能
        githubEnhancer.init();

    } catch (error) {
        console.error("应用初始化失败:", error.message);
    }
},
    /**
     * 初始化页面事件监听（ visibilitychange、pageshow 等）
     */
    initPageEventListeners() {
        // 1. 页面可见性变化时重新检查初始化
        document.addEventListener("visibilitychange", () => {
            if (document.visibilityState === 'visible' && !appState.containerAdded) {
                this.init();
            }
        });
        // 2. 页面从缓存恢复时重新检查初始化
        document.addEventListener("pageshow", (event) => {
            if (event.persisted && !appState.containerAdded) {
                this.init();
            }
        });
        // 3. DOM加载完成后初始化
        document.addEventListener("DOMContentLoaded", () => {
            if (utils.isValidScope()) {
                this.init();
            }
        });
        // 4. 定期检查作用域（确保页面动态变化后仍能正常初始化）
        setInterval(() => {
            if (utils.isValidScope() && !appState.containerAdded) {
                this.init();
            } else if (!utils.isValidScope() && appState.containerAdded) {
                this.reloadScript();
            }
        }, DEFAULT_CONFIG.CHECK_SCOPE_INTERVAL);
    }
};

// ===== 应用启动入口 =====
// 初始化应用状态
const appState = {
    userSearchEngines: GM_getValue(STORAGE_KEYS.USER_SEARCH_ENGINES, []),
    searchUrlMap: [...defaultSearchEngines, ...GM_getValue(STORAGE_KEYS.USER_SEARCH_ENGINES, [])],
    lastScrollTop: 0,
    punkJetBoxVisible: true,
    currentInput: sessionStorage.getItem(STORAGE_KEYS.CURRENT_INPUT) || '',
    scriptLoaded: false,
    containerAdded: false,
    hasUnsavedChanges: false,
    scrollTimeout: null,
    isScrolling: false,
    hideTimeout: null,
    touchStartY: null,
    hamburgerMenuOpen: false,
    searchOverlayVisible: false,
    isInteractingWithEngineBar: false
};

// 启动应用
appInitializer.initPageEventListeners();