/*
===paths.js===

handles all internal url queries
*/

/*
---path---

JSON Object that holds all internal html/ejs file paths
can update dynamically through exported functions
but ithe object itself is not exported.
*/

let path =
{
  "error" : "error.ejs",
  "/" : "home.ejs",
  "/login" : "login.ejs",
  "/urls" : "urls_index.ejs"
};

const getPath = function(query)
{
  if (path.hasOwnProperty(query) === true)
  {
    return path[query];
  }
  else
  {
    return path["error"];
  }
};

const setPath = function()
{

}

const createPath = function()
{

}

module.exports =
{
  getPath : getPath
}
