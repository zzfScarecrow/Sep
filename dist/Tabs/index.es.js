'use strict';

var React = require('react');

function getTargetRect(target) {
    return target !== window
        ? target.getBoundingClientRect()
        : { top: 0, left: 0, bottom: 0 };
}
console.log(getTargetRect);
class Tabs extends React.Component {
    constructor() {
        super(...arguments);
        this.events = [
            'resize',
            'scroll',
            'touchstart',
            'touchmove',
            'touchend',
            'pageshow',
            'load'
        ];
    }
    render() {
        return React.createElement("div", null, "Tabs");
    }
}
console.log('Tabs', Tabs);

module.exports = Tabs;
