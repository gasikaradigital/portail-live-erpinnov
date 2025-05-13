
document.addEventListener('DOMContentLoaded', function() {
    // Variables
    let menuOpen = false;
    const menuIcon = document.getElementById('menuIcon');
    const toggleMenuBtn = document.getElementById('toggleMenu');
   
    // Vérifier si l'utilisateur est authentifié
    // Remplacez cette logique par votre propre vérification d'authentification
    const isAuthenticated = false; // Par défaut: non authentifié
    const loginItem = document.getElementById('loginItem');
    const registerItem = document.getElementById('registerItem');
   
    // Masquer les boutons de connexion/inscription si l'utilisateur est authentifié
    if (isAuthenticated) {
        if (loginItem) loginItem.style.display = 'none';
        if (registerItem) registerItem.style.display = 'none';
    }
   
    // Fonction pour basculer le menu mobile
    function toggleMenu() {
        menuOpen = !menuOpen;
        if (menuIcon) {
            menuIcon.className = menuOpen
                ? 'ri-close-line ri-24px align-middle'
                : 'ri-menu-fill ri-24px align-middle';
        }
    }
   
    // Ajouter l'écouteur d'événement pour le bouton de menu
    if (toggleMenuBtn) {
        toggleMenuBtn.addEventListener('click', toggleMenu);
    }
   
    // Fonction pour gérer le défilement et mettre à jour la section active
    function handleScroll() {
        const sections = [
            'landingHero',
            'landingPricing',
            'landingGestion',
            'landingFAQ'
        ];
       
        // Supprimer la classe active de tous les liens
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
       
        // Vérifier quelle section est visible
        for (const sectionId of sections) {
            const element = document.getElementById(sectionId);
            if (element) {
                const rect = element.getBoundingClientRect();
                if (rect.top <= 100 && rect.bottom >= 100) {
                    // Ajouter la classe active au lien correspondant
                    const navLink = document.getElementById('nav-' + sectionId);
                    if (navLink) {
                        navLink.classList.add('active');
                    }
                    break;
                }
            }
        }
    }
   
    // Appeler handleScroll une fois au chargement
    handleScroll();
   
    // Ajouter l'écouteur d'événement pour le défilement
    window.addEventListener('scroll', handleScroll);
   
    // Exemple : ajouter un événement de clic sur un bouton du jumbotron
    const btnEnSavoirPlus = document.querySelector('.jumbotron .btn');
    if (btnEnSavoirPlus) {
        btnEnSavoirPlus.addEventListener('click', function() {
            alert('Merci de votre intérêt pour Porteil-liveERPinnov !');
        });
    }
});
