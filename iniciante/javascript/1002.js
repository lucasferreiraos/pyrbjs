var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const pi = 3.14159;

var radius = parseInt(lines.shift());

var area = pi * (radius * radius);

console.log('A=' + area.toFixed(4));