function getSecondLargest(nums) {

    let secondMax;
    let max=Math.max.apply(null,nums);
    nums.sort(function(a, b){return b - a});
    for(let element of nums) {
        if(element < max) {
            secondMax = element;
            break;
        }
    }
    return secondMax;
}
