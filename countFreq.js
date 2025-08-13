
const items =[
  "apple",
  "banana",
  "apple",
  "orange",
  "banana",
  "apple",
  "grape",
  "orange"
];

let freq={}
for (let item of items){
    freq[item] = (freq[item]|| 0)+1;
}
console.log(freq)
