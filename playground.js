const { sellComputer } = require('./assignment-3')
const { getDetails } = require('./assignment-3')
const { performanceTest } = require('./assignment-3')

const computer = {
    vendor: 'Asus',
    model: 'VivoBook',
    price: 1200,
    quantity: '15',
    performanceTests: []
}

sellComputer(computer, 1)

getDetails(computer)

performanceTest(computer, '09/10/2020')
