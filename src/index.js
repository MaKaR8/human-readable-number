module.exports = function toReadable(number) {
    let dictionary = [
        `zero`,
        `one`,
        `two`,
        `three`,
        `four`,
        `five`,
        `six`,
        `seven`,
        `eight`,
        `nine`,
        `ten`,
        `eleven`,
        `twelve`,
        `thirteen`,
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen',
        `twenty`,
        `thirty`,
        `teen`,
        `ty`,
        `hundred`
    ];

    if (number <= 20) {
        return dictionary[number];
    } else if (number > 20 && number < 30) {
        let secondNumber = number % 10;
        return `${dictionary[20]} ${dictionary[secondNumber]}`;
    } else if (number > 29 && number < 40) {
        if (number == 30) {
            return `${dictionary[21]}`;
        } else {
            let secondNumber = number % 10;
            return `${dictionary[21]} ${dictionary[secondNumber]}`;
        }
    } else if (number >= 39 && number < 100) {
        let firstNumber = Math.floor(number / 10);
        let secondNumber = number % 10;

        if (firstNumber == 4) {
            if (secondNumber == 0) {
                return `forty`;
            } else {
                return `forty ${dictionary[secondNumber]}`;
            }

        } 

        else if (firstNumber == 5) {
            if (secondNumber == 0) {
                return `fifty`;
            } else {
                return `fifty ${dictionary[secondNumber]}`;
            }

        }
        
        else if (firstNumber == 8) {
            if (secondNumber == 0) {
                return `eighty`;
            } else {
                return `eighty ${dictionary[secondNumber]}`;
            }

        }    else {
            if (secondNumber == 0) {
                return `${dictionary[firstNumber]}${dictionary[23]}`;
            } else {
                return `${dictionary[firstNumber]}${dictionary[23]} ${dictionary[secondNumber]}`;
            }

        }

    } else if (number >= 100) {
        // let number = 101;
        let zeroNumber = Math.floor(number / 100);
        // let arr = number.toString().split(``);
        // arr.shift();
        // console.log(arr);
        let remainder = number - (zeroNumber*100);
        // parseInt(remainder);
        console.log(remainder);
        if (remainder == 0) {
            return `${dictionary[zeroNumber]} ${dictionary[24]}`;
        } else if (remainder <= 20) {
            return `${dictionary[zeroNumber]} ${dictionary[24]} ${dictionary[remainder]}`;
        } else if (remainder > 20 && remainder < 30) {
            let secondNumber = remainder % 10;
            return `${dictionary[zeroNumber]} ${dictionary[24]} ${dictionary[20]} ${dictionary[secondNumber]}`;
        } else if (remainder > 29 && remainder < 40) {
            if (remainder == 30) {
                return `${dictionary[zeroNumber]} ${dictionary[24]} ${dictionary[21]}`;
            } else {
                let secondNumber = remainder % 10;
                return `${dictionary[zeroNumber]} ${dictionary[24]} ${dictionary[21]} ${dictionary[secondNumber]}`;
            }
        } else if (remainder >= 39 && remainder < 100) {
            let firstNumber = Math.floor(remainder / 10);
            let secondNumber = remainder % 10;
    
            if (firstNumber == 4) {
                if (secondNumber == 0) {
                    return `${dictionary[zeroNumber]} ${dictionary[24]} forty`;
                } else {
                    return `${dictionary[zeroNumber]} ${dictionary[24]} forty ${dictionary[secondNumber]}`;
                }
    
            } 
    
            else if (firstNumber == 5) {
                if (secondNumber == 0) {
                    return `${dictionary[zeroNumber]} ${dictionary[24]} fifty`;
                } else {
                    return `${dictionary[zeroNumber]} ${dictionary[24]} fifty ${dictionary[secondNumber]}`;
                }
    
            }
            
            else if (firstNumber == 8) {
                if (secondNumber == 0) {
                    return `${dictionary[zeroNumber]} ${dictionary[24]} eighty`;
                } else {
                    return `${dictionary[zeroNumber]} ${dictionary[24]} eighty ${dictionary[secondNumber]}`;
                }
    
            }    else {
                if (secondNumber == 0) {
                    return `${dictionary[zeroNumber]} ${dictionary[24]} ${dictionary[firstNumber]}${dictionary[23]}`;
                } else {
                    return `${dictionary[zeroNumber]} ${dictionary[24]} ${dictionary[firstNumber]}${dictionary[23]} ${dictionary[secondNumber]}`;
                }
    
            }
    }
}};