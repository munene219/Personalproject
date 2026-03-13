// Wait for the page to load
document.addEventListener('DOMContentLoaded', function() {
    
    // ========== MUSIC PLAYER ==========
    const music = document.getElementById('bgMusic');
    const musicBtn = document.getElementById('musicToggle');
    
    if (music && musicBtn) {
        music.volume = 0.5;
        
        music.addEventListener('canplaythrough', function() {
            musicBtn.textContent = '🔊 Ready to Play';
        });

        music.addEventListener('error', function() {
            musicBtn.textContent = '⚠️ Music Unavailable';
            musicBtn.disabled = true;
        });

        musicBtn.addEventListener('click', function() {
            if (music.paused) {
                music.play().then(() => {
                    musicBtn.textContent = '🔊 Playing';
                }).catch(() => {
                    musicBtn.textContent = '🔇 Click to Play';
                });
            } else {
                music.pause();
                musicBtn.textContent = '🔇 Paused';
            }
        });
    }

    // ========== LOVE CHECKBOXES ==========
    const loveYes = document.getElementById('loveYes');
    const loveNo = document.getElementById('loveNo');
    const loveResponse = document.getElementById('loveResponse');
    const question1 = document.getElementById('question1');
    const question2 = document.getElementById('question2');
    const question3 = document.getElementById('question3');
    const gallerySection = document.getElementById('gallerySection');
    const loveLetterSection = document.getElementById('loveLetterSection');

    const dateYes = document.getElementById('dateYes');
    const dateNo = document.getElementById('dateNo');
    const dateResponse = document.getElementById('dateResponse');

    const proposalYes = document.getElementById('proposalYes');
    const proposalNo = document.getElementById('proposalNo');
    const proposalResponse = document.getElementById('proposalResponse');

    if (loveYes && loveNo) {
        loveYes.addEventListener('change', function() {
            if (this.checked) {
                loveNo.checked = false;
                loveResponse.innerHTML = '<span class="success">✨ Aww, I knew it! You have excellent taste! ✨</span>';
                
                setTimeout(() => {
                    question1.classList.remove('active');
                    question2.classList.add('active');
                    question2.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 1500);
            }
        });

        loveNo.addEventListener('change', function() {
            if (this.checked) {
                loveYes.checked = false;
                loveResponse.innerHTML = '<span class="error">😱 Wait... that\'s not allowed! Try again! 😘</span>';
                
                setTimeout(() => {
                    this.checked = false;
                    loveResponse.innerHTML = '<span class="playful">That\'s better! Now be honest... ❤️</span>';
                    
                    setTimeout(() => {
                        loveResponse.innerHTML = '';
                    }, 2000);
                }, 1500);
            }
        });
    }

    if (dateYes && dateNo) {
        dateYes.addEventListener('change', function() {
            if (this.checked) {
                dateNo.checked = false;
                dateResponse.innerHTML = '<span class="success">🎉 YES! Get ready for the best date ever! 🎉</span>';
                
                gallerySection.classList.remove('hidden');
                
                setTimeout(() => {
                    question2.classList.remove('active');
                    question3.classList.add('active');
                    question3.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 2000);
            }
        });

        dateNo.addEventListener('change', function() {
            if (this.checked) {
                dateYes.checked = false;
                dateResponse.innerHTML = '<span class="playful">🤔 Hmm, let me rephrase that... How about YES? 💫</span>';
                
                setTimeout(() => {
                    this.checked = false;
                    dateResponse.innerHTML = '<span class="playful">Much better! Now try the other box 😊</span>';
                    
                    setTimeout(() => {
                        dateResponse.innerHTML = '';
                    }, 2000);
                }, 1500);
            }
        });
    }

    if (proposalYes && proposalNo) {
        proposalYes.addEventListener('click', function() {
            createConfetti();
            proposalResponse.innerHTML = '<span class="success">💖 YOU\'VE MADE ME THE HAPPIEST PERSON ALIVE! 💖</span>';
            
            setTimeout(() => {
                loveLetterSection.classList.remove('hidden');
                loveLetterSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 1000);
        });

        proposalNo.addEventListener('click', function() {
            proposalResponse.innerHTML = '<span class="playful">Okay, I\'ll ask again... and again... and again! 😘</span>';
            
            setTimeout(() => {
                proposalResponse.innerHTML = '';
            }, 2000);
        });
    }

    function createConfetti() {
        const colors = ['#ff69b4', '#add8e6', '#ffffff', '#c0c0c0', '#ffc0cb'];
        
        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.width = Math.random() * 10 + 5 + 'px';
            confetti.style.height = confetti.style.width;
            confetti.style.opacity = Math.random();
            
            document.body.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, 5000);
        }
    }
});
