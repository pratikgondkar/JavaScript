const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce((acc, currval)  => {
    return acc + currval
},0)

console.log(myTotal);

const shoppingCard = [
    {
        itemName: "js Course",
        price: 999
    },
    {
        itemName: "py Course",
        price: 2999
    },
    {
        itemName: "mobile dev Course",
        price: 5999
    },
    {
        itemName: "data science Course",
        price: 12999
    },
]

const priceToPay = shoppingCard.reduce((acc, item) => acc + item.price,0)
console.log(priceToPay);
