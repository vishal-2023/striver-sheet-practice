
function maximumPoints(arr,k){
    let sum=0,n=arr.length;
    for(let i=0;i<k;i++){
        sum+=arr[i]
    }
    let ans=sum;

    while(k !== 0){
        sum=sum-arr[k-1];
        
        sum+=arr[n-1];
        if(sum>ans){
            ans=sum;
        }
        n--;
        k--
    }
    return ans;
}

console.log(maximumPoints([6,2,3,4,7,2,1,7,1],4))

