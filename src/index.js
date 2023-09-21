module.exports = function toReadable (number) {
    let ones = {"0": "zero", "1": "one", "2": "two", "3": "three", "4": "four", 
                "5": "five", "6": "six", "7": "seven", "8": "eight", "9": "nine"};
    
    let tenToNineteen = {"10": "ten", "11": "eleven", "12": "twelve", "13": "thirteen", "14": "fourteen", 
                         "15": "fifteen", "16": "sixteen", "17": "seventeen", "18": "eighteen", "19": "nineteen"};
                         
    let tens = {"2": "twenty", "3": "thirty", "4": "forty", "5": "fifty", 
                "6": "sixty", "7": "seventy", "8": "eighty", "9": "ninety"};
    
    let str = String(number);
    
    function convertTwoDigitNumber(s) {
        if ((s[0] == "0") && (s[1] != "0")) {
            return ones[s[1]];
        } else if (s[0] == "1") {
            return tenToNineteen[s];
        } else if ((s[0] != "0") && (s[1] == "0")){
            return tens[s[0]];
        } else {
            return tens[s[0]] + " " + ones[s[1]];
        }
    }

    if (str.length == 1) {
        return ones[str];
    } else if (str.length == 2) {
        return convertTwoDigitNumber(str);
    } else if (str.length == 3) {
        if ((str[1] == "0") && (str[2] == "0")) {
            return ones[str[0]] + " hundred";
        } else {
            return ones[str[0]] + " hundred " + convertTwoDigitNumber(str.at(-2) + str.at(-1));
        }
    }
}
