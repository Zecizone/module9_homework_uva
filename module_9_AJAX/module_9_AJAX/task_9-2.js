//  написать код, который будет преобразовывать JSON в JS-объект 
// и выводить его в консоль.

const jsonString = `
{
  "list": [
   {
    "name": "Petr",
    "age": "20",
    "prof": "mechanic"
   },
   {
    "name": "Vova",
    "age": "60",
    "prof": "pilot"
   }
  ]
 } 
`;

const data = JSON.parse(jsonString);
const list = data.list;

const result = [];

list.forEach(item => {
  result.push({
    name: item.name,
    age: item.age,
    prof: item.prof
  });
});

console.log('list', result);
