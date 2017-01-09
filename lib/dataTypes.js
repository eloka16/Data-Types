'use strict'

module.exports = {

    dataTypes: function(data) {
        if (typeof (data) === "string") {
            return data.length;
        }else if (data === null || data === undefined) { 
            return "no value";
        }else if (data === true) {
            return true;
        }else if (data === false){
            return false;
        }else if (Array.isArray(data)){
            return data[2];
        }else if (Array.isArray(data) && data[2] === undefined) {
            return undefined;
        }else if (data < 100){
            return "less than 100";
        }else if (data > 100){
            return "more than 100";
        }else if (data === 100){
            return "equal to 100";
        }else {
            return data(true);
        }
    }
}