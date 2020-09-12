const chalk = require('chalk')
const { sellComputer } = require('./assignment-3')
const { getDetails } = require('./assignment-3')
const { performanceTest } = require('./assignment-3')
const { performanceTestPromise } = require('./assignment-3')
const { performanceTestAsyncAwait } = require('./assignment-3')

const computer = {
    vendor: 'Asus',
    model: 'VivoBook',
    price: 1200,
    quantity: '15',
    performanceTests: []
}

const computer2 = {
    vendor: 'Macbook',
    model: 'Pro',
    price: 2000,
    quantity: '9',
    performanceTests: []
}

const computer3 = {
    vendor: 'Dell',
    model: 'Optiplex',
    price: 800,
    quantity: '6',
    performanceTests: []
}

sellComputer(computer, 1)

getDetails(computer)

performanceTest(computer, '09/10/2020', (error, { pt, tm }) => {

    console.log('callback')
    console.log(chalk.green.inverse(pt[0]))
    console.log(chalk.yellow.inverse(tm))

})

performanceTestPromise(computer2, '09/11/2020')
    .then(result => {

        if (!result) {
            throw new Error('Something went wrong')
        }

        console.log('promise')
        console.log(chalk.green.inverse(result.pt[0]))
        console.log(chalk.yellow.inverse(result.tm))

    }).catch((error) => console.log(error.message))

performanceTestAsyncAwait(computer3, '09/12/2020')
    .then(data => {

        if(!data) {
            throw new Error('Something went wrong')
        }

        console.log('async')
        console.log(chalk.green.inverse(data.pt[0]))
        console.log(chalk.yellow.inverse(data.tm))

    }).catch((e) => console.log(e.message))
