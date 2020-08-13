export const getPoints = (num) => {
    const amount = parseFloat(num)
    if(amount <= 50) {
        return 0
    } else if (amount > 50 && amount <= 100) {
        return amount - 50
    } else {
        return (amount - 100) * 2 + (amount - 50)
    }
}

export const getPointsByMonth = (purchase, month) => {
    const monthStr = month.toString()
    console.log(monthStr)
    const filteredPurchase = purchase.filter((item) => item.date.split('/')[0] === monthStr)
    console.log(filteredPurchase)
    const total = filteredPurchase.reduce((acc, cur) => {
        return acc + getPoints(cur.price)
    }, 0)

    return total
}