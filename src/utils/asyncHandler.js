
const asyncHandler = (requestHandler) => {
    (req,res, next) => {
        Promise.resolve(requestHandler(req, res, next)).
        catch((err) => next(err))
    }
}


export { asyncHandler}


// const asyncHandler = (fn) => async() => {}



//this is the try catch block for the async function
// const asyncHandler = (fn) => async() => {req, res, next} => {

//     try{
//         await fn(req, res, next)
//     }
//      catch (error) {
//         res.status(err.code || 500).json(
//             {
//                 success: false,
//                 message: error.message,
//             })
//         }
        
//     }


//let's now see the promises approach
