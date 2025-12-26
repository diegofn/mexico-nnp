# mexico-nnp
Webservice to query class of service (fixed or mobile) based on the Mexico National Numbering for a CCaaS solutions like Webex Calling 

## Features
- Download the Mexican PNM from: https://sns.ift.org.mx:8081/sns-frontend/planes-numeracion/descarga-publica.xhtml
- Query a DNIS number and get the PNM information zone, class of service, etc. 

## Compile and install

1. Update the Ubuntu Distro
```Shell
$ sudo apt update
$ sudo apt upgrade
```

2. Install the dependencies
```Shell
$ npm install
```

3. Configure the .env
```Shell
PORT = 3000
MEXICAN_PNM_URL = https://sns.ift.org.mx:8081/sns-frontend/planes-numeracion/descarga-publica.xhtml
```
