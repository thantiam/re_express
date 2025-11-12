const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();



prisma.user.create({
    data: {
        name: "Liv",
        username: "liv"
    }
}).then(data => {
    console.log(data);
});

async function create() {
    const data = await prisma.user.create({
        data: {
            name: "Eve",
            username: "eve",
            posts: {
                create: [
                    { content: "a new content one", },
                    { content: "a new content two", }
                ]
            }
        }
    })

    console.log(data);
}

create();