var Queue = /** @class */ (function () {
    function Queue() {
        this.data = [];
    }
    Queue.prototype.add = function (item) {
        this.data.push(item);
    };
    Queue.prototype.remove = function () {
        this.data.shift();
    };
    return Queue;
}());
var nameQueue = new Queue();
nameQueue.add("Hello");
console.log(nameQueue);
var numberQueue = new Queue();
numberQueue.add(55);
console.log(numberQueue);
