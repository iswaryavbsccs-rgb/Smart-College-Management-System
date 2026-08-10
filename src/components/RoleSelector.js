import React from 'react';
import { useApp } from '../context/AppContext';

export const RoleSelector = () => {
  const { selectRoleToLogin, setCurrentPage } = useApp();

  return (
    <div style={{ background: 'var(--cream)', minHeight: '100vh', paddingBottom: '40px' }}>
      <div style={{ maxWidth: '1080px', margin: '0 auto', padding: '48px 24px 12px', textAlign: 'center' }}>
        <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '11px', color: 'var(--gold)', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
          Step 1 of 2
        </div>
        <h2 style={{ fontSize: '36px', color: 'var(--teal)', margin: '10px 0 8px' }}>Select Your Campus Portal</h2>
        <p style={{ color: 'var(--slate)', fontSize: '15px', maxWidth: '520px', margin: '0 auto' }}>
          Choose a portal below to sign in and view your personalized dashboard.
        </p>
      </div>

      <div style={{ maxWidth: '1080px', margin: '32px auto 0', padding: '0 24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
        {/* Student Card */}
        <div
          className="role-card student"
          style={{ background: 'var(--paper)', border: '1px solid var(--line)', borderRadius: '20px', padding: '32px 26px', cursor: 'pointer', position: 'relative', transition: 'all 0.3s ease' }}
          onClick={() => selectRoleToLogin('student')}
        >
          <div style={{ position: 'absolute', top: '20px', right: '20px', fontFamily: 'IBM Plex Mono', fontSize: '11px', color: 'var(--slate-light)' }}>01</div>
          <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: 'var(--teal-soft)', color: 'var(--teal-2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', marginBottom: '20px' }}>
            🎓
          </div>
          <h3 style={{ fontSize: '22px', margin: '0 0 10px', color: 'var(--teal)' }}>Student Portal</h3>
          <p style={{ fontSize: '13.5px', color: 'var(--slate)', lineHeight: 1.6, margin: '0 0 20px' }}>
            Attendance grid, SGPA grade breakdown, AI academic advisor insights, assignment submissions, fee receipts, and library catalog.
          </p>
          <div style={{ fontWeight: 700, fontSize: '13.5px', color: 'var(--teal-2)', display: 'flex', alignItems: 'center', gap: '6px' }}>
            Continue as Student →
          </div>
        </div>

        {/* Faculty Card */}
        <div
          className="role-card faculty"
          style={{ background: 'var(--paper)', border: '1px solid var(--line)', borderRadius: '20px', padding: '32px 26px', cursor: 'pointer', position: 'relative', transition: 'all 0.3s ease' }}
          onClick={() => selectRoleToLogin('faculty')}
        >
          <div style={{ position: 'absolute', top: '20px', right: '20px', fontFamily: 'IBM Plex Mono', fontSize: '11px', color: 'var(--slate-light)' }}>02</div>
          <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: 'var(--gold-soft)', color: 'var(--gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', marginBottom: '20px' }}>
            👩‍🏫
          </div>
          <h3 style={{ fontSize: '22px', margin: '0 0 10px', color: 'var(--teal)' }}>Faculty Portal</h3>
          <p style={{ fontSize: '13.5px', color: 'var(--slate)', lineHeight: 1.6, margin: '0 0 20px' }}>
            Mark student attendance, grade pending assignments, post announcements, publish exam marks, and manage teaching schedules.
          </p>
          <div style={{ fontWeight: 700, fontSize: '13.5px', color: 'var(--gold)', display: 'flex', alignItems: 'center', gap: '6px' }}>
            Continue as Faculty →
          </div>
        </div>

        {/* Admin Card */}
        <div
          className="role-card admin"
          style={{ background: 'var(--paper)', border: '1px solid var(--line)', borderRadius: '20px', padding: '32px 26px', cursor: 'pointer', position: 'relative', transition: 'all 0.3s ease' }}
          onClick={() => selectRoleToLogin('admin')}
        >
          <div style={{ position: 'absolute', top: '20px', right: '20px', fontFamily: 'IBM Plex Mono', fontSize: '11px', color: 'var(--slate-light)' }}>03</div>
          <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: 'var(--maroon-soft)', color: 'var(--maroon)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', marginBottom: '20px' }}>
            🏛️
          </div>
          <h3 style={{ fontSize: '22px', margin: '0 0 10px', color: 'var(--teal)' }}>Admin Portal</h3>
          <p style={{ fontSize: '13.5px', color: 'var(--slate)', lineHeight: 1.6, margin: '0 0 20px' }}>
            Manage student admissions, faculty roster, department attendance analytics, AI risk notifications, and campus-wide reporting.
          </p>
          <div style={{ fontWeight: 700, fontSize: '13.5px', color: 'var(--maroon)', display: 'flex', alignItems: 'center', gap: '6px' }}>
            Continue as Admin →
          </div>
        </div>
      </div>

      <div style={{ maxWidth: '1080px', margin: '40px auto 0', padding: '0 24px', display: 'flex', justifyContent: 'space-between' }}>
        <button className="nav-btn" onClick={() => setCurrentPage('welcome')}>← Back to Home</button>
      </div>
    </div>
  );
};
