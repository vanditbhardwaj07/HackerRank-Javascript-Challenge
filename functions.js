function factorial(n) {
    var ans=1;
    for(var i=n; i>=1; i--) {
        ans*=i;
    }
    return ans;
};
