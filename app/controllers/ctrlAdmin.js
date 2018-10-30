module.exports.formulario_inclusao_noticia = function (app, req, res) {
    res.render('admin/form_add_noticia', {validacao : {}, noticia : {}});
}

module.exports.noticias_salvar = function (app, req, res) {

    var noticia = req.body;
    req.assert('titulo', 'Título é obrigatorio.').notEmpty();
    req.assert('resumo', 'Resumo é obrigatorio.').notEmpty();
    req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres.').len(10,100);
    req.assert('autor', 'Autor é obrigatorio.').notEmpty();
    //req.assert('data_noticia', 'Data dos fatos é obrigatoria.').notEmpty().isDate({format:'YYYY-MM-DD'});
    req.assert('data_noticia', 'Data dos fatos é obrigatoria.').notEmpty()
    req.assert('noticia', 'Notícia é obrigatorio.').notEmpty();

    var erros =  req.validationErrors();
    //console.log('ERRORS >>> ',erros);

    if (erros) {
        res.render("admin/form_add_noticia", {validacao : erros, noticia : noticia});
        return;
    };

    var connection = app.config.dbConnection();
    var noticiasDAO = new app.app.models.NoticiasDAO(connection);
        
    noticiasDAO.salvarNoticia(noticia, function (error, result) {
        res.redirect('/noticias');
    });

};
