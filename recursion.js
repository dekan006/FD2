const input = [4,2,0,2,1];


function sum(data) {
    return data.length === 0 ? 0 : data.shift() + sum(data);
}
console.log(sum(input));