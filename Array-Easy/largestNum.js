
function LargestNumber(arr){
    let ans=-Infinity;
    for(let i of arr){
        if(i>ans){
            ans=i
        }
    }
    return ans
}

console.log(LargestNumber([2,4,6,77,87,45,232,3,4,55,65,43]));

