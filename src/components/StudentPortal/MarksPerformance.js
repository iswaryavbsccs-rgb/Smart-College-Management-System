import React from 'react';
import { COURSE_MARKS } from '../../data/mockData';

export const MarksPerformance = () => {
  return (
    <div className="tab-panel">
      <div className="panel-title">End-Semester Grade Sheet &amp; Mark Breakdown</div>

      <div className="list-card" style={{ marginBottom: '28px' }}>
        {COURSE_MARKS.map((item, idx) => (
          <div className="list-row" key={idx}>
            <div className="list-main">
              <div className="list-dot" style={{ background: 'var(--gold-soft)', color: 'var(--gold)' }}>
                {item.grade}
              </div>
              <div>
                <div className="list-title">{item.title}</div>
                <div className="list-sub">Course Code: {item.courseCode}</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '12px', color: 'var(--slate)' }}>Internal / External</div>
                <div style={{ fontSize: '13px', fontWeight: 600, fontFamily: 'IBM Plex Mono' }}>
                  {item.internal}/25 + {item.external}/75
                </div>
              </div>
              <span className="badge green" style={{ fontSize: '13px', padding: '6px 14px' }}>
                {item.total} / 100
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="two-col">
        <div>
          <div className="panel-title" style={{ fontSize: '16px' }}>Semester Grade Progression</div>
          <div className="list-card" style={{ padding: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '16px', height: '160px', borderBottom: '1px solid var(--line)', paddingBottom: '10px' }}>
              {[
                { sem: 'Sem 1', sgpa: 8.2 },
                { sem: 'Sem 2', sgpa: 8.5 },
                { sem: 'Sem 3', sgpa: 8.7 },
                { sem: 'Sem 4', sgpa: 8.6 },
                { sem: 'Sem 5', sgpa: 8.9 }
              ].map((s, i) => (
                <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                  <div style={{ fontSize: '11px', fontWeight: 700, fontFamily: 'IBM Plex Mono', color: 'var(--teal)' }}>{s.sgpa}</div>
                  <div style={{ width: '100%', maxWidth: '32px', height: `${(s.sgpa / 10) * 120}px`, background: 'var(--teal-2)', borderRadius: '6px 6px 0 0' }}></div>
                  <div style={{ fontSize: '11px', color: 'var(--slate)', fontWeight: 600 }}>{s.sem}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="panel-title" style={{ fontSize: '16px' }}>Academic Distinction</div>
          <div className="ai-card info">
            <div className="ai-icon">🏆</div>
            <div>
              <span className="ai-tag">HONORS ELIGIBILITY</span>
              <h4>First Class with Distinction Candidate</h4>
              <p>
                Maintaining CGPA above 8.5 qualifies you for the Dean's Honor List at graduation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
