const { Prisma} = require('prisma-binding');


const db = Prisma({
    typeDef : "",
    endpoint : process.env.PRISMA_ENDPOINT ,
    secret : "",
    debug : false ,
});




module.exports = db;