// DATA - 11 Individual Airports
const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');

// These airports above have specific routes that it can make.
const routes = [
  ['PHX', 'LAX'],
  ['PHX', 'JFK'],
  ['JFK', 'OKC'],
  ['JFK', 'HEL'],
  ['JFK', 'LOS'],
  ['MEX', 'LAX'],
  ['MEX', 'BKK'],
  ['MEX', 'LIM'],
  ['MEX', 'EZE'],
  ['LIM', 'BKK'],
];

// Map - Holds key-value pairs.
// Map - Remembers the order of the keys added.
// Map - Any value can be inserted.
const adjacencyList = new Map();

function addNode(airport) {
  // Each airport is passed in and initialized with an empty array.
  adjacencyList.set(airport, []);
}

// Add edge, undirected
function addEdge(origin, destination) {
  // We can use push because adjencyList.get returns an array, we can now treat this like an array.
  adjacencyList.get(origin).push(destination);
  adjacencyList.get(destination).push(origin);
}

// Create the Graph
airports.forEach(addNode);

// Spread - Allows us to use (...route) in place of NO arguments or MANY arguments.
routes.forEach(route => addEdge(...route))

function dfs(start, visited = new Set()) {

  console.log(start)

  visited.add(start);

  const destinations = adjacencyList.get(start);

  for (const destination of destinations) {

    if (destination === 'BKK') {
      console.log(`DFS found Bangkok`)
      return;
    }

    if (!visited.has(destination)) {
      dfs(destination, visited);
    }

  }

}

dfs('PHX')
