import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// PUBLIC_INTERFACE
export default defineConfig(({ mode }) => {
  /**
   * Load both default .env and mode-specific env.
   * We expose VITE_* automatically to client; other keys remain server-only.
   */
  const env = loadEnv(mode, process.cwd(), '')
  const port = Number(env.PORT || env.REACT_APP_PORT || 3000)

  return {
    plugins: [react()],
    server: {
      host: true, // 0.0.0.0
      port
    },
    preview: {
      host: true,
      port
    },
    define: {
      // Provide compatibility fallbacks so client code can read VITE_* or REACT_APP_*.
      __APP_ENV__: JSON.stringify({
        API_BASE: env.VITE_API_BASE || env.REACT_APP_API_BASE || '',
        BACKEND_URL: env.VITE_BACKEND_URL || env.REACT_APP_BACKEND_URL || '',
        FRONTEND_URL: env.VITE_FRONTEND_URL || env.REACT_APP_FRONTEND_URL || '',
        WS_URL: env.VITE_WS_URL || env.REACT_APP_WS_URL || '',
        NODE_ENV: env.VITE_NODE_ENV || env.REACT_APP_NODE_ENV || mode || 'development',
        LOG_LEVEL: env.VITE_LOG_LEVEL || env.REACT_APP_LOG_LEVEL || 'info',
        FEATURE_FLAGS: env.VITE_FEATURE_FLAGS || env.REACT_APP_FEATURE_FLAGS || '',
        EXPERIMENTS_ENABLED: env.VITE_EXPERIMENTS_ENABLED || env.REACT_APP_EXPERIMENTS_ENABLED || 'false',
        HEALTHCHECK_PATH: env.VITE_HEALTHCHECK_PATH || env.REACT_APP_HEALTHCHECK_PATH || '/healthz'
      })
    }
  }
})
