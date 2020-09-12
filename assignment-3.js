const chalk = require("chalk")

const sellComputer = ({ quantity }, sold) => {
    try {
        if (quantity < sold) {
            throw new Error(chalk.red.inverse(`There is not enough stock, current stock is ${quantity}`))
        } else if (sold < 1) {
            throw new Error(chalk.red.inverse('Quantity sold must be 1 or greater'))
        }
        quantity -= sold
        console.log(chalk.blue.inverse(`Computers sold: ${sold}, stock remaining: ${quantity}`))

    } catch (error) {
        console.log(error.message)
    }

}

const getDetails = ({ vendor, model, price }) => {
    console.log(chalk.blue.inverse(`${vendor} ${model}, for price: ${price}`))
}

const performanceTest = ({ performanceTests }, date, callback) => {
    console.log(chalk.yellow.inverse('Performing test...'))

    setTimeout(() => {
        const testResult = Math.random() < 0.7;
        performanceTests.push(`Date: ${date}, Passed: ${testResult}`)
        const testMessage = 'Test finished'
        callback(undefined, { performanceTests, testMessage })

    }, 1000)
}

const performanceTestPromise = ({ performanceTests }, date) => {
    console.log(chalk.yellow.inverse('Performing test...'))

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const testResult = Math.random() < 0.7;
            performanceTests.push(`Date: ${date}, Passed: ${testResult}`)
            const testMessage = 'Test finished'
            resolve({ pt: performanceTests, tm: testMessage })
        }, 2000)
    })
}

async function wait(ms) {
    
}

const performanceTestAsyncAwait = async ({ performanceTests }, date) => {
    console.log(chalk.yellow.inverse('Performing test...'))
    
    await new Promise(resolve => {
        setTimeout(resolve, 1000)
    })
        const testResult = Math.random() < 0.7;
        performanceTests.push(`Date: ${date}, Passed: ${testResult}`)
        const testMessage = 'Test finished'
        return ({ pt: performanceTests, tm: testMessage })
    }

module.exports = {
    sellComputer,
    getDetails,
    performanceTest,
    performanceTestPromise,
    performanceTestAsyncAwait
}

