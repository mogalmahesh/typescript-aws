type Input = {
  [key: string]: string | object
}

export function printToConsole(input: Input) {
  const [key, value] = Object.entries(input)[0]
  console.log(`${key}: ${JSON.stringify(value, null, 2)}`)
}

export function errorHandler(e: unknown | Error) {
  const error = e as Error
  console.error({ error })
  return error
}