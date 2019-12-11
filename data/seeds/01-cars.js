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
          color: "blue"
        },
        {
          vin: "5J8TB1H55BA201647",
          year: 1991,
          make: "Acura",
          model: "Integra",
          color: "black"
        },
        {
          vin: "19UYA41683A800149",
          year: 1993,
          make: "Acura",
          model: "Integra",
          color: "white"
        },
        {
          vin: "JH4UA2641WC800185",
          year: 1994,
          make: "Acura",
          model: "Integra",
          color: "gray"
        },
        {
          vin: "JH4KC2F91EC011465",
          year: 2001,
          make: "Acura",
          model: "Integra",
          color: "silver"
        },
        {
          vin: "19UUA865X9A801110",
          year: 2008,
          make: "Acura",
          model: "Integra",
          color: "red"
        },
        {
          vin: "JH4NA1159MT761843",
          year: 2017,
          make: "Acura",
          model: "Integra",
          color: "black"
        },
        {
          vin: "WAUZZZ8T16B043322",
          year: 2016,
          make: "Acura",
          model: "Integra",
          color: "smoke gray"
        },
        {
          vin: "5FRYD4H22GB097586",
          year: 2010,
          make: "Acura",
          model: "Integra",
          color: "carbon black"
        },
        {
          vin: "JH4KA4630JC008595",
          year: 2013,
          make: "Acura",
          model: "Integra",
          color: "candy red"
        },
        {
          vin: "JH4KB162068234567",
          year: 2006,
          make: "Acura",
          model: "Integra",
          color: "orange"
        },
        {
          vin: "WAUMEAFM0B0013513",
          year: 2019,
          make: "Audi",
          model: "r9",
          color: "blue"
        },
        {
          vin: "WAUHFAFL0BN023161",
          year: 2015,
          make: "Audi",
          model: "r8",
          color: "black"
        },
        {
          vin: "WAUZZZUF9BN007712",
          year: 2019,
          make: "Audi",
          model: "r8",
          color: "chrome black"
        },
        {
          vin: "WA1CGCFP1EA090351",
          year: 2020,
          make: "Audi",
          model: "r8",
          color: "chrome blue"
        }
      ]);
    });
};
