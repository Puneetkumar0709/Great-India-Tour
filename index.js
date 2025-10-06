document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
    // Add click event for winter div
    const winterDiv = document.getElementById('winter');
    if (winterDiv) {
        winterDiv.addEventListener('click', () => {
            window.location.href = 'winter.htm';
        });
    }
    // Add click event for summer div
    const summerDiv = document.getElementById('summer');
    if (summerDiv) {
        summerDiv.addEventListener('click', () => {
            window.location.href = 'summer.htm';
        });
    }
    // Add click event for monsoon div
    const monsoonDiv = document.getElementById('monsoon');
    if (monsoonDiv) {
        monsoonDiv.addEventListener('click', () => {
            window.location.href = 'monsoon.htm';
        });
    }
    // Add click event for honeymoon div
    const honeymoonDiv = document.getElementById('honeymoon');
    if (honeymoonDiv) {
        honeymoonDiv.addEventListener('click', () => {
            window.location.href = 'honeymoon.htm';
        });
    }
    // Update click event for beach_tour div to redirect to beachpage.htm
    const beachTourDiv = document.getElementById('beach_tour');
    if (beachTourDiv) {
        beachTourDiv.addEventListener('click', () => {
            window.location.href = 'beach.htm';
        });
    }
    // Add click event for wildlife div
    const wildlifeDiv = document.getElementById('wildlife');
    if (wildlifeDiv) {
        wildlifeDiv.addEventListener('click', () => {
            window.location.href = 'wildlife.htm';
        });
    }
    // Add click event for temple div
    const templeDiv = document.getElementById('temple');
    if (templeDiv) {
        templeDiv.addEventListener('click', () => {
            window.location.href = 'temple.htm';
        });
    }
    // Add click event for cultural_site div
    const culturalSiteDiv = document.getElementById('cultural_site');
    if (culturalSiteDiv) {
        culturalSiteDiv.addEventListener('click', () => {
            window.location.href = 'cultural.htm';
        });
    }
});