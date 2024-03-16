// Import necessary modules
import dotenv from 'dotenv';
import connectDB from './db/index.js';

// Load environment variables from .env file
dotenv.config({ path: './.env' });

// Connect to the database
connectDB()
    .then(() => {
        // Set up error handling for the app
        app.on("error", (error) => {
            console.log("Error: ", error);
            throw error;
        });

        // Start the app and listen on the specified port
        app.listen(process.env.PORT || 8000, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        });
    })
    .catch((error) => {
        console.error('Mongo DB connection failed: ', error);
        process.exit(1);
    });

// IIFE - Immediately Invoked Function Expression
// The pollution of the global namespace is reduced.
// (async () => {
//     try {
//         // Connect to the MongoDB database
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);

//         // Set up error handling for the Express app
//         app.on("error", (error) => {
//             console.log("Error: ", error);
//             throw error;
//         });

//         // Start the Express app and listen on the specified port
//         app.listen(process.env.PORT, () => {
//             console.log(`App is listening on port ${process.env.PORT}`);
//         });
//     } catch (error) {
//         console.error('Error: ', error);
//         throw error;
//     }
// })();
