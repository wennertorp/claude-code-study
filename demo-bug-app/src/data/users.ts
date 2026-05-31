import type { User } from '../types'

export const users: User[] = [
  {
    id: 'anna',
    name: 'Anna Rapport',
    role: 'Rapportansvarig',
    capabilities: ['canAccessReports'],
  },
  {
    id: 'bertil',
    name: 'Bertil Admin',
    role: 'Administratör',
    capabilities: ['canAccessAdmin', 'canAccessReports'],
  },
  {
    id: 'cecilia',
    name: 'Cecilia Läs',
    role: 'Läsare',
    capabilities: ['canReadDashboard'],
  },
  {
    id: 'david',
    name: 'David Superuser',
    role: 'Superanvändare',
    capabilities: ['canReadDashboard', 'canAccessReports', 'canAccessAdmin', 'canImportData'],
  },
]
