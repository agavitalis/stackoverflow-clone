import pg from 'pg'
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

exports.user_register = (req, res, error) => {

    let username = req.body.username;
    let first_name = req.body.first_name;
    let last_name = req.body.last_name;
    let password = req.body.password; 
    
    pool.connect( (err, client, done) =>{
         if (err) {
             console.log("Can not connect to the DB" + err);
         }
        pool.query('INSERT INTO users(first_name, last_name, username, password) values($1, $2, $3, $4)', [first_name, last_name, username, password], function (err, result) {
             done();
             if (err) {
                 console.log(err);
                 res.status(400).send(err);
             }
             res.status(200).send({
                                 success: true,
                                 message: "Resgitration successfull",
                                 username: username,
                                 first_name:first_name,
                                 last_name:last_name
                                 });
         })


     })
}
