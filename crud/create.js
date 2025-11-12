const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();



// prisma.user.create({
//     data: {
//         name: "Liv",
//         username: "liv",
//         email: "liv@tuta.io",
//     }
// }).then(data => {
//     console.log(data);
// });

async function create() {
    const data = await prisma.user.create({
        data: {
            name: "Rose",
            username: "rose",
            email: "rose@tuta.io",
            posts: {
                create: [
                    { content: "a new content one", },
                    { content: "a new content two", },
                    { content: "a new content three", }
                ]
            }
        }
    })

    console.log(data);
}

create();