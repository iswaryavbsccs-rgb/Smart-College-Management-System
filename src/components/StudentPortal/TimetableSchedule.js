import React from 'react';
import { TIMETABLE_DAYS, TIMETABLE_PERIODS, STUDENT_TIMETABLE } from '../../data/mockData';

export const TimetableSchedule = () => {
  return (
    <div className="tab-panel">
      <div className="panel-title">Weekly Class Timetable &amp; Room Allocations</div>

      <div className="timetable-wrap">
        <table className="timetable">
          <thead>
            <tr>
              <th>Time Slot</th>
              {TIMETABLE_DAYS.map(day => (
                <th key={day}>{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TIMETABLE_PERIODS.map(period => (
              <tr key={period}>
                <td>{period}</td>
                {TIMETABLE_DAYS.map(day => {
                  const cell = (STUDENT_TIMETABLE[day] || {})[period];
                  return (
                    <td key={day}>
                      {cell ? (
                        <div className="tt-cell" style={{ background: cell.bg, color: cell.fg }}>
                          {cell.name}
                          <br />
                          <span style={{ fontWeight: 400, opacity: 0.8, fontSize: '10.5px' }}>{cell.room}</span>
                        </div>
                      ) : (
                        <span className="tt-empty">—</span>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
