Hi
i pushed the .env file just because this is not a sensible project
the app uses a fake login
{user: 'user', password: 'password'}

## Guide to run the app

run both this commands
1 - yarn
2 - yarn tsc
3 -yarn start

---

## Guide to use the app

1 - go to /playground
2 -run generateApiKey mutation with this data (user: 'user'; password: 'password')
3 -copy token
4 -pass header like this
{
"token" : "Bearer <your_token>"
}

run query listCommits
run query sayHello
