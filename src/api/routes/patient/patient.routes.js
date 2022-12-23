import express from 'express'



export const register = async (app) => {

    
    const router = express.Router();


    //router.post('/', create);
    router.get('/test', async (req, res) => res.send("success Patient api get"))
   

    app.use('/api/v1/patients', router);

}



