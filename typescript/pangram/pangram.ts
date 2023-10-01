export function isPangram(input: string): boolean {
  const regex = new RegExp(/[^a-zA-Z]/gi)
  return new Set(input.replace(regex,'').toLowerCase().split("")).size === 26
}