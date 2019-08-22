# decimal.js-benchmarking

## Motivation

We want to store lists of elements in our persistent storage using floating numbers instead of standard integer indexes. We motivate this with the fact that we want to minimize junk-writes to our storage for a lot of reasons.

This repository is a brief benchmark trying to see whether [decimal.js](https://github.com/MikeMcl/decimal.js) can satisfy two requirements:

1. Float numbers should be predictably divided "forever". Vanilla JS float numbers can only be predictably divided up to a few decimals.
2. Float numbers should be "relatively cheaply" compared to each other, s.t. we can sort a shuffled list over and over in our application.

## Current Test results
```
$ node test-precision.js
[Vanilla] Number of iterations completed: 1074/1000000
[Decimal] Number of iterations completed: 1000000/1000000

$ node test-cmp.js
Constructing lists with 1000000 elements
[Vanilla] Sorting 1000000 elements in random order
[Vanilla] Time needed to sort 1000000 elements: 1545ms
[Decimal] Sorting 1000000 elements in random order
[Decimal] Time needed to sort 1000000 elements: 6994ms
```