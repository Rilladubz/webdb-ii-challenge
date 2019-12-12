exports.up = function(knex) {
  return knex.schema.createTable("Cars", tbl => {
    tbl.increments("id");

    tbl
      .string("vin", 17)
      .unique()
      .notNullable()
      .index();

    tbl.integer("year", 4).notNullable();

    tbl.string("make").notNullable();

    tbl.string("model").notNullable();

    tbl.integer("mileage", 6).notNullable();

    tbl.string("transmission").notNullable();

    tbl.string("title"); //clean, salvage, not required

    tbl.string("color");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("Cars");
};
