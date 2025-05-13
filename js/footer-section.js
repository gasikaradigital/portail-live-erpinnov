// Définir l'année courante dans le footer
document.addEventListener('DOMContentLoaded', function() {
    // Mettre à jour l'année en cours
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;
    
    // Gestion du formulaire de newsletter
    const newsletterForm = document.getElementById('newsletter-form');
    const newsletterInput = document.getElementById('newsletter-1');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = newsletterInput.value.trim();
            if (!email) {
                return;
            }
            
            // Simulation d'envoi de newsletter
            subscribeNewsletter(email);
        });
    }
    
    // Animation des éléments au scroll
    animateOnScroll();
});

/**
 * Fonction pour s'abonner à la newsletter
 * @param {string} email - L'email à abonner
 */
function subscribeNewsletter(email) {
    // Simuler une requête API
    console.log('Newsletter subscription:', email);
    
    // Réinitialiser le champ
    document.getElementById('newsletter-1').value = '';
    
    // Ajouter une notification de succès (optionnel)
    const formContainer = document.querySelector('.form-floating');
    
    // Créer un élément de notification
    const notification = document.createElement('div');
    notification.className = 'alert alert-success mt-2';
    notification.style.fontSize = '0.8rem';
    notification.textContent = 'Merci de votre inscription !';
    
    // Ajouter la notification après le conteneur du formulaire
    formContainer.parentNode.insertBefore(notification, formContainer.nextSibling);
    
    // Supprimer la notification après 3 secondes
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

/**
 * Ajouter des animations au défilement
 */
function animateOnScroll() {
    // Options pour l'observateur d'intersection
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    // Créer un observateur pour animer les éléments au scroll
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, options);
    
    // Sélectionner tous les éléments du footer à animer
    const footerElements = document.querySelectorAll('.footer-title, .footer-link, .footer-text, .footer-logo-description');
    
    // Observer chaque élément
    footerElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(element);
    });
}