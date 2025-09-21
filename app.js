// Présentation 1ère Bac Pro MCV Option A - JavaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log('Présentation Bac Pro MCV now loaded!');
    
    // Exemple d'interactivit©
    const header = document.querySelector('header');
    if (header) {
        header.addEventListener('click', function() {
            alert('Bienvenue dans la présentation du Bac Pro MCV!');
        });
    }
    
    // Animation simple
    const sections = document.querySelectorAll('section');
    sections.forEach(function(section, index) {
        setTimeout(function() {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, index * 300);
    });
});