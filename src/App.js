import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Toast } from './components/Toast';
import { WelcomeHero } from './components/WelcomeHero';
import { RoleSelector } from './components/RoleSelector';
import { LoginForm } from './components/LoginForm';

// Student Portal Tabs
import { StudentOverview } from './components/StudentPortal/StudentOverview';
import { AttendanceTracker } from './components/StudentPortal/AttendanceTracker';
import { MarksPerformance } from './components/StudentPortal/MarksPerformance';
import { AssignmentHub } from './components/StudentPortal/AssignmentHub';
import { TimetableSchedule } from './components/StudentPortal/TimetableSchedule';
import { FeesAndLibrary } from './components/StudentPortal/FeesAndLibrary';

// Faculty Portal Tabs
import { FacultyOverview } from './components/FacultyPortal/FacultyOverview';
import { MarkAttendance } from './components/FacultyPortal/MarkAttendance';
import { GradingPanel } from './components/FacultyPortal/GradingPanel';
import { AssignmentManager } from './components/FacultyPortal/AssignmentManager';
import { AnnouncementsManager } from './components/FacultyPortal/AnnouncementsManager';

// Admin Portal Tabs
import { AdminOverview } from './components/AdminPortal/AdminOverview';
import { StudentManagement } from './components/AdminPortal/StudentManagement';
import { FacultyDirectory } from './components/AdminPortal/FacultyDirectory';
import { ReportsAndAI } from './components/AdminPortal/ReportsAndAI';

const MainContent = () => {
  const { currentPage, currentRole, activeTab, setActiveTab, user, setCurrentPage } = useApp();

  // Render view based on page state
  if (currentPage === 'welcome') {
    return <WelcomeHero />;
  }

  if (currentPage === 'roles') {
    return (
      <>
        <Navbar />
        <RoleSelector />
      </>
    );
  }

  if (currentPage === 'login') {
    return (
      <>
        <Navbar />
        <LoginForm />
      </>
    );
  }

  // Dashboard state
  const TAB_NAMES = {
    student: ['Overview', 'Attendance Tracker', 'Marks & Performance', 'Assignment Hub', 'Class Timetable', 'Fees & Library'],
    faculty: ['Overview', 'Mark Attendance', 'Grading & Marks', 'Assignment Manager', 'Announcements'],
    admin: ['Overview', 'Student Admissions', 'Faculty Directory', 'Reports & AI Analytics']
  };

  const tabs = TAB_NAMES[currentRole] || TAB_NAMES.student;

  const renderDashboardTab = () => {
    if (currentRole === 'student') {
      switch (activeTab) {
        case 0: return <StudentOverview />;
        case 1: return <AttendanceTracker />;
        case 2: return <MarksPerformance />;
        case 3: return <AssignmentHub />;
        case 4: return <TimetableSchedule />;
        case 5: return <FeesAndLibrary />;
        default: return <StudentOverview />;
      }
    }

    if (currentRole === 'faculty') {
      switch (activeTab) {
        case 0: return <FacultyOverview />;
        case 1: return <MarkAttendance />;
        case 2: return <GradingPanel />;
        case 3: return <AssignmentManager />;
        case 4: return <AnnouncementsManager />;
        default: return <FacultyOverview />;
      }
    }

    if (currentRole === 'admin') {
      switch (activeTab) {
        case 0: return <AdminOverview />;
        case 1: return <StudentManagement />;
        case 2: return <FacultyDirectory />;
        case 3: return <ReportsAndAI />;
        default: return <AdminOverview />;
      }
    }

    return null;
  };

  return (
    <div className={`page-container role-${currentRole}`}>
      <Navbar />

      {/* ID Card Hero Banner */}
      <div className="dash-hero">
        <div className="dash-id-card">
          <div className="dash-id-left">
            <div className="id-label">
              {currentRole === 'student' ? 'STUDENT PORTAL' : currentRole === 'faculty' ? 'FACULTY PORTAL' : 'ADMINISTRATOR PORTAL'}
            </div>
            <h2>{user.name}</h2>
            <div className="id-sub">{user.course || user.department || 'Academic Registrar'}</div>
            <div className="id-meta">
              <div>ID Number <span>{user.id}</span></div>
              <div>Status <span style={{ color: '#E1F1E8' }}>● Active</span></div>
              <div>Access Level <span>{user.role ? user.role.toUpperCase() : 'STANDARD'}</span></div>
            </div>
          </div>
          <div className="id-avatar">{user.avatar || 'GA'}</div>
        </div>
      </div>

      {/* Tabs navigation bar */}
      <div className="tab-row">
        {tabs.map((tName, idx) => (
          <button
            key={idx}
            className={`tab-btn ${activeTab === idx ? 'active' : ''}`}
            onClick={() => setActiveTab(idx)}
          >
            {tName}
          </button>
        ))}
      </div>

      {/* Dashboard tab body */}
      <div className="dash-body">
        {renderDashboardTab()}
      </div>

      {/* Bottom bar */}
      <div style={{ maxWidth: '1200px', margin: '0 auto 40px', padding: '0 28px', display: 'flex', justifyContent: 'space-between' }}>
        <button className="nav-btn" onClick={() => setCurrentPage('roles')}>← Switch Role</button>
        <button
          className="nav-btn primary"
          onClick={() => setActiveTab((activeTab + 1) % tabs.length)}
        >
          Next Tab →
        </button>
      </div>

      <Toast />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}
