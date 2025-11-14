const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();


async function remove() {
    const user = await prisma.user.deleteMany({
        where: { id : 3 },
    });

    console.log(user);
}

remove();