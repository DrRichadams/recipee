import { openDatabase } from "expo-sqlite";

const db = openDatabase({
    name: "recipes"
})

const createTables = () => {
    db.transaction(txn => {
        txn.executeSql(
            `CREATE TABLE IF NOT EXISTS food_recipes (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHA(20))`,
            [],
            (sqlTxn, res) => {
                console.log("Table created successfully")
            },
            (error) => {
                console.log("There was an error creating table " + error.message)
            },
        )
    })
}