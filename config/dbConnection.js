var mysql = require('mysql');

var connMySQL = function() {
    //console.log('>>connection with database was established!!!');
    return mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'portal_noticias'
    });
};

module.exports = function() {
    //console.log('>>autoload(consign) loaded the connection to the database(MySQL).');    
    return connMySQL;
}
