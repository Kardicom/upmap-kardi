'use client'

import { useEffect, useState, useRef } from 'react';

type AnimatedNumberProps = {
  value: number;
  duration?: number;
  suffix?: string;
  postfix?: string;
  className?: string;
};

export function AnimatedNumber({ value, duration = 1800, suffix = '', postfix = '', className = '' }: AnimatedNumberProps) {
  const isMobile = typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches;
  const [display, setDisplay] = useState(isMobile ? value : 0);
  const [started, setStarted] = useState(isMobile);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (isMobile) return;
    const node = ref.current;
    if (!node) return;
    let observer: IntersectionObserver | null = null;
    function handleIntersect(entries: IntersectionObserverEntry[]) {
      if (entries[0].isIntersecting) {
        setStarted(true);
        if (observer) observer.disconnect();
      }
    }
    observer = new window.IntersectionObserver(handleIntersect, { threshold: 0.4 });
    observer.observe(node);
    return () => observer && observer.disconnect();
  }, [isMobile]);

  useEffect(() => {
    if (isMobile || !started) return;
    let startTime: number | null = null;
    function animate(ts: number) {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const current = Math.floor(progress * value);
      setDisplay(current);
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplay(value);
      }
    }
    requestAnimationFrame(animate);
  }, [started, value, duration, isMobile]);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
      {postfix && <span className="text-2xl align-top font-bold ml-1">{postfix}</span>}
    </span>
  );
}
