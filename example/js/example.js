// http://maps.kosmosnimki.ru/VectorLayer/QuerySelect?sql=select count(*) from [61F54CF35EC44536B527A2168BE6F5A0]
// select count(*) as content, [acqdate] as start from [AFB4D363768E4C5FAC71C9B0C6F7B2F4] WHERE Intersects([geomixergeojson], buffer(GeometryFromGeoJson('{"type":"GeometryCollection","geometries":[{"type":"Polygon","coordinates":[[[37.9248046875,55.547280698640805],[37.9248046875,56.12106052504407],[37.254638671875,56.12106052504407],[37.254638671875,55.547280698640805],[37.9248046875,55.547280698640805]]]}]}', 4326), 0.001)) AND [cloudness] < 30 AND [acqdate] BETWEEN '2016-01-01' AND '2016-12-31' GROUP BY [acqdate]
// var vis = require('vis'),
var container = document.getElementById('tl-container'),
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

var sqlButton = document.getElementsByClassName('getData')[0],
	sqlInput = document.getElementsByClassName('sql-input')[0];
sqlButton.onclick = function () {
	var src = 'http://maps.kosmosnimki.ru/VectorLayer/QuerySelect?WrapStyle=None&sql=' + sqlInput.value.trim();
	fetch(src).then(function (resp) {
		return resp.json();
	}).then(function (json) {
		if (json.Status === 'ok' && json.Result.values.length) {
			var counts = 0;
			data = json.Result.values.map(function (arr, i) {
				counts += arr[0];
				return {
					id: i,
					content: arr[0].toString(),
					start: new Date(arr[1] * 1000)
				};
			});
console.log('items: ', data.length, ' objects: ', counts);
			items = new vis.DataSet(data);
		}
	})
};

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
		stack: false,
		// timeAxis: {scale: 'day'},
		// type: 'point',
		// showMajorLabels: false,
		// showMinorLabels: false,
		// format: {
			// minorLabels: {
				// day:        'D',
				// month:      'MMM',
				// year:       'YYYY'
			// },
			// majorLabels: {
				// day:        'D',
				// month:      'MMM',
				// year:       'YYYY'
			// }
		// },
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

