// let num = 20;
// let sum = 0;
// let rem = 0;

// while(num > 0)
// {
//     rem = num % 10;
//     sum = sum + rem;
//     num = parseInt(num / 10)
// }

// console.log(sum);



let arr = [1,2, 4, 5,6]
let n = arr.length;
function arrRec(arr, index)
{
    if(index >= n){
        return
    }
    console.log(arr[index]);
    arrRec(arr, index+1)
    return arr[index]
}
arrRec(arr,0)