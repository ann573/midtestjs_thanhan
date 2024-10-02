function checkNumber(number)
{
    if (typeof number !== "number" || isNaN(number))
    {
        return "Invalid"
    }

    let devide3 = number % 3;
    let devide5 = number % 5;
    
    if (devide3 === 0 && devide5 === 0)
    {
        return "Chia hết cho cả 3 số: 3, 5 và 15"
    }
    else if (devide3 === 0 || devide5 === 0)
    {
        return devide3 === 0 ? "Chia hết cho 3" : "Chia hết cho 5";
    }
    else 
    {
        return "Không chia hết"
    }
}

console.log(checkNumber(15)); // "Chia hết cho cả 3 số: 3, 5 và 15"
console.log(checkNumber(9)); // "Chia hết cho 3"
console.log(checkNumber(10)); // "Chia hết cho 5"
console.log("15"); // "Invalid"
console.log(11); // "Không chia hết"
