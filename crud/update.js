const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();

    async function update() {
        const user = await prisma.user.update({
            where: { id : 3 },
            data: {
                name: "Liv Tyler",
                bio: "wayfarer and like to listen music...",
                posts: {
                    create: [
                        { content: 'content by liv...' }
                    ]
                }
            }
        });

        console.log(user);
    }

    update();