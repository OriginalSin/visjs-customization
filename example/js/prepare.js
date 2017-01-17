var stations = require('../data/stations.js'),
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
        }
    ),
    // optional Handlebars template
    // var template = Handlebars.compile(
    //     '<h2>{{id}}</h2>' +
    //     '<h3>{{content}}</h3>'
    // );
    template = '';

// take lines names from data
function takeLinesNames(str) {
    return str.split(' ').join('-');
}

// remove duplicate lines
function onlyUnique(value, index, array) {
    return array.indexOf(value) === index;
}

module.exports = {
    data: data,
    groups: groups
}
