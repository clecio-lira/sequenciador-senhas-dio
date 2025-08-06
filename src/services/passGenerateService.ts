export default function passGenerateService() {
  const passwordLength = 16;
  let password: string = "";
  let characters: string =
    "abcdefghijklmnopqrstuvwxyz!@#%1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (let index = 0; index < passwordLength; index++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }

  return password;
}
