export const ROLE_ADMIN = 1
export const ROLE_SUPERVISOR = 2
export const ROLE_MANAGER = 3
export const ROLE_RH = 4
export const ROLE_COLLABORATOR = 5
export const ROLE_EDITOR = 6
export const ROLE_STANDARD = 7

export const rolesById = {
  1: 'Administrateur',
  2: 'Superviseur',
  3: 'Manager',
  4: 'RH',
  5: 'Collaborateur',
  6: 'Rédacteur',
  7: 'Standard'
}

export const roleIdToText = roleId => rolesById[roleId]
