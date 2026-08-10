import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';

export const AssignmentManager = () => {
  const { assignments, triggerToast } = useApp();
  const [title, setTitle] = useState('');
  const [code, setCode] = useState('CS601');
  const [due, setDue] = useState('In 7 days');

  const handlePost = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    triggerToast(`New assignment "${title}" published!`);
    setTitle('');
  };

  return (
    <div className="tab-panel">
      <div className="two-col">
        <div>
          <div className="panel-title">Post New Assignment</div>
          <form className="list-card" style={{ padding: '24px' }} onSubmit={handlePost}>
            <div style={{ marginBottom: '14px' }}>
              <label style={{ fontSize: '12px', fontWeight: 700, color: 'var(--slate)' }}>Course Code</label>
              <select
                value={code}
                onChange={(e) => setCode(e.target.value)}
                style={{ width: '100%', padding: '10px', marginTop: '4px', borderRadius: '8px', border: '1px solid var(--line)' }}
              >
                <option value="CS601">CS601 - Data Structures</option>
                <option value="CS602">CS602 - Database Systems</option>
                <option value="CS603">CS603 - Operating Systems</option>
              </select>
            </div>

            <div style={{ marginBottom: '14px' }}>
              <label style={{ fontSize: '12px', fontWeight: 700, color: 'var(--slate)' }}>Assignment Title</label>
              <input
                type="text"
                placeholder="e.g. Graph Traversal Algorithms"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={{ width: '100%', padding: '10px', marginTop: '4px', borderRadius: '8px', border: '1px solid var(--line)' }}
                required
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ fontSize: '12px', fontWeight: 700, color: 'var(--slate)' }}>Due Date</label>
              <input
                type="text"
                value={due}
                onChange={(e) => setDue(e.target.value)}
                style={{ width: '100%', padding: '10px', marginTop: '4px', borderRadius: '8px', border: '1px solid var(--line)' }}
              />
            </div>

            <button type="submit" className="nav-btn primary" style={{ width: '100%', justifyContent: 'center' }}>
              ➕ Publish Assignment
            </button>
          </form>
        </div>

        <div>
          <div className="panel-title">Active Posted Assignments</div>
          <div className="list-card">
            {assignments.map(ass => (
              <div className="list-row" key={ass.id}>
                <div className="list-main">
                  <div className="list-dot" style={{ background: 'var(--teal-soft)', color: 'var(--teal)' }}>
                    {ass.id}
                  </div>
                  <div>
                    <div className="list-title">{ass.title}</div>
                    <div className="list-sub">{ass.code} · {ass.due}</div>
                  </div>
                </div>
                <span className="badge green">Active</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
