var express = require("express");
var router = express.Router();

// const base_url = "http://localhost:6055";
const base_url = "http://116.68.200.97:6055"

const magazine_list = [
  {
    id: 1,
    url: `${base_url}/magazine2022_february`,
    thumb: "images/2022_1/Cronical-11-01.jpg",
    title: "Chronicle",
    sub_title: "February - April 2022",
  },
  {
    id: 2,
    url: `${base_url}/magazine2022_august`,
    thumb: "images/2022_2/CHRONICAL-12-01.jpg",
    title: "Chronicle",
    sub_title: "May - August 2022",
  },
  {
    id: 3,
    url: `${base_url}/magazine2022_september`,
    thumb: "images/2022_3/Chornical-13_page-0001.jpg",
    title: "Chronicle",
    sub_title: "September - November 2022",
  },
  {
    id: 4,
    url: `${base_url}/magazine2023_march`,
    thumb: "images/2023_1/photo_1.jpg",
    title: "Chronicle",
    sub_title: "March - April 2023",
  },
  {
    id: 5,
    url: `${base_url}/magazine2023_may`,
    thumb: "images/2023_2/photo_1.jpg",
    title: "Chronicle",
    sub_title: "May - June 2023",
  },
];

router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Radiant Chronicle",
    magazine_list: magazine_list,
  });
});
router.get("/magazine2022_february", function (req, res, next) {
  res.render("magazine_details_february");
});
router.get("/magazine2022_august", function (req, res, next) {
  res.render("magazine_details_august");
});
router.get("/magazine2022_september", function (req, res, next) {
  res.render("magazine_details_september");
});
router.get("/magazine2023_march", function (req, res, next) {
  res.render("magazine_details_march_2023");
});
router.get("/magazine2023_may", function (req, res, next) {
  res.render("magazine_details_may_2023");
});

module.exports = router;
