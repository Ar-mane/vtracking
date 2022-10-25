const express = require("express");
const router = express.Router();

/**
 * GET product list.
 *
 * @return product list | empty.
 */
/* departure non null */
router.get("/accountNumber=12&bookingNumber=1", function (req, res, next) {
  res.send({
    accountNumber: 12,
    direction: "FOCA",
    registrationNumber: "ALICE1",
    bookingNumber: 10286391,
    bufferZone: null,
    securityControl: null,
    checkIn: "2022-08-03T11:41:10",
    boardingArea: null,
    departure: "2022-08-03T11:41:10",
    arrival: null,
    customsControl: {
      status: "pending",
      place: null,
    },
  });
});

/* departure null + arrival null + pending */
router.get("/accountNumber=12&bookingNumber=0", function (req, res, next) {
  res.send({
    accountNumber: 12,
    direction: "FOCA",
    registrationNumber: "ALICE1",
    bookingNumber: 10286391,
    bufferZone: null,
    securityControl: null,
    checkIn: "2022-08-03T11:41:10",
    boardingArea: null,
    departure: null,
    arrival: null,
    customsControl: {
      status: "pending",
      place: null,
    },
  });
});

/* arrival non null + pending */
router.get("/accountNumber=12&bookingNumber=2", function (req, res, next) {
  res.send({
    accountNumber: 12,
    direction: "FOCA",
    registrationNumber: "ALICE1",
    bookingNumber: 10286391,
    bufferZone: null,
    securityControl: null,
    checkIn: "2022-08-03T11:41:10",
    boardingArea: null,
    departure: "2022-08-03T11:41:10",
    arrival: "2022-08-03T11:41:10",
    customsControl: {
      status: "pending",
      place: null,
    },
  });
});

/* arrival non null + ControlRequired (orange status) */
router.get("/accountNumber=12&bookingNumber=3", function (req, res, next) {
  res.send({
    accountNumber: 12,
    direction: "FOCA",
    registrationNumber: "ALICE1",
    bookingNumber: 10286391,
    bufferZone: null,
    securityControl: null,
    checkIn: "2022-08-03T11:41:10",
    boardingArea: null,
    departure: "2022-08-03T11:41:10",
    arrival: "2022-08-03T12:45:00",
    customsControl: {
      status: "ControlRequired",
      place: null,
    },
  });
});

/* arrival non null + NoRequired (green status) */
router.get("/accountNumber=12&bookingNumber=4", function (req, res, next) {
  res.send({
    accountNumber: 12,
    direction: "FOCA",
    registrationNumber: "ALICE1",
    bookingNumber: 10286391,
    bufferZone: null,
    securityControl: null,
    checkIn: "2022-08-03T11:41:10",
    boardingArea: null,
    departure: "2022-08-03T11:41:10",
    arrival: "2022-08-03T12:40:55",
    customsControl: {
      status: "NoRequired",
      place: null,
    },
  });
});

/* arrival non null + NoRequired (green status) */
router.get("/accountNumber=12&bookingNumber=6", function (req, res, next) {
  res.send({
    accountNumber: 12,
    direction: "FOCA",
    registrationNumber: "ALICE1",
    bookingNumber: 10286391,
    bufferZone: null,
    securityControl: null,
    checkIn: "2022-08-03T11:41:10",
    boardingArea: null,
    departure: "2022-08-03T11:41:10",
    arrival: null,
    customsControl: {
      status: "NotProvided",
      place: null,
    },
  });
});

module.exports = router;
