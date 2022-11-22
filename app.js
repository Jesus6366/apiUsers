const express = require("express")

const userRouter = require("./src/users/users.router")


const port = 9000
const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.json({
        message: "OK"
    })
})

app.use("/", userRouter)

app.listen(port, () => {
    console.log(`server started at port ${port}`)
})