## Neo Auth WorkFlow:
### 1- setup Neo Auth directory path and get user data for the first time that user install the app:
+ introduce Neo AUth in few lines
+ grant file and camera permissions
+ setup directory path
+ if there was files from previous installation, read origins

### 2- scan or read qr code data from camera or clipboard
### 3- determin the required operation is register or login
### 4- register operatoin: 
+ grant user permission to send required fields to the server
+ generate key pairs
+ send required fields and pub key to server and get registration encrypted token and 2fa key
+ send registration decrypted token and verify 2fa key
+ if anything was ok then add website to registered origins and save 2fa key and pub and private keys
+ send session_id and show registration successfull , you are logged in now

### 5- login operations:
+ send session_id and user_id and get encrypted token
+ send decrypted token and 2fa token and show successfull login message
