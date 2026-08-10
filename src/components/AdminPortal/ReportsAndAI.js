import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';

export const ReportsAndAI = () => {
  const { triggerToast } = useApp();
  const [generating, setGenerating] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleGenerateReport = () => {
    setGenerating(true);
    setProgress(15);
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setGenerating(false);
          triggerToast('Semester Institutional Performance Report compiled successfully!');
          return 100;
        }
        return prev + 25;
      });
    }, 400);
  };

  return (
    <div className="tab-panel">
      <div className="panel-title">Institutional Analytics &amp; Automated Reports</div>

      <div className="list-card" style={{ padding: '24px', marginBottom: '28px' }}>
        <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--teal)', marginBottom: '8px' }}>
          Automated Semester Performance Audit
        </div>
        <p style={{ fontSize: '13px', color: 'var(--slate)', margin: '0 0 16px' }}>
          Compile institutional attendance statistics, internal grade distributions, fee recovery rates, and AI risk warnings into a single downloadable PDF report.
        </p>

        {generating && (
          <div style={{ marginBottom: '16px' }}>
            <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--slate)', marginBottom: '6px' }}>
              Compiling Report Data... ({progress}%)
            </div>
            <div style={{ height: '8px', background: 'var(--line)', borderRadius: '999px', overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${progress}%`, background: 'var(--gold)', transition: 'width 0.3s ease' }}></div>
            </div>
          </div>
        )}

        <button
          className="nav-btn primary"
          onClick={handleGenerateReport}
          disabled={generating}
        >
          {generating ? 'Compiling Report...' : '📄 Generate Full Institutional Report (PDF)'}
        </button>
      </div>

      <div className="panel-title" style={{ fontSize: '16px' }}>Department Attendance Statistics</div>
      <div className="list-card" style={{ padding: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '20px', height: '160px', borderBottom: '1px solid var(--line)', paddingBottom: '10px' }}>
          {[
            { dept: 'CS', rate: 91, color: 'var(--teal-2)' },
            { dept: 'Physics', rate: 84, color: 'var(--gold)' },
            { dept: 'Economics', rate: 88, color: 'var(--teal-2)' },
            { dept: 'Chemistry', rate: 72, color: 'var(--red)' },
            { dept: 'Maths', rate: 90, color: 'var(--teal-2)' }
          ].map((d, i) => (
            <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
              <div style={{ fontSize: '11px', fontWeight: 700, fontFamily: 'IBM Plex Mono', color: d.color }}>{d.rate}%</div>
              <div style={{ width: '100%', maxWidth: '36px', height: `${(d.rate / 100) * 120}px`, background: d.color, borderRadius: '6px 6px 0 0' }}></div>
              <div style={{ fontSize: '11px', color: 'var(--slate)', fontWeight: 600 }}>{d.dept}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
