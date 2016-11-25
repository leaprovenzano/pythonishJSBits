

//basic and kind of crappy python style formatting
//could be improved
String.prototype.format = function(){
   var str  = this;
   for (let i=0; i < arguments.length; i++){
        str = str.replace('{' + i + '}', arguments[i]);}
   return str;
};

const isUpperCase = c => c.toUpperCase() == c

const isLowerCase = c => c.toLowerCase() == c

