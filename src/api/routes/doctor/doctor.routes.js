import express from 'express'






export const register = async (app) => {

    
    const router = express.Router();


    router.post('/', create);
    
    router.get('/test', async (req, res) => res.send("success Doctors api get"))
   

    app.use('/api/v1/doctors', router);

}













// //create
// router.post('/', create);

// //update
// router.put(':doctorId', updateById);

// //get doctor by doctor id
// router.get('/:doctorId', getById);

// //delete 
// router.delete('/:doctorId', deleteById)

