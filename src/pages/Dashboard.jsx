import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import { fetchStats, fetchRecentComplaints, fetchAllComplaints } from '../services/firebasePlaceholders.js'
import { Card, CardHeader, CardTitle, CardContent, Table, THead, TBody, TR, TH, TD, Badge } from '../components/ui.jsx'
import { Link } from 'react-router-dom'

// Create colored marker icons based on status
const createMarkerIcon = (status) => {
  const color = status === 'Open' ? 'red' : status === 'In Progress' ? 'blue' : 'green'
  return new L.Icon({
    iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${color}.png`,
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  })
}

export default function Dashboard() {
  const [stats, setStats] = useState({ total: 0, open: 0, resolved: 0 })
  const [recent, setRecent] = useState([])
  const [all, setAll] = useState([])

  useEffect(() => {
    fetchStats().then(setStats)
    fetchAllComplaints().then(allComplaints => {
      setAll(allComplaints)
      // Prioritize high priority complaints, then fill with others
      const highPriority = allComplaints.filter(c => c.urgency === 'High').sort((a,b) => b.createdAt - a.createdAt)
      const others = allComplaints.filter(c => c.urgency !== 'High').sort((a,b) => b.createdAt - a.createdAt)
      const recent = [...highPriority, ...others].slice(0, 5)
      setRecent(recent)
    })
  }, [])

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Total Complaints</CardTitle>
          </CardHeader>
          <CardContent className="text-3xl font-bold">{stats.total}</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Open</CardTitle>
          </CardHeader>
          <CardContent className="text-3xl font-bold">{stats.open}</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Resolved</CardTitle>
          </CardHeader>
          <CardContent className="text-3xl font-bold">{stats.resolved}</CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Top 5 Recent Complaints (High Priority First)</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <THead>
                <TR>
                  <TH>ID</TH>
                  <TH>Name</TH>
                  <TH>Urgency</TH>
                  <TH>Status</TH>
                </TR>
              </THead>
              <TBody>
                {recent.map(c => (
                  <TR key={c.id}>
                    <TD className="font-medium">{c.id}</TD>
                    <TD>{c.name}</TD>
                    <TD><Badge variant={c.urgency === 'High' ? 'danger' : c.urgency === 'Medium' ? 'warning' : 'default'}>{c.urgency}</Badge></TD>
                    <TD>{c.status}</TD>
                  </TR>
                ))}
              </TBody>
            </Table>
          </CardContent>
        </Card>

        <Card className="h-[480px]">
          <CardHeader>
            <CardTitle>Complaints Map</CardTitle>
          </CardHeader>
          <CardContent>
            <MapContainer center={[19.076, 72.8777]} zoom={12} style={{ height: 380, width: '100%' }}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {all.filter(c => c.status !== 'Resolved').map(c => (
                <Marker key={c.id} position={[c.location.lat, c.location.lng]} icon={createMarkerIcon(c.status)}>
                  <Popup>
                    <div className="space-y-1 text-sm">
                      <div className="font-semibold">{c.name}</div>
                      <div>ID: {c.id}</div>
                      <div>Status: {c.status}</div>
                      <div>Urgency: {c.urgency}</div>
                      <Link to={`/complaints/${c.id}`} className="text-primary underline">View</Link>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}



