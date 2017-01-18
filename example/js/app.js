// var vis = require('vis'),
var metro = require('./prepare.js'),
    container = document.getElementById('tl-container'),
    // Configuration for the Timeline
    // options = {
    // // template: template,
    // // align: 'right',                                                      // position
    // // autoResize: false,                                                       // better true, timeline center point stays at the same place
    // // multiselect: true,
    // // configure: true,
    // // dataAttributes: 'all',
    // // editable: true,
    // // groupEditable: true,
    // };

    tl = null;

var data = [
  {id: 1, content: 'item 1', start: '2016-01-15'},
  {id: 2, content: 'item 2', start: '2016-02-15'},
  {id: 3, content: 'item 3', start: '2016-03-15'},
  {id: 4, content: 'item 4', start: '2016-04-15'},
  {id: 5, content: 'item 5', start: '2016-05-15'},
  {id: 6, content: 'item 6', start: '2016-06-15'},
  {id: 7, content: 'item 7', start: '2016-07-15'},
  {id: 8, content: 'item 8', start: '2016-08-15'},
  {id: 9, content: 'item 9', start: '2016-09-15'},
  {id: 10, content: 'item 10', start: '2016-10-15'},
  {id: 11, content: 'item 11', start: '2016-11-15'},
  {id: 12, content: 'item 12', start: '2016-12-15'}
];
var items = new vis.DataSet(data);
// tl = new vis.Timeline(container, items, options);

// 1. Default Timeline
var defButton = document.getElementById('default'),
    defOptions = {
        locale: 'en'
    };
defButton.onclick = function () {
    container.innerHTML = '';
    if (tl) {
        tl.destroy();
        tl = null;
    }
    tl = new vis.Timeline(container, items, defOptions);
}

// 2. Russial locale
var ruButton = document.getElementById('ru'),
    ruOptions = {
        locales: {
            ru: {
                current: 'Текущее',
                time: 'время',
            }
        },
        locale: 'ru'
    };
ruButton.onclick = function () {
    container.innerHTML = '';
    if (tl) {
        tl.destroy();
        tl = null;
    }
        tl = new vis.Timeline(container, items, ruOptions);
}

// 3. Under timeline
var underButton = document.getElementById('under'),
    underOptions = {
        locale: 'en',
        orientation: 'top',
        autoResize: false,
        horizontalScroll: false,
        zoomable: false
    };
underButton.onclick = function () {
    var groups = [{
        id: 1
        }],
        style = 'font-size: 20; background-color: white;',
        data = [
          {id: 1,   content: '', type: 'point', group: 1, start: '2016-01-15', style: style},
          {id: 2,   content: '', type: 'point', group: 1, start: '2016-02-15', style: style},
          {id: 3,   content: '', type: 'point', group: 1, start: '2016-03-15', style: style},
          {id: 4,   content: '', type: 'point', group: 1, start: '2016-04-15', style: style},
          {id: 5,   content: '', type: 'point', group: 1, start: '2016-05-15', style: style},
          {id: 6,   content: '', type: 'point', group: 1, start: '2016-06-15', style: style},
          {id: 7,   content: '', type: 'point', group: 1, start: '2016-07-15', style: style},
          {id: 8,   content: '', type: 'point', group: 1, start: '2016-08-15', style: style},
          {id: 9,   content: '', type: 'point', group: 1, start: '2016-09-15', style: style},
          {id: 10,  content: '', type: 'point', group: 1, start: '2016-10-15', style: style},
          {id: 11,  content: '', type: 'point', group: 1, start: '2016-11-15', style: style},
          {id: 12,  content: '', type: 'point', group: 1, start: '2016-12-15', style: style}
      ],
      items = new vis.DataSet(data);

    container.innerHTML = '';
    if (tl) {
        tl.destroy();
        tl = null;
    }
    tl = new vis.Timeline(container, items, groups, underOptions);
    tl.on('select', function (items, event) {

    })
}

// 4. Custom style
var customStyleButton = document.getElementById('custom-style'),
    customStyleOptions = {
        locale: 'en',
        orientation: 'top',
        autoResize: false,
        horizontalScroll: false,
        zoomable: false,
        selectable: false
    };
customStyleButton.onclick = function () {
    var groups = [{
        id: 1
        }],
        style = '',
        data = [
          {id: 1,   content: '', type: 'point', group: 1, start: '2016-01-15', style: style},
          {id: 2,   content: '', type: 'point', group: 1, start: '2016-02-15', style: style},
          {id: 3,   content: '', type: 'point', group: 1, start: '2016-03-15', style: style},
          {id: 4,   content: '', type: 'point', group: 1, start: '2016-04-15', style: style},
          {id: 5,   content: '', type: 'point', group: 1, start: '2016-05-15', style: style},
          {id: 6,   content: '', type: 'point', group: 1, start: '2016-06-15', style: style},
          {id: 7,   content: '', type: 'point', group: 1, start: '2016-07-15', style: style},
          {id: 8,   content: '', type: 'point', group: 1, start: '2016-08-15', style: style},
          {id: 9,   content: '', type: 'point', group: 1, start: '2016-09-15', style: style},
          {id: 10,  content: '', type: 'point', group: 1, start: '2016-10-15', style: style},
          {id: 11,  content: '', type: 'point', group: 1, start: '2016-11-15', style: style},
          {id: 12,  content: '', type: 'point', group: 1, start: '2016-12-15', style: style}
      ],
      items = new vis.DataSet(data);
// vis-item vis-point vis-readonly numberCircle
    container.innerHTML = '';
    if (tl) {
        tl.destroy();
        tl = null;
    }
    tl = new vis.Timeline(container, items, groups, customStyleOptions);
    setTimeout(function () {
        var dots = document.getElementsByClassName('vis-item');
        for (var i = 0; i < dots.length; i++) {
            dots[i].className += ' numberCircle';
            // dots[i].style.top = '10px';
            dots[i].innerHTML = data[i].id;
        }
    }, 30);
}

// 5. Evented
var eventedButton = document.getElementById('evented'),
    eventedOptions = {
        locale: 'en',
        orientation: 'top',
        autoResize: false,
        horizontalScroll: false,
        zoomable: false
    },
    eventsResult = document.getElementById('event-name');
eventedButton.onclick = function () {
    var groups = [{
        id: 1
        }],
        style = 'font-size: 20; background-color: white; color: red;',
        data = [
          {id: 1,   content: '', type: 'point', group: 1, start: '2016-01-15', style: style},
          {id: 2,   content: '', type: 'point', group: 1, start: '2016-02-15', style: style},
          {id: 3,   content: '', type: 'point', group: 1, start: '2016-03-15', style: style},
          {id: 4,   content: '', type: 'point', group: 1, start: '2016-04-15', style: style},
          {id: 5,   content: '', type: 'point', group: 1, start: '2016-05-15', style: style},
          {id: 6,   content: '', type: 'point', group: 1, start: '2016-06-15', style: style},
          {id: 7,   content: '', type: 'point', group: 1, start: '2016-07-15', style: style},
          {id: 8,   content: '', type: 'point', group: 1, start: '2016-08-15', style: style},
          {id: 9,   content: '', type: 'point', group: 1, start: '2016-09-15', style: style},
          {id: 10,  content: '', type: 'point', group: 1, start: '2016-10-15', style: style},
          {id: 11,  content: '', type: 'point', group: 1, start: '2016-11-15', style: style},
          {id: 12,  content: '', type: 'point', group: 1, start: '2016-12-15', style: style}
      ],
      items = new vis.DataSet(data);

    container.innerHTML = '';
    if (tl) {
        tl.destroy();
        tl = null;
    }
    tl = new vis.Timeline(container, items, groups, eventedOptions);
    tl.on('click', function (items, event) {
        eventsResult.innerHTML = 'click';
    });
    tl.on('itemover', function (items, event) {
        eventsResult.innerHTML = 'mouseover';
    });
    tl.on('itemout', function (items, event) {
        eventsResult.innerHTML = '';
    });
    tl.on('doubleClick', function (items, event) {
        eventsResult.innerHTML = 'doubleclick';
    });
    tl.on('contextmenu', function (items, event) {
        eventsResult.innerHTML = 'contextmenu';
    });
}
// container.innerHTML = 'Not supported. Currently are supported: EN, IT, DE, NL';
// tems.on('add', function (event, properties, senderId) {
//  // console.log('event:', event, 'properties:', properties, 'senderId:', senderId);
// );
// /
// tems.add({
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
