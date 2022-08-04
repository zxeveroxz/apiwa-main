var Auth = {
    check_login: function (request, response, next)
    {
        if (!request.session.loggedin) {
            return response.redirect('/login');
        }
        next();
    },
    check_session: function (request, response, next)
    {
        if (request.session.loggedin) {
            return response.redirect('/home');
        }
        next();
    }
};


module.exports = Auth;