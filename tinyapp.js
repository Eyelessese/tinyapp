const express = require('express');
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}));

let PORT = 8080; // default port 8080

let urlDatabase =
{
  "b2xVn2": "http://www.lighthouselabs.ca",
  "9sm5xK": "http://www.google.com"
};

const shortenURL = function()
{
  let tmpString = '';
  for(tmpString.length; tmpString.length < 7;)
  {
   tmpString += Math.random().toString(36).substring(7);
  }
  return tmpString;
}

const newURL = function(req)
{
  urlDatabase[shortenURL()] = req;
}

app.get("/", (req, res) =>
{
  res.redirect('/urls');
});

app.get("/urls.json", (req, res) => 
{
  res.json(urlDatabase);
});

app.get("/urls", (req, res) => {
  let template = { urls: urlDatabase };
    res.render("urls_index", template);
    });

app.get("/urls/new", (req, res) => 
{
  res.render("urls_new");
});

app.get("/u/:shortURL", (req, res) =>
{
  let longURL = urlDatabase[req.params.shortURL];
  res.redirect(longURL);
});

app.get("/urls/:shortURL", (req, res) =>
{
  let template =
  {
    shortURL : req.params.shortURL,
    longURL : urlDatabase[shortURL]
  };
  
  res.render("urls_show", template);
});


app.get('/urls/:shortURL/edit', (req, res) =>
{
  let template = 
  { 
    shortURL : req.params.shortURL,
    longURL : urlDatabase[req.params.shortURL]
  };

  res.render("urls_edit", template);
});

app.post("/urls", (req, res) =>
{
  //console.log(req.body);
  newURL(req.body.longURL);
  res.redirect('/urls');
});

app.post('/urls/:id/delete', (req, res) =>
{
  //console.log(req.body);
  let target = req.params.id;
  delete urlDatabase[target];
  res.redirect('/urls');
});


app.post('/urls/:shortURL/edit', (req, res) =>
{
  console.log(req.body);
  let target = req.params.shortURL
  urlDatabase[target] = req.body.editor;
  res.redirect('/urls/');
});

app.listen(PORT, () =>
{
  console.log(`listening on port: ${PORT}`);
});
