// Prisma is optional during build to avoid Next.js compilation errors on
// environments where `@prisma/client` isn't installed. We attempt to require
// it at runtime and fall back to `undefined` when the package is missing.

let prisma: any

if (typeof window === 'undefined') {
  try {
    const { PrismaClient } = require('@prisma/client')
    const globalForPrisma = globalThis as { prisma?: any }
    prisma = globalForPrisma.prisma ?? new PrismaClient()

    if (process.env.NODE_ENV !== 'production') {
      globalForPrisma.prisma = prisma
    }
  } catch (err: any) {
    if (err?.code !== 'MODULE_NOT_FOUND') {
      throw err
    }
    prisma = undefined
  }
}

export { prisma }
