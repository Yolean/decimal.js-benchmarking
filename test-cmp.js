const Decimal = require('decimal.js');

function buildLists() {
  const N = 1000000;
  const decimalList = [], vanillaList = [];
  console.log(`Constructing lists with ${N} elements`);
  for (let i = 0; i < N; i++) {
    const x = Math.random();
    decimalList.push(new Decimal(x));
    vanillaList.push(x);
  }

  return {
    decimalList,
    vanillaList
  };
}

function sortVanilla(list) {
  console.log(`[Vanilla] Sorting ${list.length} elements in random order`);

  const pre = Date.now();
  list.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });

  console.log(`[Vanilla] Time needed to sort ${list.length} elements: ${Date.now() - pre}ms`);
}

function sortDecimal(list) {
  console.log(`[Decimal] Sorting ${list.length} elements in random order`);

  const pre = Date.now();
  list.sort((a, b) => a.cmp(b));

  console.log(`[Decimal] Time needed to sort ${list.length} elements: ${Date.now() - pre}ms`);
}

const lists = buildLists();

sortVanilla(lists.vanillaList);
sortDecimal(lists.decimalList);
