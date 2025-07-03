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

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.toggle('dark-mode');
    });
    document.querySelectorAll('header, button, nav ul li').forEach(element => {
        element.classList.toggle('dark-mode');
    });
    const isDarkMode = document.body.classList.contains('dark-mode');
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

showSection(currentSection);

if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
    document.querySelectorAll('.content-section').forEach(section => { section.classList.add('dark-mode'); });
    document.querySelectorAll('header, button, nav ul li').forEach(element => { element.classList.add('dark-mode'); });
    darkModeToggle.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
    //if (lang === 'en') { darkModeToggle.textContent = 'Light Mode'; }
    //else if (lang === 'fr') {  darkModeToggle.textContent = 'Mode Clair'; }
}