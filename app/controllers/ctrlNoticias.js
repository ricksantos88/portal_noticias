module.exports.noticias = function (app, req, res) {
    var connection = app.config.dbConnection();
    var noticiasDAO = new app.app.models.NoticiasDAO(connection);
    
    noticiasDAO.getNoticias(function (error, result) {
        res.render("noticias/noticias", { noticias : result });
    });
}

module.exports.noticia = function (app, req, res) {
    var connection = app.config.dbConnection();
    var noticiasDAO = new app.app.models.NoticiasDAO(connection);
    var id_noticia = req.query
    

    noticiasDAO.getNoticia(id_noticia, function (error, result) {
        res.render("noticias/noticia", {noticia : result});
    });
}