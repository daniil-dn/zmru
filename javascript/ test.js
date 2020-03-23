// Async/Await version

// == Async/Await version ==
async function multiply(a, b) {
    return a * b;
}
async function foo() {
    var result = await multiply(2, 5);
    return result;
}
// Ошибки полетят сюда
(async function () {
    var result = await foo();
    console.log(result); // Logs 5
})();