const jsonserver = require('json-server')

//create json-server
const employeeServer = jsonserver.create()

//path for json file
const router = jsonserver.router('db.json')

//middleware 
const middleware = jsonserver.defaults()

//server use middleware and router
employeeServer.use(middleware)
employeeServer.use(router)

//set path 
const PORT = 3000 || process.env.PORT

employeeServer.listen(PORT,()=>{
    console.log(`employee server started @ ${PORT}`);
})