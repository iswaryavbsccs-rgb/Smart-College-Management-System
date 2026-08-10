import React from 'react';
import { useApp } from '../context/AppContext';

export const Toast = () => {
  const { toastMessage, showToast } = useApp();

  return (
    <div
      className={`toast ${showToast ? 'show' : ''}`}
      style={{
        position: 'fixed',
        bottom: '24px',
        left: '50%',
        transform: showToast ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(20px)',
        background: 'var(--teal)',
        color: 'var(--cream)',
        padding: '14px 24px',
        borderRadius: '12px',
        fontSize: '13.5px',
        fontWeight: '600',
        boxShadow: 'var(--shadow-lg)',
        zIndex: 9999,
        opacity: showToast ? 1 : 0,
        pointerEvents: showToast ? 'all' : 'none',
        transition: 'all 0.35s cubic-bezier(0.22, 0.9, 0.32, 1)',
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }}
    >
      <span style={{ color: 'var(--gold-light)' }}>✓</span>
      <span>{toastMessage}</span>
    </div>
  );
};
