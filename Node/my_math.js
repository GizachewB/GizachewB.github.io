
module.exports.add = function(x,y){
    return x + y;
};
module.exports.subtract = function(x,y){
    return x - y;
};
module.exports.multiply = function(x,y){
    return x * y;
};
module.exports.divide = function(x, y){
    if(y!==0){
        return x/y;
    }
    return false;
};
module.exports.pi = function(){
    return 3.14;
}; 
