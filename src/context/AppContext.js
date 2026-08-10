import React, { createContext, useContext, useState } from 'react';
import {
  DEMO_USERS,
  INITIAL_STUDENT_ATTENDANCE,
  INITIAL_FACULTY_ROSTER,
  INITIAL_ASSIGNMENTS,
  FACULTY_GRADING_QUEUE,
  ANNOUNCEMENTS,
  ADMIN_STUDENTS_LIST,
  FACULTY_DIRECTORY_DATA,
  LIBRARY_BOOKS
} from '../data/mockData';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Navigation & Auth step state: 'welcome' | 'roles' | 'login' | 'dashboard'
  const [currentPage, setCurrentPage] = useState('welcome');
  const [currentRole, setCurrentRole] = useState('student'); // 'student' | 'faculty' | 'admin'
  const [pendingRole, setPendingRole] = useState('student');
  const [activeTab, setActiveTab] = useState(0);

  // User state
  const [user, setUser] = useState(DEMO_USERS.student);

  // Theme mode ('light' | 'dark')
  const [theme, setTheme] = useState('light');

  // Dynamic Data States
  const [studentAttendance] = useState(INITIAL_STUDENT_ATTENDANCE);
  const [facultyRoster, setFacultyRoster] = useState(INITIAL_FACULTY_ROSTER);
  const [assignments, setAssignments] = useState(INITIAL_ASSIGNMENTS);
  const [gradingQueue] = useState(FACULTY_GRADING_QUEUE);
  const [announcementList, setAnnouncementList] = useState(ANNOUNCEMENTS);
  const [adminStudents, setAdminStudents] = useState(ADMIN_STUDENTS_LIST);
  const [facultyDirectory] = useState(FACULTY_DIRECTORY_DATA);
  const [libraryBooks] = useState(LIBRARY_BOOKS);

  // Toast system
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 2800);
  };

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    triggerToast(`Switched to ${nextTheme.toUpperCase()} theme mode`);
  };

  const selectRoleToLogin = (roleKey) => {
    setPendingRole(roleKey);
    setCurrentPage('login');
  };

  const performLogin = (customName, customId) => {
    const defaultUser = DEMO_USERS[pendingRole] || DEMO_USERS.student;
    const loggedInUser = {
      ...defaultUser,
      name: customName || defaultUser.name,
      id: customId || defaultUser.id,
      avatar: (customName || defaultUser.name).split(' ').slice(0, 2).map(n => n[0].toUpperCase()).join('')
    };

    setCurrentRole(pendingRole);
    setUser(loggedInUser);
    setActiveTab(0);
    setCurrentPage('dashboard');
    triggerToast(`Welcome back, ${loggedInUser.name.split(' ')[0]}!`);
  };

  const switchRole = (newRole) => {
    setCurrentRole(newRole);
    setPendingRole(newRole);
    const newDemoUser = DEMO_USERS[newRole];
    setUser(newDemoUser);
    setActiveTab(0);
    triggerToast(`Switched to ${newRole.toUpperCase()} portal view`);
  };

  // State mutators for features
  const toggleFacultyStudentAttendance = (studentId) => {
    setFacultyRoster(prev =>
      prev.map(st => st.id === studentId ? { ...st, attendance: st.attendance === 'present' ? 'absent' : 'present' } : st)
    );
  };

  const markAllFacultyAttendancePresent = () => {
    setFacultyRoster(prev => prev.map(st => ({ ...st, attendance: 'present' })));
    triggerToast('All 10 students marked Present!');
  };

  const uploadAssignmentFile = (assignmentId, fileName) => {
    setAssignments(prev =>
      prev.map(a => a.id === assignmentId ? { ...a, status: 'submitted', submitted: true, due: 'Submitted', fileName } : a)
    );
    triggerToast(`File "${fileName}" uploaded successfully!`);
  };

  const postNewAnnouncement = (title, content, tag) => {
    const newAnn = {
      id: `ANN-${Date.now()}`,
      title,
      content,
      tag: tag || 'Notice',
      date: 'Today',
      author: user.name
    };
    setAnnouncementList([newAnn, ...announcementList]);
    triggerToast('Announcement published to portal!');
  };

  const addAdminStudent = (name, course) => {
    const newSt = {
      id: Date.now(),
      name,
      course,
      status: 'pending',
      regNo: `23${course.slice(0, 2).toUpperCase()}${Math.floor(100 + Math.random() * 900)}`,
      cgpa: '0.0'
    };
    setAdminStudents([newSt, ...adminStudents]);
    triggerToast(`Added ${name} to admission queue`);
  };

  const toggleStudentApproval = (id) => {
    setAdminStudents(prev =>
      prev.map(st => st.id === id ? { ...st, status: st.status === 'approved' ? 'pending' : 'approved' } : st)
    );
    triggerToast('Student status updated!');
  };

  return (
    <AppContext.Provider value={{
      currentPage, setCurrentPage,
      currentRole, setCurrentRole,
      pendingRole, setPendingRole,
      activeTab, setActiveTab,
      user, setUser,
      theme, toggleTheme,
      toastMessage, showToast, triggerToast,
      selectRoleToLogin, performLogin, switchRole,
      studentAttendance,
      facultyRoster, toggleFacultyStudentAttendance, markAllFacultyAttendancePresent,
      assignments, uploadAssignmentFile,
      gradingQueue,
      announcementList, postNewAnnouncement,
      adminStudents, addAdminStudent, toggleStudentApproval,
      facultyDirectory,
      libraryBooks
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
