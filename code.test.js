const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

const graph1 = [
    [0, 1, 0, 0, 0],
    [1, 0, 1, 0, 0],
    [0, 1, 0, 1, 0],
    [0, 0, 1, 0, 1],
    [0, 0, 0, 1, 0]
];

const graph2 = [
    [0, 1, 1, 1, 1],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0]
];

const graph3 = [
    [0, 1, 0, 0, 1],
    [1, 0, 1, 0, 0],
    [0, 1, 0, 1, 0],
    [0, 0, 1, 0, 1],
    [1, 0, 0, 1, 0]
];

const graph4 = [
    [0, 1, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [0, 0, 0, 1, 1],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0]
];

const graph5 = [
    [1, 1, 0, 0, 0],
    [1, 0, 1, 0, 0],
    [0, 1, 0, 1, 0],
    [0, 0, 1, 0, 1],
    [0, 0, 0, 1, 0]
];

const graph6 = [
    [0, 1, 0, 0, 0, 0, 0],
    [1, 0, 1, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 0],
    [0, 0, 0, 1, 0, 0, 1],
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0]
];

function allTests() {
    const results = [
        depthFirstSearch(graph1, 0, 4).join(',') === [0, 1, 2, 3, 4].join(','),
        depthFirstSearch(graph2, 0, 4).join(',') === [0, 4].join(','),
        depthFirstSearch(graph3, 0, 4).join(',') === [0, 1, 2, 3, 4].join(','),
        depthFirstSearch(graph4, 0, 1).join(',') === [0, 1].join(','),
        depthFirstSearch(graph4, 0, 4).join(',') === [].join(','),
        depthFirstSearch(graph5, 0, 4).join(',') === [0, 1, 2, 3, 4].join(','),
        depthFirstSearch(graph6, 0, 2).join(',') === [0, 1, 2].join(',')
    ];
    //console.log(results)
    return results.every(Boolean);
}

jsc.check(allTests);