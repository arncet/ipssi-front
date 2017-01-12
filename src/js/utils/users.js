import {IMAGES_ROUTE} from './routes'

export const getUserAvatar = user => {
  return user.avatar
    ? user.avatar
    : user.gender === 'male' ? `${IMAGES_ROUTE}/users/man.png` : `${IMAGES_ROUTE}/users/woman.png`
}
