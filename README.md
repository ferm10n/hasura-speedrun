# Hasura speedrun

flexing on behalf of hasura, postgres, graphql and codegen 😀 also trying to see how quickly I can get a new db+hasura+app setup going

## DB setup
- start pg and hasura `docker-compose up`
- get the [hasura cli](https://hasura.io/docs/latest/graphql/core/hasura-cli/install-hasura-cli.html#install-hasura-cli) `npm i -g hasura-cli`
- from the hasura dir, apply things
    - `hasura migrate apply`
    - `hasura metadata apply`

## Service setup
- init from the service folder `yarn`
- autogenerate things for the service `yarn codegen`
- start the service `yarn start`

## Making changes
- start the hasura console in the hasura dir `hasura console`
    - changes made here will be persisted in the hasura dir
    - depending on how your connected, you might need to port forward 8080, 9695, 9693
    - visit http://localhost:9695/console/
- If you goof up, you can clean slate the whole thing: `docker-compose down -v`

## Notes

I created the hasura dir with `hasura init`, and then created the migrations and metadata using the hasura console web app.

