import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchComplaintById, markComplaintResolved } from '../services/firebasePlaceholders.js'
import { Card, CardHeader, CardTitle, CardContent, Button, Badge } from '../components/ui.jsx'

export default function ComplaintDetail() {
  const { complaintId } = useParams()
  const [complaint, setComplaint] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    fetchComplaintById(complaintId).then(setComplaint)
  }, [complaintId])

  const handleResolve = async () => {
    if (!complaint) return
    await markComplaintResolved(complaint.id)
    const updated = await fetchComplaintById(complaint.id)
    setComplaint(updated)
  }

  if (!complaint) return <div>Loading...</div>

  return (
    <div className="space-y-4 max-w-3xl">
      <Button variant="outline" onClick={() => navigate(-1)}>Back</Button>
      <Card>
        <CardHeader>
          <CardTitle>Complaint Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <img
                src={complaint.photoUrl || 'https://placehold.co/600x400?text=Complaint+Photo'}
                alt={complaint.name}
                className="w-full rounded-md border"
              />
            </div>
            <div className="space-y-2">
              <div><span className="font-semibold">Complaint ID:</span> {complaint.id}</div>
              <div><span className="font-semibold">Name:</span> {complaint.name}</div>
              <div><span className="font-semibold">Description:</span> {complaint.description}</div>
              <div><span className="font-semibold">Location:</span> {complaint.location.lat}, {complaint.location.lng}</div>
              <div><span className="font-semibold">Status:</span> <Badge>{complaint.status}</Badge></div>
              <div><span className="font-semibold">Urgency:</span> <Badge variant={complaint.urgency === 'High' ? 'danger' : complaint.urgency === 'Medium' ? 'warning' : 'default'}>{complaint.urgency}</Badge></div>
            </div>
          </div>
          <Button onClick={handleResolve} disabled={complaint.status === 'Resolved'}>
            {complaint.status === 'Resolved' ? 'Resolved' : 'Mark as Resolved'}
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}



