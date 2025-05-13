const pricingPlans = [
    {
      id: 1,
      name: 'Basic',
      price: '5.00',
      priceLocal: '25 500 MGA',
      featured: false,
      features: [
        'Gestion des tiers',
        'Gestion des produits',
        'CRM',
        'Devis et facturation',
        'Comptabilité simple',
        'Banque',
        'Caisse'
      ],
      description: "Idéal pour les indépendants ou petites entreprises avec des besoins simples.",
      buttonText: 'Essayer gratuitement'
    },
    {
      id: 2,
      name: 'Standard',
      price: '8.00',
      priceLocal: '40.000 MGA',
      featured: true,
      features: [
        'Modules Basic',
        'Rapports et statistiques',
        'Gestion des stocks',
        'Email intégré'
      ],
      description: "Pour les petites entreprises nécessitant une gestion avancée.",
      buttonText: 'Démarrer maintenant'
    },
    {
      id: 3,
      name: 'Premium',
      price: '16.00',
      priceLocal: '80.000 MGA',
      featured: false,
      features: [
        'Modules Standard',
        'Comptabilité analytique',
        'Site web synchronisé'
      ],
      description: "Offre complète pour les entreprises ayant des besoins avancés et une gestion d'équipe.",
      buttonText: 'Inscrivez-vous pour plus de détail'
    }
  ];
  
  const container = document.getElementById('pricingCardsContainer');
  
  pricingPlans.forEach((plan, index) => {
    const card = document.createElement('div');
    card.className = `col-lg-4 pricing-card`;
    card.style.animationDelay = `${index * 0.2}s`;
  
    card.innerHTML = `
      <div class="card ${plan.featured ? 'border-primary' : ''}">
        <div class="text-center">
          <h4 class="plan-name">${plan.name}</h4>
        </div>
        <div class="card-body d-flex flex-column">
          <div class="text-center mb-4">
            <div class="price-container">
              <span class="currency">€</span>
              <span class="price">${plan.price}</span>
              <span class="period">/mois</span>
            </div>
            <p class="text-muted fw-bold">${plan.priceLocal}</p>
          </div>
          <ul class="list-unstyled flex-grow-1">
            ${plan.features.map(f => `
              <li>
                <img src="assets/img/front-pages/icons/list-arrow-icon.png" alt="list arrow icon" class="me-2" />
                ${f}
              </li>
            `).join('')}
          </ul>
          <div class="mt-auto">
            <a href="/login" class="btn ${plan.featured ? 'btn-primary' : 'btn-outline-primary'}">
              ${plan.buttonText}
            </a>
          </div>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
  