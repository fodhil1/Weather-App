@import url(https://fonts.googleapis.com/css?family=Roboto:400,500,700);

/* MAIN NAV -------- */
* {
  box-sizing: border-box;
}
/body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

header {
  background: #edeff0;
  margin-bottom: 2em;
}

header,
.main-nav {
  display: flex;
  flex-wrap: wrap;
}

ul {
  list-style-type: none;
}
ul {
  list-style-type: none;
}
a {
  text-decoration: none;
  color: #3b80d1;
}
header,
  .main-nav {
    display: flex;
    flex-wrap: wrap;
  }
  .main-nav a {
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;
    padding: 1.25em 1.5em;
  }
  .main-nav a:hover {
    border-color: rgba(0,0,0, .1);
  }




/*

/body {
 margin: 0;
 padding: 0;
 font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
   "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
   sans-serif;
 -webkit-font-smoothing: antialiased;
 -moz-osx-font-smoothing: grayscale;
}

code {
 font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
   monospace;
}

header {
 background: #edeff0;
 margin-bottom: 2em;
}

header,
.main-nav {
 display: flex;
 flex-wrap: wrap;
}

ul {
 list-style-type: none;
}
ul {
 list-style-type: none;
}
a {
 text-decoration: none;
 color: #3b80d1;
}
header,
 .main-nav {
   display: flex;
   flex-wrap: wrap;
 }
 .main-nav a {
   border-left: 3px solid transparent;
   border-right: 3px solid transparent;
   padding: 1.25em 1.5em;
 }
 .main-nav a:hover {
   border-color: rgba(0,0,0, .1);
 }
 */
/************** *****************/
/* =================================
 MEDIA QUERIES
==================================== */
/*
@media (min-width: 0) and (max-width: 768px) {
 body {
   padding-top: .8em;
 }
 .home a {
   border-color: transparent;
 }
  .icn-logo {
    display: block;
    width: 100%;
    text-align: center;
    padding-bottom: 4px;
  }
  .main-nav a {
    border-top: 2px solid transparent;
    border-bottom: 2px solid transparent;
  }
  .main-nav a:hover {
    border-color: rgba(0,0,0, .1);
  }
  .courses h2 {
    margin-bottom: 0;
  }
  .course-nav {
    display: block;
    margin: 1.5em 0 3.2em;
  }
  .home a,
  input,
  button {
    display: block;
    width: 100%;
    margin-bottom: 1em;
  }
}
@media (min-width: 769px) {
 body {
   padding-top: 3em;
 }
 .home a {
   border-color: #3b80d1;
 }
 .media img,
 .media > div,
 .teacher {
   float: left;
 }
 .media > div {
   width: 85.1%;
   margin-left: 1.5em;
 }
 .teacher {
   width: 48.73%;
   margin-bottom: 1.5em;
 }
 .teacher + .teacher {
   margin-left: 2.54%;
 }
 .teacher:nth-child(2n+3) {
   clear: left;
   margin-left: 0;
 }
}
*/

/* =================================
 MEDIA QUERIES
==================================== */

@media (min-width: 0) and (max-width: 768px) {
 body {
   padding-top: .8em;
 }


  .main-nav a {
    border-top: 2px solid transparent;
    border-bottom: 2px solid transparent;
  }
  .main-nav a:hover {
    border-color: rgba(0,0,0, .1);
  }
 /* .courses h2 {
    margin-bottom: 0;
  } */
  .
  .home a,
  input,
  button {
    display: block;
    width: 100%;
    margin-bottom: 1em;
  }
}
@media (min-width: 769px) {
 body {
   padding-top: 3em;
 }
 .home a {
   border-color: #3b80d1;
 }
 .media > div
  {
   float: left;
 }
 .media > div {
   width: 85.1%;
   margin-left: 1.5em;
 }
 .teacher {
   width: 48.73%;
   margin-bottom: 1.5em;
 }


 /* MAIN NAV -------- */

 header,
 .main-nav {
   display: flex;
   flex-wrap: wrap;
 }

 @media(max-width: 768px) {

 header,

 .main-nav li {

   flaot: right;
   display: inline;

   text-align: center;

   width: 100%;

 }
}

 .main-nav a  {
   border-left: 3px solid transparent;
   border-right: 3px solid transparent;
   padding: 1.25em 1.5em;
 }
 .main-nav a:hover {
   border-color: rgba(0,0,0, .1);
 }
 /* COURSE NAV -------- */
 .main-nav li {
   float: right;
   display: inline;
 }

}
