document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("heartCanvas");
    const context = canvas.getContext("2d");

    canvas.width = 400;
    canvas.height = 400;

    function drawHeart() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        
        let t, x, y;
        context.beginPath();
        context.fillStyle = "red";
        context.strokeStyle = "black";
        context.lineWidth = 2;

        for (let i = 0; i <= 100; i++) {
            t = (i / 100) * (2 * Math.PI);
            x = 16 * Math.pow(Math.sin(t), 3);
            y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
            
            x = canvas.width / 2 + x * 10;
            y = canvas.height / 2 - y * 10;

            if (i === 0) context.moveTo(x, y);
            else context.lineTo(x, y);
        }

        context.fill();
        context.stroke();
        context.closePath();
        
        context.fillStyle = "white";
        context.font = "35px Times New Roman";
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.fillText('Coração', canvas.width / 2, canvas.height / 2);
    }

    drawHeart();
});
