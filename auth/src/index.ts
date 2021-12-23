import express from 'express';
import usersRoute from './routes/users.route';
import errorHandler from './middlewares/error-handler.middleware';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(usersRoute);

app.use(errorHandler);

app.listen(3000, ()=>{
    console.log('Escutando na porta 3000! dinovooo')
});