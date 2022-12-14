## New Files Added
.gitignore

app/common/environment.ts  - Files to retrieve environemnt variable, api credentials etc

## Changed Files
app/bootstrap.ts  - 1. node cluster is used to take advantage of multi-core systems for better application performance
                    2. dotenv is used to loads environment variables from .env file

app/controller/networks.ts - Social Provider is initialzed once then passed around among node routes

app/controller/routes/order.ts - Promise.all is used to group all async functions

app/controller/social/facebook.ts - Environment variable is used instead of putting API credential public in the code

app/controller/social/instagram.ts - Environment variable is used instead of putting API credential public in the code

app/controller/social/network.ts - Fix one wrong parameter name

app/controller/social/twitter.ts - Environment variable is used instead of putting API credential public in the code

app/model/user.ts - password is encrypted first before being passed around

package-lock.json

package.json - dotenv npm package is added
