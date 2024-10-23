import { Client, Account } from 'appwrite';

const client = new Client();
const account = new Account(client);

// Replace with your Appwrite endpoint and project ID
client
    .setEndpoint(process.env.REACT_APP_APPWRITE_ENDPOINT)     // e.g., 'http://localhost/v1' or 'https://cloud.appwrite.io/v1'
    .setProject(process.env.REACT_APP_APPWRITE_PROJECT_ID);

// Export both Client and Account directly
export { client, account };
