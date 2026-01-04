let my_arr = [1,[2,3],[4,[5,6]],7];

console.log(my_arr);

function flattened_array(arr)
{
    let finalArr = []
    for(let ele of arr)
    {
        if(Array.isArray(ele))
        {
            finalArr.push(...flattened_array(ele))
        }else{
            finalArr.push(ele)
        }
    }
    return finalArr
}

console.log(flattened_array(my_arr).join(", "));

