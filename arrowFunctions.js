function modifyArray(nums) {
    const fun = nums.map(function(n){
        if(n % 2 == 0) {
            return n*2;
        }
        else
        {
            return n*3;
        }

    });
    return fun;
}