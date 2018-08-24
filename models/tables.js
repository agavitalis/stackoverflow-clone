const pg = require('pg');

 //lets conneect to our POSTGRESQL database
const config = {
     user: 'postgres',
     host: 'localhost',
     database: 'stackoverflow',
     password: '123456',
     port: 5432,
};

// client takes the object above -config- as parameter
 const client = new pg.Client(config);
 client.connect().then(()=>{
    const create_users_table = client.query('CREATE TABLE users(id SERIAL PRIMARY KEY, first_name VARCHAR(50) not null, last_name VARCHAR(50) not null, username VARCHAR(50) not null, password VARCHAR(50) not null, profile_pics VARCHAR(50) )');
   
    create_users_table.then(() => {
    const create_questions_table = client.query('CREATE TABLE questions(id SERIAL PRIMARY KEY, question TEXT not null, username VARCHAR(50) not null)');
    const create_answers_table = client.query('CREATE TABLE answers(id SERIAL PRIMARY KEY, answer TEXT not null, username VARCHAR(50) not null, question_id VARCHAR(50) not null)');
    const create_comments_table = client.query('CREATE TABLE comments(id SERIAL PRIMARY KEY, comment TEXT not null, username VARCHAR(50) not null, answer_id VARCHAR(50) not null)');
    client.end();
    
}).catch(err => {
        console.log(err)
    });
  
 }).catch(err=>{
        console.log(err)
        client.end();
 });

 



