const program=require('commander')
const chalk=require('chalk')
const clipboardy=require('clipboardy')
const createPassword=require('./utils/createPassword')
const savePassword=require('./utils/savePassword')
program.version('1.0.0').description('Simple password generator')

program
.option('-l,--length <number>','Length of the password required','8')
.option('-s,--save','Save the password to password.txt')
.option('-nn,--no-numbers','Get a password generated without any numbers in it')
.option('-ns,--no-symbols','Get a password generated without any symbols in it')
.parse()

// console.log(program.opts())
const{length,numbers,symbols,save}=program.opts()

//Saving the password

const generatedPassword=createPassword(length,numbers,symbols)

if(save){
    savePassword(generatedPassword)
    }

clipboardy.writeSync(generatedPassword)
console.log(chalk.blueBright('Your generated password is ')+chalk.bold(generatedPassword))
console.log(chalk.greenBright('The generated password has been copied to the clipboard'))


