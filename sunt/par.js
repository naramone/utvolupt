let resolved = {
    someField: {
        key1: 10,
        key2: 20,
        key3: 30
    }
};

let types = {
    someField: 'type'
};

let op = 'sum';

let ops = {
    'type_sum': (a, b) => a + b
};

resolved['someField'] = Object.keys(resolved['someField'])
    .map(unit => resolved['someField'][unit])
    .reduce((acc, curr) => acc === undefined ? curr : ops[types['someField'] + '_' + op](acc, curr));

console.log(resolved['someField']); // Output: 60
