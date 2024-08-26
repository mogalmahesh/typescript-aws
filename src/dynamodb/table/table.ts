import { printToConsole } from "../../utils.js"
import { dynamoClient } from "../DynamoClient.js"
import {
  CreateTableCommand,
  CreateTableCommandInput,
  DeleteTableCommand,
  DeleteTableCommandInput,
  DescribeTableCommand,
  DescribeTableCommandInput,
  ListTablesCommand,
  ListTablesCommandInput,
} from "@aws-sdk/client-dynamodb"

export async function createTable(tableName: string) {
  const input: CreateTableCommandInput = {
    TableName: tableName,
    KeySchema: [
      {
        AttributeName: "id",
        KeyType: "HASH",
      },
      {
        AttributeName: "date",
        KeyType: "RANGE",
      },
    ],
    AttributeDefinitions: [
      {
        AttributeName: "id",
        AttributeType: "S",
      },
      {
        AttributeName: "date",
        AttributeType: "S",
      },
    ],
    BillingMode: "PAY_PER_REQUEST",
    DeletionProtectionEnabled: false,
  }

  const command = new CreateTableCommand(input)
  try {
    const response = await dynamoClient.send(command)
    printToConsole({ msg: `Table ${tableName} created successfully` })
    return response
  } catch (err) {
    const error = err as Error
    printToConsole({ error: `Failed to create table ${tableName}: ${error.message}` })
    throw error // Re-throw the error for the caller to handle if needed
  }
}

export async function describeTable(tableName: string) {
  const input: DescribeTableCommandInput = {
    TableName: tableName,
  }

  const command = new DescribeTableCommand(input)
  try {
    const response = await dynamoClient.send(command)
    printToConsole({ tableDetails: response.Table! })
    return response.Table
  } catch (err) {
    const error = err as Error
    printToConsole({ error: `Failed to describe table ${tableName}: ${error.message}` })
    throw error // Re-throw the error for the caller to handle if needed
  }
}

export async function listTables() {
  const input: ListTablesCommandInput = {}
  const command = new ListTablesCommand(input)

  const response = await dynamoClient.send(command)
  printToConsole({ tables: response.TableNames! })

}

export async function listTablesWithPagination() {
  const input: ListTablesCommandInput = {
    Limit: 2,
  }

  const command = new ListTablesCommand(input)
  const response = await dynamoClient.send(command)
  printToConsole({ tables: response.TableNames! })

  const lastEvaluatedTableName = response.LastEvaluatedTableName

  const input2: ListTablesCommandInput = {
    Limit: 2,
    ExclusiveStartTableName: lastEvaluatedTableName,
  }

  const command2 = new ListTablesCommand(input2)
  const response2 = await dynamoClient.send(command2)
  printToConsole({ tables: response2.TableNames! })
}


export async function deleteTable(tableName: string) {
  const input: DeleteTableCommandInput = {
    TableName: tableName,
  }

  const command = new DeleteTableCommand(input)

  try {
    const response = await dynamoClient.send(command)
    printToConsole({ msg: `${tableName} deleted` })
    return response
  } catch (err) {
    const error = err as Error
    printToConsole({ error: `Failed to delete table ${tableName}: ${error.message}` })
    throw error // Re-throw the error for the caller to handle if needed
  }
}
