//view user profile
exports.user_view_profile = function (req, res, error) {

    User.findById(req.params.id, function (error, user) {
        if (error) {
            res.send({
                status: 401,
                success: false,
                message: error
            })
        } else {
            res.send({
                status: 200,
                success: true,
                user: user
            })
        }

    })
}