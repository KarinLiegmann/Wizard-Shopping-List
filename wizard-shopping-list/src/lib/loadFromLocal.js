export default function loadFromLocal(key) {
    try {
      return JSON.parse(localStorage.getItem(key))
    } catch(error) {
      console.error('Du hast den Local Storage kaputt gemacht, du Idiot!')
    }
  }