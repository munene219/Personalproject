* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Montserrat', sans-serif;
    background: linear-gradient(135deg, #ffc0cb 0%, #ffffff 50%, #add8e6 100%);
    min-height: 100vh;
    color: #4a4a4a;
}

.container {
    width: 100%;
    max-width: 1200px;
    padding: 20px;
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* Password Page Styles */
.password-box {
    background: rgba(255, 255, 255, 0.95);
    padding: 40px;
    border-radius: 20px;
    box-shadow: 0 10px 40px rgba(192, 192, 192, 0.3);
    text-align: center;
    max-width: 400px;
    margin: 0 auto;
    border: 1px solid rgba(255, 255, 255, 0.5);
}

.heart-icon {
    font-size: 48px;
    margin-bottom: 20px;
    animation: pulse 2s infinite;
}

h1 {
    font-family: 'Playfair Display', serif;
    color: #ff69b4;
    margin-bottom: 10px;
    font-size: 28px;
}

.subtitle {
    color: #808080;
    margin-bottom: 30px;
    font-size: 16px;
}

input {
    width: 100%;
    padding: 15px;
    margin-bottom: 20px;
    border: 2px solid #add8e6;
    border-radius: 10px;
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
    transition: all 0.3s;
}

input:focus {
    outline: none;
    border-color: #ff69b4;
    box-shadow: 0 0 10px rgba(255, 105, 180, 0.3);
}

button {
    background: linear-gradient(135deg, #ff69b4 0%, #add8e6 100%);
    color: white;
    border: none;
    padding: 15px 40px;
    border-radius: 50px;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    transition: transform 0.3s, box-shadow 0.3s;
    border: 1px solid rgba(255, 255, 255, 0.3);
}

button:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 20px rgba(255, 105, 180, 0.4);
}

.error-message {
    color: #ff69b4;
    margin-top: 15px;
    font-size: 14px;
    min-height: 20px;
}

.hint {
    margin-top: 20px;
    color: #c0c0c0;
}

/* Music Bar */
.music-bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.95);
    padding: 15px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 20px rgba(255, 105, 180, 0.2);
    z-index: 1000;
    backdrop-filter: blur(10px);
}

.music-info {
    display: flex;
    gap: 15px;
    align-items: center;
}

.now-playing {
    color: #ff69b4;
    font-weight: 600;
}

.song-title {
    color: #4a4a4a;
}

.music-btn {
    background: linear-gradient(135deg, #ff69b4, #add8e6);
    color: white;
    border: none;
    padding: 10px 25px;
    border-radius: 50px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s;
}

.music-btn:hover {
    transform: scale(1.05);
    box-shadow: 0 5px 20px rgba(255, 105, 180, 0.4);
}

/* Main Content */
.content-wrapper {
    max-width: 1200px;
    margin: 80px auto 40px;
    padding: 20px;
}

.main-title {
    font-size: 48px;
    color: #ff69b4;
    text-align: center;
    margin-bottom: 10px;
    font-family: 'Playfair Display', serif;
}

.heart {
    animation: pulse 2s infinite;
    display: inline-block;
}

/* Quiz Container */
.quiz-container {
    max-width: 600px;
    margin: 40px auto;
    padding: 20px;
}

.quiz-box {
    background: rgba(255, 255, 255, 0.95);
    border-radius: 30px;
    padding: 40px;
    box-shadow: 0 20px 60px rgba(255, 105, 180, 0.2);
    border: 2px solid rgba(255, 255, 255, 0.5);
}

.question {
    display: none;
    opacity: 0;
    transition: opacity 0.5s ease;
}

.question.active {
    display: block;
    opacity: 1;
}

.question-text {
    font-size: 24px;
    color: #ff69b4;
    margin-bottom: 30px;
    font-family: 'Playfair Display', serif;
    font-weight: 700;
}

/* Checkbox Styles */
.checkbox-group {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 30px 0;
}

.checkbox-label {
    display: flex;
    align-items: center;
    gap: 15px;
    cursor: pointer;
    font-size: 18px;
    color: #4a4a4a;
    padding: 15px 20px;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 15px;
    transition: all 0.3s;
    border: 2px solid transparent;
}

.checkbox-label:hover {
    transform: translateX(10px);
    border-color: #add8e6;
    background: white;
}

.checkbox-label input[type="checkbox"] {
    width: 20px;
    height: 20px;
    cursor: pointer;
    accent-color: #ff69b4;
}

/* Response Messages */
.response-message {
    min-height: 50px;
    margin-top: 20px;
    text-align: center;
    font-size: 18px;
}

.success {
    color: #ff69b4;
    animation: bounce 0.5s;
}

.error {
    color: #ff4444;
    animation: shake 0.5s;
}

.playful {
    color: #add8e6;
    font-style: italic;
}

/* Gallery Section */
.gallery-section {
    margin: 60px auto;
    padding: 40px;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 30px;
}

.section-title {
    color: #ff69b4;
    text-align: center;
    margin-bottom: 40px;
    font-size: 32px;
    font-family: 'Playfair Display', serif;
}

.photo-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    padding: 20px;
}

.photo-card {
    aspect-ratio: 1;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
}

.photo-card:hover {
    transform: scale(1.05);
}

.photo-placeholder {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.photo-icon {
    font-size: 48px;
    margin-bottom: 10px;
}

/* Love Letter Section */
.love-letter-section {
    margin: 60px auto;
    max-width: 600px;
}

.love-letter {
    background: white;
    padding: 50px;
    border-radius: 30px;
    box-shadow: 0 20px 60px rgba(255, 105, 180, 0.2);
    position: relative;
    border: 2px solid #ffc0cb;
}

.love-letter::before {
    content: '💌';
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 40px;
    background: white;
    padding: 10px;
    border-radius: 50%;
}

.letter-content {
    font-size: 18px;
    line-height: 1.8;
    color: #4a4a4a;
}

.inside-joke {
    color: #ff69b4;
    font-style: italic;
    margin: 20px 0;
}

.signature {
    margin-top: 30px;
    font-family: 'Playfair Display', serif;
    font-size: 24px;
    color: #ff69b4;
}

/* Proposal Section */
.proposal-box {
    text-align: center;
    padding: 30px;
}

.proposal-title {
    font-size: 36px;
    color: #ff69b4;
    margin-bottom: 30px;
    font-family: 'Playfair Display', serif;
    animation: pulse 2s infinite;
}

.proposal-options {
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
}

.proposal-btn {
    padding: 15px 40px;
    font-size: 24px;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s;
    font-weight: bold;
}

.yes-btn {
    background: linear-gradient(135deg, #ff69b4, #ffc0cb);
    color: white;
}

.yes-btn:hover {
    transform: scale(1.1);
    box-shadow: 0 10px 30px rgba(255, 105, 180, 0.4);
}

.no-btn {
    background: linear-gradient(135deg, #808080, #c0c0c0);
    color: white;
}

.no-btn:hover {
    transform: scale(0.95);
    background: linear-gradient(135deg, #ff69b4, #add8e6);
}

/* Confetti Animation */
.confetti {
    position: fixed;
    top: -10px;
    animation: fall linear forwards;
    z-index: 1000;
    pointer-events: none;
}

@keyframes fall {
    to {
        transform: translateY(100vh) rotate(360deg);
    }
}

/* Utility Classes */
.hidden {
    display: none !important;
}

/* Animations */
@keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
}

@keyframes shake {
    0%, 100% { transform: translateX(0); }
    10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
    20%, 40%, 60%, 80% { transform: translateX(5px); }
}

@keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
}

/* Responsive Design */
@media (max-width: 768px) {
    .password-box {
        padding: 30px 20px;
        margin: 20px;
    }
    
    h1 {
        font-size: 24px;
    }
    
    .main-title {
        font-size: 36px;
    }
    
    .quiz-box {
        padding: 30px 20px;
    }
    
    .question-text {
        font-size: 20px;
    }
    
    .checkbox-label {
        font-size: 16px;
    }
    
    .proposal-title {
        font-size: 28px;
    }
    
    .proposal-btn {
        padding: 12px 30px;
        font-size: 20px;
    }
    
    .music-bar {
        padding: 10px 20px;
        flex-direction: column;
        gap: 10px;
        text-align: center;
    }
}
