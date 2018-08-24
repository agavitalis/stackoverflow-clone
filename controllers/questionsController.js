//view all the questions
exports.view_food =  (req, res, error) =>{
    //display all the questions,based on selected type
    var resturant_id = req.body.resturant_id;

    Food.find({
        resturant_id: resturant_id
    }).then(function (reviews) {
        res.send({
            success: true,
            status: 200,
            food: foods,

        });
    })
}