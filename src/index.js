'use strict';

// "require" dependencies
var Hypergrid = require('fin-hypergrid'),
    makeData = require('./make-data');

// instantiate
var data = makeData(),
    grid = new Hypergrid;

grid.setData(data);

// install sorter data source and api (plugin) and create controller
grid.behavior.dataModel.append(require('datasaur-sorter'));
grid.installPlugins(require('fin-hypergrid-sorting-plugin'));

grid.properties.renderFalsy = true;


grid.localization.header = {
    format: headerFormatter.bind(grid)
};

window.grid = grid;

function headerFormatter(value, config) {
    var colIndex = config.dataCell.x,
        sortString = this.behavior.dataModel.getSortImageForColumn(colIndex);

    if (sortString) {
        var groups = value.lastIndexOf(this.behavior.groupHeaderDelimiter) + 1;

        // if grouped header, prepend group headers to sort direction indicator
        if (groups) {
            sortString = value.substr(0, groups) + sortString;
            value = value.substr(groups);
        }

        // prepend sort direction indicator to column header
        value = sortString + value;
    }

    return value;
}