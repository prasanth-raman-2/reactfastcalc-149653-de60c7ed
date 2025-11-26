import React, { useMemo, useState } from 'react'

/**
 * PUBLIC_INTERFACE
 * App component: Simple calculator placeholder that demonstrates the app
 * is running and shows environment configuration taken from VITE_ or
 * REACT_APP_ variables (via __APP_ENV__ injected in vite.config.js).
 */
export default function App () {
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  const sum = useMemo(() => Number(a || 0) + Number(b || 0), [a, b])

  // Compat: read env values provided by define in vite.config.js.
  const env = typeof __APP_ENV__ !== 'undefined' ? __APP_ENV__ : {}

  const infoStyle = {
    background: '#f5f7fa',
    padding: '12px',
    borderRadius: 8,
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    fontSize: 12
  }

  const boxStyle = {
    maxWidth: 720,
    margin: '40px auto',
    padding: 24,
    border: '1px solid #e6e8eb',
    borderRadius: 12,
    fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
    lineHeight: 1.4
  }

  const inputStyle = {
    padding: '8px 10px',
    border: '1px solid #ccd1d5',
    borderRadius: 8,
    width: 120
  }

  const labelStyle = { display: 'block', marginBottom: 8, fontWeight: 600 }
  const rowStyle = { display: 'flex', gap: 16, alignItems: 'center', margin: '12px 0' }

  return (
    <div style={boxStyle}>
      <h1>React Fast Calc</h1>
      <p>A minimal Vite + React setup. Edit src/App.jsx and save to test HMR.</p>

      <div style={rowStyle}>
        <label style={labelStyle} htmlFor="a">A</label>
        <input id="a" type="number" value={a} onChange={(e) => setA(e.target.value)} style={inputStyle} />
      </div>
      <div style={rowStyle}>
        <label style={labelStyle} htmlFor="b">B</label>
        <input id="b" type="number" value={b} onChange={(e) => setB(e.target.value)} style={inputStyle} />
      </div>

      <div style={{ marginTop: 8, padding: 12, background: '#eef8f1', border: '1px solid #d0e8d8', borderRadius: 8 }}>
        <strong>Sum: </strong>
        <span>{isNaN(sum) ? '—' : sum}</span>
      </div>

      <h2 style={{ marginTop: 24 }}>Environment</h2>
      <div style={infoStyle}>
        <pre style={{ margin: 0 }}>
{JSON.stringify(env, null, 2)}
        </pre>
      </div>
      <p style={{ color: '#5f6c7b', fontSize: 12, marginTop: 8 }}>
        Server host: 0.0.0.0 • Port: configured by PORT or REACT_APP_PORT (default 3000)
      </p>
    </div>
  )
}
