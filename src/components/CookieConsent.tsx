'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';

const COOKIE_KEY = 'cookie_consent_accepted';
const COOKIE_DECLINE_KEY = 'cookie_consent_declined';
const COOKIE_CATEGORIES_KEY = 'cookie_consent_categories';

const injectYandexMetrika = () => {
  if (typeof window === 'undefined') return;
  if ((window as any).ym) return;
  const script = document.createElement('script');
  script.src = 'https://mc.yandex.ru/metrika/tag.js';
  script.async = true;
  document.body.appendChild(script);
  script.onload = () => {
    (window as any).ym && (window as any).ym(103794711, 'init', {
      clickmap:true,
      trackLinks:true,
      accurateTrackBounce:true,
      webvisor:true
    });
  };
};

const injectAdScripts = () => {};

type Categories = {
  analytics: boolean;
  ads: boolean;
};

const defaultCategories: Categories = {
  analytics: false,
  ads: false,
};

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [categories, setCategories] = useState<Categories>(defaultCategories);

  useEffect(() => {
    const accepted = localStorage.getItem(COOKIE_KEY);
    const declined = localStorage.getItem(COOKIE_DECLINE_KEY);
    const catStr = localStorage.getItem(COOKIE_CATEGORIES_KEY);
    if (!accepted && !declined) setVisible(true);
    if (catStr) {
      try {
        const cat: Categories = JSON.parse(catStr);
        if (cat.analytics) injectYandexMetrika();
        if (cat.ads) injectAdScripts();
      } catch {}
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem(COOKIE_KEY, 'true');
    localStorage.removeItem(COOKIE_DECLINE_KEY);
    localStorage.setItem(COOKIE_CATEGORIES_KEY, JSON.stringify({ analytics: true, ads: true }));
    setVisible(false);
    injectYandexMetrika();
    injectAdScripts();
  };

  const declineAll = () => {
    localStorage.setItem(COOKIE_DECLINE_KEY, 'true');
    localStorage.removeItem(COOKIE_KEY);
    localStorage.setItem(COOKIE_CATEGORIES_KEY, JSON.stringify({ analytics: false, ads: false }));
    setVisible(false);
  };

  const saveSettings = () => {
    localStorage.setItem(COOKIE_KEY, 'true');
    localStorage.removeItem(COOKIE_DECLINE_KEY);
    localStorage.setItem(COOKIE_CATEGORIES_KEY, JSON.stringify(categories));
    setVisible(false);
    if (categories.analytics) injectYandexMetrika();
    if (categories.ads) injectAdScripts();
  };

  if (!visible) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        background: 'rgba(17, 24, 39, 0.98)',
        color: '#fff',
        padding: '16px 8px',
        zIndex: 1000,
        boxShadow: '0 -2px 8px rgba(0,0,0,0.08)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: '15px',
        width: '100%',
        maxWidth: '100vw',
        boxSizing: 'border-box',
      }}
    >
      {!showSettings ? (
        <>
          <span style={{marginBottom: 8, textAlign: 'center'}}>
            Сайт использует cookie и сторонние сервисы для улучшения работы. Подробнее в <Link href="/privacy-policy" style={{color:'#60a5fa',textDecoration:'underline'}} target="_blank" rel="noopener noreferrer">политике конфиденциальности</Link>.
          </span>
          <div style={{display:'flex',gap:8, marginBottom:8, flexWrap:'wrap', justifyContent:'center'}}>
            <button onClick={acceptAll} style={{
              background: '#f59e0b', color: '#222', border: 'none', borderRadius: 6, padding: '8px 20px', fontWeight: 600, cursor: 'pointer', fontSize: '15px', marginTop: 4
            }}>Принять все</button>
            <button onClick={declineAll} style={{
              background: '#374151', color: '#fff', border: '1px solid #888', borderRadius: 6, padding: '8px 20px', fontWeight: 600, cursor: 'pointer', fontSize: '15px', marginTop: 4
            }}>Отклонить все</button>
            <button onClick={()=>setShowSettings(true)} style={{
              background: '#222', color: '#fff', border: '1px solid #888', borderRadius: 6, padding: '8px 20px', fontWeight: 600, cursor: 'pointer', fontSize: '15px', marginTop: 4
            }}>Настроить</button>
          </div>
        </>
      ) : (
        <>
          <span style={{marginBottom: 8, textAlign: 'center'}}>
            Выберите категории cookie:
          </span>
          <div style={{display:'flex', flexDirection:'column', gap:8, marginBottom:8}}>
            <label style={{display:'flex',alignItems:'center',gap:8, cursor:'pointer'}}>
              <input type="checkbox" checked={categories.analytics} onChange={e=>setCategories(c=>({...c, analytics: e.target.checked}))} />
              <span>Аналитические (Яндекс.Метрика)</span>
            </label>
            <label style={{display:'flex',alignItems:'center',gap:8, cursor:'pointer'}}>
              <input type="checkbox" checked={categories.ads} onChange={e=>setCategories(c=>({...c, ads: e.target.checked}))} />
              <span>Рекламные (пиксели, ремаркетинг)</span>
            </label>
          </div>
          <div style={{display:'flex',gap:8, flexWrap:'wrap', justifyContent:'center'}}>
            <button onClick={saveSettings} style={{
              background: '#f59e0b', color: '#222', border: 'none', borderRadius: 6, padding: '8px 20px', fontWeight: 600, cursor: 'pointer', fontSize: '15px', marginTop: 4
            }}>Сохранить</button>
            <button onClick={()=>setShowSettings(false)} style={{
              background: '#374151', color: '#fff', border: '1px solid #888', borderRadius: 6, padding: '8px 20px', fontWeight: 600, cursor: 'pointer', fontSize: '15px', marginTop: 4
            }}>Назад</button>
          </div>
        </>
      )}
    </div>
  );
};

export default CookieConsent;
