server = require("./server")
Producto = require("./src/producto")
Cliente = require("./src/cliente")

mongoConnection = require("./src/mongo/mongoConnection")
Home = require("./src/mongo/mongoHome")
mongoConnection.connect( (db) => {
     productoHome = new Home("productos", db)
     clienteHome = new Home("clientes", db)    
   
    // productoHome.insert(new Producto("alfajor", 20))
    // productoHome.insert(new Producto("chocolate", 30))

    // clienteHome.insert(new Cliente("pepito", "calle falsa 123"))
    // clienteHome.insert(new Cliente("fulanito", "calle san martín s/n"))
   
     server.register(productoHome)
     server.register(clienteHome)
    server.init();
})

