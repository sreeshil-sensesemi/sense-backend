import * as userRepo from './web.user.repo.js'



export const login = async (data) => {
    const res = await userRepo.login(data);
    return res;
}