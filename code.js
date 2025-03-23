function depthFirstSearch(graph, startNode, targetNode) {
    var checked = [];
    var que = [];

    function search(graph, startNode, targetNode, checked, que){
        var returnvalue = false;
    
        if (startNode == targetNode){
            return true;
        }
    
        var lengthh = (graph[startNode].length)
    
        for (let i = 0; i < lengthh; i++){
            var newnode = graph[startNode][i];
            if (!(checked.includes(newnode))){
                checked.push(newnode);
                returnvalue = search(graph, newnode, targetNode, checked, que);
            }
            
    
            if (returnvalue == true){
                que.push(newnode);
                return true;
            }
        }
    
        return false;
    }

    checked.push(startNode);
    var found = search(graph, startNode, targetNode, checked, que);
    if (found) {
        que.push(startNode);
        que.reverse();
    }

    return que;
}

var adjList1 = [
    [1,3], //0
    [0,2,3],//1
    [1,4],//2
    [0,1,4],//3
    [2,3]//4
]

var adjList2 = [
    [1],
    [3],
    [0,1],
    [0],
    [2]
]

console.log(depthFirstSearch(adjList1, 4, 0));
console.log(depthFirstSearch(adjList2, 0, 4));
var AdjMatrix1 = [
    [0,1,0,1,0],
    [1,0,1,1,0],
    [0,1,0,0,1],
    [1,1,0,0,1],
    [0,0,1,1,0]
]

var AdjMatrix2 = [
    [0,1,0,0,0],
    [0,0,0,1,0],
    [1,1,0,0,0],
    [1,0,0,0,1],
    [0,0,1,0,0]
]