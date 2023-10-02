//! Database Related Method

//! 1. db.help()
/* 
    Common db objects. Display method description.
    Text output listing common methods on the db object.
*/

use("NEW_DATABASE_NAME");
db.help();

//! 2. db.hostInfo()
/* 
    The db.hostInfo() function in MongoDB is used to retrieve information about the MongoDB server's host. This function returns a document with various details about the host machine and the MongoDB server instance running on it.
*/

use("NEW_DATABASE_NAME");
db.hostInfo();

//! 3. db.getName()
/* 
    Returns: the current database name.
*/

use("NEW_DATABASE_NAME");
db.getName();

//! 4. db.getMongo()
/* 
    Returns: The current database connection.
*/

use("NEW_DATABASE_NAME");
db.getMongo();

//! 5. db.currentOp()
/* 
   Returns a document that contains information on in-progress operations for the database instance.
*/

use("NEW_DATABASE_NAME");
db.currentOp();

//! 6. db.dropDatabase()
/* 
   Removes the current database, deleting the associated data files.
*/

use("NEW_DATABASE_NAME");
db.dropDatabase();

//! 7. db.dropDatabase()
/* 
   Removes the current database, deleting the associated data files.
*/

use("NEW_DATABASE_NAME");
db.dropDatabase();

//! 8. db.getCollectionInfos()
/* 
 Returns an array of documents with collection or view information
*/

use("NEW_DATABASE_NAME");
db.getCollectionInfos();

//! 9. db.getCollectionNames()
/* 
Returns an array containing the names of all collections and views in the current database.
*/

use("NEW_DATABASE_NAME");
db.getCollectionNames();

//! 10. db.getLastError()
/* 
Removed in MongoDB 5.1.
*/

use("NEW_DATABASE_NAME");
db.getLastError();

//! 11. db.getLastErrorObj()
/* 
Removed in MongoDB 5.1.
*/

use("NEW_DATABASE_NAME");
db.getLastErrorObj();

//! 12. db.isMaster()
/* 
Deprecated since version 4.2.10: Use db.hello() instead.
Returns a document that describes the role of the mongod instance.
*/

use("NEW_DATABASE_NAME");
db.isMaster();

//! 13. db.getReplicationInfo()
/* 
Returns a document with the status of the replica set, 
*/

use("NEW_DATABASE_NAME");
db.getReplicationInfo();

//! 14. db.listCommands()
/* 
Provides a list of all database commands.
*/

use("NEW_DATABASE_NAME");
db.listCommands();

//! 15. db.logout()
/* 
Deprecated since version 5.0.
Ends the current authentication session.
*/

use("NEW_DATABASE_NAME");
db.logout();

//! 16. db.PrintCollectionStats()
/* 
Returns statistics from every collection separated by three hyphen characters.
*/

use("NEW_DATABASE_NAME");
db.PrintCollectionStats();

//! 17. db.serverBuildInfo()
/* 
returns a document that contains an overview of parameters used to compile this mongod instance.
*/

use("NEW_DATABASE_NAME");
db.serverBuildInfo();

//! 18. db.serverStatus()
/* 
Returns a document that provides an overview of the database process's state.
*/

use("NEW_DATABASE_NAME");
db.serverStatus();

//! 19. db.shutdownServer()
/* 
Shuts down the current mongodb
*/

use("NEW_DATABASE_NAME");
db.shutdownServer();

//! 20. db.stats()
/* 
Returns statistics that reflect the use state of a single database.
*/

use("NEW_DATABASE_NAME");
db.stats();

//! 21. db.version()
/* 
Returns:	The version of the mongod or mongos instance.
*/

use("NEW_DATABASE_NAME");
db.version();

//! 22. db.createCollection()
/* 
Creates a new collection. 
*/

use("NEW_DATABASE_NAME");
db.createCollection("Demo");

//! 23. db.collection.drop()
/* 
Removes a collection or view from the database. 
*/

use("NEW_DATABASE_NAME");
db.Demo.drop();

//! 24. db.collection.insertOne()
/* 
Inserts a single document into a collection.
*/

use("NEW_DATABASE_NAME");
db.Demo.insertOne({
  name: "Amit",
  age: 28,
  gender: "Male",
});

//! 25. db.collection.insertMany()
/* 
Inserts multiple documents into a collection.
*/

use("NEW_DATABASE_NAME");
db.Demo.insertMany([
  {
    name: "Amit",
    age: 28,
    gender: "Male",
  },
  {
    name: "Raj",
    age: 28,
    gender: "Male",
  },
  {
    name: "Moha",
    age: 28,
    gender: "Male",
  },
]);

//! 26. db.collection.find()
/* 
The find() method returns a cursor to the results.
*/

use("NEW_DATABASE_NAME");
db.Demo.find();

//! 27. db.collection.findOne()
/* 
Returns one document that satisfies the specified query criteria on the collection.
*/

use("NEW_DATABASE_NAME");
db.Demo.findOne({
  name: "Amit",
});

//! 28. db.collection.findOne()
/* 
Returns one document that satisfies the specified query criteria on the collection.
*/

use("NEW_DATABASE_NAME");
db.Demo.findOne({
  name: "Amit",
});

//! 29. db.collection.find(query, projection, options) with projection
/* 
A cursor to the documents that match the query criteria. When the 
find() method "returns documents," the method is actually returning a cursor to the documents.
*/

use("NEW_DATABASE_NAME");
db.Demo.find(
  {},
  {
    name: 1,
  }
);

//! 30. db.collection.find(query, projection, options) with Comparison query operator
/* 
$eq: Equal To Operator
$It: Less Than Operator
$lte: Less Than or Equal To Operator
$gt: Greater Than Operator
$gte: Greater Than or Equal To Operator
$ne: Not Equal To Operator
$in: In Operator
$nin: Not In Operator
*/

use("NEW_DATABASE_NAME");
db.Demo.find({
  salary: { $eq: 3000 },
});

//! 31. db.collection.find(query, projection, options) with Element query operator
/* 

========== $type ==========
Double 1 "double"
String 2 "string"
Object 3"object"
Array 4 "array"
Binary data 5 "binData"
Objectid 7 "objectid"
Boolean 8 "bool"
Date 9 "date"
Null 10 "null"
Regular Expression 11 "regex"
32-bit integer 16 "int"
Timestamp 17 "timestamp"
64-bit integer 18 "long"
Decimal128 19 "decimal"

=========== $exist ===========

Return true/false

*/

// =========== $exist ===========
use("NEW_DATABASE_NAME");
db.Demo.find({
  salary: { $exists: true },
});

// ========== $type ==========
use("NEW_DATABASE_NAME");
db.Demo.find({
  salary: { $type: 16 },
});

//! 32. db.collection.find(query, projection, options) with Evaluation query operator
/* 
$expr = Allows use of aggregation expressions within the query language.
$jsonSchema = Validate documents against the given JSON Schema.
$mod = Performs a modulo operation on the value of a field and selects documents with a specified result.
$regex = Selects documents where values match a specified regular expression.
$text = Performs text search.
$where = Matches documents that satisfy a JavaScript expression.
*/

// ======== $expr ========
use("NEW_DATABASE_NAME");
db.Demo.find({
  $expr: {
    $eq: ["$salary", 3000],
  },
});

// ======== $mod  ========
use("NEW_DATABASE_NAME");
db.Demo.find({
  salary: { $mod: [3, 0] },
});

// ======== $regex  ========
use("NEW_DATABASE_NAME");
db.Demo.find({
  name: { $regex: "R" },
});

// ======== $where  ========
use("NEW_DATABASE_NAME");
db.Demo.find({
  $where: "this.salary > 4000",
});

//! 33. db.collection.find().sort() query operator
/* 
Specifies the order in which the query returns matching documents.
*/

// Ascending
use("NEW_DATABASE_NAME");
db.Demo.find().sort({
  name: 1,
});

// Descending
use("NEW_DATABASE_NAME");
db.Demo.find().sort({
  name: -1,
});

//! 33. db.collection.find().count() query operator
/* 
Returns the count of documents that would match a find() query for the collection
*/

use("NEW_DATABASE_NAME");
db.Demo.find().count("total");

//! 34. db.collection.find().limit() query operator
/* 
The limit() method on a cursor to specify the maximum number of documents the cursor will return.
*/

use("NEW_DATABASE_NAME");
db.Demo.find().limit(2);

//! 35. db.collection.distinct() query operator
/* 
distinct() method finds the distinct values for a specified field across a single collection or view and returns the results in an array.
*/

use("NEW_DATABASE_NAME");
db.Demo.distinct("name");

//! 36. db.collection.deleteOne()
/* 
deleteOne() deletes the first document that matches the filter.
*/

use("NEW_DATABASE_NAME");
db.Demo.deleteOne({
  _id: ObjectId("6501c762da2dccb70e8f86b5"),
});

//! 37. db.collection.deleteMany()
/* 
deleteMany() deletes documents one at a time
*/
use("NEW_DATABASE_NAME");
db.Demo.deleteMany({
  salary: { $in: [4000, 3000] },
});

//! 38. db.collection.aggregate()
/* 
Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. 
*/

//! Get All Data
// Use Find method
use("NEW_DATABASE_NAME");
db.Demo.find({});

// Use aggregate method
use("NEW_DATABASE_NAME");
db.Demo.aggregate([]);

//! Get Count Value --
// Use Find method
use("NEW_DATABASE_NAME");
db.Demo.find({}).count("total");

// Use aggregate method
use("NEW_DATABASE_NAME");
db.Demo.aggregate([{ $count: "total" }]);

//! Get $sort Value --
// Use Find method
use("NEW_DATABASE_NAME");
db.Demo.find({}).sort({ name: 1 });

// Use aggregate method
use("NEW_DATABASE_NAME");
db.Demo.aggregate([{ $sort: { price: 1 } }]);

//! Get $limit Value --
// Use Find method
use("NEW_DATABASE_NAME");
db.Demo.find({}).limit(1);

// Use aggregate method
use("NEW_DATABASE_NAME");
db.Demo.aggregate([{ $limit: 1 }]);

//! Get data using $match operator --
use("NEW_DATABASE_NAME");

// Example 1
db.Demo.aggregate([{ $match: { name: "C" } }]);

// Example 2
db.Demo.aggregate([
  { $match: { name: "C" } },
  { $match: { price: { $gt: 200 } } },
]);

//or,
db.Demo.aggregate([
  { $match: { $and: [{ name: "C" }, { price: { $gt: 10000 } }] } },
]);

//or,
db.Demo.aggregate([{ $match: { name: "C", price: { $gt: 200 } } }]);

//or,
db.Demo.aggregate([
  { $match: { $or: [{ name: "C" }, { price: { $gt: 10000 } }] } },
]);

//! Get data using (select like) ---
// যে নামে ডাটা চাওয়া হবে সেটি চলে আসবে।

db.Demo.find({ name: /C/ });
db.Demo.aggregate([{ $match: { name: /C/ } }]);

//! Get data using $in operator --
db.Demo.find({ name: { $in: ["C", "A"] } });
db.Demo.aggregate([{ $match: { name: { $in: ["C", "D"] } } }]);

//! Get data using $project operator ---
// Using aggregate method
db.Demo.aggregate([{ $project: { name: 1 } }]);
db.Demo.aggregate([{ $project: { _id: 0, name: 1 } }]);

// Using find method
db.Demo.find({}, { _id: 0, name: 1 });

//! Get data using $skip & $limit operator --
// Using aggregate method
db.Demo.aggregate([{ $skip: 1 }, { $limit: 3 }]);

// Using find method
db.Demo.find({}).skip(1).limit(3);

//! Get data using $group operator ---
// Using aggregate method
db.Demo.aggregate([{ $group: { _id: "$name" } }]);
// _id টা fix property যা দিতে হবে must. এরপর যাকে নিয়ে group করবো তাকে $... দিতে হবে

// Example 1 do $sum
db.Demo.aggregate([{ $group: { _id: "$tax", total: { $sum: "$salary" } } }]);

// Example 2 do $avg
db.Demo.aggregate([{ $group: { _id: "$tax", total: { $avg: "$salary" } } }]);

// Example 3 do $max
db.Demo.aggregate([{ $group: { _id: "$tax", total: { $max: "$salary" } } }]);

// Example 4 do without group by sum avg max min
db.Demo.aggregate([{ $group: { _id: 0, total: { $max: "$salary" } } }]);

// Example 5 group by multiple
db.Demo.aggregate([
  {
    $group: {
      _id: { Salary: "$salary", Tax: "$salary" },
      Sum: { $sum: "$salary" },
    },
  },
]);

//! Get data using $lookup operator

// 22 no video .....
