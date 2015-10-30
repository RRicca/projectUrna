module.exports = function(app) {
    var homeController = {
        index : function(req, res) {
            res.render('index.html')
        }
    };
    return homeController;
};