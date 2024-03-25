/*
Transform the foodTypes array of objects into
an array of string.
Containing: item "is a" category
and assign it to output. 

expected result: 
output = [
    'banana is a fruit',
    'apple is a fruit',
    'orange is a fruit',
    'carrot is a veggie',
    'pumpkin is a veggie',
    'lettuce is a veggie',
    'spinach is a veggie',
    'bean is a legume',
    'lentil is a legume',
    'nut is a legume',
]
*/

const foodTypes = [
  {
    category: 'fruit',
    items: ['banana', 'apple', 'orange'],
  },
  {
    category: 'veggie',
    items: ['carrot', 'pumpkin', 'lettuce', 'spinach'],
  },
  {
    category: 'legume',
    items: ['bean', 'lentil', 'nut'],
  },
];

const output = [];

foodTypes.forEach((item) => {
  item.items.forEach((food) => {
    output.push(`${food} is a ${item.category}`);
  });
});

console.log(output);
