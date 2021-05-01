# earnestbros_site

# environment setup:
1. Install Node:
    -https://nodejs.org/en/download/
2. Install Angular CLI tool
    -npm install -g @angular/cli
3. In some cases, because Windows sucks when it comes to development, you may need to enable running scripts.
    -https:/go.microsoft.com/fwlink/?LinkID=135170
        1. Run command in powershell: 
            -Get-ExecutionPolicy
        2. If it returns 'Restricted', then you may want to consider changing it to 'Unrestricted'
            -Set-ExecutionPolicy Unrestricted

# local env:
1. Change directories to earnestbros
2. Run Command 'npm install'. Node, Angular and CLI tool must already be installed.
3. Run Command 'npm run start' or 'ng serve' to run website locally.


# testing:
1. Run Command 'npm test' for unit testing.