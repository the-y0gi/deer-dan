'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './page.module.css';

// ─── Countdown Target ──────────────────────────────────────────────────────────
const LAUNCH_DATE = new Date('2026-09-16T08:49:00');

function useCountdown(target) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calc = () => {
      const diff = target.getTime() - Date.now();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, [target]);

  return timeLeft;
}

// ─── Particle Canvas ──────────────────────────────────────────────────────────
function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const COUNT = Math.min(80, Math.floor(window.innerWidth / 20));

    for (let i = 0; i < COUNT; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.3,
        alpha: Math.random() * 0.5 + 0.1,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: -Math.random() * 0.4 - 0.1,
        gold: Math.random() > 0.5,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.gold
          ? `rgba(201,169,110,${p.alpha})`
          : `rgba(245,245,240,${p.alpha * 0.6})`;
        ctx.fill();

        p.x += p.speedX;
        p.y += p.speedY;
        p.alpha += Math.sin(Date.now() * 0.001 + p.x) * 0.003;
        p.alpha = Math.max(0.05, Math.min(0.6, p.alpha));

        if (p.y < -5) {
          p.y = canvas.height + 5;
          p.x = Math.random() * canvas.width;
        }
        if (p.x < -5) p.x = canvas.width + 5;
        if (p.x > canvas.width + 5) p.x = -5;
      });
      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.particles} aria-hidden="true" />;
}

// ─── Countdown Box ────────────────────────────────────────────────────────────
function CountdownUnit({ value, label }) {
  const display = String(value).padStart(2, '0');
  return (
    <div className={styles.countdownUnit}>
      <div className={styles.countdownValue}>
        <span className={styles.countdownNum}>{display}</span>
      </div>
      <span className={styles.countdownLabel}>{label}</span>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function ComingSoon() {
  const { days, hours, minutes, seconds } = useCountdown(LAUNCH_DATE);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }
    setStatus('loading');
    await new Promise((r) => setTimeout(r, 1200));
    setStatus('success');
    setEmail('');
  };

  return (
    <main className={styles.main}>
      {/* Background Setup matching the Deep Landscape vibe */}
      <div className={styles.bgImage} aria-hidden="true" />
      <div className={styles.bgOverlay} aria-hidden="true" />
      <div className={styles.bgGradient} aria-hidden="true" />

      {/* Ambiance Effects */}
      {mounted && <ParticleCanvas />}

      <div className={styles.lineLeft} aria-hidden="true" />
      <div className={styles.lineRight} aria-hidden="true" />

      <div className={styles.container}>
        
        {/* ─── Integrated Logo Component ─── */}
        <div className={styles.logoSection}>
          <div className={styles.logoIconWrap}>
            <div className={styles.logoImgContainer}>
              <Image 
                src="/logo.jpeg" 
                alt="Deer & Dan Logo" 
                fill
                priority
                className={styles.brandAssetImage}
              />
            </div>
          </div>
          
          <div className={styles.logoText}>
            <h1 className={styles.brandName}>
              DEER <span className={styles.ampersand}>&amp;</span> DAN
            </h1>
            <div className={styles.brandSub}>
              <span className={styles.brandSubLine} />
              <span className={styles.brandSubText}>CLOTHING</span>
              <span className={styles.brandSubLine} />
            </div>
          </div>
        </div>

        <div className={styles.goldenDivider} aria-hidden="true">
          <span className={styles.dividerLine} />
          <span className={styles.dividerDiamond} />
          <span className={styles.dividerLine} />
        </div>

        {/* Content Section */}
        <div className={styles.headlineSection}>
          <p className={styles.eyebrow}>Something Extraordinary Is</p>
          <h2 className={styles.headline}>Coming Soon</h2>
          <p className={styles.subheadline}>
            Fashion for Every You — Our new collection is almost here.<br />
            Be the first to experience premium style redefined.
          </p>
        </div>

        {/* Countdown Grid */}
        <div className={styles.countdown} role="timer" aria-label="Countdown to launch">
          <CountdownUnit value={days} label="Days" />
          <div className={styles.countdownSep} aria-hidden="true">:</div>
          <CountdownUnit value={hours} label="Hours" />
          <div className={styles.countdownSep} aria-hidden="true">:</div>
          <CountdownUnit value={minutes} label="Minutes" />
          <div className={styles.countdownSep} aria-hidden="true">:</div>
          <CountdownUnit value={seconds} label="Seconds" />
        </div>

        {/* Email Interface */}
        <div className={styles.subscribeSection}>
          <p className={styles.subscribeText}>Get notified when we launch</p>
          <form onSubmit={handleSubmit} className={styles.form} id="notify-form" noValidate>
            <div className={styles.inputWrap}>
              <input
                id="email-input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className={`${styles.emailInput} ${status === 'error' ? styles.inputError : ''}`}
                disabled={status === 'loading' || status === 'success'}
                aria-label="Email address"
                required
              />
              <button
                type="submit"
                id="notify-btn"
                className={`${styles.submitBtn} ${status === 'loading' ? styles.btnLoading : ''} ${status === 'success' ? styles.btnSuccess : ''}`}
                disabled={status === 'loading' || status === 'success'}
                aria-label="Notify me"
              >
                {status === 'loading' ? (
                  <span className={styles.spinner} aria-hidden="true" />
                ) : status === 'success' ? (
                  '✓ You\'re In!'
                ) : (
                  'Notify Me'
                )}
              </button>
            </div>
            {status === 'error' && (
              <p className={styles.errorMsg} role="alert">Please enter a valid email address.</p>
            )}
            {status === 'success' && (
              <p className={styles.successMsg} role="status">🎉 Thank you! We&apos;ll notify you at launch.</p>
            )}
          </form>
        </div>

        {/* Navigation Elements */}
        <div className={styles.social}>
          <a href="#" className={styles.socialLink} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
            </svg>
          </a>
          <a href="#" className={styles.socialLink} aria-label="Facebook" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
          </a>
          <a href="#" className={styles.socialLink} aria-label="X / Twitter" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a href="#" className={styles.socialLink} aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
            </svg>
          </a>
        </div>

        {/* Footer info */}
        <footer className={styles.footer}>
          <p className={styles.footerText}>© {new Date().getFullYear()} Deer &amp; Dan Clothing. All rights reserved.</p>
          <p className={styles.footerTagline}>Fashion For Every You</p>
        </footer>
      </div>

      {/* Mountain Base Structure */}
      <div className={styles.mountainSilhouette} aria-hidden="true">
        <svg viewBox="0 0 1440 200" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,200 L0,140 L80,100 L160,130 L240,80 L320,110 L400,60 L480,90 L560,40 L640,70 L720,30 L800,65 L880,45 L960,80 L1040,50 L1120,90 L1200,70 L1280,110 L1360,80 L1440,120 L1440,200 Z" fill="rgba(20,15,10,0.4)"/>
          <path d="M0,200 L0,160 L120,130 L240,150 L360,110 L480,140 L560,120 L680,145 L760,115 L880,140 L960,125 L1080,150 L1200,130 L1320,155 L1440,140 L1440,200 Z" fill="rgba(5,5,5,0.92)"/>
        </svg>
      </div>
    </main>
  );
}