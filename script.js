/* ---------- Fireworks ---------- */

const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

const particles = [];

function createFirework() {
    const x = Math.random() * canvas.width;
    const y = Math.random() * (canvas.height / 2);

    for (let i = 0; i < 40; i++) {
        particles.push({
            x,
            y,
            dx: (Math.random() - 0.5) * 8,
            dy: (Math.random() - 0.5) * 8,
            life: 60,
            color: `hsl(${Math.random() * 360},100%,60%)`
        });
    }
}

function animateFireworks() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        p.x += p.dx;
        p.y += p.dy;
        p.dy += 0.03;
        p.life--;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        if (p.life <= 0) {
            particles.splice(i, 1);
        }
    }

    requestAnimationFrame(animateFireworks);
}

animateFireworks();

setInterval(createFirework, 1200);
