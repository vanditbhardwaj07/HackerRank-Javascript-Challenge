function sides(literals, ...expressions) {
    var a = expressions[0];
    var p = expressions[1];
    let fun1 = Math.sqrt((p * p) - 16 * a);
    let s1 = (p + fun1)/4;
    let s2 = (p - fun1)/4;
    var arr = [];
    arr.push(s1,s2);
    arr.sort();
    return arr;
}