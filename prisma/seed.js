import { PrismaClient } from "@prisma/client";
import pkg from "bcryptjs";
const { hash } = pkg;




const prisma = new PrismaClient();

async function main() {


  const hashedPassword = await hash("juventus", 12);

  await prisma.user.upsert({
    where: { email: "vaqsi@gmail.com" },
    update: {},
    create: {
      email: "vaqsi@gmail.com",
      name: "vaqsi",
      password: hashedPassword,
    },
  });

 
}

main()
  .catch((e) => {
    console.error("Error during seed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
