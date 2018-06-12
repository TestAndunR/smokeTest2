module.exports=function(){

    this.dbConnections = [];

    this.dbConnections["smokeTest"] = {
            host: process.env.EndPoint_rdsSmokeTest,
            port: process.env.Port_rdsSmokeTest,
            user: process.env.User_rdsSmokeTest,
            password: process.env.Password_rdsSmokeTest,
            database: "smokeDB",
        };
    };