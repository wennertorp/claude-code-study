import type { User, MenuItem, Capability } from '../types'

export function hasCapability(user: User, capability: Capability): boolean {
  return user.capabilities.includes(capability)
}

export function getAccessibleMenuItems(user: User, items: MenuItem[]): MenuItem[] {
  return items.filter((item) => hasCapability(user, item.requiredCapability))
}
