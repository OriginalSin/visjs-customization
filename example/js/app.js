var vis = require('vis');
var stations = require('../data/stations.js')
require('../../index.js');

console.log(vis);

var container = document.getElementById('tl-container');
console.log(container);



// Create a DataSet (allows two way data-binding)
var data = [
    {id: 1, content: 'item 1', start: '2013-04-20'},
    {id: 2, content: 'item 2', start: '2013-04-14'},
    {id: 3, content: 'item 3', start: '2013-04-18'},
    {id: 5, content: 'item 5', start: '2013-04-25'},
    {id: 6, content: 'item 6', start: '2013-04-27'}
  ];

// Configuration for the Timeline
var options = {
    // template: template,
    // align: 'right',                                                      // position
    // autoResize: false,                                                       // better true, timeline center point stays at the same place
    // multiselect: true,
    // configure: true,
    // dataAttributes: 'all',
    // editable: true,
    // groupEditable: true,
};

// Create a Timeline
// var timeline = new vis.Timeline(container, data, options);
// console.log(timeline);
// optional Handlebars template
// var template = Handlebars.compile(
//     '<h2>{{id}}</h2>' +
//     '<h3>{{content}}</h3>'
// );
var template = '';

// timeline DOM container
var container = document.getElementById('tl-container'),

    // initial data
    data = stations.map(function (value, index, array) {
        return value = {
            id: index,
            // content: array[index]['Название станции'],
            start: (function (str){
                return str.split('.').reverse().join();
            })(array[index]['Дата открытия']),
            className: takeLinesNames(array[index]['Линия']),
            group: takeLinesNames(array[index]['Линия']),
            style: 'background-color:black',
            type: 'point'
        }
    }),

    // required vis.js data format
    items = new vis.DataSet(data),

    // groups: otional parameter to group timeline items
    // looks so: {
    // {
        // id: value
    // }
    groups = data
        .map(function (value, index, array) {
            return value = array[index]['group']
        })
        .filter(onlyUnique)
        .map(function (value, index, array) {
            return value = {
                id: array[index],
                className: array[index],
                style: 'color:red'
            }
        }),

    // optional timeline custom parameters
    options = {
        // template: template,
        // align: 'right',                                                      // position
        autoResize: false,                                                       // better true, timeline center point stays at the same place
        multiselect: true,
        // configure: true,
        // dataAttributes: 'all',
        // editable: true,
        // groupEditable: true,
    };

items.on('add', function (event, properties, senderId) {
  // console.log('event:', event, 'properties:', properties, 'senderId:', senderId);
});
//
// items.add({
//     // className: 'Серпуховско-Тимирязевская-линия',
//     id: 200,
//     group: 'Серпуховско-Тимирязевская-линия',
//     content: 'Something',
//     start: '1972,01,01',
//     end: '1985,07,11'
// });
// console.log(items.max('id'));


// var sel = items.get(100);

// various data selections
var sel = items.get({
    fields: ['start', 'content'],
    type: {
        start: 'String',
        id: 'String',
        content: 'String'
    }
})
var sel = items.get({
    filter: function(item) {
        return item.group === 'Калужско-Рижская-линия'
    }
})
var view = new vis.DataView(items,{
    filter: function(item) {
        return item.id === 100
    }
});

// take lines names from data
function takeLinesNames(str) {
    return str.split(' ').join('-');
}

// remove duplicate lines
function onlyUnique(value, index, array) {
    return array.indexOf(value) === index;
}
console.log(items);
// timeline select
var tl = new vis.Timeline(container, items, groups, options);
// var tl = new vis.Timeline(container, [], [], options);
tl.on('select', function(){
    var selected = tl.getSelection();
    console.log(selected);
});

// timeline resize
tl.on('rangechange', function(){
    // var selected = tl.getSelection();
    console.log('rangechanged');
});

// groups.forEach(function(group){
//     console.log(group.id);
// })
// document.getElementById('tl-container').onclick = function (event) {
// }
