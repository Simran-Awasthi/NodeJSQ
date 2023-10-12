function deepClone(obj) {
  if (typeof obj !== "object" || obj == null) {
    return obj;
  }
  //  Recursively clone array elements.//
  if (Array.isArray(obj)) {
    newElement = [];
    for (let i = 0; i < obj.length; i++) {
      newElement[i] = deepClone([i]);
    }
    return newElement;
  }
  const newObj = {};
  for (const key in newObj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = deepClone(obj[key]);
    }
  }
  return newObj;
}
