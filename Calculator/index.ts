import inquirer from "inquirer";

const answers = await inquirer.prompt([
    {
        name: 'firstNumber',
        message: 'Enter first num:',
        type: 'number',
    }, {
        name: 'secondNumber',
        message: 'Enter second num:',
        type: 'number',
    }, {
        name: 'operator',
        message: 'Select Operator:',
        type: 'list',
        choices: ['Add','Subtract','Multiply','Divide']
    }
])

console.log(answers)
let result: number
if(answers.operator === 'Add')
{
    //Addition function
     result = answers.firstNumber + answers.secondNumber
}

else if(answers.operator === 'Subtract')
{
    //Subtraction function
    result = answers.firstNumber - answers.secondNumber
}

else if(answers.operator === 'Multiply')
{
    //Multiply
    result = answers.firstNumber * answers.secondNumber
}

else 
{
    //Divide
    result = answers.firstNumber / answers.secondNumber
}

console.log(`Result is ${result}`)