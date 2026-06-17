import { useEffect, useState } from 'react'

const codespaceUrl = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/activities/`
  : null

const apiUrl = codespaceUrl ?? 'http://localhost:8000/api/activities/'

function normalizeItems(payload) {
  if (Array.isArray(payload)) {
    return payload
  }
  if (Array.isArray(payload?.items)) {
    return payload.items
  }
  if (Array.isArray(payload?.results)) {
    return payload.results
  }
  return []
}

export default function Activities() {
  const [items, setItems] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const controller = new AbortController()

    const load = async () => {
      try {
        const response = await fetch(apiUrl, { signal: controller.signal })
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`)
        }
        const data = await response.json()
        setItems(normalizeItems(data))
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message ?? 'Unable to load activities')
        }
      } finally {
        setLoading(false)
      }
    }

    void load()
    return () => controller.abort()
  }, [])

  if (loading) return <p className="mb-0">Loading activities...</p>
  if (error) return <p className="text-danger mb-0">{error}</p>

  return (
    <ul className="list-group">
      {items.map((activity) => (
        <li key={activity._id ?? activity.id} className="list-group-item">
          <strong>{activity.activityType ?? 'activity'}</strong>
          <span className="text-secondary">
            {' '}
            {activity.durationMinutes ? `${activity.durationMinutes} min` : ''}
          </span>
        </li>
      ))}
    </ul>
  )
}