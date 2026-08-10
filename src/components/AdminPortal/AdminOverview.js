import React from 'react';
import { useApp } from '../../context/AppContext';

export const AdminOverview = () => {
  const { adminStudents, setActiveTab, triggerToast } = useApp();

  const pendingApprovals = adminStudents.filter(s => s.status === 'pending');

  return (
    <div className="tab-panel">
      <div className="stat-grid">
        <div className="stat-card">
          <div className="stat-label">Total Registered Students</div>
          <div className="stat-value">4,812</div>
          <div className="stat-trend up">▲ 6% increase this year</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Total Faculty</div>
          <div className="stat-value">246</div>
          <div className="stat-trend up">12 Departments</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Institution Avg Attendance</div>
          <div className="stat-value">87%</div>
          <div className="stat-trend up">▲ 2% vs last semester</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Fee Collection Rate</div>
          <div className="stat-value">92%</div>
          <div className="stat-trend up">On Target</div>
        </div>
      </div>

      <div className="ai-card alert">
        <div className="ai-icon">⚠️</div>
        <div>
          <span className="ai-tag">SYSTEM RISK ALERT</span>
          <h4>12 Students Flagged for Low Attendance (&lt;75%)</h4>
          <p>
            Automated AI tracking flagged 12 students across Physics and Chemistry departments. Academic advisor notices have been auto-generated.
          </p>
        </div>
      </div>

      <div className="two-col">
        <div>
          <div className="panel-title">Pending Student Admission Approvals</div>
          <div className="list-card">
            {pendingApprovals.length > 0 ? (
              pendingApprovals.map(st => (
                <div className="list-row" key={st.id}>
                  <div className="list-main">
                    <div className="list-dot" style={{ background: 'var(--maroon-soft)', color: 'var(--maroon)' }}>
                      AD
                    </div>
                    <div>
                      <div className="list-title">{st.name}</div>
                      <div className="list-sub">{st.course} · Reg: {st.regNo}</div>
                    </div>
                  </div>
                  <button className="btn-mini" onClick={() => setActiveTab(1)}>
                    Review Status
                  </button>
                </div>
              ))
            ) : (
              <div style={{ padding: '20px', color: 'var(--slate)', fontSize: '13px', textAlign: 'center' }}>
                No pending admission approvals!
              </div>
            )}
          </div>
        </div>

        <div>
          <div className="panel-title">Administrative Quick Actions</div>
          <div className="quick-actions">
            <button className="qa-btn" onClick={() => setActiveTab(1)}>
              🎓 Add New Student
            </button>
            <button className="qa-btn" onClick={() => setActiveTab(2)}>
              👩‍🏫 Faculty Directory
            </button>
            <button className="qa-btn" onClick={() => setActiveTab(3)}>
              📊 Generate Semester Report
            </button>
            <button className="qa-btn" onClick={() => triggerToast('Institution Broadcast Sent!')}>
              📢 Campus Emergency Broadcast
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
