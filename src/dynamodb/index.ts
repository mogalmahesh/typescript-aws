import { createTable, deleteTable, describeTable, listTables, listTablesWithPagination, DYNAMODB_KEY, DYNAMODB_KEY_DATA_TYPE } from "./table/table.js"

export default async function dynamoOperations() {
  const tableName = "orders_1"
  const hashKey: DYNAMODB_KEY = {
    name: "id",
    dataType: DYNAMODB_KEY_DATA_TYPE.STRING,
  }
  const rangeKey = {
    name: "date",
    dataType: DYNAMODB_KEY_DATA_TYPE.STRING,
  }
  await createTable(tableName, hashKey, rangeKey)
  await describeTable(tableName)
  await listTables()
  await listTablesWithPagination()
  await deleteTable(tableName)
}