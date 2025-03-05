// function getFirstElementOfAnArray(arr: any[]): any {
//   return arr[0]
// }
function getFirstElementOfAnArray(arr) {
    return arr[0];
}
const arr = [10, 20, 30];
const firstElement = getFirstElementOfAnArray(arr);
const strArray = ['Hello', 'World'];
const firstStrElement = getFirstElementOfAnArray(strArray);
async function fetchData(url) {
    const result = await fetch(url);
    return result.json();
}
const todos = await fetchData('https://jsonplaceholder.typicode.com/todos');
const posts = await fetchData('https://jsonplaceholder.typicode.com/posts');
