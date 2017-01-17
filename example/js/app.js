var vis = require('vis'),
    metro = require('./prepare.js'),
    container = document.getElementById('tl-container'),
    // Configuration for the Timeline
    options = {
    // template: template,
    // align: 'right',                                                      // position
    // autoResize: false,                                                       // better true, timeline center point stays at the same place
    // multiselect: true,
    // configure: true,
    // dataAttributes: 'all',
    // editable: true,
    // groupEditable: true,
    };

    var data = [
      {id: 1, content: 'item 1', start: '2013-04-20'},
      {id: 2, content: 'item 2', start: '2013-04-14'},
      {id: 3, content: 'item 3', start: '2013-04-18'},
      {id: 4, content: 'item 4', start: '2013-04-16'},
      {id: 5, content: 'item 5', start: '2013-04-25'},
      {id: 6, content: 'item 6', start: '2013-04-27'}
    ]
    var items = new vis.DataSet(data);
    var tl = new vis.Timeline(container, items, options);
console.log(tl);


// items.on('add', function (event, properties, senderId) {
//   // console.log('event:', event, 'properties:', properties, 'senderId:', senderId);
// });
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
// var sel = items.get({
//     fields: ['start', 'content'],
//     type: {
//         start: 'String',
//         id: 'String',
//         content: 'String'
//     }
// })
// var sel = items.get({
//     filter: function(item) {
//         return item.group === 'Калужско-Рижская-линия'
//     }
// })
// var view = new vis.DataView(items,{
//     filter: function(item) {
//         return item.id === 100
//     }
// });

// timeline select
// var tl = new vis.Timeline(container, items, groups, options);
// var tl = new vis.Timeline(container, [], [], options);
// tl.on('select', function(){
//     var selected = tl.getSelection();
//     console.log(selected);
// });

// timeline resize
// tl.on('rangechange', function(){
//     // var selected = tl.getSelection();
//     // console.log('rangechanged');
// });

// groups.forEach(function(group){
//     console.log(group.id);
// })
// document.getElementById('tl-container').onclick = function (event) {
// }
