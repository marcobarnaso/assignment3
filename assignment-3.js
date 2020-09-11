const sellComputer = ({ quantity }, sold) => {
    try {
        if (quantity < sold) {
            throw new Error(`There is not enough stock, current stock is ${quantity}`)
        } else if(sold < 1) {
            throw new Error('Quantity sold must be 1 or greater')
        }
        quantity -= sold
        console.log(`Computers sold: ${sold}, stock remaining: ${quantity}`)

    } catch (error) {
        console.log(error.message)
    }

}

const getDetails = ({ vendor, model, price }) => {
    console.log(`${vendor} ${model}, for price: ${price}`)
}

const performanceTest = async ({ performanceTests }, date) => {
    const passed = Math.random() < 0.7;

    performanceTests.push(`Date: ${date}, Passed: ${passed}`)

    console.log('Performing test...')

    setTimeout(() => {
        console.log('Test Finished')
        console.log(performanceTests)
    }, 2000)
}

module.exports = {
    sellComputer,
    getDetails,
    performanceTest
}

