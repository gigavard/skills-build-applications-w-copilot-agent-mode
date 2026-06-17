# Octofit Tracker Frontend

React 19 + Vite presentation tier for the Octofit multi-tier application.

## Routing

Navigation is handled with `react-router-dom` in:

- `src/main.jsx` (wraps the app with `BrowserRouter`)
- `src/App.jsx` (defines route navigation and views)

## API environment variable

The frontend uses Vite environment variables via `import.meta.env`.

Set `VITE_CODESPACE_NAME` to enable Codespaces API URLs:

```env
VITE_CODESPACE_NAME=your-codespace-name
```

Create this in `octofit-tracker/frontend/.env.local`.

When `VITE_CODESPACE_NAME` is set, the app targets endpoints like:

`https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/users/`

If `VITE_CODESPACE_NAME` is not set, components use a safe fallback to:

`http://localhost:8000/api/...`

## Run locally

```bash
npm --prefix octofit-tracker/frontend install
npm --prefix octofit-tracker/frontend run dev
```
