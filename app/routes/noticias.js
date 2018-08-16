module.exports = function (app){

    app.get("/noticias", function(req, res){
        
        var connection = app.config.dbConnection();
        var noticiasDAO = new app.app.models.NoticiasDAO(connection);
        
        noticiasDAO.getNoticias(function (error, result) {
            res.render("noticias/noticias", { noticias : result });
        });

    });

};
