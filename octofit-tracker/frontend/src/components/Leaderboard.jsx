import { useEffect, useState } from 'react'

const codespaceUrl = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`
  : null

const apiUrl = codespaceUrl ?? 'http://localhost:8000/api/leaderboard/'

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

export default function Leaderboard() {
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
          setError(err.message ?? 'Unable to load leaderboard')
        }
      } finally {
        setLoading(false)
      }
    }

    void load()
    return () => controller.abort()
  }, [])

  if (loading) return <p className="mb-0">Loading leaderboard...</p>
  if (error) return <p className="text-danger mb-0">{error}</p>

  return (
    <ol className="list-group list-group-numbered">
      {items.map((entry) => (
        <li key={entry._id ?? entry.id ?? entry.rank} className="list-group-item">
          <strong>{entry.username ?? 'Unknown user'}</strong>
          <span className="text-secondary"> {entry.points ?? 0} pts</span>
        </li>
      ))}
    </ol>
  )
}