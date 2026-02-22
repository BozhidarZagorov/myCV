import { useEffect, useRef } from "react";

const MATRIX_CHARS = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEF";
const GREEN = "#00ff41";
const DARK_GREEN = "#003b00";

export default function MatrixCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationId;
    let columns = [];
    const fontSize = 10;
    const columnCount = Math.floor(window.innerWidth / fontSize);

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      columns = [];
      for (let i = 0; i < columnCount; i++) {
        columns[i] = (Math.random() * window.innerHeight) / fontSize;
      }
    }

    function draw() {
      ctx.fillStyle = "rgba(3, 17, 40, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = GREEN;
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < columns.length; i++) {
        const char = MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)];
        const x = i * fontSize;
        const y = columns[i] * fontSize;
        ctx.fillStyle = DARK_GREEN;
        ctx.fillText(char, x, y);
        ctx.fillStyle = GREEN;
        ctx.fillText(char, x, y - fontSize);
        if (y > canvas.height && Math.random() > 0.975) {
          columns[i] = 0;
        } else {
          columns[i] += 0.25;
        }
      }
      animationId = requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener("resize", resize);
    draw();
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="matrix-canvas"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
      }}
      aria-hidden
    />
  );
}
