function LeftRotate(arr){
    let temp=arr[0];
    for(let i=0;i<arr.length-1;i++){
        arr[i]=arr[i+1];
    }
    arr[arr.length-1]=temp;
    // return arr;
}

function rotateByK(arr,k){
    let l=k%arr.length;
    for(let i=0;i<l;i++){
        LeftRotate(arr)
    }
    return arr;
}

console.log(rotateByK([1,2,3,5,6,78,88,89,90],1));

// console.log(LeftRotate([1,2]));