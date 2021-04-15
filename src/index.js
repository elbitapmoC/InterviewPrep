function checkScope() {
  let scope = 'Function scope'
  let inside = true;
  if (inside) {
    let scope = 'IF / Conditional scope..';
    console.log(scope);
  }
  console.log(scope);
}

checkScope();
