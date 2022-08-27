I pushed the .env file just because this is not a sensible project
the app uses a fake login
```bash
{user: 'user', password: 'password'}
```
## Guide to run the app

Run this commands

```bash
yarn

yarn tsc

yarn start
```
## Guide to use the app

1 - Go to /playground
<br/>2 - Run generateApiKey mutation with this data (user: 'user'; password: 'password')
<br/>3 - Copy token
<br/>4 - Pass header like this
```bash
{
"token" : "Bearer <your_token>"
}
```
Run query listCommits
<br/>Run query sayHello
