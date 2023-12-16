# Neo Auth WorkFlow:


## 1- startup operations:
+ if the app initiations are not done yet:
  * init operations
+ else:
  * run routine work flow


## 2- welcome operations:
+ introduce Neo AUth in few lines
+ explain for user and grant required permission permission

+ if there was files from previous installation:
    * explain and get permissions
    * read origins and user data
+ else:
    * create app directory
    * save initialized = true in local storage
    * get user data


## 3- routine operations:
### 3.1- check app premissions
### 3.2- scan or read qr code data from camera or clipboard
### 3.3- determin the required operation is register or login

+ register operatoin: 
  * grant user permission to send required fields to the server
  * generate key pairs
  * send required fields and pub key to server and get registration encrypted token and 2fa key
  * send registration decrypted token and verify 2fa key
  * if anything was ok then add website to registered origins and save 2fa key and pub and private keys
  * send session id and show registration successfull , you are logged in now

+ login operations:
  * send session_id and user_id and get encrypted token
  * send decrypted token and 2fa token and show successfull login message
 

