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
