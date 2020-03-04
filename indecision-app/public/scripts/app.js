console.log('App.js is runing');

// JSX -JavaScript XML
// var template = <p>This is JSX from app.js</p>;   ***new jsx chome  cannot read
var template = React.createElement("h1", {
    id: "someid"
  }, "This is JSX from app.js");
var appRoot = document.getElementById('app');

ReactDOM.render(template,appRoot);