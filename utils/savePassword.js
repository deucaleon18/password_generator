const fs=require('fs')
const path=require('path')
const os=require('os')
const chalk=require('chalk')



const savePassword=(password)=>{

//(fs.open)Set the file mode at the root directory for the file password.txt 
// a added because we want to append the passwords to passwords.txt and not replace it 
//then fs.write adds the password to the file passwords.txt 
//then finally fs.close closes the fs module 



fs.open(path.join(__dirname,'../','passwords.txt'),'a',666,(e,id)=>{

 fs.write(id,password+os.EOL,null,'utf-8',()=>{
     fs.close(id,()=>{
        console.log(chalk.red('The generated password has been successfully saved to passwords.txt'))
   })
 })

})

}


module.exports=savePassword