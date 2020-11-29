class Polygon {
    constructor(lengths) {
        var per = 0;
        for(var i in lengths) {
            per+=lengths[i];
        }
        this.new_perimeter = per;
    }
    perimeter () {
        return this.new_perimeter;
    }
}