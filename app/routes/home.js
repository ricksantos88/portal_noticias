module.exports = function(app){
    
    app.get("/", function(req, res){
        app.app.controllers.ctrlHome.index(app, req, res);
    })
};
