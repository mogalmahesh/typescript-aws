import { createTable, deleteTable, describeTable, listTables, listTablesWithPagination } from "./table/table.js"

export default async function dynamoOperations() {
  const tableName = "orders_1"
  await createTable(tableName)
  await describeTable(tableName)
  await listTables()
  await listTablesWithPagination()
  await deleteTable(tableName)
}