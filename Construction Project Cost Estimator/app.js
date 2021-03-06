const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require('express-session');
const exphbs  = require('express-handlebars');
const flash = require('connect-flash');
const passport = require('passport');
let configRoutes = require("./routes");
let app = express();
const static = express.static(__dirname+'/public');
const Handlebars = require('handlebars');
const handlebarsInstance = exphbs.create({
    defaultLayout: 'main',
    helpers: {
        asJSON: (obj, spacing) => {
            if (typeof spacing === "number")
                return new Handlebars.SafeString(JSON.stringify(obj, null, spacing));

            return new Handlebars.SafeString(JSON.stringify(obj));
        }
    }
});
app.engine('handlebars', handlebarsInstance.engine);
app.set('view engine', 'handlebars');
app.use("/public", static);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(cookieParser());
app.use(flash());
app.use(session({ secret: 'keyboard cat', resave:true, saveUninitialized:true }));
app.use(passport.initialize());
app.use(passport.session());

configRoutes(app);

app.listen(4000, () => {
    console.log("We've now got a server!");
    console.log("Your routes will be running on http://localhost:4000");
});

