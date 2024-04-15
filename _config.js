var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'ongodb+srv://admin:OZmjRCGeGNSymPVj@cluster0.eaqif8y.mongodb.net/darkroom?retryWrites=true&w=majority&appName=Cluster0&ssl=true',
    development: 'mongodb+srv://admin:OZmjRCGeGNSymPVj@cluster0.eaqif8y.mongodb.net/darkroom?retryWrites=true&w=majority&appName=Cluster0&ssl=true',
    test: 'mongodb+srv://admin:OZmjRCGeGNSymPVj@cluster0.eaqif8y.mongodb.net/darkroom?retryWrites=true&w=majority&appName=Cluster0&ssl=true',

}
module.exports = config;
