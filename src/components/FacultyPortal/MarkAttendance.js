import React from 'react';
import { useApp } from '../../context/AppContext';

export const MarkAttendance = () => {
  const { facultyRoster, toggleFacultyStudentAttendance, markAllFacultyAttendancePresent, triggerToast } = useApp();

  const presentCount = facultyRoster.filter(s => s.attendance === 'present').length;
  const total = facultyRoster.length;

  return (
    <div className="tab-panel">
      <div className="panel-title">
        <span>Mark Daily Attendance — B.Sc. Computer Science (Sec A)</span>
        <button className="btn-mini" onClick={markAllFacultyAttendancePresent}>
          ✓ Mark All Present
        </button>
      </div>

      <div style={{ display: 'flex', gap: '14px', marginBottom: '20px' }}>
        <div style={{ background: 'var(--paper)', border: '1px solid var(--line)', borderRadius: '12px', padding: '10px 16px', fontWeight: 700, fontSize: '13px' }}>
          Present: <span style={{ color: 'var(--green)' }}>{presentCount}</span> / {total}
        </div>
        <div style={{ background: 'var(--paper)', border: '1px solid var(--line)', borderRadius: '12px', padding: '10px 16px', fontWeight: 700, fontSize: '13px' }}>
          Absent: <span style={{ color: 'var(--red)' }}>{total - presentCount}</span> / {total}
        </div>
        <div style={{ background: 'var(--paper)', border: '1px solid var(--line)', borderRadius: '12px', padding: '10px 16px', fontWeight: 700, fontSize: '13px' }}>
          Attendance Rate: <span style={{ color: 'var(--teal)' }}>{Math.round((presentCount / total) * 100)}%</span>
        </div>
      </div>

      <div className="list-card">
        {facultyRoster.map(st => (
          <div className="list-row" key={st.id}>
            <div className="list-main">
              <div
                className="list-dot"
                style={{
                  background: st.attendance === 'present' ? 'var(--green-soft)' : 'var(--red-soft)',
                  color: st.attendance === 'present' ? 'var(--green)' : 'var(--red)'
                }}
              >
                {st.id}
              </div>
              <div>
                <div className="list-title">{st.name}</div>
                <div className="list-sub">Reg No: {st.regNo} · Last Test Marks: {st.lastMarks}/100</div>
              </div>
            </div>

            <button
              className={`btn-mini ${st.attendance === 'present' ? 'done' : ''}`}
              style={{ minWidth: '100px', justifyContent: 'center' }}
              onClick={() => toggleFacultyStudentAttendance(st.id)}
            >
              {st.attendance === 'present' ? '✓ Present' : '✕ Absent'}
            </button>
          </div>
        ))}
      </div>

      <button
        className="nav-btn primary"
        style={{ marginTop: '16px', width: '100%', justifyContent: 'center' }}
        onClick={() => triggerToast(`Attendance records saved for ${total} students!`)}
      >
        💾 Save Attendance Record
      </button>
    </div>
  );
};
