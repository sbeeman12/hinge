function getProp(object, prop) {
  prop = prop.split('.');
  if (prop.length == 1) {
    return object[prop[0]]
  }
  else {
    let target = prop.shift();
    return getProp(object[target], prop.join('.'));
  }
}

function setProp(object, prop, value) {
  prop = prop.split('.');
  if (prop.length == 1) {
    object[prop[0]] = value
    return value;
  }
  else {
    let target = prop.shift();
    object[target] = {};
    return setProp(object[target], prop.join('.'), value);
  }
}
