// 平滑滾動效果
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 卡片動畫 - 當滾動到視窗內時淡入
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '0';
            entry.target.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, 100);
            
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// 觀察所有卡片
document.querySelectorAll('.card').forEach(card => {
    observer.observe(card);
});

// 滑鼠跟隨光暈效果
document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
            card.style.background = `
                radial-gradient(
                    600px circle at var(--mouse-x) var(--mouse-y),
                    rgba(0, 255, 136, 0.1),
                    transparent 40%
                ),
                #1a1a1a
            `;
        } else {
            card.style.background = '#1a1a1a';
        }
    });
});

// 點擊聯絡卡片時的特效
document.querySelectorAll('.contact-card').forEach(card => {
    card.addEventListener('click', function(e) {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
    });
});

// 規則項目的計數動畫
const ruleItems = document.querySelectorAll('.rule-item');
const ruleObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateX(-30px)';
                entry.target.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                }, 50);
            }, index * 100);
            
            ruleObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

ruleItems.forEach(item => {
    ruleObserver.observe(item);
});

// 資源連結的互動效果
document.querySelectorAll('.resource-link').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.querySelector('.link-icon').style.transform = 'rotate(15deg) scale(1.2)';
        this.querySelector('.link-icon').style.transition = 'transform 0.3s ease';
    });
    
    link.addEventListener('mouseleave', function() {
        this.querySelector('.link-icon').style.transform = 'rotate(0deg) scale(1)';
    });
});

// Logo 點擊效果
const logo = document.querySelector('.logo');
if (logo) {
    logo.addEventListener('click', () => {
        logo.style.transform = 'rotate(360deg) scale(1.2)';
        logo.style.transition = 'transform 0.6s ease';
        
        setTimeout(() => {
            logo.style.transform = 'rotate(0deg) scale(1)';
        }, 600);
    });
}

// 頁面載入完成後的歡迎效果
window.addEventListener('load', () => {
    const header = document.querySelector('header');
    header.style.opacity = '0';
    header.style.transform = 'translateY(-30px)';
    
    setTimeout(() => {
        header.style.transition = 'opacity 1s ease, transform 1s ease';
        header.style.opacity = '1';
        header.style.transform = 'translateY(0)';
    }, 100);
});

// 控制台訊息
console.log('%c🔒 MDCSL - Mingdao Cyber Security Lab', 'font-size: 20px; font-weight: bold; color: #00ff88;');
console.log('%c歡迎來到明道資安研究社！', 'font-size: 14px; color: #0099ff;');
console.log('%cJoin us: https://discord.gg/ZQjXKC3BDC', 'font-size: 12px; color: #b0b0b0;');
