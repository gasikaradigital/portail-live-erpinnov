document.addEventListener('DOMContentLoaded', function() {
    // Gestion manuelle des accordéons pour maintenir le comportement de React
    const accordionButtons = document.querySelectorAll('.accordion-button');
    
    accordionButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Ferme tous les autres accordéons
            accordionButtons.forEach(otherButton => {
                if (otherButton !== button) {
                    otherButton.classList.add('collapsed');
                    
                    // Récupère l'ID de l'accordéon cible
                    const targetId = otherButton.getAttribute('data-bs-target').replace('#', '');
                    const targetContent = document.getElementById(targetId);
                    
                    // Ferme le contenu
                    if (targetContent) {
                        targetContent.classList.remove('show');
                    }
                }
            });
            
            // Bascule l'état de l'accordéon actuel
            this.classList.toggle('collapsed');
            
            // Récupère l'ID de l'accordéon cible
            const targetId = this.getAttribute('data-bs-target').replace('#', '');
            const targetContent = document.getElementById(targetId);
            
            // Bascule l'affichage du contenu
            if (targetContent) {
                targetContent.classList.toggle('show');
            }
        });
    });
    
    // Animation sur défilement (similaire à AOS)
    function animateOnScroll() {
        const elements = document.querySelectorAll('.accordion-item');
        
        elements.forEach((element, index) => {
            const position = element.getBoundingClientRect();
            
            // Si l'élément est visible
            if(position.top < window.innerHeight && position.bottom >= 0) {
                setTimeout(() => {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }
    
    // Initialisation du style pour l'animation
    const accordionItems = document.querySelectorAll('.accordion-item');
    accordionItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Déclenche l'animation au chargement
    setTimeout(animateOnScroll, 300);
    
    // Déclenche l'animation au défilement
    window.addEventListener('scroll', animateOnScroll);
});