const replaceAt = (array, index, value) => {
  const ret = array.slice(0);
  ret[index] = value;
  return ret;
}

const sortByDone = (prev, next) => Number(prev.done) - Number(next.done);

export {
  replaceAt,
  sortByDone,
}
