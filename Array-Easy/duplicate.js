
function removeDuplicate(arr){
    const set = new Set(arr)
    console.log("set",set);
    let index=0
    for(let i of set){
        arr[index++] = i
    }
    console.log("object",arr);
    return index
}

function removeDuplicateUsingPointer(arr){
    let p1=0,p2=1;
    
    while(p2<arr.length){
        if(arr[p1] !== arr[p2]){
            arr[++p1]=arr[p2++]
        }else{
            p2++
        }
    }
    return p1+1
}


console.log(removeDuplicateUsingPointer([1,1,2]));