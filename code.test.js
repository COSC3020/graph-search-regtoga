const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

//check if graph is a valid adjacency list
function isValidAdjList(graph) {
    return Array.isArray(graph) && graph.every(node => Array.isArray(node));
}

jsc.assert(
    jsc.forall(
        jsc.array(jsc.array(jsc.nat())),  // Generate adjacency list
        jsc.nat(),  // start node
        jsc.nat(),  // target node
        (graph, start, target) => {
            // ensure the graph is valid and start + target nodes are in range
            if (!isValidAdjList(graph) || start >= graph.length || target >= graph.length) {
                return true;  // Skip invalid cases
            }

            let result = depthFirstSearch(graph, start, target);

            // result should always be an array (valid path or empty)
            return Array.isArray(result);
        }
    )
);