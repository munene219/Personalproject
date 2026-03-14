// ========== START SCREEN AND MUSIC HANDLING ==========
const startScreen = document.getElementById('startScreen');
const startButton = document.getElementById('startExperience');
const musicBar = document.getElementById('musicBar');
const mainContent = document.getElementById('mainContent');
const music = document.getElementById('bgMusic');
const musicToggle = document.getElementById('musicToggle');

let isMusicPlaying = false;

if (music) {
    music.volume = 0.5;
    
    // Check if audio can play
    music.addEventListener('canplaythrough', function() {
        console.log('Audio loaded successfully');
    });
    
    music.addEventListener('error', function(e) {
        console.error('Audio error:', e);
        if (musicToggle) {
            musicToggle.textContent = '⚠️ Audio Error';
            musicToggle.disabled = true;
        }
    });
}

if (startButton) {
    startButton.addEventListener('click', function() {
        // Hide start screen
        if (startScreen) {
            startScreen.classList.add('hidden');
        }
        
        // Show music bar
        if (musicBar) {
            musicBar.style.display = 'flex';
        }
        
        // Show main content
        if (mainContent) {
            mainContent.style.opacity = '1';
        }
        
        // Try to play music - THIS IS THE KEY PART
        if (music) {
            // Browser requires user interaction for play()
            music.play()
                .then(() => {
                    console.log('Music started successfully');
                    isMusicPlaying = true;
                    if (musicToggle) {
                        musicToggle.textContent = '🎨 Pause';
                    }
                })
                .catch(error => {
                    console.log('Music autoplay failed:', error);
                    // Show message that user needs to click play button
                    if (musicToggle) {
                        musicToggle.textContent = '🎨 Click to Play';
                    }
                });
        }
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Music toggle button
if (musicToggle && music) {
    musicToggle.addEventListener('click', function() {
        if (isMusicPlaying) {
            music.pause();
            musicToggle.textContent = '🎨 Play';
            isMusicPlaying = false;
        } else {
            music.play()
                .then(() => {
                    musicToggle.textContent = '🎨 Pause';
                    isMusicPlaying = true;
                })
                .catch(error => {
                    console.error('Playback failed:', error);
                    musicToggle.textContent = '🎨 Try Again';
                });
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    
    

    // ========== SLIDESHOW ==========
    function initSlideshow() {
        const slides = document.querySelectorAll('.slide');
        const dotsContainer = document.getElementById('slideshowDots');
        const prevBtn = document.getElementById('prevSlide');
        const nextBtn = document.getElementById('nextSlide');
        
        if (!slides.length || !dotsContainer || !prevBtn || !nextBtn) return;
        
        let currentSlide = 0;
        let autoplay = null;
        
        dotsContainer.innerHTML = '';
        
        slides.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.className = `dot ${index === 0 ? 'active' : ''}`;
            dot.addEventListener('click', () => goToSlide(index));
            dotsContainer.appendChild(dot);
        });
        
        const dots = document.querySelectorAll('.dot');
        
        function goToSlide(index) {
            slides[currentSlide].classList.remove('active');
            if (dots[currentSlide]) {
                dots[currentSlide].classList.remove('active');
            }
            
            currentSlide = (index + slides.length) % slides.length;
            
            slides[currentSlide].classList.add('active');
            if (dots[currentSlide]) {
                dots[currentSlide].classList.add('active');
            }
        }
        
        function nextSlide() {
            goToSlide(currentSlide + 1);
        }
        
        function prevSlide() {
            goToSlide(currentSlide - 1);
        }
        
        prevBtn.addEventListener('click', (e) => {
            e.preventDefault();
            prevSlide();
            if (autoplay) {
                clearInterval(autoplay);
                autoplay = setInterval(nextSlide, 5000);
            }
        });
        
        nextBtn.addEventListener('click', (e) => {
            e.preventDefault();
            nextSlide();
            if (autoplay) {
                clearInterval(autoplay);
                autoplay = setInterval(nextSlide, 5000);
            }
        });
        
        autoplay = setInterval(nextSlide, 5000);
        
        const slideshow = document.querySelector('.artistic-slideshow');
        if (slideshow) {
            slideshow.addEventListener('mouseenter', () => {
                if (autoplay) {
                    clearInterval(autoplay);
                    autoplay = null;
                }
            });
            
            slideshow.addEventListener('mouseleave', () => {
                if (!autoplay) {
                    autoplay = setInterval(nextSlide, 5000);
                }
            });
        }
    }

    // ========== QUESTIONS ==========
    const loveYes = document.getElementById('loveYes');
    const loveNo = document.getElementById('loveNo');
    const loveResponse = document.getElementById('loveResponse');
    const question1 = document.getElementById('question1');
    const question2 = document.getElementById('question2');
    const gallerySection = document.getElementById('gallerySection');
    const loveLetterSection = document.getElementById('loveLetterSection');

    const dateYes = document.getElementById('dateYes');
    const dateNo = document.getElementById('dateNo');
    const dateResponse = document.getElementById('dateResponse');

    const mysteryDateYes = document.getElementById('mysteryDateYes');
    const mysteryDateNo = document.getElementById('mysteryDateNo');
    const mysteryDateResponse = document.getElementById('mysteryDateResponse');
    const questionDate = document.getElementById('questionDate');
    const questionProposal = document.getElementById('questionProposal');
    
    const proposalYes = document.getElementById('proposalYes');
    const proposalNo = document.getElementById('proposalNo');
    const proposalResponse = document.getElementById('proposalResponse');

    // Question 1: Love
    if (loveYes && loveNo) {
        loveYes.addEventListener('change', function() {
            if (this.checked) {
                loveNo.checked = false;
                loveResponse.innerHTML = '<span class="success">✨ First stroke complete! You\'re amazing! ✨</span>';
                
                setTimeout(() => {
                    question1.classList.remove('active');
                    question2.classList.add('active');
                    document.getElementById('layer3')?.classList.add('visible');
                    question2.scrollIntoView({ behavior: 'smooth' });
                }, 1500);
            }
        });

        loveNo.addEventListener('change', function() {
            if (this.checked) {
                loveYes.checked = false;
                loveResponse.innerHTML = '<span class="error">😱 That brush stroke doesn\'t fit! Try again! 🎨</span>';
                
                setTimeout(() => {
                    this.checked = false;
                    loveResponse.innerHTML = '<span class="playful">That\'s better! Now paint with your heart ❤️</span>';
                    setTimeout(() => {
                        loveResponse.innerHTML = '';
                    }, 2000);
                }, 1500);
            }
        });
    }

    // Question 2: Date & Slideshow
    if (dateYes && dateNo) {
        dateYes.addEventListener('change', function() {
            if (this.checked) {
                dateNo.checked = false;
                dateResponse.innerHTML = '<span class="success">🌈 YES! Adding vibrant colors to our story! 🌈</span>';
                
                if (gallerySection) {
                    gallerySection.classList.remove('hidden');
                    setTimeout(() => {
                        initSlideshow();
                        gallerySection.scrollIntoView({ behavior: 'smooth' });
                        document.getElementById('gallerySection')?.classList.add('visible');
                    }, 500);
                }
                
                setTimeout(() => {
                    if (question2 && questionDate) {
                        question2.classList.remove('active');
                        questionDate.classList.add('active');
                        document.getElementById('layer5')?.classList.add('visible');
                        questionDate.scrollIntoView({ behavior: 'smooth' });
                    }
                }, 2000);
            }
        });

        dateNo.addEventListener('change', function() {
            if (this.checked) {
                dateYes.checked = false;
                dateResponse.innerHTML = '<span class="playful">🎨 Let\'s add more color... try YES! 💫</span>';
                
                setTimeout(() => {
                    this.checked = false;
                    dateResponse.innerHTML = '<span class="playful">Much better! 😊</span>';
                    setTimeout(() => {
                        dateResponse.innerHTML = '';
                    }, 2000);
                }, 1500);
            }
        });
    }

    // Question 3: Mystery Date
    if (mysteryDateYes && mysteryDateNo) {
        mysteryDateYes.addEventListener('change', function() {
            if (this.checked) {
                mysteryDateNo.checked = false;
                mysteryDateResponse.innerHTML = '<span class="success">🎭 YES! February 16th will be magical! ✨</span>';
                
                setTimeout(() => {
                    if (questionDate) {
                        questionDate.classList.remove('active');
                    }
                    if (questionProposal) {
                        questionProposal.classList.add('active');
                        document.getElementById('layer6')?.classList.add('visible');
                        questionProposal.scrollIntoView({ behavior: 'smooth' });
                    }
                }, 1500);
            }
        });

        mysteryDateNo.addEventListener('change', function() {
            if (this.checked) {
                mysteryDateYes.checked = false;
                mysteryDateResponse.innerHTML = '<span class="playful">🎨 The mystery gets better... say YES? 💫</span>';
                
                setTimeout(() => {
                    this.checked = false;
                    mysteryDateResponse.innerHTML = '<span class="playful">That\'s the spirit! 😊</span>';
                    setTimeout(() => {
                        mysteryDateResponse.innerHTML = '';
                    }, 2000);
                }, 1500);
            }
        });
    }

    // Question 4: Proposal
    if (proposalYes && proposalNo) {
        proposalYes.addEventListener('click', function() {
            createConfetti();
            if (proposalResponse) {
                proposalResponse.innerHTML = '<span class="success">💖 YOU\'VE COMPLETED OUR MASTERPIECE! 💖</span>';
            }
            
            setTimeout(() => {
                if (loveLetterSection) {
                    loveLetterSection.classList.remove('hidden');
                    loveLetterSection.scrollIntoView({ behavior: 'smooth' });
                    document.getElementById('loveLetterSection')?.classList.add('visible');
                }
            }, 1000);
        });

        proposalNo.addEventListener('click', function() {
            if (proposalResponse) {
                proposalResponse.innerHTML = '<span class="playful">Every masterpiece takes time... ask me again? 😘</span>';
                setTimeout(() => {
                    proposalResponse.innerHTML = '';
                }, 2000);
            }
        });
    }

    // Confetti
    function createConfetti() {
        const colors = ['#ff69b4', '#add8e6', '#ffffff', '#c0c0c0', '#ffc0cb'];
        for (let i = 0; i < 150; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.width = (Math.random() * 15 + 5) + 'px';
            confetti.style.height = confetti.style.width;
            confetti.style.opacity = Math.random();
            document.body.appendChild(confetti);
            setTimeout(() => {
                confetti.remove();
            }, 5000);
        }
    }

    // Layer Observer
    const layers = document.querySelectorAll('.layer');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.3 });

    layers.forEach(layer => observer.observe(layer));
});
