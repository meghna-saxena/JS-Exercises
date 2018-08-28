//

function isEqual(a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}

// But there's a better way to do this. Since === returns true or false, we can return the result of the comparison:

function isEqual(a, b) {
  return a === b;
}

Similarly: function isLess(a, b) {
  return a < b;
}

isLess(10, 15);
