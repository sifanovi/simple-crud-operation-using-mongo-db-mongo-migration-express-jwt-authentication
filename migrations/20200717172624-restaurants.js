module.exports = {
  async up(db, client) {
    // TODO write your migration here.
    // See https://github.com/seppevs/migrate-mongo/#creating-a-new-migration-script
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: true}});
   await db.createCollection("restaurants", {
      validator: {
        $jsonSchema: {
          bsonType: "object",
          required: [
            "name",
            "phone_number",
            "contact_person",
            "email",
            "address",
          ],
          properties: {
            name: {
              bsonType: "string",
              description: "must be a string and is required",
            },
            phone_number: {
              bsonType: "string",
              description: "must be a string and is required",
            },

            contact_person: {
              bsonType: "string",
              description: "must be a string and is required",
            },
            email: {
              bsonType: "string",
              description: "must be a string and is required",
            },
            address: {
              bsonType: "string",
              description: "must be a string and is required",
            },
            createdAt:{
              bsonType:"date",
              description: "must be a date and is not required",
            },
            updatedAt:{
              bsonType:"date",
              description: "must be a date and is not required",
            }
         
          },
        },
      },
    });
  },

  async down(db, client) {
    await db.dropCollection("restaurants");
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: false}});
  },
};
