document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("heartCanvas");
    const ctx = canvas.getContext("2d");

    canvas.width = 400;
    canvas.height = 400;

    function drawHeart() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        let t, x, y;
        ctx.beginPath();
        ctx.fillStyle = "red";
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;

        for (let i = 0; i <= 100; i++) {
            t = (i / 100) * (2 * Math.PI);
            x = 16 * Math.pow(Math.sin(t), 3);
            y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
            
            x = canvas.width / 2 + x * 10;
            y = canvas.height / 2 - y * 10;

            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }

        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }

    drawHeart();
});
