import logger, {appName, dummyFunction} from './tools.js' 
logger(`Welcome, we are having fun with modularity. The name of the app is "${appName}". Also, there is a function that returns: "${dummyFunction()}"`);

const addressees = ["Moses", "Frank", "Abel", "Peter"]
addressees.map(
    addressee => {
        let message = `Hello, ${addressee}. You have been addmitted to the program.`
        logger(message)
    }
    
)