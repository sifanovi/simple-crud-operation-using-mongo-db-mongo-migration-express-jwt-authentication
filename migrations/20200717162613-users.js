module.exports = {
  async up(db, client) {
    // TODO write your migration here.
    // See https://github.com/seppevs/migrate-mongo/#creating-a-new-migration-script
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: true}});
   await db.createCollection("users", {
      validator: {
        $jsonSchema: {
          bsonType: "object",
          required: [
            "name",
            "email",
            "password",
          
          ],
          properties: {
            name: {
              bsonType: "string",
              description: "must be a string and is required",
            },
            email: {
              bsonType: "string",
              description: "must be a string and is required",
            },

            password: {
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
    await db.dropCollection("users");
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: false}});
  },
};
