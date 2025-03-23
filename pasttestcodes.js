const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

//Binary Search test code
const testSearch =
    jsc.forall("array nat", function(arr) {
        //console.log("(" + arr + "), " + arr[0])
        if(arr.length > 0) {
            arr.sort(function(a, b) { return a - b; });
            return binarySearch(arr, arr[0]) === 0;
        } else {
            return binarySearch(arr, "foo") === -1;
        }
    });
//console.log("" + testSearch);
jsc.assert(testSearch);


//brute force sorting
const test =
    jsc.forall("array nat", function(arr) {
        var a1 = JSON.parse(JSON.stringify(arr));
        var a2 = JSON.parse(JSON.stringify(arr));
        var count = permutationSort(a1);
        return count >= 0 && JSON.stringify(a1) == JSON.stringify(a2.sort(function(a, b) { return a - b; }));
    });
jsc.assert(test);

//divide and conquer sum
const testt =
    jsc.forall("array nat", function(arr) {
        return JSON.stringify(divideAndConquerSum(arr)) == JSON.stringify(arr.reduce(function(a, b) { return a + b; }, 0));
    });
jsc.assert(testt);

//fibonacci invariants
function fibTest(n) {
    var fib_solns = [0];
    if(n == 0) return fib_solns;
    fib_solns[1] = 1;
    if(n == 1) return fib_solns;
    for(var i = 2; i <= n; i++) fib_solns[i] =
        fib_solns[i-1] + fib_solns[i-2];
    return fib_solns;
}

const testtt =
    jsc.forall("nat", function(n) {
        return JSON.stringify(fib(n)) ==
            JSON.stringify(fibTest(n));
    });
jsc.assert(testtt);

//graph representations
const testtttt =
    jsc.forall("array (pair nat nat)", function(edges) {
        var max = edges.reduce(function(a, b) { return Math.max(a, Math.max(b[0], b[1])); }, 0);
        var mat = [];
        for(var i = 0; i <= max; i++) {
            mat[i] = [];
            for(var j = 0; j <= max; j++) {
                mat[i][j] = 0;
            }
            for(var j = 0; j < edges.length; j++) {
                if(edges[j][0] == i) mat[i][edges[j][1]] = 1;
            }
        }
        var list = [];
        for(var i = 0; i <= max; i++) {
            list[i] = [];
            for(var j = 0; j < edges.length; j++) {
                if(edges[j][0] == i) list[i].push(edges[j][1]);
            }
            list[i].sort(function(a, b) { return a - b; });
            list[i] = [...new Set(list[i])];
        }
        return JSON.stringify(list) == JSON.stringify(convertToAdjList(mat));
    });
jsc.assert(testtttt, { tests: 1000 });

//MergeSort
const testSort =
    jsc.forall("array nat", function(arr) {
        var a1 = JSON.parse(JSON.stringify(arr));
        var a2 = JSON.parse(JSON.stringify(arr));
        return JSON.stringify(mergeSort(a1)) ==
            JSON.stringify(a2.sort(function(a, b)
                { return a - b; }));
    });

jsc.assert(testSort);

//pancake sort
const testSortt =
    jsc.forall("array nat", function(arr) {
        var a1 = JSON.parse(JSON.stringify(arr));
        var a2 = JSON.parse(JSON.stringify(arr));
        return JSON.stringify(pancakeSort(a1)) ==
            JSON.stringify(a2.sort(function(a, b)
                { return a - b; }));
    });

jsc.assert(testSortt);

//quicksort
const testSorttt =
    jsc.forall("array nat", function(arr) {
        var a1 = JSON.parse(JSON.stringify(arr));
        var a2 = JSON.parse(JSON.stringify(arr));
        return JSON.stringify(quicksort(a1)) ==
            JSON.stringify(a2.sort(function(a, b)
                { return a - b; }));
    });

jsc.assert(testSorttt);

//reverse insertion sort
const testSortttt =
    jsc.forall("array nat", function(arr) {
        var a1 = JSON.parse(JSON.stringify(arr));
        var a2 = JSON.parse(JSON.stringify(arr));
        return JSON.stringify(insertionSortReverse(a1)) ==
            JSON.stringify(a2.sort(function(a, b)
                { return a - b; }));
    });

jsc.assert(testSortttt);

//sume
const testSum =
    jsc.forall("array nat", function(arr) {
        return JSON.stringify(sum(arr)) == JSON.stringify(arr.reduce(function(a, b) { return a + b; }, 0));
    });

jsc.assert(testSum);