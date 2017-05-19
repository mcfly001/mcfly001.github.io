const assert = require('assert');
const obj1={
  "sale":"man",
  "age":"12"
}
const obj2={
  "sale":"man",
  "age":12
}
//对比2个是否相同
assert.deepEqual(obj1,obj2);
//有2个区别，第一个是使用严格运算符，一个是会检查他们的原型是否全等
assert.deepStrictEqual(obj1,obj2);
