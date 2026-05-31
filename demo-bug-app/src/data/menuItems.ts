import type { MenuItem } from '../types'

export const menuItems: MenuItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    description: 'Översikt och nyckeltal för din enhet.',
    requiredCapability: 'canReadDashboard',
    icon: '📊',
  },
  {
    id: 'reports',
    label: 'Rapporter',
    description: 'Generera och exportera rapporter.',
    requiredCapability: 'canAccessReports',
    icon: '📄',
  },
  {
    id: 'admin',
    label: 'Administrera',
    description: 'Hantera användare, roller och systeminställningar.',
    requiredCapability: 'canAccessAdmin',
    icon: '⚙️',
  },
  {
    id: 'import',
    label: 'Importera data',
    description: 'Ladda upp och validera datafiler för systemimport.',
    requiredCapability: 'canAccessReports',
    icon: '📥',
  },
]
