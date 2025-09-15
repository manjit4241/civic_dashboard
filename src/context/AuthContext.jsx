import { createContext, useContext, useMemo, useState } from 'react'
import { signInAsDepartment, signInAsOfficer, signOut } from '../services/firebasePlaceholders.js'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  const loginOfficer = async (credentials) => {
    // TODO: Replace with Firebase Auth sign-in and custom claims for roles
    const res = await signInAsOfficer(credentials)
    setUser(res)
  }

  const loginDepartmentStaff = async (deptId, credentials) => {
    // TODO: Replace with Firebase Auth sign-in and restrict by department in Firestore rules
    const res = await signInAsDepartment(deptId, credentials)
    setUser(res)
  }

  const logout = async () => {
    // TODO: Firebase signOut
    await signOut()
    setUser(null)
  }

  const value = useMemo(() => ({ user, loginOfficer, loginDepartmentStaff, logout }), [user])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}



