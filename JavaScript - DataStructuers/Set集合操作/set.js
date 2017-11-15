/**
 * Created by linshuangqiang on 2017/11/15.
 */
function Set(){
    var items = {};
    //集合中是否存在某个元素
    this.has = function(value){
        return value in items;
        //return items.hasOwnProperty(value);
    };
    //向集合中添加元素
    this.add = function(value){
        items[value] = value;
    };
    //从集合中删除元素
    this.remove = function(value){
        if(this.has(value)){
            delete items[value];
            return true;
        }
        return false;
    };
    //清空集合
    this.clear = function(){
        items = {};
    };
    //获取集合的长度
    this.size = function(){
        return Object.keys(items).length;
    };
    this.sizeLegacy = function() {
        var count = 0;
        for(var prop in items){
            if(items.hasOwnProperty(prop)){
                ++count;
            }
        }
        return count;
    };
    //得到集合中的值，结果为数组形式
    this.values = function(){
        return Object.keys(items);
    };

    //集合的高级操作:4个
    //1。并集  返回包含在两个集合中的所有元素的一个新集合
    this.union = function(otherSet){
        var unionSet = new Set();
        var values = this.values();
        for(var i = 0; i < values.length; i++){
            unionSet.add(values[i]);
        }
        var values = otherSet.values();
        for(var i = 0; i < values.length;i++){
            unionSet.add(values[i]);
        }
        return unionSet;
    };
    //2.交集  返回包含在两个集合中的元素的新集合
    this.insersection = function(otherSet){
        var insersectionSet = new Set();
        var values = this.values();
        for(var i = 0; i < values.length;i++){
            if(otherSet.has(values[i])){
                insersectionSet.add(values[i])
            }
        }
        return insersectionSet;
    };
    //3.差集  返回一个存在于第一个  并且不存在于第二个集合中的元素的一个新的集合
    this.difference = function(otherSet){
        var differenceSet = new Set();
        var values = this.values();
        for(var i = 0; i < values.length;i++){
            if(!otherSet.has(values[i])){
                differenceSet.add(values[i]);
            }
        }
        return differenceSet;
    };
    //4.子集  验证一个集合是不是另一个集合的子集
    this.subset = function(otherSet) {
        if(this.size()>otherSet.size()){
            return false;
        }else{
            var values = this.values();
            for(var i = 0; i < values.length;i++){
                if(!otherSet.has(values[i])){
                    return false;
                }
            }
        }
        return true;
    };
}