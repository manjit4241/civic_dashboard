

// Placeholder Firebase service layer
// TODO: Replace dummy implementations with Firebase SDK (Auth + Firestore + Storage) calls

const DEPARTMENTS = [
  { id: 'water', name: 'Water Supply' },
  { id: 'sanitation', name: 'Sanitation' },
  { id: 'roads', name: 'Roads' },
  { id: 'electricity', name: 'Electricity' },
]

const dummyComplaints = [
  {
    id: 'CMP-1001',
    name: 'Pothole near main square',
    description: 'Large pothole causing traffic issues.',
    deptId: 'roads',
    status: 'Open',
    urgency: 'High',
    upvotes: 12,
    photoUrl: '', // TODO: Firebase Storage URL
    createdAt: Date.now() - 1000 * 60 * 60 * 6,
    location: { lat: 19.076, lng: 72.8777 },
  },
  {
    id: 'CMP-1002',
    name: 'Water leakage in Sector 5',
    description: 'Continuous leakage reported by residents.',
    deptId: 'water',
    status: 'In Progress',
    urgency: 'Medium',
    upvotes: 7,
    photoUrl: '',
    createdAt: Date.now() - 1000 * 60 * 60 * 26,
    location: { lat: 19.09, lng: 72.88 },
  },
  {
    id: 'CMP-1003',
    name: 'Streetlight not working',
    description: 'Dark street at night poses security risk.',
    deptId: 'electricity',
    status: 'Open',
    urgency: 'Low',
    upvotes: 3,
    photoUrl: '',
    createdAt: Date.now() - 1000 * 60 * 60 * 2,
    location: { lat: 19.07, lng: 72.89 },
  },
  {
    id: 'CMP-1004',
    name: 'Garbage pile-up',
    description: 'Garbage not collected from last 3 days.',
    deptId: 'sanitation',
    status: 'Open',
    urgency: 'High',
    upvotes: 15,
    photoUrl: '',
    createdAt: Date.now() - 1000 * 60 * 60 * 12,
    location: { lat: 19.08, lng: 72.87 },
  },
  {
    id: 'CMP-1005',
    name: 'Broken streetlight in Block A',
    description: 'Needs replacement for safety.',
    deptId: 'electricity',
    status: 'In Progress',
    urgency: 'Medium',
    upvotes: 5,
    photoUrl: '',
    createdAt: Date.now() - 1000 * 60 * 80,
    location: { lat: 19.071, lng: 72.881 },
  },
  {
    id: 'CMP-1006',
    name: 'Garbage collection delayed',
    description: 'Overflowing bins in Sector 12.',
    deptId: 'sanitation',
    status: 'Open',
    urgency: 'High',
    upvotes: 22,
    photoUrl: '',
    createdAt: Date.now() - 1000 * 60 * 300,
    location: { lat: 19.061, lng: 72.871 },
  },
  {
    id: 'CMP-1007',
    name: 'Water supply disruption',
    description: 'No water since morning in Phase 2.',
    deptId: 'water',
    status: 'Open',
    urgency: 'High',
    upvotes: 18,
    photoUrl: '',
    createdAt: Date.now() - 1000 * 60 * 600,
    location: { lat: 19.101, lng: 72.895 },
  },
  {
    id: 'CMP-1008',
    name: 'Bus shelter damaged',
    description: 'Panels shattered after storm.',
    deptId: 'roads',
    status: 'Open',
    urgency: 'Low',
    upvotes: 2,
    photoUrl: '',
    createdAt: Date.now() - 1000 * 60 * 900,
    location: { lat: 19.085, lng: 72.861 },
  },
  {
    id: 'CMP-1009',
    name: 'Clinic medicine shortage',
    description: 'Essential drugs unavailable.',
    deptId: 'sanitation',
    status: 'In Progress',
    urgency: 'Medium',
    upvotes: 9,
    photoUrl: '',
    createdAt: Date.now() - 1000 * 60 * 1200,
    location: { lat: 19.12, lng: 72.9 },
  },
  {
    id: 'CMP-1010',
    name: 'School boundary wall cracked',
    description: 'Risk to students playing nearby.',
    deptId: 'roads',
    status: 'Open',
    urgency: 'Medium',
    upvotes: 6,
    photoUrl: '',
    createdAt: Date.now() - 1000 * 60 * 1500,
    location: { lat: 19.11, lng: 72.82 },
  },
  {
    id: 'CMP-1011',
    name: 'Park benches vandalized',
    description: 'Repair required in City Park.',
    deptId: 'sanitation',
    status: 'Open',
    urgency: 'Low',
    upvotes: 1,
    photoUrl: '',
    createdAt: Date.now() - 1000 * 60 * 2000,
    location: { lat: 19.06, lng: 72.91 },
  },
  {
    id: 'CMP-1012',
    name: 'Drainage blocked',
    description: 'Waterlogging after rain in Ward 3.',
    deptId: 'sanitation',
    status: 'Open',
    urgency: 'High',
    upvotes: 19,
    photoUrl: '',
    createdAt: Date.now() - 1000 * 60 * 2100,
    location: { lat: 19.13, lng: 72.84 },
  },
  {
    id: 'CMP-1013',
    name: 'Cyber cafe operating without license',
    description: 'Inspection required.',
    deptId: 'electricity',
    status: 'Open',
    urgency: 'Low',
    upvotes: 0,
    photoUrl: '',
    createdAt: Date.now() - 1000 * 60 * 3000,
    location: { lat: 19.041, lng: 72.901 },
  },
  {
    id: 'CMP-1014',
    name: 'Women shelter maintenance issue',
    description: 'Leakage in the roof.',
    deptId: 'water',
    status: 'In Progress',
    urgency: 'Medium',
    upvotes: 4,
    photoUrl: '',
    createdAt: Date.now() - 1000 * 60 * 3500,
    location: { lat: 19.021, lng: 72.881 },
  },
  {
    id: 'CMP-1015',
    name: 'Farmers market sanitation',
    description: 'Uncollected waste reported.',
    deptId: 'sanitation',
    status: 'Open',
    urgency: 'Low',
    upvotes: 3,
    photoUrl: '',
    createdAt: Date.now() - 1000 * 60 * 3700,
    location: { lat: 19.051, lng: 72.841 },
  },
  {
    id: 'CMP-1016',
    name: 'Rural road damaged',
    description: 'Patches required near village entry.',
    deptId: 'roads',
    status: 'Open',
    urgency: 'Medium',
    upvotes: 8,
    photoUrl: '',
    createdAt: Date.now() - 1000 * 60 * 4000,
    location: { lat: 19.001, lng: 72.901 },
  },
  {
    id: 'CMP-1017',
    name: 'Tourist info board missing',
    description: 'Replace signage at beach.',
    deptId: 'roads',
    status: 'Open',
    urgency: 'Low',
    upvotes: 2,
    photoUrl: '',
    createdAt: Date.now() - 1000 * 60 * 4300,
    location: { lat: 19.091, lng: 72.801 },
  },
  {
    id: 'CMP-1018',
    name: 'Factory noise complaint',
    description: 'High decibel levels at night.',
    deptId: 'sanitation',
    status: 'Open',
    urgency: 'Medium',
    upvotes: 10,
    photoUrl: '',
    createdAt: Date.now() - 1000 * 60 * 4600,
    location: { lat: 19.071, lng: 72.921 },
  },
  {
    id: 'CMP-1019',
    name: 'Public finance office queue system down',
    description: 'Token display not functioning.',
    deptId: 'electricity',
    status: 'In Progress',
    urgency: 'Low',
    upvotes: 1,
    photoUrl: '',
    createdAt: Date.now() - 1000 * 60 * 4800,
    location: { lat: 19.031, lng: 72.911 },
  },
  {
    id: 'CMP-1020',
    name: 'Emergency siren test failure',
    description: 'Siren not audible in Zone 4.',
    deptId: 'electricity',
    status: 'Open',
    urgency: 'High',
    upvotes: 11,
    photoUrl: '',
    createdAt: Date.now() - 1000 * 60 * 5000,
    location: { lat: 19.02, lng: 72.93 },
  },
]

let inMemoryComplaints = [...dummyComplaints]

export async function fetchStats() {
  // TODO: Firestore aggregate queries
  const total = inMemoryComplaints.length
  const open = inMemoryComplaints.filter(c => c.status !== 'Resolved').length
  const resolved = inMemoryComplaints.filter(c => c.status === 'Resolved').length
  return { total, open, resolved }
}

export async function fetchRecentComplaints(limit = 5) {
  // TODO: Firestore query ordered by createdAt desc with limit
  return [...inMemoryComplaints]
    .sort((a,b) => b.createdAt - a.createdAt)
    .slice(0, limit)
}

export async function fetchAllComplaints() {
  // TODO: Firestore collection fetch with real-time listener
  return [...inMemoryComplaints]
}

export async function fetchComplaintsByDepartment(deptId) {
  return inMemoryComplaints.filter(c => c.deptId === deptId)
}

export async function fetchComplaintById(id) {
  return inMemoryComplaints.find(c => c.id === id) || null
}

export async function markComplaintResolved(id) {
  // TODO: Firestore doc update
  inMemoryComplaints = inMemoryComplaints.map(c => c.id === id ? { ...c, status: 'Resolved' } : c)
  return true
}

export async function signInAsOfficer({ username, password }) {
  // TODO: Firebase Auth signInWithEmailAndPassword and check admin claim
  if (username && password) {
    return { uid: 'admin-1', name: 'Main Officer', role: 'main_officer', username }
  }
  throw new Error('Invalid credentials')
}

export async function signInAsDepartment(deptId, { username, password }) {
  // TODO: Firebase Auth + link user to dept, restrict via rules
  const dept = DEPARTMENTS.find(d => d.id === deptId)
  if (username && password) {
    return { uid: `staff-${deptId}`, name: `${dept?.name} Staff`, role: 'department_staff', deptId, username }
  }
  throw new Error('Invalid credentials')
}

export async function signOut() {
  // TODO: Firebase signOut
  return true
}

export function getDepartments() {
  return DEPARTMENTS
}

export async function fetchAnalyticsData() {
  // TODO: Aggregate charts data from Firestore
  const byDay = [
    { day: 'Mon', complaints: 12 },
    { day: 'Tue', complaints: 9 },
    { day: 'Wed', complaints: 15 },
    { day: 'Thu', complaints: 7 },
    { day: 'Fri', complaints: 14 },
    { day: 'Sat', complaints: 5 },
    { day: 'Sun', complaints: 8 },
  ]
  const byDept = getDepartments().map(d => ({ department: d.name, complaints: inMemoryComplaints.filter(c => c.deptId === d.id).length }))
  return { byDay, byDept }
}



