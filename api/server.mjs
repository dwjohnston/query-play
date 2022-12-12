import express from "express";


export const foo = {};
const app = express();
const port = 4000

app.use(express.json()); 



app.get("/todos", (req, res) => {

    res.status(200).send([
{
    id: "todo-1", 
    label: "label-1", 
    content: "aaa"
},
{
    id: "todo-2", 
    label: "label-2", 
    content: "bbb"
}, 
{
    id: "todo-3", 
    label: "label-3", 
    content: "ccc"
}

    ]); 

}); 

app.get("/userPreferences", (req, res) => {
    res.status(200).send({
        preferredLabels: ["label-1"], 
        preferredPriority: 2, 
    }); 
}); 

app.get("/labels", (req, res) => {



    setTimeout(() => {
        res.status(200).setHeader("cache-control", "no-cache").send([
            {
                id: "label-1", 
                name: "Foo", 
                priority: 1, 
            }, 
            {
                id: "label-2", 
                name: "Bar", 
                priority: 2, 
            }, 
            {
                id: "label-3", 
                name: "Biz", 
                priority: 1, 
            }
        ]); 
    }, 1000)

}); 


app.listen(port, () => {
    console.info(`Listening on port ${port}`)
})