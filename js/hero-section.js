// Code pour l'effet 3D du dashboard
document.addEventListener('DOMContentLoaded', function() {
    const dashboardPreview = document.querySelector('.dashboard-wrapper');
   
    // Fonction pour gérer l'effet 3D au mouvement de la souris
    function handleMouseMove(e) {
      if (!dashboardPreview) return;
     
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
     
      // Calculer la rotation en fonction de la position de la souris
      const x = (clientX - innerWidth / 2) / 25;
      const y = (clientY - innerHeight / 2) / 25;
     
      // Appliquer la transformation avec perspective
      dashboardPreview.style.transform =
        `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg)`;
    }
   
    // Ajouter l'écouteur d'événement pour le mouvement de la souris
    window.addEventListener('mousemove', handleMouseMove);
   
    // Fonction pour les animations au défilement
    function initAOS() {
      // Sélectionner tous les éléments avec l'attribut data-aos
      const aosElements = document.querySelectorAll('[data-aos]');
     
      // Fonction pour vérifier si un élément est visible
      function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
          rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.75 &&
          rect.bottom >= 0
        );
      }
     
      // Fonction pour ajouter la classe 'aos-animate' aux éléments visibles
      function checkVisibility() {
        aosElements.forEach(element => {
          if (isElementInViewport(element)) {
            // Ajouter la classe après un délai si spécifié
            const delay = element.getAttribute('data-aos-delay') || 0;
            setTimeout(() => {
              element.classList.add('aos-animate');
            }, delay);
          }
        });
      }
     
      // Initialiser les éléments avec la classe de base
      aosElements.forEach(element => {
        element.classList.add('aos-init');
      });
     
      // Vérifier la visibilité au chargement et au défilement
      checkVisibility();
      window.addEventListener('scroll', checkVisibility);
    }
   
    // Initialiser les animations
    initAOS();
  });
  