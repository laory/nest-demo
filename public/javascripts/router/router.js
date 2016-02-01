define(['backbone', 'jquery', 'model/loginModel', 'view/loginView'], function(Backbone, $, LoginModel, LoginView) {

    return Backbone.Router.extend({

        routes: {
            "": "login"
        },

        login: function() {
            var loginModel = new LoginModel();
            var loginView = new LoginView({model: loginModel});
            $("body").html(loginView.render().el);
        }

    });
});