const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors')({ origin: true });
const engines = require('consolidate');





const app = express();


app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));

const service = require('./services');
const { nextTick } = require('process');
const { get } = require('http');
const db = require('./database_method');

app.engine('html', engines.handlebars);

app.set('views', './views');

app.set('view engine', 'html');

function getPartials() {
  var partials = {
    sidebar: './partials/sidebar',
    navbar: './partials/navbar',
    footer: './partials/footer',
    head: './partials/head'
  };

  return partials;
}


app.get('/device/:codedevice',(req,res,next)=>{
    service.deleteDevice(req,res,next);
});
app.get('/device',(req,res,next)=>{
  service.getDevice(req,res,next);
});
app.post('/device',(req,res,next)=>{
  service.setDevice(req,res,next);
  res.redirect('/device');
});
/*app.get('/device', (req, res) => {
  res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
  db.con.connect((err) => {
    var sql = "Select * from tbldevices";
    db.con.query(sql, (err, dbrows, fields) => {
      if (err) {
        res.render('./devices.html', { result: '', partials: getPartials() })
      }
      else {
        console.log('Burası Göreceğimiz Yer :'+dbrows+'-' +  dbrows[0].devicename);
        res.render('./devices.html', { result: dbrows, partials: getPartials() })

      }

    });
    db.con.end;
  });
  //res.render('index', { content: htmlDevice, partials: getPartials() });
  return;
}); */
app.get('/', (req, res) => {
  res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
  res.render('index', { content: './home', partials: getPartials() });
  return;
});




app.listen(4000, () => console.log('App is listening on url http://localhost:4000'));