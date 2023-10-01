export function hey(message: string): string {
  const hasLetters = /[a-zA-Z]/g.test(message);
  const trimMessage = message.trim()
  const lastChar = trimMessage[trimMessage.length - 1];
  let response
  
  switch (true) {
    case trimMessage === "":
      response = "Fine. Be that way!";
      break;
    case message.toUpperCase() === message && lastChar === "?" && hasLetters:
      response = "Calm down, I know what I'm doing!";
      break;
    case message.toUpperCase() === message && hasLetters:
      response = "Whoa, chill out!";
      break;
    case lastChar === "?":
      response = "Sure.";
      break;
    default:
      response = "Whatever.";
      break;
  }
  return response
}
