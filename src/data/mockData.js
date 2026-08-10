export const DEMO_USERS = {
  student: {
    id: 'CS-2023-114',
    name: 'Amara Osei',
    role: 'student',
    course: 'B.Sc. Computer Science',
    year: 'Year 3 · Sem 6',
    section: 'A',
    email: 'amara.osei@gasc.edu.in',
    avatar: 'AO',
    gpa: '3.84 / 4.0',
    cgpa: '8.92 SGPA',
    overallAttendance: 90,
    creditsEarned: 84,
    totalCredits: 120,
    advisor: 'Dr. Marcus Reyes',
    feesStatus: 'Paid',
    feeDetails: {
      tuition: '₹ 18,500',
      lab: '₹ 3,200',
      library: '₹ 1,000',
      total: '₹ 22,700',
      status: 'Paid on 14 Jun 2026',
      invoiceId: 'INV-2026-8841'
    }
  },
  faculty: {
    id: 'FAC-0032',
    name: 'Dr. Marcus Reyes',
    role: 'faculty',
    department: 'Computer Science',
    designation: 'Associate Professor',
    office: 'Block C · Room 214',
    email: 'm.reyes@gasc.edu.in',
    avatar: 'MR',
    sectionsHandling: 3,
    totalStudents: 142,
    rating: '4.9 / 5.0'
  },
  admin: {
    id: 'ADM-0007',
    name: 'Priya Nair',
    role: 'admin',
    department: 'Academic Affairs',
    designation: 'Registrar',
    office: 'Admin Block · Room 101',
    email: 'registrar@gasc.edu.in',
    avatar: 'PN',
    accessLevel: 'Super Administrator'
  }
};

export const INITIAL_STUDENT_ATTENDANCE = [
  { day: 1, date: '01 Aug', status: 'present', subject: 'Data Structures' },
  { day: 2, date: '02 Aug', status: 'present', subject: 'Database Systems' },
  { day: 3, date: '03 Aug', status: 'present', subject: 'Operating Systems' },
  { day: 4, date: '04 Aug', status: 'absent', subject: 'Computer Networks' },
  { day: 5, date: '05 Aug', status: 'present', subject: 'Data Structures' },
  { day: 6, date: '06 Aug', status: 'present', subject: 'Algorithms Lab' },
  { day: 7, date: '07 Aug', status: 'present', subject: 'Software Engineering' },
  { day: 8, date: '08 Aug', status: 'present', subject: 'Database Systems' },
  { day: 9, date: '09 Aug', status: 'absent', subject: 'Data Structures' },
  { day: 10, date: '10 Aug', status: 'present', subject: 'Operating Systems' }
];

export const COURSE_MARKS = [
  { courseCode: 'CS601', title: 'Data Structures & Algorithms', internal: 24, external: 68, total: 92, grade: 'A+' },
  { courseCode: 'CS602', title: 'Database Management Systems', internal: 22, external: 64, total: 86, grade: 'A' },
  { courseCode: 'CS603', title: 'Operating Systems', internal: 25, external: 65, total: 90, grade: 'A+' },
  { courseCode: 'CS604', title: 'Computer Networks & Security', internal: 20, external: 58, total: 78, grade: 'B+' },
  { courseCode: 'CS605', title: 'Software Engineering Lab', internal: 25, external: 70, total: 95, grade: 'O' }
];

export const INITIAL_FACULTY_ROSTER = [
  { id: 'CS-114', name: 'Amara Osei', regNo: '23CS114', attendance: 'present', lastMarks: 92 },
  { id: 'CS-118', name: 'Rhea Kapoor', regNo: '23CS118', attendance: 'present', lastMarks: 88 },
  { id: 'CS-121', name: 'Tomás Silva', regNo: '23CS121', attendance: 'absent', lastMarks: 74 },
  { id: 'CS-126', name: 'Nina Mensah', regNo: '23CS126', attendance: 'present', lastMarks: 95 },
  { id: 'CS-130', name: 'Vikram Rao', regNo: '23CS130', attendance: 'present', lastMarks: 81 },
  { id: 'CS-133', name: 'Leah Chen', regNo: '23CS133', attendance: 'present', lastMarks: 90 },
  { id: 'CS-138', name: 'Karan Patel', regNo: '23CS138', attendance: 'absent', lastMarks: 68 },
  { id: 'CS-141', name: 'Sofia Diaz', regNo: '23CS141', attendance: 'present', lastMarks: 84 },
  { id: 'CS-145', name: 'Ibrahim Al-Rashid', regNo: '23CS145', attendance: 'present', lastMarks: 89 },
  { id: 'CS-149', name: 'Zoe Adams', regNo: '23CS149', attendance: 'present', lastMarks: 91 }
];

export const INITIAL_ASSIGNMENTS = [
  { id: 'A4', code: 'CS601', title: 'Data Structures — Red-Black Tree Implementation', due: 'In 2 days', status: 'pending', totalPoints: 100, submitted: false },
  { id: 'L2', code: 'CS603', title: 'Operating Systems — Process Scheduling Simulation', due: 'In 5 days', status: 'pending', totalPoints: 50, submitted: false },
  { id: 'A3', code: 'CS602', title: 'Database Systems — Normalization & ER Diagram', due: 'Submitted', status: 'submitted', totalPoints: 100, submitted: true, grade: '96/100' },
  { id: 'Q1', code: 'CS604', title: 'Computer Networks — Subnetting Quiz', due: 'Graded', status: 'graded', totalPoints: 20, submitted: true, grade: '19/20' }
];

export const FACULTY_GRADING_QUEUE = [
  { id: 'G1', course: 'CS601 - Sec A', task: 'Assignment 4 — Tree Implementation', pendingCount: 14, deadline: '12 Aug 2026' },
  { id: 'G2', course: 'CS602 - Sec B', task: 'Quiz 2 — SQL Joins', pendingCount: 9, deadline: '14 Aug 2026' },
  { id: 'G3', course: 'CS603 - Sec A', task: 'Lab Report 1 — Threading', pendingCount: 4, deadline: '15 Aug 2026' }
];

export const ANNOUNCEMENTS = [
  { id: 'ANN-1', title: 'Midterm Examination Schedule Released', date: '10 Aug 2026', author: 'Academic Office', tag: 'Important', content: 'The end-semester exam timetable is posted on the portal notice board.' },
  { id: 'ANN-2', title: 'Campus Hackathon 2026 Registration Open', date: '08 Aug 2026', author: 'Dept. of CS', tag: 'Event', content: 'Register your teams of 3-4 by Friday to participate in the annual 24hr Hackathon.' },
  { id: 'ANN-3', title: 'Library Book Returns & Extensions', date: '05 Aug 2026', author: 'Central Library', tag: 'Notice', content: 'All overdue books can be renewed online via the Smart Portal without fine.' }
];

export const TIMETABLE_DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
export const TIMETABLE_PERIODS = ['09:00 - 10:00', '10:00 - 11:00', '11:15 - 12:15', '01:15 - 02:15', '02:15 - 03:15'];

export const STUDENT_TIMETABLE = {
  'Mon': { '09:00 - 10:00': { name: 'Data Structures', room: 'Block C-204', bg: '#DCEBE9', fg: '#184C4A' }, '11:15 - 12:15': { name: 'Database Systems', room: 'Lab 2', bg: '#F6EBD2', fg: '#8a691c' } },
  'Tue': { '10:00 - 11:00': { name: 'Operating Systems', room: 'Block C-204', bg: '#F3E1E3', fg: '#7A2230' }, '01:15 - 02:15': { name: 'Computer Networks', room: 'Block B-102', bg: '#DCEBE9', fg: '#184C4A' } },
  'Wed': { '09:00 - 10:00': { name: 'Algorithms Lab', room: 'Lab 1', bg: '#E1F1E8', fg: '#2E7D5B' }, '02:15 - 03:15': { name: 'Software Eng.', room: 'Block C-204', bg: '#F6EBD2', fg: '#8a691c' } },
  'Thu': { '11:15 - 12:15': { name: 'Data Structures', room: 'Block C-204', bg: '#DCEBE9', fg: '#184C4A' }, '01:15 - 02:15': { name: 'Database Systems', room: 'Lab 2', bg: '#F6EBD2', fg: '#8a691c' } },
  'Fri': { '09:00 - 10:00': { name: 'Operating Systems', room: 'Block C-204', bg: '#F3E1E3', fg: '#7A2230' }, '02:15 - 03:15': { name: 'Library / Project', room: 'Main Library', bg: '#E1F1E8', fg: '#2E7D5B' } }
};

export const ADMIN_STUDENTS_LIST = [
  { id: 1, name: 'Rhea Kapoor', course: 'B.Sc. Data Science', status: 'approved', regNo: '23DS004', cgpa: '9.1' },
  { id: 2, name: 'Aarav Sharma', course: 'B.Sc. Physics', status: 'pending', regNo: '23PH019', cgpa: '8.4' },
  { id: 3, name: 'Siddharth V', course: 'B.A. Economics', status: 'approved', regNo: '23EC011', cgpa: '8.7' },
  { id: 4, name: 'Pooja Sundaram', course: 'B.Com. Finance', status: 'approved', regNo: '23CM088', cgpa: '9.3' },
  { id: 5, name: 'Devika Menon', course: 'B.Sc. Chemistry', status: 'pending', regNo: '23CH002', cgpa: '7.9' }
];

export const FACULTY_DIRECTORY_DATA = [
  { name: 'Dr. Marcus Reyes', dept: 'Computer Science', role: 'Associate Prof.', status: 'Active', classes: '3 Sections' },
  { name: 'Dr. Sana Alvi', dept: 'Database Systems', role: 'Professor', status: 'Active', classes: '4 Sections' },
  { name: 'Dr. James Kwan', dept: 'Operating Systems', role: 'Assistant Prof.', status: 'On Leave', classes: '2 Sections' },
  { name: 'Dr. Meera Iyer', dept: 'Data Science', role: 'Head of Dept.', status: 'Active', classes: '2 Sections' }
];

export const LIBRARY_BOOKS = [
  { id: 'B-101', title: 'Introduction to Algorithms (CLRS)', author: 'Cormen et al.', due: '20 Aug 2026', status: 'Borrowed' },
  { id: 'B-204', title: 'Database System Concepts 7th Ed', author: 'Silberschatz', due: '25 Aug 2026', status: 'Borrowed' },
  { id: 'B-309', title: 'Operating System Concepts', author: 'Galvin', due: '-', status: 'Available' }
];
