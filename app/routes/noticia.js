module.exports = function (app) {
    
    app.get("/noticia", function (req, res) {
        
        var connection = app.config.dbConnection();
        var noticiasDAO = new app.app.models.NoticiasDAO(connection);

        noticiasDAO.getNoticia(function (error, result) {
            res.render("noticias/noticia", {noticia : result});
        });
        
    });

};