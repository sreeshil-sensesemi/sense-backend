import multer from 'multer'



//multer config
// const storage = multer.diskStorage({
   
//     destination: (request, file, cb) => {
//         cb(null, "./public")
//     },
//     filename: (request, file, cb) => {
//        cb(null, Date.now() + file.originalname)
//     }
// })

const storage = multer.memoryStorage({
   
    destination: (request, file, cb) => {
        cb(null, "/enterpriseLogo")
    },
    filename: (request, file, cb) => {
       cb(null, Date.now() + file.originalname)
    }
})


export const upload = multer({ storage })

