import dotenv from "dotenv"
import dynamoOperations from "./dynamodb/index.js"
// Set up env variables for AWS
// AWS_DEFAULT_REGION=SOME_VALUE
// AWS_ACCESS_KEY_ID=your_access_key_id
// AWS_SECRET_ACCESS_KEY=your_secret_access_key
// or
// AWS_PROFILE=SOME_VALUE(if using profiles)
dotenv.config()

await dynamoOperations()