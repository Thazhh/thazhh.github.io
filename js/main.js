document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
           
            const href = this.getAttribute('href');
            if (href.charAt(0) === '#') {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.feature, .app-card, .tutorial-card');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('fade-in');
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();
    
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)';
        });
        
        ctaButton.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        });
        
        ctaButton.addEventListener('click', function() {
            // Chuyển đến trang ứng dụng khi nhấp vào nút CTA
            window.location.href = 'app.html';
        });
    }
    
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.');
            this.reset();
        });
    }
    
    const subscribeForm = document.getElementById('subscribe-form');
    if (subscribeForm) {
        subscribeForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = document.getElementById('notify-email');
            const email = emailInput.value.trim();
            
            if (email) {
                alert(`Cảm ơn bạn đã đăng ký! Chúng tôi sẽ thông báo cho ${email} khi trang web ra mắt.`);
                emailInput.value = '';

                const successMessage = document.createElement('div');
                successMessage.className = 'success-message';
                successMessage.textContent = 'Đăng ký thành công!';
                subscribeForm.appendChild(successMessage);
                
                setTimeout(() => {
                    successMessage.remove();
                }, 3000);
            }
        });
    }
    

    const countdownElement = document.getElementById('countdown');
    if (countdownElement) {

        const launchDate = new Date();
        launchDate.setDate(launchDate.getDate() + 30);

        function updateCountdown() {
            const currentDate = new Date();
            const difference = launchDate - currentDate;
            
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);
            
            countdownElement.innerHTML = `
                <div class="countdown-item">${days}<span>Ngày</span></div>
                <div class="countdown-item">${hours}<span>Giờ</span></div>
                <div class="countdown-item">${minutes}<span>Phút</span></div>
                <div class="countdown-item">${seconds}<span>Giây</span></div>
            `;
        }
        

        updateCountdown();
        setInterval(updateCountdown, 1000);
    }
    

    const comingSoonSection = document.querySelector('.coming-soon');
    if (comingSoonSection) {
        comingSoonSection.classList.add('animate');
    }
});