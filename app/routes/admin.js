module.exports = function(app){
    
    app.get('/formulario_inclusao_noticia', function (req, res) {
        app.app.controllers.ctrlAdmin.formulario_inclusao_noticia(app, req, res);
    });

    app.post('/noticias/salvar', function (req, res) {
        app.app.controllers.ctrlAdmin.noticias_salvar(app, req, res);
    });

};



