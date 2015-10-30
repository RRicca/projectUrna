module.exports = function(app) {
    var home = app.controllers.home;
    //app.controllers.home está se referindo ao controllers/home.js no diretório.
    app.get('/', home.index);
    //app.get significa que quando eu receber um /teste, envio do controlller do home, que irá rendezirar a página.
};


//Para fins didáticos, aqui está o controller do home
//module.exports = function(app) {
//    var homeController = {
//        index : function(req, res) {
//            res.render('index.html')
//        }
//    };
//    return homeController;
//};