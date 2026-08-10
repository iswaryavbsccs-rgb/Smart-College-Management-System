import React from 'react';
import { useApp } from '../context/AppContext';

export const WelcomeHero = () => {
  const { setCurrentPage } = useApp();

  return (
    <div className="welcome-hero">
      <div className="welcome-wrap">
        <div className="crest-box">
          <div className="crest-ring-outer"></div>
          <div className="crest-core">
            <span>GASC</span>
          </div>
        </div>

        <div className="welcome-eyebrow">
          Gobi Arts &amp; Science College
        </div>

        <h1 className="welcome-title-text">
          The <em>Smart Campus</em><br />Management System
        </h1>

        <p className="welcome-sub-text">
          Attendance tracking, AI performance insights, course grading, assignment submissions, and institutional analytics — all in one unified portal.
        </p>

        {/* Hero image preview */}
        <div className="welcome-hero-img-box">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShDOyP1xDVYnF2ruAhG_FO_XYMPwbVsCsmsBdrBnoVsyniCo4DNLddEEWJ&s=10"
            onError={(e) => { e.target.onerror = null; e.target.src = "/images/gasc_campus_hero.png"; }}
            alt="GASC Original Campus"
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px', marginTop: '10px' }}>
          <button
            className="nav-btn primary"
            style={{
              padding: '16px 42px',
              fontSize: '16px',
              boxShadow: '0 12px 30px rgba(201,154,46,0.4)'
            }}
            onClick={() => setCurrentPage('roles')}
          >
            Enter Campus Portals →
          </button>
        </div>

        <div style={{ display: 'flex', gap: '20px', fontSize: '11px', fontFamily: 'IBM Plex Mono, monospace', color: '#9FB0AD', marginTop: '12px' }}>
          <span>EST. <b style={{ color: 'var(--gold-light)' }}>1968</b></span>
          <span>NAAC <b style={{ color: 'var(--gold-light)' }}>'A' GRADE</b></span>
          <span>DBT <b style={{ color: 'var(--gold-light)' }}>STAR COLLEGE</b></span>
        </div>
      </div>
    </div>
  );
};
