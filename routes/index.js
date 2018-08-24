//Notice, For simplicity, I stick to ES16
//firstly I required express
import express from 'express';

//I require our middleware for forms
import body_parser from 'body-parser';

//I require our middleware for cookies
import cookie_parser from 'cookie-parser';

//I require morgan for cross origin resource
import cors from 'cors';

//we need to know our clients, then we require morgan
import morgan from 'morgan';

//lets setup the sessions 
import session from 'express-session';

//lets use the files we have required, we use express first, since it is our main server
const app = express();
app.use(morgan('combined'));
app.use(body_parser.json());
app.use(cors());
app.use(session({
    secret: 'Stackoverflow-lite',
    resave: true,
    saveUninitialized: true
}));


//require those routes which I created seperately
import routes from './api/api.js';

//then I will tell express to use my routes
app.use(routes);


//Now tisten to this port 
if (app.listen(process.env.PORT || 3500)) {
    console.log("Node is listening to port 3500")
}