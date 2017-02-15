export const getRandomString = () => `${Math.random().toString(36).substring(7)}${Math.random().toString(36).substring(7)}`
export const validateEmail = email => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
}

const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

export const hasSpecialCharacter = (string) => string.split('').reduce((prev, letter) => {
  return prev || ![...numbers, ...letters, ' '].includes(letter)
}, false)
export const hasLetter = (string) => string.split('').find(letter => letters.includes(letter))
export const hasNumber = (string) => string.split('').find(letter => numbers.includes(letter))
