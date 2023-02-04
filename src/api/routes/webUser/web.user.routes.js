import express from 'express'
import * as controller from './web.user.controller.js'

export const register = async (app) => {

    const router = express.Router();

    router.post('/login', controller.login);





    app.use('/api/v1/users', router);
}