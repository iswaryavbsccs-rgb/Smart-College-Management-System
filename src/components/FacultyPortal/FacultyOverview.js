import React from 'react';
import { useApp } from '../../context/AppContext';

export const FacultyOverview = () => {
  const { gradingQueue, setActiveTab } = useApp();

  return (
    <div className="tab-panel">
      <div className="stat-grid">
        <div className="stat-card">
          <div className="stat-label">Assigned Sections</div>
          <div className="stat-value">3 Sections</div>
          <div className="stat-trend up">B.Sc CS A, B &amp; M.Sc</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Total Enrolled Students</div>
          <div className="stat-value">142</div>
          <div className="stat-trend up">Active Enrollment</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Pending Submissions</div>
          <div className="stat-value">27</div>
          <div className="stat-trend down">Requires Grading</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Faculty Feedback Rating</div>
          <div className="stat-value">4.9 / 5.0</div>
          <div className="stat-trend up">▲ Top Rated Faculty</div>
        </div>
      </div>

      <div className="two-col">
        <div>
          <div className="panel-title">Pending Submissions Queue</div>
          <div className="list-card">
            {gradingQueue.map(item => (
              <div className="list-row" key={item.id}>
                <div className="list-main">
                  <div className="list-dot" style={{ background: 'var(--maroon-soft)', color: 'var(--maroon)' }}>
                    {item.pendingCount}
                  </div>
                  <div>
                    <div className="list-title">{item.task}</div>
                    <div className="list-sub">{item.course} · Due: {item.deadline}</div>
                  </div>
                </div>
                <button className="btn-mini" onClick={() => setActiveTab(2)}>
                  Grade Now
                </button>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="panel-title">Quick Actions</div>
          <div className="quick-actions">
            <button className="qa-btn" onClick={() => setActiveTab(1)}>
              📝 Mark Attendance (Sec A)
            </button>
            <button className="qa-btn" onClick={() => setActiveTab(2)}>
              💯 Publish Exam Marks
            </button>
            <button className="qa-btn" onClick={() => setActiveTab(3)}>
              ➕ Post Assignment
            </button>
            <button className="qa-btn" onClick={() => setActiveTab(4)}>
              📢 Post Announcement
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
