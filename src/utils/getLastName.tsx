export const getLastName = (string: string): string => {
    const words = string.split(" ")
    const lastName = words[words.length - 1]
    return lastName
  }