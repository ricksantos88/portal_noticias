module.exports = function (app){

    app.get("/noticias", function(req, res){
        app.app.controllers.ctrlNoticias.noticias(app, req, res);
    });

    app.get("/noticia", function (req, res) {
        app.app.controllers.ctrlNoticias.noticia(app, req, res);
    });

};
