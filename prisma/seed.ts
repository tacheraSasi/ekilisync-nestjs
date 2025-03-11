import { PrismaClient } from '@prisma/client';
import { hashPassword } from 'src/lib/utils';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

  const alice = await prisma.user.create({
    data: {
      email: 'alice@example.com',
      password: hashPassword('password'),
      name: 'Alice Johnson',
    },
  });

  const bob = await prisma.user.create({
    data: {
      email: 'bob@example.com',
      password: hashPassword('password'),
      name: 'Bob Carter',
      partnerId: alice.id,
    },
  });

  await prisma.user.update({
    where: { id: alice.id },
    data: { partnerId: bob.id },
  });

  await prisma.task.createMany({
    data: [
      {
        title: 'Plan weekend getaway',
        description:
          'Find a good beach resort and book a hotel for two nights.',
        completed: false,
        ownerId: alice.id,
      },
      {
        title: 'Buy groceries',
        description: 'Milk, eggs, bread, chicken, and vegetables.',
        completed: true,
        ownerId: alice.id,
      },
      {
        title: 'Gym session',
        description: 'Attend yoga class at 6 PM on Wednesday.',
        completed: false,
        ownerId: alice.id,
      },
    ],
  });

  await prisma.task.createMany({
    data: [
      {
        title: 'Prepare monthly budget',
        description: 'Review expenses and set a budget for next month.',
        completed: false,
        ownerId: bob.id,
      },
      {
        title: 'Finish React project',
        description: 'Complete the frontend integration for the dashboard.',
        completed: true,
        ownerId: bob.id,
      },
      {
        title: 'Schedule car service',
        description: 'Book an appointment at the Toyota service center.',
        completed: false,
        ownerId: bob.id,
      },
    ],
  });

  console.log('Seeding completed!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
