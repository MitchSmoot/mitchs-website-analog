import { PrismaClient, Role } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
  const seedAdminUser = await prisma.user.upsert({
    where: { email: 'testAdmin@test.com' },
    update: {},
    create: {
      email: 'testAdmin@test.com',
      name: 'AdminDude',
      createdAt: new Date(),
      role: Role.ADMIN
    }
  })
  const seedUser = await prisma.user.upsert({
    where: { email: 'testUser@test.com' },
    update: {},
    create: {
      email: 'testUser@test.com',
      name: 'OrdinaryPerson',
      createdAt: new Date(),
      role: Role.USER
    }
  })
  console.log({seedAdminUser, seedUser})
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })