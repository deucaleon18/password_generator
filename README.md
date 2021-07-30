# <center>A simple password generator on the command line interface:

---
# **Requirements:**

### First clone the repository:
```
git clone https://github.com/deucaleon18/password_generator.git
```
### Then install all the required npm packages:
```
npm install
```
### Run the following command in the terminal to get help regarding the commands for generating the password
```
node app -h
```
### Some basic commands are listed below:

#### To save the password to passwords.txt:
```
node app -s 
```
#### To generate password without numbers:
```
node app -nn
```
#### To generate password without symbols:
```
node app -ns 
```
#### To specify the length of the password:
```
node app -l <length>
```
#### All of these commands can be used simultaneously in a single command
```
node app -l 20 -nn -ns -s
```

**The generated password will be copied to the clipboard by default.**