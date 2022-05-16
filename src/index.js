const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const route = require("./routes");
const morgan = require("morgan");
const db = require("./config/db");
const helpers = require("./util/helpers");
var paginate = require("handlebars-paginate");
var multer = require("multer");
const { inc, eq, ne, lt, gt, gte, lte, panigation } = require("./util/helpers");
var Handlebars = require("handlebars");
var paginate = require("handlebars-paginate");
const methodOverride = require("method-override");
/* hbs*/
app.use(morgan("combined"));
const handlebars = require("express-handlebars");
app.use(express.static(path.join(__dirname + "/public")));
// helpers(app)
app.engine(
  "hbs",

  handlebars.engine({
    extname: ".hbs",
    helpers: {
      inc,
      eq,
      ne,
      lt,
      gt,
      gte,
      lte,
      paginate,
    },
  })
);
app.use(express.json());
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "resources", "views"));
app.set("view engine", "hbs");

/**/
// app.get('/', (req, res) => {
//   res.render('home');
// });
// var storage = multer.diskStorage({
//   destination : (req , file , res)=>{
//       res(null , 'src/public/img')
//   },
//   filename : (req , file , res)=>{
//       res(null , file.originalname )
//   }})
route(app);

db.connect();
console.log(db);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
