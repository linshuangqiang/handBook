/**
 * Created by linshuangqiang on 2017/11/16.
 */
function LinkedList(){
    //node 辅助类，表示链表中的每一节点。
    var Node = function(element){
        this.element = element;
        this.next = null;
    };
    //存储链表的长度length  和链表的头部  head
    var length = 0,
        head = null;
    //向链表的尾部添加新项
    this.append = function(element){
        var node = new Node(element),
            current;
        if(head === null){
            head = node;
        }else{
            current = head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
        length++;
    };
    //移除链表中的指定位置的 一项
    this.removeAt = function(position){
        if(position > -1 && position < length){
            var current = head,
                previous,
                index = -1;
            if(position === 0){
                head = current.next;
            }else{
                //移除指定项， 因此需要找到前一项，然后前一项的next = 当前项的next
                while(++index < position){
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            length--;
            return current.element;
        }else{
            return null;
        }
    };
    //在指定的位置添加一项
    this.insert = function(position,element){
        if(position >= 0 && position <= length){
            var node = new Node(element),
                current = head,
                index = 0,
                previous = null;
            if(position === 0){
                node.next = current;
                head = node;
            }else{
                //获取指定位置，前以位置的next = node node.next = 下一个位置
                while(index++ < position){
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }
            length++;
            return true;
        }else{
            return false;
        }
    };
    //返回链表，得到的是一个数组
    this.toString = function(){
        var current = head,
            arr = [];
        while(current){
            arr.push(current.element);
            current = current.next;
        }
        return arr;
    };
    //获取指定位置的元素
    this.indexOf = function(element){
        var current = head,
            index = 0;
        while(current){
            if(element === current.element){
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    };
    //移除指定的元素
    this.remove = function(element){
        var index = this.indexOf(element);
        return this.removeAt(index);
    };
    //判断是否为空链表
    this.isEmpty = function(){
        return length === 0;
    };
    //得到链表的长度
    this.size = function(){
        return length;
    };
    //得到链表的表头
    this.getHead = function(){
        return head;
    };
}