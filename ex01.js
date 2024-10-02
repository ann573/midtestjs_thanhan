function taxiFare(distance)
{
    let total = 0;
    if (typeof distance !== "number" || isNaN(distance) || distance < 0)
    {
        return "Invalid"
    }

    if (distance < 2)
    {
        total = distance * 5000;
    }
    else if (distance <= 30 )
    {
        total = 10000 + (distance - 2)*4000
    }
    else 
    {
        total = 122000 + (distance - 30) * 3000
    }
    return `Tổng tiền phải trả là ${total.toLocaleString()} đ`
}

console.log(taxiFare())