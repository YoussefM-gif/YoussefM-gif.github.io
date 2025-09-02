document.addEventListener('DOMContentLoaded', function() {
    // Code existant pour le menu...
    const toggleButton = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (toggleButton && navLinks) {
        toggleButton.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Vérification si le formulaire existe avant d'ajouter l'événement
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (e) => {
            const email = document.querySelector('#email').value;
            const name = document.querySelector('#name').value;

            if (!email.includes('@')) {
                alert('Veuillez entrer une adresse email valide.');
                e.preventDefault();
            }

            if (name.trim() === '') {
                alert('Veuillez entrer votre nom.');
                e.preventDefault();
            }
        });
    }

    // GESTION SIMPLE DE LA VIDÉO DEMO
    const demoBtn = document.querySelector('.demo-btn');
    const demoModal = document.getElementById('demo-modal');
    
    console.log('Bouton démo:', demoBtn);
    console.log('Modal démo:', demoModal);
    
    if (demoBtn && demoModal) {
        demoBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Clic sur démo - ouverture modal');
            
            // Ouvrir le modal
            demoModal.style.display = 'flex';
            demoModal.classList.add('active');
            document.body.style.overflow = 'hidden';
            
            // Configurer et démarrer la vidéo
            const video = demoModal.querySelector('#mauriturgence-video');
            if (video) {
                // Attendre que la vidéo soit prête
                video.addEventListener('loadeddata', function() {
                    // Réinitialiser la vidéo au début
                    video.currentTime = 0;
                    // Définir la vitesse à 1.5x
                    video.playbackRate = 1.5;
                    // Unmute pour la lecture
                    video.muted = false;
                    console.log('Vidéo prête: vitesse 1.5x configurée');
                });
                
                // Si la vidéo est déjà chargée
                if (video.readyState >= 3) {
                    video.currentTime = 0;
                    video.playbackRate = 1.5;
                    video.muted = false;
                }
                
                // Lancer la lecture automatiquement
                video.play().catch(function(error) {
                    console.log('Lecture automatique bloquée par le navigateur:', error);
                    // Afficher un message à l'utilisateur
                    video.muted = false;
                });
                
                console.log('Vidéo lancée en automatique à 1.5x');
            }
        });
        
        // Fermer le modal
        const closeBtn = demoModal.querySelector('.close-info-modal');
        const closeModalBtn = demoModal.querySelector('.close-modal-btn');
        
        if (closeBtn) {
            closeBtn.addEventListener('click', function() {
                console.log('Fermeture modal');
                demoModal.style.display = 'none';
                demoModal.classList.remove('active');
                document.body.style.overflow = 'auto';
                const video = demoModal.querySelector('video');
                if (video) video.pause();
            });
        }
        
        if (closeModalBtn) {
            closeModalBtn.addEventListener('click', function() {
                console.log('Fermeture modal via bouton');
                demoModal.style.display = 'none';
                demoModal.classList.remove('active');
                document.body.style.overflow = 'auto';
                const video = demoModal.querySelector('video');
                if (video) video.pause();
            });
        }
        
        // Fermer en cliquant à l'extérieur
        demoModal.addEventListener('click', function(e) {
            if (e.target === demoModal) {
                demoModal.style.display = 'none';
                demoModal.classList.remove('active');
                document.body.style.overflow = 'auto';
                const video = demoModal.querySelector('video');
                if (video) video.pause();
            }
        });
    }

    // Fonctionnalité pour agrandir les diagrammes UML
    const modal = document.createElement('div');
    modal.className = 'diagram-modal';
    modal.innerHTML = `
        <div class="diagram-modal-content">
            <button class="close-modal">&times;</button>
            <img src="" alt="Diagramme agrandi">
        </div>
    `;
    document.body.appendChild(modal);

    const modalImg = modal.querySelector('img');
    const closeBtn = modal.querySelector('.close-modal');

    // Ajouter l'événement de clic sur toutes les images de diagrammes
    const diagramImages = document.querySelectorAll('.diagram-image');
    diagramImages.forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = 'block';
            modalImg.src = this.src;
            modalImg.alt = this.alt;
            document.body.style.overflow = 'hidden';
        });
    });

    // Fermer le modal des diagrammes
    closeBtn.addEventListener('click', closeDiagramModal);
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeDiagramModal();
        }
    });

    // Fermer avec la touche Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            if (modal.style.display === 'block') {
                closeDiagramModal();
            }
            if (demoModal && demoModal.style.display === 'flex') {
                demoModal.style.display = 'none';
                demoModal.classList.remove('active');
                document.body.style.overflow = 'auto';
                const video = demoModal.querySelector('video');
                if (video) video.pause();
            }
        }
    });

    function closeDiagramModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});