# reactfastcalc-149653-de60c7ed

A minimal Vite + React app scaffold so npm start works in CI and local dev.

## Quickstart

- Copy .env.example to .env and adjust as needed.
- Install dependencies:
  npm install
- Start dev server (binds 0.0.0.0, port from PORT or REACT_APP_PORT; default 3000):
  npm start
- Build for production:
  npm run build
- Preview production build:
  npm run preview

## Environment variables

Vite exposes only variables prefixed with VITE_ to the client bundle. This project also provides compatibility with existing REACT_APP_* variables by mapping them via Vite define, so you may set either:

Preferred VITE_*:
- VITE_API_BASE
- VITE_BACKEND_URL
- VITE_FRONTEND_URL
- VITE_WS_URL
- VITE_NODE_ENV
- VITE_LOG_LEVEL
- VITE_FEATURE_FLAGS
- VITE_EXPERIMENTS_ENABLED
- VITE_HEALTHCHECK_PATH

Compatibility (optional):
- REACT_APP_API_BASE
- REACT_APP_BACKEND_URL
- REACT_APP_FRONTEND_URL
- REACT_APP_WS_URL
- REACT_APP_NODE_ENV
- REACT_APP_NEXT_TELEMETRY_DISABLED
- REACT_APP_ENABLE_SOURCE_MAPS
- REACT_APP_PORT
- REACT_APP_TRUST_PROXY
- REACT_APP_LOG_LEVEL
- REACT_APP_HEALTHCHECK_PATH
- REACT_APP_FEATURE_FLAGS
- REACT_APP_EXPERIMENTS_ENABLED

Server port selection:
- PORT (preferred) or REACT_APP_PORT; defaults to 3000.

## Notes

- Entry files: index.html, src/main.jsx, src/App.jsx
- Linting: basic ESLint config included.
- This scaffold intentionally minimal to satisfy CI preview and provide a starting point.