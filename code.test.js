const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

// Depth-First Search Test
const testDFS =
    jsc.forall("array (pair nat nat)", "nat", "nat", function(edges, start, target) {
        // Construct adjacency list
        let graph = {};
        edges.forEach(([v, w]) => {
            if (!graph[v]) graph[v] = [];
            if (!graph[w]) graph[w] = [];
            graph[v].push(w);
            graph[w].push(v); // Assuming an undirected graph
        });

        // Ensure start and target exist in the graph
        if (!(start in graph) || !(target in graph)) {
            return JSON.stringify(depthFirstSearch(graph, start, target)) === JSON.stringify([]);
        }

        let path = depthFirstSearch(graph, start, target);

        if (start === target) {
            return JSON.stringify(path) === JSON.stringify([start]);
        }

        if (path.length === 0) {
            // If no path found, verify that there is indeed no connection
            let visited = new Set();
            function dfs(v) {
                if (visited.has(v)) return false;
                if (v === target) return true;
                visited.add(v);
                return graph[v].some(dfs);
            }
            return !dfs(start);
        }

        // Verify path validity
        for (let i = 0; i < path.length - 1; i++) {
            if (!graph[path[i]].includes(path[i + 1])) {
                return false;
            }
        }
        return path[0] === start && path[path.length - 1] === target;
    });

jsc.assert(testDFS, { tests: 1000 });
