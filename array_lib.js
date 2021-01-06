Array.prototype.pluck = function(property){
    return this.map((el)=> el[property])
}

Array.prototype.splitArray = function(num){

    let res = [];

     for (let i = 0; i < Math.ceil(this.length/num); i++){
         res[i] = this.slice((i*num), (i*num) + num);
     }

    return res;
}

Array.prototype.clearArray = function(){
    return this.filter(item => item)
}

Array.prototype.concatArray =  function( ...arr) {
    return this.concat(arr.reduce((array, item) => array.concat(item), []))
}

Array.prototype.rm =  function(count = 1){
    this.splice(0, count)
    return this
}

Array.prototype.replaceIn = function(s, start = 0, end = this.length){
    for(let i = start; i < end; i++){
        this[i] = s
    }
    return this
}

Array.prototype.uni = function () {
    return this.filter((element, index, arr) => arr.indexOf(element) === index && arr.lastIndexOf(element) !== index);
};

Array.prototype.nfa = function(index){
    let res = () => index >= 0 ? this[index] : this.slice(index)[0]
    return res()
}

Array.prototype.group = function(arr1, arr2, arr3){
    let test =[];
    for (let i = 0; i < arr1.length; i++) {
        test.push([arr1[i], arr2[i], arr3[i]]);
    }
    return test
}

Array.prototype.implode = function(del){
    return this.join(del)
}

Array.prototype.rnd = function() {
    return this.sort(() => Math.random() - 0.5);
}

Array.prototype.diff = function(arr2) {
    return this
        .filter((item) => arr2.indexOf(item) === -1)
        .concat(arr2.filter((item) => this.indexOf(item) === -1));
}

Array.prototype.fn = function () {
    return this.sort((a,b) => this.filter(v => v===a).length - this.filter(v => v===b).length).pop();
}

module.exports = Array.prototype.pluck
module.exports = Array.prototype.splitArray
module.exports = Array.prototype.clearArray
module.exports = Array.prototype.concatArray
module.exports = Array.prototype.rm
module.exports = Array.prototype.replaceIn
module.exports = Array.prototype.uni
module.exports = Array.prototype.nfa
module.exports = Array.prototype.group
module.exports = Array.prototype.implode
module.exports = Array.prototype.rnd
module.exports = Array.prototype.diff
module.exports = Array.prototype.fn