'use strict'
const DatabaseManager = require("./DatabaseManager.js");
const CONTACTS_COLLECTION = "contacts";

class ContactHandler {

	static async fetchContacts(req,res) {
		let docs = await DatabaseManager.find(CONTACTS_COLLECTION, {});
		res.status(200).json(docs);
		return;
	}

	static async insertContact(req,res) {
	    var newContact = req.body;
	    newContact.createDate = new Date();

	    let docs = await DatabaseManager.insertOne(CONTACTS_COLLECTION, newContact);
	    res.status(201).json(docs.ops[0]);
	    
	    return;
	}
};

module.exports = ContactHandler;