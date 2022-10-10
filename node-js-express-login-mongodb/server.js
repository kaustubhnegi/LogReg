import express from 'express';
import cors from 'cors';
import cookieSession from 'cookie-session';


const app = express();

var corsOption ={
    origin : "http://localhost:8081"    
};

const test_change = true;


// CORS is a node.js package for providing a Connect/Express middleware 
// that can be used to enable CORS with various options.
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}));

app.use(
    cookieSession({
        name:       "LogReg-Session",
        secret:     "hsdfhidsf#$#?<<kdfjdJ2",   // should use as secret environment variable
        httpOnly:    true

    })
);

// simple route
/* Express.js | app.get() Request Function
The app.get() function routes the HTTP GET Requests to the path which is being specified with the specified callback functions. Basically it is intended for binding the middleware to your application.
Syntax: 
 

app.get( path, callback )
https://www.geeksforgeeks.org/express-js-app-get-request-function/

*/

app.get("/",(req, res) =>{
    res.join({ message: "Welcome to my application."});
});


//set ports listen for request
// In computer networking, a port is a number assigned to uniquely identify a connection 
// endpoint and to direct data to a specific service. At the software level, within an 
// operating system, a port is a logical construct that identifies a specific process 
// or a type of network service

const PORT = process.env.PORT || 8080

// The app.listen() function is used to bind and listen the connections
// on the specified host and port. This method is identical to Node’s
// http.Server.listen() method.
// If the port number is omitted or is 0, the operating system will assign an 
// arbitrary unused port, which is useful for cases like automated tasks (tests, etc.).
// The app returned by express() is in fact a JavaScript function, designed to be passed to 
// Node’s HTTP servers as a callback to handle requests. This makes it easy to provide both 
// HTTP and HTTPS versions of your app with the same code base, as the app does not inherit
//  from these (it is simply a callback).

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}. `);
});
