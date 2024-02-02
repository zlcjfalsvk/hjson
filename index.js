import fs from 'fs';
import Hjson from 'hjson';

const text = fs.readFileSync("./test_comma.hjson", "utf8");

// parse either JSON or Hjson
var data=Hjson.parse(text, { keepWsc: true });

console.log(data);
console.log("-----------------------------");

// // convert to JSON
console.log("--- JSON output:");
console.log(JSON.stringify(data, null, 2));

console.log("-----------------------------");
// get Comments 
console.log("\n--- Hjson Commments:");
// console.log(Hjson.comments.extract(data));
console.log(data.__COMMENTS__); // 자식의 comments 는 가져오지 못함
console.log("-----------------------------");
console.log(data.children.__COMMENTS__);

console.log("-----------------------------");
// // convert to Hjson
console.log("\n--- Hjson output:");
console.log(Hjson.stringify(data, { keepWsc: true, separator: true }));

