let provider = new NumberProvider()

function positiveAction(number) {
    console.log('got a positive random number >>>', number);
}

function negativeAction(number) {
    console.log('got a negative random number >>>', number);
}

provider.whenPositive(positiveAction)
provider.whenNegative(negativeAction)