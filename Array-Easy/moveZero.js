function moveZero(arr){
    let j=-1;
    for(let i=0;i<arr.length;i++){
        if(arr[i] == 0){
            j=i;
            break;
        }
    }
    if(j==-1){
        return;
    }
    for(let i=j+1;i<arr.length;i++){
        if(arr[i] !== 0){
            swap(arr,i,j);
            j++;
        }
    }
    return arr
}

function swap(arr,i,j){
    console.log(arr)

    let temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
}

console.log(moveZero([1,4,0,0,0,6,8,0,0]));