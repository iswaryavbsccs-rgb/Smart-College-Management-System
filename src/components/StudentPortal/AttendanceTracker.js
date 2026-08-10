import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';

export const AttendanceTracker = () => {
  const { studentAttendance, triggerToast } = useApp();
  const [targetCalc, setTargetCalc] = useState({ totalClasses: 40, attended: 36 });

  const presentCount = studentAttendance.filter(a => a.status === 'present').length;
  const totalCount = studentAttendance.length;
  const pct = Math.round((presentCount / totalCount) * 100);

  const calcPct = Math.round((targetCalc.attended / targetCalc.totalClasses) * 100);

  return (
    <div className="tab-panel">
      <div className="panel-title">Attendance Log &amp; Interactive Calculator</div>

      <div style={{ display: 'flex', gap: '14px', marginBottom: '20px', flexWrap: 'wrap' }}>
        <div style={{ background: 'var(--paper)', border: '1px solid var(--line)', borderRadius: '12px', padding: '12px 18px', fontWeight: 700, fontSize: '13px' }}>
          <span style={{ color: 'var(--green)', marginRight: '6px' }}>●</span> Present: {presentCount} days
        </div>
        <div style={{ background: 'var(--paper)', border: '1px solid var(--line)', borderRadius: '12px', padding: '12px 18px', fontWeight: 700, fontSize: '13px' }}>
          <span style={{ color: 'var(--red)', marginRight: '6px' }}>●</span> Absent: {totalCount - presentCount} days
        </div>
        <div style={{ background: 'var(--paper)', border: '1px solid var(--line)', borderRadius: '12px', padding: '12px 18px', fontWeight: 700, fontSize: '13px' }}>
          <span style={{ color: 'var(--gold)', marginRight: '6px' }}>●</span> Rate: {pct}%
        </div>
      </div>

      <div className="two-col">
        <div>
          <div className="panel-title" style={{ fontSize: '16px' }}>Recent 10 Days Attendance Status</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '12px', marginBottom: '24px' }}>
            {studentAttendance.map((item, idx) => (
              <div
                key={idx}
                className={`att-cell-box ${item.status === 'present' ? 'present' : 'absent'}`}
              >
                <div>{item.status === 'present' ? '✓' : '✕'}</div>
                <span style={{ fontSize: '9px', fontFamily: 'IBM Plex Mono', marginTop: '4px', opacity: 0.8 }}>
                  {item.date}
                </span>
              </div>
            ))}
          </div>

          <div className="ai-card warn">
            <div className="ai-icon">⚠️</div>
            <div>
              <span className="ai-tag">ATTENDANCE RULE</span>
              <h4>Maintain Minimum 75% Attendance</h4>
              <p>
                Students with attendance below 75% require formal condonation approval to appear for end-semester laboratory &amp; theory exams.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="panel-title" style={{ fontSize: '16px' }}>Target Attendance Calculator</div>
          <div className="list-card" style={{ padding: '20px' }}>
            <div style={{ marginBottom: '14px' }}>
              <label style={{ fontSize: '12px', fontWeight: 700, color: 'var(--slate)' }}>Total Conducted Classes</label>
              <input
                type="number"
                value={targetCalc.totalClasses}
                onChange={(e) => setTargetCalc({ ...targetCalc, totalClasses: Number(e.target.value) })}
                style={{ width: '100%', padding: '10px', marginTop: '4px', borderRadius: '8px', border: '1px solid var(--line)' }}
              />
            </div>
            <div style={{ marginBottom: '18px' }}>
              <label style={{ fontSize: '12px', fontWeight: 700, color: 'var(--slate)' }}>Classes Attended</label>
              <input
                type="number"
                value={targetCalc.attended}
                onChange={(e) => setTargetCalc({ ...targetCalc, attended: Number(e.target.value) })}
                style={{ width: '100%', padding: '10px', marginTop: '4px', borderRadius: '8px', border: '1px solid var(--line)' }}
              />
            </div>

            <div style={{ background: 'var(--cream)', padding: '14px', borderRadius: '12px', textAlign: 'center' }}>
              <div style={{ fontSize: '12px', color: 'var(--slate)', fontWeight: 600 }}>Projected Percentage</div>
              <div style={{ fontSize: '28px', fontFamily: 'Fraunces', color: calcPct >= 75 ? 'var(--green)' : 'var(--red)', fontWeight: 700, margin: '4px 0' }}>
                {calcPct}%
              </div>
              <div style={{ fontSize: '11.5px', color: 'var(--slate)' }}>
                {calcPct >= 75 ? '✓ You meet the 75% threshold requirement.' : '⚠️ Below 75%! Attend more upcoming classes.'}
              </div>
            </div>

            <button
              className="nav-btn primary"
              style={{ width: '100%', marginTop: '16px', justifyContent: 'center' }}
              onClick={() => triggerToast(`Calculated: ${calcPct}% Attendance`)}
            >
              Recalculate Status
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
