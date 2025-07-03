import { useRef, useEffect } from 'react';
export default function Starfield({ starCount = 200, hillPct = 0.25 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx    = canvas.getContext('2d');
    let stars    = [];
    let shoots   = [];
    let w, h, skyH, anim;

    const init = () => {
      w = canvas.width  = window.innerWidth;
      h = canvas.height = window.innerHeight;
      // hillPct = 0.25 means bottom 25% is hill, top 75% is sky
      skyH = h * (1 - hillPct);

      // only spawn stars in the top skyH pixels
      stars = Array.from({ length: 300 }, () => ({
        x:  Math.random() * w,
        y:  Math.random() * skyH,
        r:  Math.random() * 1.2,
        a:  Math.random(),
        da: (Math.random() * 0.02) + 0.005
      }));

      shoots = [];
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      // ➤ Twinkling stars (only in sky region)
      stars.forEach(s => {
        s.a += s.da;
        if (s.a <= 0 || s.a >= 1) s.da *= -1;

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(255,255,255,${s.a})`;
        ctx.fill();
      });

      // ➤ Shooting stars (spawn only in sky region)
      if (Math.random() < 0.01) {
        shoots.push({
          x:    Math.random() * w,
          y:    Math.random() * skyH,
          len:  (Math.random() * 80) + 20,
          speed:(Math.random() * 4) + 6
        });
      }

      // draw + advance shooting stars
      shoots.forEach((sh, i) => {
        ctx.beginPath();
        ctx.moveTo(sh.x, sh.y);
        ctx.lineTo(sh.x - sh.len, sh.y + sh.len);
        ctx.strokeStyle = 'rgba(255,255,255,0.8)';
        ctx.lineWidth   = 1;
        ctx.stroke();

        sh.x -= sh.speed;
        sh.y += sh.speed;
        // once it leaves the screen, remove it
        if (sh.x < 0 || sh.y > h) shoots.splice(i, 1);
      });

      anim = requestAnimationFrame(draw);
    };

    init();
    draw();
    window.addEventListener('resize', init);
    return () => {
      window.removeEventListener('resize', init);
      cancelAnimationFrame(anim);
    };
  }, [starCount, hillPct]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top:      0,
        left:     0,
        width:    '100%',
        height:   '100%',
        zIndex:   -1
      }}
    />
  );
}
