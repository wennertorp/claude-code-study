export type Capability =
  | 'canReadDashboard'
  | 'canAccessReports'
  | 'canAccessAdmin'
  | 'canImportData'

export interface User {
  id: string
  name: string
  role: string
  capabilities: Capability[]
}

export interface MenuItem {
  id: string
  label: string
  description: string
  requiredCapability: Capability
  icon: string
}
