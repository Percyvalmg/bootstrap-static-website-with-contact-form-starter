export const getFirstName = (string: string): string => {
    const words = string.split(" ")
    words.splice(words.length - 1)
    return words.join(" ")
  }