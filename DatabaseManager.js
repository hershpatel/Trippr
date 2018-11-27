'use strict'
var mongodb = require("mongodb");

class DatabaseManager {

	static async init() {
		let client = await mongodb.MongoClient.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/test");
		this.db = client.db();
	}

	static async find(collection, query) {
		return await this.db.collection(collection).find(query).toArray();
	}

	static async insertOne(collection, query) {
		return await this.db.collection(collection).insertOne(query);
	}

};

module.exports = DatabaseManager;