
import * as userService from './web.user.services.js'



export const login = async (request, response) => {
    try {

       const res = await userService.login(request.body);



    } catch (error) {
        console.log(error);
        response.status(500).json({error: true, message: 'server error'})
    }
}