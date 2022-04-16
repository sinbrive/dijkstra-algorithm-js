let graph = {'a':{'b':8,'c':6.5, 'i':6.7, 'f':7},
         'b':{'c':6.5, 'a':8},
         'c':{'d':4, 'b':6.5},
         'd':{'e':6, 'i':4},
         'e':{'d':6, 'j':10},
         'f':{'a':7, 'g':2.5},
         'g':{'f':2.5, 'h':4.5, 'i':5.5},
         'h':{'i':7, 'g':4.5,'j':10},
         'i':{'a':6.7, 'g':5.5, 'd':4, 'h':7},
         'j':{'h':10, 'e':10}
        };

console.log(graph);

unVisited = [];

for (var key in graph ) unVisited.push(key);
console.log(unVisited);

distances = {};
predecessors = {};
infinity = 999999;
start='a';

for (var node of unVisited ) {
  if (node == start)
    distances[node] = 0;
  else
    distances[node] = infinity;
}

while (unVisited) {  
  m = infinity;
  focusNode = ''
  for (const n in distances) {
    if (!unVisited.includes(n)) continue;
    if (distances[n] <= m) {
      m = distances[n]
      focusNode = n
    }
  }    
  //console.log(focusNode);
  
  unVisited.pop(focusNode)
  
  //console.log(graph[focusNode])

  // update distance with the focusNode neighbors
  
  for (var key in graph[focusNode]) {
    w = graph[focusNode][key]
    var new_dist = distances[focusNode] + w;
    if (new_dist < distances[key]) {
        distances[key]= new_dist
        predecessors[key]=focusNode
      }
  }      
}
console.log(distances);

