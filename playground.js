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

sellComputer(computer, 1)

getDetails(computer)

// performanceTest(computer, '09/10/2020', (error, {performanceTests, testMessage}) => {
//     console.log(chalk.green.inverse(performanceTests[0]))
//     console.log(chalk.yellow.inverse(testMessage))
// })


// performanceTestPromise(computer, '09/10/2020')
// .then(data => {
//     if(!data) {
//         throw new Error('Something went wrong')
//     }

//     console.log(chalk.green.inverse(data.pt[0]))
//     console.log(chalk.yellow.inverse(data.tm))
// }).catch((error) => console.log(error.message))

performanceTestAsyncAwait(computer, '09/11/2020')
.then(data => {
    console.log(chalk.green.inverse(data.pt[0]))
    console.log(chalk.yellow.inverse(data.tm))
}).catch((e) => {
    console.log(e)
})


