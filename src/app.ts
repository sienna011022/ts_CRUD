import express , {Request,Response} from 'express'

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended : false}));

app.listen(8000, () => {
    console.log("Server run");
});