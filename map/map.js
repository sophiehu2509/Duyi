//Map
//1.不重复
//2.字符串 对象 NaN null [] function(){} number
//3.set get has delete clear
function oMap(){
    this.bucketLenght = 8;
    this.init();
}
oMap.prototype.init = function(){
    this.bucket = new Array(this.bucketLenght);
    for (var i = 0; i<this.bucketLenght; i++){
        this.bucket[i] = {
            type:'bucket_' + i,
            next:null
        }
    }
}

oMap.prototype.makeHash = function(key){
    var hash = 0;
  if(typeof key !== "string") {
      if(Object.is(key, NaN)){
          hash = 0;
      }
    else if(typeof key == 'number'){
        hash = key;
    }
    else if(typeof key == 'boolean'){
        //2中方法转换都可以
        //hash = +key;
        hash = Number(key);
    }else if(typeof key == 'object'){
        hash = 1;
    }else{
        //undefined function(){}
        hash = 2;
    }
  }else{
    for(let i = 0; i<3; i++){
        hash += key[i]? key[i].charCodeAt(0):0;
        
    }
  }
  return hash % 8;
}

oMap.prototype.set = function(key, value){
    let hash = this.makeHash(key);
    let oTempBunket = this.bucket[hash];
    while(oTempBunket.next){
        if(oTempBunket.next.key == key ){
            oTempBunket.next.value = value;
            return;
        }else{
            oTempBunket = oTempBunket.next;
        }
        
    }
    oTempBunket.next = {
        key:key,
        value:value,
        next:null
    }
}

oMap.prototype.get = function(key){
    let hash = this.makeHash(key);
    let oTempBunket = this.bucket[hash];
    while(oTempBunket){
        // console.log(oTempBunket.key);
        // console.log(key);
        if(oTempBunket.key == key){
           
            return oTempBunket.value;
        }else{
            oTempBunket = oTempBunket.next
        }
            
    }
    return undefined;
}

oMap.prototype.delete = function(key){
    let hash = this.makeHash(key);
    let oTempBunket = this.bucket[hash];
    while(oTempBunket){
        if(oTempBunket.next.key == key){
            if( oTempBunket.next.next){
                oTempBunket.next = oTempBunket.next.next;
            }else{
                oTempBunket.next = null;
            }
            return true;
        }else{
            oTempBunket = oTempBunket.next;
        }
    }
    return false;
}

oMap.prototype.has = function(key){
    let hash = this.makeHash(key);
    let oTempBunket = this.bucket[hash];
    while(oTempBunket){
        if(oTempBunket.key == key){
            return true;
        }else{
            oTempBunket = oTempBunket.next;
        }
    }
    return false;
}

oMap.prototype.clear = function(){
    this.init();
}

let oMp = new oMap();
var obj1 ={

}


oMp.set('name', 'cy');
oMp.set(obj1, '++');
oMp.set(s, true);
// oMp.set({}, '---');