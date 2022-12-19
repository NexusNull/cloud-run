let http = require("http");
let server = http.createServer((req, res) => {
    console.log("connection")
    res.end("hello")
})

const PORT = process.env.PORT || 8080
server.listen(PORT, console.log.bind(console, "Listening"))