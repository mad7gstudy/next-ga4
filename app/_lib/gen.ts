const generateRandomString = (length: number = 4): string => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    let result = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charactersLength);
        result += characters[randomIndex];
    }
    return result;
}

const getRandomStatus = (): string => {
  const strings: string[] = ["未回答", "回答中", "回答済み", "承認済み", "公開済み"];
  const randomIndex: number = Math.floor(Math.random() * strings.length);
  return strings[randomIndex];
}

export { generateRandomString, getRandomStatus } 