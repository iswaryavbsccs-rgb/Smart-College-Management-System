import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';

export const GradingPanel = () => {
  const { facultyRoster, triggerToast } = useApp();
  const [marksState, setMarksState] = useState(
    facultyRoster.reduce((acc, st) => ({ ...acc, [st.id]: st.lastMarks }), {})
  );

  const handleMarkChange = (id, val) => {
    setMarksState({ ...marksState, [id]: Number(val) });
  };

  return (
    <div className="tab-panel">
      <div className="panel-title">Internal Marks Entry Matrix — Midterm Exam</div>

      <div className="list-card">
        {facultyRoster.map(st => {
          const m = marksState[st.id] || 0;
          const letter = m >= 90 ? 'A+' : m >= 80 ? 'A' : m >= 70 ? 'B+' : m >= 60 ? 'B' : 'C';

          return (
            <div className="list-row" key={st.id}>
              <div className="list-main">
                <div className="list-dot" style={{ background: 'var(--gold-soft)', color: 'var(--gold)' }}>
                  {letter}
                </div>
                <div>
                  <div className="list-title">{st.name}</div>
                  <div className="list-sub">Reg No: {st.regNo}</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <span style={{ fontSize: '12px', color: 'var(--slate)' }}>Marks / 100:</span>
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={marksState[st.id] ?? st.lastMarks}
                  onChange={(e) => handleMarkChange(st.id, e.target.value)}
                  style={{ width: '80px', padding: '8px', borderRadius: '8px', border: '1px solid var(--line)', fontWeight: 700 }}
                />
              </div>
            </div>
          );
        })}
      </div>

      <button
        className="nav-btn primary"
        style={{ width: '100%', justifyContent: 'center', marginTop: '16px' }}
        onClick={() => triggerToast('Midterm marks published to student portal!')}
      >
        📢 Publish Marks to Student Portals
      </button>
    </div>
  );
};
