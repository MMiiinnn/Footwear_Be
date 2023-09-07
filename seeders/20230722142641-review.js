"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Reviews", [
      { id_user: 6, id_item: 76, rating: 5, createAt: "2023-05-17" },
      { id_user: 3, id_item: 70, rating: 5, createAt: "2023-08-23" },
      { id_user: 3, id_item: 31, rating: 1, createAt: "2023-05-21" },
      { id_user: 1, id_item: 62, rating: 2, createAt: "2023-07-10" },
      { id_user: 6, id_item: 61, rating: 3, createAt: "2023-06-08" },
      { id_user: 2, id_item: 68, rating: 4, createAt: "2023-03-30" },
      { id_user: 2, id_item: 39, rating: 5, createAt: "2023-03-01" },
      { id_user: 6, id_item: 78, rating: 4, createAt: "2023-03-05" },
      { id_user: 5, id_item: 19, rating: 5, createAt: "2023-03-12" },
      { id_user: 2, id_item: 39, rating: 5, createAt: "2023-05-27" },
      { id_user: 2, id_item: 18, rating: 4, createAt: "2023-07-07" },
      { id_user: 1, id_item: 22, rating: 4, createAt: "2023-02-28" },
      { id_user: 3, id_item: 4, rating: 4, createAt: "2023-05-04" },
      { id_user: 4, id_item: 26, rating: 3, createAt: "2023-08-13" },
      { id_user: 4, id_item: 67, rating: 1, createAt: "2023-06-15" },
      { id_user: 6, id_item: 63, rating: 5, createAt: "2023-07-25" },
      { id_user: 2, id_item: 33, rating: 2, createAt: "2023-05-17" },
      { id_user: 1, id_item: 19, rating: 1, createAt: "2023-07-08" },
      { id_user: 2, id_item: 11, rating: 1, createAt: "2023-01-30" },
      { id_user: 1, id_item: 4, rating: 1, createAt: "2023-06-27" },
      { id_user: 2, id_item: 70, rating: 3, createAt: "2023-01-16" },
      { id_user: 3, id_item: 36, rating: 2, createAt: "2023-08-10" },
      { id_user: 1, id_item: 28, rating: 1, createAt: "2023-03-01" },
      { id_user: 5, id_item: 73, rating: 1, createAt: "2023-07-04" },
      { id_user: 4, id_item: 30, rating: 1, createAt: "2023-08-27" },
      { id_user: 5, id_item: 7, rating: 2, createAt: "2023-07-31" },
      { id_user: 6, id_item: 78, rating: 4, createAt: "2023-03-09" },
      { id_user: 5, id_item: 60, rating: 2, createAt: "2023-06-08" },
      { id_user: 3, id_item: 39, rating: 4, createAt: "2023-02-11" },
      { id_user: 4, id_item: 6, rating: 4, createAt: "2023-08-31" },
      { id_user: 4, id_item: 60, rating: 5, createAt: "2023-02-26" },
      { id_user: 1, id_item: 61, rating: 5, createAt: "2023-01-02" },
      { id_user: 5, id_item: 76, rating: 3, createAt: "2023-03-24" },
      { id_user: 6, id_item: 24, rating: 2, createAt: "2023-08-17" },
      { id_user: 4, id_item: 5, rating: 5, createAt: "2023-05-15" },
      { id_user: 6, id_item: 52, rating: 2, createAt: "2023-05-25" },
      { id_user: 4, id_item: 51, rating: 5, createAt: "2023-06-05" },
      { id_user: 5, id_item: 7, rating: 1, createAt: "2023-02-03" },
      { id_user: 4, id_item: 44, rating: 5, createAt: "2023-01-14" },
      { id_user: 5, id_item: 25, rating: 1, createAt: "2023-06-19" },
      { id_user: 3, id_item: 72, rating: 1, createAt: "2023-04-02" },
      { id_user: 1, id_item: 24, rating: 2, createAt: "2023-08-14" },
      { id_user: 6, id_item: 38, rating: 4, createAt: "2023-01-29" },
      { id_user: 6, id_item: 44, rating: 4, createAt: "2023-05-19" },
      { id_user: 2, id_item: 69, rating: 1, createAt: "2023-08-08" },
      { id_user: 5, id_item: 21, rating: 1, createAt: "2023-08-17" },
      { id_user: 3, id_item: 76, rating: 1, createAt: "2023-06-18" },
      { id_user: 6, id_item: 47, rating: 5, createAt: "2023-03-08" },
      { id_user: 3, id_item: 17, rating: 2, createAt: "2023-07-10" },
      { id_user: 6, id_item: 56, rating: 3, createAt: "2023-02-03" },
      { id_user: 4, id_item: 12, rating: 1, createAt: "2023-02-22" },
      { id_user: 1, id_item: 35, rating: 4, createAt: "2023-01-14" },
      { id_user: 4, id_item: 46, rating: 2, createAt: "2023-01-16" },
      { id_user: 4, id_item: 47, rating: 5, createAt: "2023-03-29" },
      { id_user: 1, id_item: 59, rating: 2, createAt: "2023-08-27" },
      { id_user: 6, id_item: 15, rating: 5, createAt: "2023-08-29" },
      { id_user: 2, id_item: 12, rating: 3, createAt: "2023-07-03" },
      { id_user: 3, id_item: 57, rating: 5, createAt: "2023-03-08" },
      { id_user: 3, id_item: 27, rating: 4, createAt: "2023-06-21" },
      { id_user: 4, id_item: 24, rating: 4, createAt: "2023-02-09" },
      { id_user: 2, id_item: 77, rating: 1, createAt: "2023-05-28" },
      { id_user: 2, id_item: 66, rating: 5, createAt: "2023-03-24" },
      { id_user: 4, id_item: 73, rating: 4, createAt: "2023-07-08" },
      { id_user: 6, id_item: 43, rating: 5, createAt: "2023-02-25" },
      { id_user: 5, id_item: 9, rating: 5, createAt: "2023-02-08" },
      { id_user: 6, id_item: 4, rating: 4, createAt: "2023-05-20" },
      { id_user: 2, id_item: 40, rating: 3, createAt: "2023-04-08" },
      { id_user: 4, id_item: 32, rating: 1, createAt: "2023-03-05" },
      { id_user: 4, id_item: 60, rating: 2, createAt: "2023-03-12" },
      { id_user: 5, id_item: 71, rating: 5, createAt: "2023-01-30" },
      { id_user: 6, id_item: 28, rating: 5, createAt: "2023-01-13" },
      { id_user: 1, id_item: 30, rating: 3, createAt: "2023-04-06" },
      { id_user: 4, id_item: 1, rating: 5, createAt: "2023-04-13" },
      { id_user: 1, id_item: 51, rating: 4, createAt: "2023-02-18" },
      { id_user: 5, id_item: 13, rating: 2, createAt: "2023-05-02" },
      { id_user: 5, id_item: 56, rating: 3, createAt: "2023-08-08" },
      { id_user: 6, id_item: 40, rating: 3, createAt: "2023-07-23" },
      { id_user: 4, id_item: 31, rating: 3, createAt: "2023-04-05" },
    ]);
  },

  async down(queryInterface, Sequelize) {},
};
