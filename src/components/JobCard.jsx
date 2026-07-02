import { useState } from 'react';
import api from '../api/axios';
import './JobCard.css';

const ROTATIONS = { applied: '-3deg', interview: '2deg', offer: '-2deg', rejected: '3deg' };
const COLORS = {
  applied: { border: 'var(--applied)', text: 'var(--applied-text)' },
  interview: { border: 'var(--interview)', text: 'var(--interview-text)' },
  offer: { border: 'var(--offer)', text: 'var(--offer-text)' },
  rejected: { border: 'var(--rejected)', text: 'var(--rejected-text)' },
};

function JobCard({ job, onUpdated }) {
  const [updating, setUpdating] = useState(false);
  const colors = COLORS[job.status] || COLORS.applied;
  const rotation = ROTATIONS[job.status] || '0deg';

  const handleStatusChange = async (e) => {
    const newStatus = e.target.value;
    setUpdating(true);
    try {
      await api.put(`/jobs/${job._id}`, { status: newStatus });
      onUpdated();
    } catch (err) {
      alert('Could not update status. Try again.');
    } finally {
      setUpdating(false);
    }
  };

  const handleDelete = async () => {
    const confirmed = window.confirm(`Delete application for ${job.position} at ${job.company}?`);
    if (!confirmed) return;
    try {
      await api.delete(`/jobs/${job._id}`);
      onUpdated();
    } catch (err) {
      alert('Could not delete. Try again.');
    }
  };

  return (
    <div className="job-card">
      <div className="job-card-top">
        <div>
          <div className="job-card-company">{job.company}</div>
          <div className="job-card-position">{job.position}</div>
        </div>
        <button className="job-card-delete" onClick={handleDelete} title="Delete">&times;</button>
      </div>

      <div
        className="job-card-stamp"
        style={{
          borderColor: colors.border,
          color: colors.text,
          transform: `rotate(${rotation})`,
        }}
      >
        {job.status}
      </div>

      <select
        className="job-card-status-select"
        value={job.status}
        onChange={handleStatusChange}
        disabled={updating}
      >
        <option value="applied">Applied</option>
        <option value="interview">Interview</option>
        <option value="offer">Offer</option>
        <option value="rejected">Rejected</option>
      </select>
    </div>
  );
}

export default JobCard;