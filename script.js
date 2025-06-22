        // Mobile Menu Toggle
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');

        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Smooth Scrolling for Anchor Links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    if (!mobileMenu.classList.contains('hidden')) {
                        mobileMenu.classList.add('hidden');
                    }
                }
            });
        });

        // Form Submission (Demo)
        // const contactForm = document.querySelector('form');
        // contactForm.addEventListener('submit', function(e) {
        //     e.preventDefault();
        //     alert('Obrigado por entrar em contato! Sua mensagem foi enviada com sucesso. (Esta é uma demonstração)');
        //     contactForm.reset();
        // });

        //seja um cuidador
        document.querySelectorAll('.button-seja-cuidador').forEach(button => {
            button.addEventListener('click', () => {
                const link = document.createElement('a');
                link.href = 'https://forms.gle/oXuuqNs4JYT76Qyi9';
                link.target = '_blank';
                link.style.display = 'none'; // Hide the link element
                document.body.appendChild(link); // Append to body
                link.click();
            });
        });
        //Encontre um cuidador
        document.querySelectorAll('.button-encontrar-cuidador').forEach(button => {
            button.addEventListener('click', () => {
                const link = document.createElement('a');
                link.href = 'https://forms.gle/n89CFwHbUKkYUvq59';
                link.target = '_blank';
                link.style.display = 'none'; // Hide the link element
                document.body.appendChild(link); // Append to body
                link.click();
            });
        });
