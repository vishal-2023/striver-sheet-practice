
function secondLargest(arr){
    let lar=-Infinity,ans=lar;
    for(let i of arr){
        if(i>lar){
            ans=lar;
            lar=i
        }else if(i> ans && i<lar){
            ans=i
        }
    }
    return ans;
}

function findSecondSmallest(arr){
    let small=Infinity,ans=small;
    for(let i of arr){
        if(i<small){
            ans=small;
            small=i
        }else if (i<ans && small<i){
            ans=i
        }
    }
    return ans;
}

console.log(findSecondSmallest([1,5,55,34,23,66,2,44]));
// console.log(secondLargest([1,2,55,34,23,66,44]));