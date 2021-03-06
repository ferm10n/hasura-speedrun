import { GraphQLClient } from 'graphql-request';
import {
    getSdk,
} from './gql-db';

const client = new GraphQLClient('http://localhost:8080/v1/graphql', {
    headers: {
        'x-hasura-admin-secret': 'adminsecret',
    },
});
const sdk = getSdk(client);

async function main () {
    const { orders } = await sdk.MyQuery();
    console.log(orders);
    setTimeout(main, 5000);
}

console.log('checking orders every 5 seconds');
setTimeout(main, 5000);
