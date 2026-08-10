import React from 'react';
import { useApp } from '../../context/AppContext';
import { COURSE_MARKS } from '../../data/mockData';

export const StudentOverview = () => {
  const { user, triggerToast, setActiveTab } = useApp();

  return (
    <div className="tab-panel">
      {/* Quick stats cards */}
      <div className="stat-grid">
        <div className="stat-card">
          <div className="stat-label">Current CGPA</div>
          <div className="stat-value">{user.cgpa || '8.92 SGPA'}</div>
          <div className="stat-trend up">▲ Top 5% in CS Dept</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Overall Attendance</div>
          <div className="stat-value">{user.overallAttendance || 90}%</div>
          <div className="stat-trend up">▲ Safe Zone (&gt;75%)</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Credits Earned</div>
          <div className="stat-value">{user.creditsEarned || 84} / {user.totalCredits || 120}</div>
          <div className="stat-trend up">70% Degree Complete</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Semester Fee</div>
          <div className="stat-value">{user.feesStatus || 'Paid'}</div>
          <div className="stat-trend up">✓ Receipt Generated</div>
        </div>
      </div>

      {/* AI Academic Advisor Card */}
      <div className="ai-card info">
        <div className="ai-icon">💡</div>
        <div>
          <span className="ai-tag">AI ACADEMIC ADVISOR INSIGHT</span>
          <h4>Strong Performance in Algorithms & Data Structures</h4>
          <p>
            Your performance score in Data Structures (92%) is excellent. Recommended action: Register for the upcoming Campus Hackathon or advanced elective "Distributed Computing".
          </p>
        </div>
      </div>

      <div className="two-col">
        <div>
          <div className="panel-title">Current Semester Courses &amp; Scores</div>
          <div className="list-card">
            {COURSE_MARKS.map(course => (
              <div className="list-row" key={course.courseCode}>
                <div className="list-main">
                  <div className="list-dot" style={{ background: 'var(--teal-soft)', color: 'var(--teal)' }}>
                    {course.grade}
                  </div>
                  <div>
                    <div className="list-title">{course.title}</div>
                    <div className="list-sub">Code: {course.courseCode} · Internal: {course.internal}/25 · External: {course.external}/75</div>
                  </div>
                </div>
                <span className="badge green">{course.total} Marks</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="panel-title">Quick Actions</div>
          <div className="quick-actions">
            <button className="qa-btn" onClick={() => triggerToast('Official Transcript PDF downloaded!')}>
              📄 Download Transcript
            </button>
            <button className="qa-btn" onClick={() => setActiveTab(1)}>
              📊 Check Attendance
            </button>
            <button className="qa-btn" onClick={() => setActiveTab(3)}>
              📤 Submit Assignment
            </button>
            <button className="qa-btn" onClick={() => setActiveTab(5)}>
              💳 View Fee Receipt
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
