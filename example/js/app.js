var vis = require('vis');
require('../../index.js');

console.log(vis);

var container = document.getElementById('vis');
console.log(container);

// Create a DataSet (allows two way data-binding)
var items = new vis.DataSet([
  {start: '2013-04'}
]);

// Configuration for the Timeline
var options = {
    // template: template,
    // align: 'right',                                                      // position
    autoResize: false,                                                       // better true, timeline center point stays at the same place
    multiselect: true,
    // configure: true,
    // dataAttributes: 'all',
    // editable: true,
    // groupEditable: true,
};

// Create a Timeline
var timeline = new vis.Timeline(container, items, options);
