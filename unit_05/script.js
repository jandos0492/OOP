//task 1

let test = new Test();
test.testProp = "otherTest";
console.log(test);
console.log(test._testProp);

//task2

let test2 = new Test2();
console.log(test2.testProp = "bbb");
console.log(test2);

console.log(test2.testProp = "");
console.log(test2);

console.log(test2.setTestProp(""));
console.log(test2);

//task3

console.log(test2.testProp);

//task4

let test3 = new Test3();
console.log(test3.testProp = "aaa");
console.log(test3);

//task5

let test4 = new Test4();
test4.testProp = 11;
console.log(test4._testProp);

//task6

console.log(test4.testProp);