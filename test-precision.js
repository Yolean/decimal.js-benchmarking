const Decimal = require('decimal.js');

// Just to make testDecimal actually stop somewhere
const GOAL = 1000000;

function testVanilla() {
  let x = 0.5, i = 0;
  while (x !== 0 && ++i < GOAL) {
    x = x / 2;
  }

  console.log(`[Vanilla] Number of iterations completed: ${i}/${GOAL}`);
}

function testDecimal() {

  let x = new Decimal('0.5'), i = 0;
  while (x.cmp(0) === 1 && ++i < GOAL) {
    x = x.dividedBy(2);
  }

  console.log(`[Decimal] Number of iterations completed: ${i}/${GOAL}`);
}

testVanilla();
testDecimal();