export const PORT: number = process.env.PORT ? Number(process.env.port) : 4000

export const API_URL: string = process.env.API_URL || '/api'

export const JWT_SECRET: string = process.env.JWT_SECRET as string
