const fibonacci = function(num) {
    let numNumber = +num;
    if (numNumber < 0) {
        return "OOPS";
    }
    else if (numNumber == 0){
        return 0;
    }
    else {
        let firstFibo = 1;
        let secondFibo = 1;
        for (let i = 3; i <= numNumber; i++) {
            let currentFibo = firstFibo + secondFibo;
            firstFibo = secondFibo;
            secondFibo = currentFibo;
        }
        return secondFibo;
    } 
};

// еще две задачи
module.exports = fibonacci;
