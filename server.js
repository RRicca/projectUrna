var express = require('express')
    ,load = require('express-load')
    ,app = express();

//App.set
app.set('views', __dirname + '/public/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static(__dirname + '/public'));

//load
load('models')
    .then('controllers')
    .then('routes')
    .into(app);
        

app.listen(3000, function(){
   console.log("Servidor Rodando!");
});