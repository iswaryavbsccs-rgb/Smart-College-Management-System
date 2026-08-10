import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';

export const StudentManagement = () => {
  const { adminStudents, addAdminStudent, toggleStudentApproval } = useApp();
  const [name, setName] = useState('');
  const [course, setCourse] = useState('B.Sc. Data Science');
  const [searchTerm, setSearchTerm] = useState('');

  const handleAdd = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    addAdminStudent(name, course);
    setName('');
  };

  const filtered = adminStudents.filter(s =>
    s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.course.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="tab-panel">
      <div className="two-col">
        <div>
          <div className="panel-title">Add New Student Admission</div>
          <form className="list-card" style={{ padding: '24px' }} onSubmit={handleAdd}>
            <div style={{ marginBottom: '14px' }}>
              <label style={{ fontSize: '12px', fontWeight: 700, color: 'var(--slate)' }}>Student Full Name</label>
              <input
                type="text"
                placeholder="e.g. Ananya Sharma"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ width: '100%', padding: '10px', marginTop: '4px', borderRadius: '8px', border: '1px solid var(--line)' }}
                required
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ fontSize: '12px', fontWeight: 700, color: 'var(--slate)' }}>Degree Program</label>
              <select
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                style={{ width: '100%', padding: '10px', marginTop: '4px', borderRadius: '8px', border: '1px solid var(--line)' }}
              >
                <option value="B.Sc. Computer Science">B.Sc. Computer Science</option>
                <option value="B.Sc. Data Science">B.Sc. Data Science</option>
                <option value="B.Sc. Physics">B.Sc. Physics</option>
                <option value="B.A. Economics">B.A. Economics</option>
                <option value="B.Com. Finance">B.Com. Finance</option>
              </select>
            </div>

            <button type="submit" className="nav-btn primary" style={{ width: '100%', justifyContent: 'center' }}>
              🎓 Add Student Record
            </button>
          </form>
        </div>

        <div>
          <div className="panel-title">
            <span>Student Admissions Directory</span>
          </div>

          <input
            type="text"
            placeholder="Search by name or course..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid var(--line)', marginBottom: '16px', fontSize: '13px' }}
          />

          <div className="list-card">
            {filtered.map(st => (
              <div className="list-row" key={st.id}>
                <div className="list-main">
                  <div
                    className="list-dot"
                    style={{
                      background: st.status === 'approved' ? 'var(--green-soft)' : 'var(--maroon-soft)',
                      color: st.status === 'approved' ? 'var(--green)' : 'var(--maroon)'
                    }}
                  >
                    {st.name.slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <div className="list-title">{st.name}</div>
                    <div className="list-sub">{st.course} · Reg: {st.regNo}</div>
                  </div>
                </div>

                <button
                  className={`btn-mini ${st.status === 'approved' ? 'done' : ''}`}
                  onClick={() => toggleStudentApproval(st.id)}
                >
                  {st.status === 'approved' ? '✓ Approved' : 'Approve'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
