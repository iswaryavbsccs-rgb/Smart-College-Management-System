import React from 'react';
import { useApp } from '../../context/AppContext';

export const FeesAndLibrary = () => {
  const { user, libraryBooks, triggerToast } = useApp();

  return (
    <div className="tab-panel">
      <div className="two-col">
        <div>
          <div className="panel-title">Fee Payment Receipt &amp; Summary</div>
          <div className="list-card" style={{ padding: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--line)', paddingBottom: '12px', marginBottom: '12px' }}>
              <span style={{ color: 'var(--slate)', fontSize: '13px' }}>Invoice ID</span>
              <span style={{ fontFamily: 'IBM Plex Mono', fontWeight: 600, fontSize: '13px' }}>{user.feeDetails?.invoiceId}</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '13px' }}>
              <span>Tuition Fee (Sem 6)</span>
              <span>{user.feeDetails?.tuition}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '13px' }}>
              <span>Laboratory &amp; IT Fee</span>
              <span>{user.feeDetails?.lab}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '14px', fontSize: '13px' }}>
              <span>Library Fund</span>
              <span>{user.feeDetails?.library}</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1.5px solid var(--line)', paddingTop: '12px', marginBottom: '18px', fontWeight: 700, fontSize: '16px', color: 'var(--teal)' }}>
              <span>Total Paid</span>
              <span>{user.feeDetails?.total}</span>
            </div>

            <button
              className="nav-btn primary"
              style={{ width: '100%', justifyContent: 'center' }}
              onClick={() => triggerToast('Official Fee Payment Receipt downloaded (PDF)!')}
            >
              📥 Download Paid Receipt (PDF)
            </button>
          </div>
        </div>

        <div>
          <div className="panel-title">Library Books &amp; Digital Resources</div>
          <div className="list-card">
            {libraryBooks.map(book => (
              <div className="list-row" key={book.id}>
                <div className="list-main">
                  <div className="list-dot" style={{ background: 'var(--teal-soft)', color: 'var(--teal)' }}>
                    📖
                  </div>
                  <div>
                    <div className="list-title">{book.title}</div>
                    <div className="list-sub">Author: {book.author} · Due: {book.due}</div>
                  </div>
                </div>
                <button
                  className="btn-mini"
                  onClick={() => triggerToast(`Renewed "${book.title}" for 14 days!`)}
                >
                  Renew
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
