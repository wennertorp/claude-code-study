import { useState } from 'react'
import { users } from './data/users'
import { menuItems } from './data/menuItems'
import { getAccessibleMenuItems } from './utils/permissions'
import type { Capability } from './types'

const capabilityMeta: Record<Capability, { label: string; css: string }> = {
  canReadDashboard: { label: 'canReadDashboard', css: 'read' },
  canAccessReports: { label: 'canAccessReports', css: 'report' },
  canAccessAdmin: { label: 'canAccessAdmin', css: 'admin' },
  canImportData: { label: 'canImportData', css: 'import' },
}

function getInitials(name: string): string {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

export default function App() {
  const [selectedUserId, setSelectedUserId] = useState(users[0].id)

  const currentUser = users.find((u) => u.id === selectedUserId) ?? users[0]
  const accessibleItems = getAccessibleMenuItems(currentUser, menuItems)

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <span className="header-logo">
          Intern<span>Portal</span>
        </span>
        <div className="header-divider" />
        <span className="header-subtitle">v2.4.1 · Demo-miljö</span>
        <div className="header-spacer" />
        <div className="user-select-wrap">
          <span className="user-select-label">Inloggad som:</span>
          <select
            className="user-select"
            value={selectedUserId}
            onChange={(e) => setSelectedUserId(e.target.value)}
          >
            {users.map((u) => (
              <option key={u.id} value={u.id}>
                {u.name}
              </option>
            ))}
          </select>
        </div>
      </header>

      <div className="layout">
        {/* Sidebar nav */}
        <nav className="sidebar">
          <span className="sidebar-section-label">Navigation</span>
          {menuItems.map((item) => {
            const accessible = accessibleItems.some((a) => a.id === item.id)
            return (
              <div
                key={item.id}
                className={`nav-item ${accessible ? 'active' : ''}`}
                aria-disabled={!accessible}
              >
                <span className="nav-icon">{item.icon}</span>
                {item.label}
                {!accessible && <span className="nav-locked">🔒</span>}
              </div>
            )
          })}
        </nav>

        {/* Main content */}
        <main className="main">
          <h1 className="page-title">Välkommen, {currentUser.name.split(' ')[0]}</h1>
          <p className="page-subtitle">
            Din behörighetsprofil styr vilka delar av portalen du har tillgång till.
          </p>

          {/* User info */}
          <div className="user-card">
            <div className="user-avatar">{getInitials(currentUser.name)}</div>
            <div className="user-info">
              <div className="user-name">{currentUser.name}</div>
              <div className="user-role">{currentUser.role}</div>
              <div className="capabilities-label">Tilldelade capabilities</div>
              <div className="capabilities-list">
                {currentUser.capabilities.map((cap) => (
                  <span key={cap} className={`cap-badge ${capabilityMeta[cap].css}`}>
                    {capabilityMeta[cap].label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Accessible sections */}
          <div className="section-heading">
            Du har tillgång till {accessibleItems.length} av {menuItems.length} sektioner
          </div>

          {accessibleItems.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">🔒</div>
              <p>Inga sektioner tillgängliga med din behörighetsprofil.</p>
            </div>
          ) : (
            <div className="cards-grid">
              {accessibleItems.map((item) => (
                <div key={item.id} className="menu-card">
                  <div className="menu-card-icon">{item.icon}</div>
                  <div className="menu-card-label">{item.label}</div>
                  <div className="menu-card-desc">{item.description}</div>
                  <span className="menu-card-cap">{item.requiredCapability}</span>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>

      {/* Status bar */}
      <footer className="status-bar">
        <span><span className="status-dot" /> Ansluten</span>
        <span>Miljö: Demo</span>
        <span>Session: {currentUser.id}-session</span>
      </footer>
    </div>
  )
}
