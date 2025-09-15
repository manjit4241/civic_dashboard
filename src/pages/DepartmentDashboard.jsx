import { useEffect, useMemo, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { fetchComplaintsByDepartment } from '../services/firebasePlaceholders.js'
import { Card, CardHeader, CardTitle, CardContent, Table, THead, TBody, TR, TH, TD, Badge } from '../components/ui.jsx'

export default function DepartmentDashboard() {
  const { deptId } = useParams()
  const [complaints, setComplaints] = useState([])

  useEffect(() => {
    fetchComplaintsByDepartment(deptId).then(setComplaints)
  }, [deptId])

  const title = useMemo(() => deptId.charAt(0).toUpperCase() + deptId.slice(1) + ' Department', [deptId])

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">{title}</h2>
      <Card>
        <CardHeader>
          <CardTitle>Complaints</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <THead>
              <TR>
                <TH>Complaint ID</TH>
                <TH>Time/Date</TH>
                <TH>Complaint Name</TH>
                <TH>Urgency</TH>
                <TH>Status</TH>
                <TH>Upvotes</TH>
                <TH></TH>
              </TR>
            </THead>
            <TBody>
              {complaints.map(c => (
                <TR key={c.id}>
                  <TD className="font-medium">{c.id}</TD>
                  <TD>{new Date(c.createdAt).toLocaleString()}</TD>
                  <TD>{c.name}</TD>
                  <TD><Badge variant={c.urgency === 'High' ? 'danger' : c.urgency === 'Medium' ? 'warning' : 'default'}>{c.urgency}</Badge></TD>
                  <TD>{c.status}</TD>
                  <TD>{c.upvotes}</TD>
                  <TD>
                    <Link to={`/complaints/${c.id}`} className="text-primary underline">View</Link>
                  </TD>
                </TR>
              ))}
            </TBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}



