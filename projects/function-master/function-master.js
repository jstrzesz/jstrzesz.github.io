
function objectValues(data){
    var newArray = [];
    for (var key in data){
        newArray.push(data[key]);
    } return newArray;
};

function keysToString(data) {
   var myKeys = Object.keys(data);
   return myKeys.join(" ");
};

function valuesToString(data){
    var array = [];
    for (var key in data){
        if (typeof (data[key]) === 'string'){
        array.push(data[key]);
    } }
    return array.join(" ");
};

function arrayOrObject(input){
        if ((Array.isArray(input))  && (!(input === null)) && (!(input instanceof Date))){
            return 'array';
        } else if ((!(Array.isArray(input))) && (!(input === null)) && (!(input instanceof Date))){
            return 'object';
        }
}

function capitalizeWord(input){
    var newString = input.split("");
    for  (var i = 0; i <= input.length; i++){
        newString = input.charAt(0).toUpperCase() + input.substring(1);
    } return newString;

}

function capitalizeAllWords(input){
    var newString = input.split(" ");
    for (var i = 0; i <= newString.length - 1; i++){
        newString[i] = newString[i].charAt(0).toUpperCase() + newString[i].substring(1);
    } return newString.join(" ");
}

function welcomeMessage(input){
    return "Welcome " + capitalizeWord(input["name"]) + "!";
}

function profileInfo(input){
    return capitalizeWord(input["name"]) + " is a " + capitalizeWord(input["species"]);
} 

function maybeNoises(input){
    if (input.noises && input.noises.length){
        return input.noises.join(" ");
    } else {
        return "there are no noises";
    }
}

function hasWord(data, word){
   return data.includes(word);
}

function addFriend(name, obj){
  obj.friends.push(name);
  return obj;
}

function isFriend(name, obj){
    if(obj.friends){
        var string = obj.friends.join(" ");
        return string.includes(name);
    } else {
        return false;
    }
}

function nonFriends(name, data){
    var array = [];
    for (var i = 0; i < data.length; i++){
     if (data[i]['name'] !== name && data[i]['friends'] && (!(data[i]['friends'].includes(name)))){
        array.push(data[i]['name']);
     }  
    }
    return array;
}

function updateObject(data, key, value){
    data[key] = value;
    return data;
}

function removeProperties(object, data){
    for (var i = 0; i < data.length; i++){
        for (var key in object){
            if (data[i] === key){
                delete object[key];
            }
        }
    } return object;
}
 
function dedup(data){
    var newArray = [];
    for (var i = 0; i < data.length; i++){
        if (!(newArray.includes(data[i]))){
        newArray.push(data[i]);
    }
    }
    return newArray;
}