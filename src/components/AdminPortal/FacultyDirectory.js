import React from 'react';
import { useApp } from '../../context/AppContext';

export const FacultyDirectory = () => {
  const { facultyDirectory, triggerToast } = useApp();

  return (
    <div className="tab-panel">
      <div className="panel-title">Institutional Faculty &amp; Staff Directory</div>

      <div className="list-card">
        {facultyDirectory.map((fac, idx) => (
          <div className="list-row" key={idx}>
            <div className="list-main">
              <div className="list-dot" style={{ background: 'var(--gold-soft)', color: 'var(--gold)' }}>
                👨‍🏫
              </div>
              <div>
                <div className="list-title">{fac.name}</div>
                <div className="list-sub">{fac.dept} · {fac.role}</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <span className={`badge ${fac.status === 'Active' ? 'green' : 'maroon'}`}>
                {fac.status}
              </span>
              <button
                className="btn-mini"
                onClick={() => triggerToast(`Contacting ${fac.name}...`)}
              >
                Contact Faculty
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
