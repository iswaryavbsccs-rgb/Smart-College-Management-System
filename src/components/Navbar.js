import React from 'react';
import { useApp } from '../context/AppContext';

export const Navbar = () => {
  const { user, currentRole, switchRole, currentPage, setCurrentPage, theme, toggleTheme } = useApp();

  if (currentPage === 'welcome') return null;

  return (
    <header className="topbar">
      <div className="brand" onClick={() => setCurrentPage('welcome')} style={{ cursor: 'pointer' }}>
        <div className="brand-mark">GASC</div>
        <div>
          Gobi Arts &amp; Science College
          <small>Karattadipalayam · Gobichettipalayam</small>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
        {currentPage === 'dashboard' && (
          <>
            <div className="user-chip">
              <span className="dot"></span>
              <span>{user.name} ({user.id})</span>
            </div>

            <div className="role-pills">
              <button
                className={`role-pill ${currentRole === 'student' ? 'active' : ''}`}
                onClick={() => switchRole('student')}
              >
                Student
              </button>
              <button
                className={`role-pill ${currentRole === 'faculty' ? 'active' : ''}`}
                onClick={() => switchRole('faculty')}
              >
                Faculty
              </button>
              <button
                className={`role-pill ${currentRole === 'admin' ? 'active' : ''}`}
                onClick={() => switchRole('admin')}
              >
                Admin
              </button>
            </div>
          </>
        )}

        <button
          className="nav-btn"
          style={{ padding: '8px 14px', fontSize: '12px' }}
          onClick={toggleTheme}
          title="Toggle Light / Dark theme"
        >
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
      </div>
    </header>
  );
};
