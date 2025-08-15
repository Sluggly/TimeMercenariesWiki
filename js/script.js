const langSwitch = document.getElementById('lang-switch');
const darkModeToggle = document.getElementById('dark-mode-toggle');
let lang = localStorage.getItem('lang') || 'en';
const langFile = `lang/${lang}.json`;

document.documentElement.lang = lang;
//loadLanguage(langFile);

/*langSwitch.addEventListener('click', () => {
    lang = lang === 'en' ? 'fr' : 'en';
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
    loadLanguage(`lang/${lang}.json`);
    langSwitch.textContent = lang === 'en' ? 'Français' : 'English';
});*/

let isDarkMode;

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.toggle('dark-mode');
    });
    document.querySelectorAll('header, button, nav ul li').forEach(element => {
        element.classList.toggle('dark-mode');
    });
    isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
    darkModeToggle.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
    //if (lang === 'en') { darkModeToggle.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode'; }
    //else if (lang === 'fr') {  darkModeToggle.textContent = isDarkMode ? 'Mode Clair' : 'Mode Sombre'; }
   
});

function loadLanguage(file) {
    fetch(file)
        .then(response => response.json())
        .then(data => {
            document.querySelectorAll('[data-key]').forEach(element => {
                const key = element.getAttribute('data-key');
                element.innerHTML = data[key];
            });
        })
        .catch(error => { console.error('Error loading language file:', error); });
}

var currentSection = 'wiki-intro-page';

document.getElementById('wiki-intro-li').addEventListener('click', () => { showSection('wiki-intro-page'); });
document.getElementById('content-li').addEventListener('click', () => { showSection('content-page'); });
document.getElementById('download-li').addEventListener('click', () => { showSection('download-page'); });
document.getElementById('changelog-li').addEventListener('click', () => { showSection('changelog-page'); });
document.getElementById('mods-compat-li').addEventListener('click', () => { showSection('mods-compat-page'); });
document.getElementById('whats-next-li').addEventListener('click', () => { showSection('whats-next-page'); });
document.getElementById('about-me-li').addEventListener('click', () => { showSection('about-me-page'); });

function showSection(section) {
    document.getElementById(currentSection).style.display = "none";
    document.getElementById(section).style.display = "block";
    currentSection = section;
    updateNavHighlight(section);
}

function updateNavHighlight(section) {
    document.querySelectorAll('nav ul li').forEach(li => { li.classList.remove('active'); });
    document.getElementById(section.replace('-page', '-li')).classList.add('active');
}

var currentSubSection = 'mercenaries-content';
const mercenariesBtn = document.getElementById('mercenaries-btn');
const arenaBtn = document.getElementById('arena-btn');
const loreBtn = document.getElementById('lore-btn');

mercenariesBtn.addEventListener('click', () => showSubSection('mercenaries-content'));
arenaBtn.addEventListener('click', () => showSubSection('arena-content'));
loreBtn.addEventListener('click', () => showSubSection('lore-content'));

function showSubSection(subSectionId) {
    // Hide all sub-content sections
    document.querySelectorAll('.sub-content-section').forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected one
    document.getElementById(subSectionId).style.display = 'block';
    currentSubSection = subSectionId;
    updateSubNavHighlight(subSectionId);
}

function updateSubNavHighlight(subSectionId) {
    document.querySelectorAll('.sub-nav-item').forEach(btn => {
        btn.classList.remove('active');
    });
    const activeBtn = document.getElementById(subSectionId.replace('-content', '-btn'));
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
}


showSection(currentSection);
showSubSection(currentSubSection);

if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
    document.querySelectorAll('.content-section').forEach(section => { section.classList.add('dark-mode'); });
    document.querySelectorAll('header, button, nav ul li').forEach(element => { element.classList.add('dark-mode'); });
    darkModeToggle.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
    //if (lang === 'en') { darkModeToggle.textContent = 'Light Mode'; }
    //else if (lang === 'fr') {  darkModeToggle.textContent = 'Mode Clair'; }
}

let currentMercenaryIndex = 0;
const mercNameCounterEl = document.getElementById('merc-name-counter');
const mercPortraitEl = document.getElementById('merc-portrait');
const mercDescriptionEl = document.getElementById('merc-description');
const mercRewardsGridEl = document.getElementById('merc-rewards-grid');
const mercArtifactsShowcaseEl = document.getElementById('merc-artifacts-showcase');
const prevMercBtn = document.getElementById('prev-merc-btn');
const nextMercBtn = document.getElementById('next-merc-btn');

function renderMercenaryData(index) {
    if (!WIKI_MERCENARIES || WIKI_MERCENARIES.length === 0) return;

    const merc = WIKI_MERCENARIES[index];

    mercNameCounterEl.textContent = `${merc.name} (${index + 1}/${WIKI_MERCENARIES.length})`;
    mercPortraitEl.src = merc.image;
    mercDescriptionEl.textContent = merc.description;

    // Render Rewards
    mercRewardsGridEl.innerHTML = ''; // Clear previous rewards
    for (const rarity in merc.rewards) {
        const items = merc.rewards[rarity];
        if (items.length === 0) continue;

        const rarityGroup = document.createElement('div');
        rarityGroup.className = 'rarity-group';
        
        const rarityTitle = document.createElement('h4');
        rarityTitle.textContent = rarity.charAt(0).toUpperCase() + rarity.slice(1);
        rarityTitle.style.color = getRarityColor(rarity);
        rarityGroup.appendChild(rarityTitle);
        
        const itemGrid = document.createElement('div');
        itemGrid.className = 'item-grid';

        items.forEach(itemId => {
            const itemData = WIKI_ITEMS[itemId];
            if (itemData) {
                const itemImg = document.createElement('img');
                itemImg.src = itemData.image;
                itemImg.alt = itemData.name;
                itemImg.title = itemData.name; // This provides a simple tooltip on hover
                itemImg.className = 'reward-item';
                itemGrid.appendChild(itemImg);
            }
        });
        rarityGroup.appendChild(itemGrid);
        mercRewardsGridEl.appendChild(rarityGroup);
    }

    // Render Artifacts
    mercArtifactsShowcaseEl.innerHTML = ''; // Clear previous artifacts
    merc.artifacts.forEach(artifact => {
        const artifactContainer = document.createElement('div');
        artifactContainer.className = 'artifact-display';

        const artifactName = document.createElement('h4');
        artifactName.textContent = artifact.name;

        const artifactGif = document.createElement('img');
        artifactGif.src = artifact.gif;
        artifactGif.alt = `${artifact.name} usage GIF`;

        artifactContainer.appendChild(artifactName);
        artifactContainer.appendChild(artifactGif);
        mercArtifactsShowcaseEl.appendChild(artifactContainer);
    });

    // Update button states
    prevMercBtn.disabled = index === 0;
    nextMercBtn.disabled = index === WIKI_MERCENARIES.length - 1;
}

function getRarityColor(rarity) {
    const colors = {
        common: '#FFFFFF',
        uncommon: '#55FF55',
        rare: '#5555FF',
        epic: '#FF55FF',
        legendary: '#FFAC00'
    };
    // For dark mode, we might want slightly different colors, but for now this works.
    // If you are in dark mode, the text color will be white, otherwise it will be black.
    if (document.body.classList.contains('dark-mode') && rarity === 'common') {
        return '#e0e0e0';
    }
    else if (!document.body.classList.contains('dark-mode') && rarity === 'common') {
        return '#000000';
    }
    return colors[rarity] || '#FFFFFF';
}


prevMercBtn.addEventListener('click', () => {
    if (currentMercenaryIndex > 0) {
        currentMercenaryIndex--;
        renderMercenaryData(currentMercenaryIndex);
    }
});

nextMercBtn.addEventListener('click', () => {
    if (currentMercenaryIndex < WIKI_MERCENARIES.length - 1) {
        currentMercenaryIndex++;
        renderMercenaryData(currentMercenaryIndex);
    }
});

if(document.getElementById('mercenary-display-container')) {
    renderMercenaryData(currentMercenaryIndex);
}