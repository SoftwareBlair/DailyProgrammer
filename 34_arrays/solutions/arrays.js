function Array() {
    this.length = 0;
}

Array.prototype.push = function(val) {
    this[this.length] = val;
    this.length++;
}

Array.prototype.pop = function() {
    if (this.length > 0) {
        this.length--;
        var value = this[this.length];
        delete this.length;
    }
    return value;
}

var arr = new Array();
arr.push(1);
console.log(arr.length); // -> 1
arr.push(10);
console.log(arr.length); // -> 2
console.log(arr[0]); // -> 1
console.log(arr[1]); // -> 10
console.log(arr.pop()); // -> 10
console.log(arr.length); // -> 1
console.log(arr.pop()); // -> 1
console.log(arr.length); // -> 0