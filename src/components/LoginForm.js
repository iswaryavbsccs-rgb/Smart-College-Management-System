import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { DEMO_USERS } from '../data/mockData';

export const LoginForm = () => {
  const { pendingRole, performLogin, setCurrentPage } = useApp();
  const defaultUser = DEMO_USERS[pendingRole] || DEMO_USERS.student;

  const [name, setName] = useState(defaultUser.name);
  const [id, setId] = useState(defaultUser.id);

  const handleSubmit = (e) => {
    e.preventDefault();
    performLogin(name, id);
  };

  return (
    <div style={{ background: 'var(--cream)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '30px 20px' }}>
        <div style={{ background: 'var(--paper)', border: '1px solid var(--line)', borderRadius: '22px', padding: '40px 36px', maxWidth: '440px', width: '100%', boxShadow: 'var(--shadow-lg)' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 14px',
            borderRadius: '999px',
            fontSize: '11.5px',
            fontWeight: 700,
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            marginBottom: '18px',
            background: pendingRole === 'student' ? 'var(--teal-soft)' : pendingRole === 'faculty' ? 'var(--gold-soft)' : 'var(--maroon-soft)',
            color: pendingRole === 'student' ? 'var(--teal-2)' : pendingRole === 'faculty' ? 'var(--gold)' : 'var(--maroon)'
          }}>
            {pendingRole.toUpperCase()} PORTAL LOGIN
          </div>

          <h2 style={{ fontSize: '26px', margin: '0 0 6px', color: 'var(--teal)' }}>Sign In</h2>
          <p style={{ fontSize: '13.5px', color: 'var(--slate)', margin: '0 0 24px' }}>
            Enter your credentials or choose a quick demo profile to enter.
          </p>

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '18px' }}>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: 'var(--slate)', marginBottom: '6px' }}>
                Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', border: '1.5px solid var(--line)', background: 'var(--cream)', fontSize: '14px', color: 'var(--ink)' }}
                required
              />
            </div>

            <div style={{ marginBottom: '22px' }}>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: 'var(--slate)', marginBottom: '6px' }}>
                {pendingRole === 'student' ? 'Register Number' : pendingRole === 'faculty' ? 'Faculty ID' : 'Admin ID'}
              </label>
              <input
                type="text"
                value={id}
                onChange={(e) => setId(e.target.value)}
                style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', border: '1.5px solid var(--line)', background: 'var(--cream)', fontSize: '14px', color: 'var(--ink)' }}
                required
              />
            </div>

            <button
              type="submit"
              className="nav-btn primary"
              style={{ width: '100%', padding: '14px', justifyContent: 'center', fontSize: '15px' }}
            >
              Sign In to Dashboard →
            </button>
          </form>

          <div style={{ marginTop: '24px', paddingTop: '18px', borderTop: '1px solid var(--line)', textAlign: 'center' }}>
            <div style={{ fontSize: '11px', fontFamily: 'IBM Plex Mono', color: 'var(--slate-light)', marginBottom: '10px' }}>
              DEMO MODE · NO PASSWORD REQUIRED
            </div>
            <button
              className="btn-mini"
              style={{ fontSize: '11.5px', padding: '6px 12px' }}
              onClick={() => {
                setName(defaultUser.name);
                setId(defaultUser.id);
              }}
            >
              Reset to Default Demo User ({defaultUser.name})
            </button>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: '440px', margin: '0 auto', padding: '0 20px 40px', display: 'flex', justifyContent: 'center' }}>
        <button className="nav-btn" onClick={() => setCurrentPage('roles')}>← Back to Role Select</button>
      </div>
    </div>
  );
};
