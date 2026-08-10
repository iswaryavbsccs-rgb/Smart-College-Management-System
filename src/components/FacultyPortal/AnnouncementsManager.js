import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';

export const AnnouncementsManager = () => {
  const { announcementList, postNewAnnouncement } = useApp();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tag, setTag] = useState('Important');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;
    postNewAnnouncement(title, content, tag);
    setTitle('');
    setContent('');
  };

  return (
    <div className="tab-panel">
      <div className="two-col">
        <div>
          <div className="panel-title">Post New Announcement</div>
          <form className="list-card" style={{ padding: '24px' }} onSubmit={handleSubmit}>
            <div style={{ marginBottom: '14px' }}>
              <label style={{ fontSize: '12px', fontWeight: 700, color: 'var(--slate)' }}>Category Tag</label>
              <select
                value={tag}
                onChange={(e) => setTag(e.target.value)}
                style={{ width: '100%', padding: '10px', marginTop: '4px', borderRadius: '8px', border: '1px solid var(--line)' }}
              >
                <option value="Important">Important Notice</option>
                <option value="Event">Campus Event</option>
                <option value="Exam">Exam Announcement</option>
              </select>
            </div>

            <div style={{ marginBottom: '14px' }}>
              <label style={{ fontSize: '12px', fontWeight: 700, color: 'var(--slate)' }}>Announcement Title</label>
              <input
                type="text"
                placeholder="e.g. Lab 3 rescheduled to Friday"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={{ width: '100%', padding: '10px', marginTop: '4px', borderRadius: '8px', border: '1px solid var(--line)' }}
                required
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ fontSize: '12px', fontWeight: 700, color: 'var(--slate)' }}>Announcement Content</label>
              <textarea
                rows="4"
                placeholder="Details of the announcement..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                style={{ width: '100%', padding: '10px', marginTop: '4px', borderRadius: '8px', border: '1px solid var(--line)' }}
                required
              ></textarea>
            </div>

            <button type="submit" className="nav-btn primary" style={{ width: '100%', justifyContent: 'center' }}>
              📢 Broadcast Announcement
            </button>
          </form>
        </div>

        <div>
          <div className="panel-title">Recent Broadcast Announcements</div>
          <div className="list-card">
            {announcementList.map(ann => (
              <div className="list-row" key={ann.id}>
                <div className="list-main">
                  <div className="list-dot" style={{ background: 'var(--gold-soft)', color: 'var(--gold)' }}>
                    📢
                  </div>
                  <div>
                    <div className="list-title">{ann.title}</div>
                    <div className="list-sub">{ann.author} · {ann.date}</div>
                  </div>
                </div>
                <span className="badge gold">{ann.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
