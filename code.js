function depthFirstSearch(graph, startNode, targetNode) {
    var checked = [];
    var que = [];

    function search(graph, startNode, targetNode, checked, que){
        var returnvalue = false;
    
        if (startNode == targetNode){
            return true;
        }
        if (!graph[startNode] || graph.length < 1) {
            return false;
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
    if (found && (graph.length > 0)) {
        que.push(startNode);
        que.reverse();
    }

    return que;
}