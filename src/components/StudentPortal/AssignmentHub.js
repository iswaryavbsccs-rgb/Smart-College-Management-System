import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';

export const AssignmentHub = () => {
  const { assignments, uploadAssignmentFile } = useApp();
  const [selectedFile, setSelectedFile] = useState({});
  const [uploadingId, setUploadingId] = useState(null);

  const handleFileChange = (assignmentId, file) => {
    if (!file) return;
    setSelectedFile({ ...selectedFile, [assignmentId]: file.name });
  };

  const handleUploadSubmit = (assignmentId) => {
    const filename = selectedFile[assignmentId] || 'Assignment_Submission.pdf';
    setUploadingId(assignmentId);
    setTimeout(() => {
      uploadAssignmentFile(assignmentId, filename);
      setUploadingId(null);
    }, 1200);
  };

  return (
    <div className="tab-panel">
      <div className="panel-title">Assignment Portal &amp; Submission Upload</div>

      <div className="list-card">
        {assignments.map(ass => (
          <div className="list-row" key={ass.id}>
            <div className="list-main">
              <div
                className="list-dot"
                style={{
                  background: ass.submitted ? 'var(--green-soft)' : 'var(--gold-soft)',
                  color: ass.submitted ? 'var(--green)' : 'var(--gold)'
                }}
              >
                {ass.id}
              </div>
              <div>
                <div className="list-title">{ass.title}</div>
                <div className="list-sub">
                  Code: {ass.code} · Max Score: {ass.totalPoints} pts · {ass.due}
                  {ass.fileName && <span style={{ color: 'var(--teal)', fontWeight: 600 }}> ({ass.fileName})</span>}
                </div>
              </div>
            </div>

            <div>
              {ass.submitted ? (
                <span className="badge green">
                  ✓ Submitted {ass.grade ? `· Grade: ${ass.grade}` : ''}
                </span>
              ) : (
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <input
                    type="file"
                    id={`file-input-${ass.id}`}
                    style={{ display: 'none' }}
                    onChange={(e) => handleFileChange(ass.id, e.target.files[0])}
                  />
                  <label
                    htmlFor={`file-input-${ass.id}`}
                    className="btn-mini"
                    style={{ cursor: 'pointer', background: 'var(--cream)' }}
                  >
                    {selectedFile[ass.id] ? selectedFile[ass.id] : '📁 Choose File'}
                  </label>

                  <button
                    className="btn-mini done"
                    onClick={() => handleUploadSubmit(ass.id)}
                    disabled={uploadingId === ass.id}
                  >
                    {uploadingId === ass.id ? 'Uploading…' : 'Upload File'}
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
