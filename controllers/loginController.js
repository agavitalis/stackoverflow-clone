import pg from 'pg';

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
exports.user_login =  (req, res, error)=> {

    var username = req.body.username;
    var password = req.body.password;

    pool.connect( (err, client, done)=> {
        if (err) {
             console.log("Can not connect to the DB" + err);
        }
        pool.query('SELECT count(*) FROM users where password = ($1) AND username=($2)', [password, username], function (err, result) {
             done();
             if (err) {
                 console.log(err);
                 res.sendStatus(400).send(err);
             }
             res.status(200).send({
                 success: true,
                 message: "Resgitration successfull",
                 numberOfUser: result.rows.length
             });
             console.log(result.rows.length)
         })


    })

}