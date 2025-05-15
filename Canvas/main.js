const canvas = document.getElementById('houseCanvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = '#87CEEB';
ctx.fillRect(0, 0, canvas.width, canvas.height * 0.6);

ctx.fillStyle = '#7CFC00';
ctx.fillRect(0, canvas.height * 0.6, canvas.width, canvas.height * 0.4);

ctx.fillStyle = '#FFD700';
ctx.beginPath();
ctx.arc(1250, 80, 100, 0, Math.PI * 2);
ctx.fill();

ctx.fillStyle = '#f8d396';
ctx.fillRect(500, 350, 340, 150);

ctx.fillStyle = '#8B4513';
ctx.beginPath();
ctx.moveTo(450, 350);
ctx.lineTo(675, 200);
ctx.lineTo(900, 350);
ctx.closePath();
ctx.fill();

ctx.fillStyle = '#570202';
ctx.fillRect(650, 400, 60, 90);

ctx.fillStyle = '#FFD700';
ctx.beginPath();
ctx.arc(665, 450, 3, 0, Math.PI * 2);
ctx.fill();


ctx.fillStyle = '#235697';
ctx.fillRect(560, 400, 50, 50);
ctx.fillRect(740, 400, 50, 50);

ctx.strokeStyle = '#FFFFFF';
ctx.lineWidth = 2;
ctx.beginPath();
ctx.moveTo(585, 400);
ctx.lineTo(585, 450);
ctx.moveTo(610, 425);
ctx.lineTo(560, 425);
ctx.moveTo(740, 425);
ctx.lineTo(790, 425);
ctx.moveTo(765, 450);
ctx.lineTo(765, 400);
ctx.stroke();

ctx.fillStyle = '#8B4513';
ctx.fillRect(150, 400, 20, 130);

ctx.fillStyle = '#0f3693';
ctx.beginPath();
ctx.ellipse(300, 650, 120, 80, Math.PI, 0, Math.PI * 2);
ctx.fill();

ctx.fillStyle = '#006400';
ctx.beginPath();
ctx.arc(160, 380, 40, 0, Math.PI * 2);
ctx.fill();
ctx.beginPath();
ctx.arc(180, 350, 30, 0, Math.PI * 2);
ctx.fill();
ctx.beginPath();
ctx.arc(140, 350, 30, 0, Math.PI * 2);
ctx.fill();
ctx.beginPath();
ctx.arc(140, 400, 30, 0, Math.PI * 2);
ctx.fill();
ctx.beginPath();
ctx.arc(190, 400, 30, 0, Math.PI * 2);
ctx.fill();

ctx.fillStyle = '#696969';
ctx.fillRect(500, 290, 20, 50);

ctx.fillStyle = 'rgba(200, 200, 200, 0.7)';
ctx.beginPath();
ctx.arc(510, 290, 10, 0, Math.PI * 2);
ctx.arc(500, 280, 12, 0, Math.PI * 2);
ctx.arc(500, 270, 14, 0, Math.PI * 2);
ctx.arc(490, 260, 16, 0, Math.PI * 2);
ctx.fill();

const smokeParticles = [];

function createSmokeParticle() {
    return {
        x: 510 + (Math.random() * 10 - 5),
        y: 290,
        radius: 5 + Math.random() * 10,
        alpha: 0.7,
        speed: 0.5 + Math.random() * 0.5,
        drift: Math.random() * 0.4 - 0.2,
        life: 100 + Math.random() * 100
    };
}

let sunRayAngle = 0;
const sunCenterX = 1250;
const sunCenterY = 80;
const sunRadius = 100;
const rayCount = 12;

function animateSun() {
    ctx.fillStyle = '#87CEEB';
    ctx.fillRect(sunCenterX - sunRadius - 100, 0, 200 + sunRadius, 200 + sunRadius);

    ctx.fillStyle = '#FFD700';
    ctx.beginPath();
    ctx.arc(sunCenterX, sunCenterY, sunRadius, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = '#FFD700';
    ctx.lineWidth = 4;

    sunRayAngle += 0.01;
    if (sunRayAngle >= Math.PI * 2) {
        sunRayAngle = 0;
    }

    for (let i = 0; i < rayCount; i++) {
        const angle = sunRayAngle + (Math.PI * 2 * i / rayCount);
        const rayLength = 80 + Math.sin(sunRayAngle * 3 + i) * 20;

        const startX = sunCenterX + Math.cos(angle) * sunRadius;
        const startY = sunCenterY + Math.sin(angle) * sunRadius;
        const endX = sunCenterX + Math.cos(angle) * (sunRadius + rayLength);
        const endY = sunCenterY + Math.sin(angle) * (sunRadius + rayLength);

        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
    }

    if (Math.random() < 0.3) {
        smokeParticles.push(createSmokeParticle());
    }

    ctx.fillStyle = '#87CEEB';
    ctx.fillRect(340, 0, 500, 300);

    for (let i = 0; i < smokeParticles.length; i++) {
        const particle = smokeParticles[i];

        particle.life -= 1;

        if (particle.life <= 0) {
            smokeParticles.splice(i, 1);
            i--;
            continue;
        }

        particle.y -= particle.speed;
        particle.x += particle.drift;

        particle.alpha = particle.life / 200;

        particle.radius += 0.05;

        ctx.fillStyle = `rgba(200, 200, 200, ${particle.alpha})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();
    }

    ctx.fillStyle = '#696969';
    ctx.fillRect(500, 290, 20, 20);

    requestAnimationFrame(animateSun);
}

animateSun();

// Звезда
function drawStar(ctx, cx, cy, spikes, outerRadius, innerRadius) {
    let rot = Math.PI / 2 * 3;
    let x = cx;
    let y = cy;
    const step = Math.PI / spikes;

    ctx.beginPath();
    ctx.moveTo(cx, cy - outerRadius);
    for (let i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        ctx.lineTo(x, y);
        rot += step;

        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        ctx.lineTo(x, y);
        rot += step;
    }
    ctx.lineTo(cx, cy - outerRadius);
    ctx.closePath();
    ctx.fillStyle = '#fff'; // Цвет звезды
    ctx.fill();
}

const lakeStars = [];

// Анимация озера
function animateLake() {
    if (Math.random() < 0.1) {
        lakeStars.push({
            x: Math.random() * 150 + 200,
            y: Math.random() * 150 + 580,
            life: 10
        });
    }

    ctx.beginPath();

    // Отрисовка звезд
    for (let i = 0; i < lakeStars.length; i++) {
        const star = lakeStars[i];
        drawStar(ctx, star.x, star.y, 5, 7.5, 3.75);
        star.life--;

        // Удаление звезды, если время жизни истекло
        if (star.life <= 0) {
            lakeStars.splice(i, 1);
            i--;
        }
    }

    requestAnimationFrame(animateLake);
}

animateLake();