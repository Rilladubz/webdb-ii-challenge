exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        {
          vin: "JH4KA7650PC002520",
          year: 1991,
          make: "Acura",
          model: "Integra",
          color: "blue",
          mileage: 123456,
          title: "salvage",
          transmission: "automatic"
        },
        {
          vin: "5J8TB1H55BA201647",
          year: 1991,
          make: "Acura",
          model: "Integra",
          color: "black",
          mileage: 123456,
          title: "clean",
          transmission: "automatic"
        }
      ]);
    });
};
