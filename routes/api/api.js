//since I have a seperate page for my routes we need express and express Router,hence I will import them
import express from 'express';
import pg from 'pg';

//then the express router
let router = express.Router();

//lets conneect to our POSTGRESQL database
const config = {
    user: 'postgres',
    host: 'localhost',
    database: 'stackoverflow',
    password: '123456',
    port: 5432,
};

// pool takes the object above -config- as parameter
const pool = new pg.Pool(config);

//we import our controllers
import register from '../../controllers/registerController';
import login from '../../controllers/loginController';

//then our routing begins, here should be our homepage show resturants
//return a list of resturants at the home page
router.get('/', (req, res, next) => {
    pool.connect(function (err, client, done) {
        if (err) {
            console.log("Can not connect to the DB" + err);
        }
        pool.query('SELECT * FROM users', function (err, result) {
            done();
            if (err) {
                console.log(err);
                res.status(400).send(err);
            }
            res.status(200).send(result.rows);
        })

       
    })
});

//accepts user registration details
router.post('/api/register', register.user_register);

//accepts user login details
router.post('/api/login', login.user_login);

//then we will now export this routes to the index file
module.exports = router;
