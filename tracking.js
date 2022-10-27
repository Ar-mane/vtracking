const express = require("express");
const router = express.Router();

/**
 * GET product list.
 *
 * @return product list | empty.
 */
/* departure non null */
router.get(
  "/accountNumber=12&bookingNumber=11111111",
  function (req, res, next) {
    res.send({
      accountNumber: 12,
      direction: "FOCA",
      registrationNumber: "ALICE1",
      bookingNumber: 10286391,
      bufferZone: null,
      securityControl: null,
      checkIn: "2022-10-25T13:00:10",
      boardingArea: null,
      departure: "2022-10-27T17:10:10",
      arrival: "2022-10-27T17:20:10",
      customsControl: {
        status: "pending",
        place: null,
      },
    });
  }
);

/* departure null + arrival null + pending */
router.get(
  "/accountNumber=12&bookingNumber=00000000",
  function (req, res, next) {
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
  }
);

/* arrival non null + pending */
router.get(
  "/accountNumber=12&bookingNumber=22222222",
  function (req, res, next) {
    res.send({
      accountNumber: 12,
      direction: "FOCA",
      registrationNumber: "ALICE1",
      bookingNumber: 10286391,
      bufferZone: null,
      securityControl: null,
      checkIn: "2022-08-03T11:41:10",
      boardingArea: null,
      departure: "2022-10-25T13:05:10",
      arrival: "2022-10-25T13:10:10",
      customsControl: {
        status: "pending",
        place: null,
      },
    });
  }
);

/* arrival non null + ControlRequired (orange status) */
router.get(
  "/accountNumber=12&bookingNumber=33333333",
  function (req, res, next) {
    res.send({
      accountNumber: 12,
      direction: "FOCA",
      registrationNumber: "ALICE1",
      bookingNumber: 10286391,
      bufferZone: null,
      securityControl: null,
      checkIn: "2022-08-03T11:41:10",
      boardingArea: null,
      departure: "2022-10-25T13:00:10",
      arrival: "2022-10-25T13:10:10",
      customsControl: {
        status: "ControlRequired",
        place: null,
      },
    });
  }
);

/* arrival non null + NoRequired (green status) */
router.get(
  "/accountNumber=12&bookingNumber=44444444",
  function (req, res, next) {
    res.send({
      accountNumber: 12,
      direction: "FOCA",
      registrationNumber: "ALICE1",
      bookingNumber: 10286391,
      bufferZone: null,
      securityControl: null,
      checkIn: "2022-08-03T11:41:10",
      boardingArea: null,
      departure: "2022-10-25T13:00:10",
      arrival: "2022-10-25T13:10:10",
      customsControl: {
        status: "NoControlNeeded",
        place: null,
      },
    });
  }
);

/* arrival non null + NoRequired (green status) */
router.get(
  "/accountNumber=12&bookingNumber=66666666",
  function (req, res, next) {
    res.send({
      accountNumber: 12,
      direction: "FOCA",
      registrationNumber: "ALICE1",
      bookingNumber: 10286391,
      bufferZone: null,
      securityControl: null,
      checkIn: "2022-08-03T11:41:10",
      boardingArea: null,
      departure: "2022-10-25T13:00:10",
      arrival: "2022-10-25T13:40:10",
      customsControl: {
        status: "NotProvided",
        place: null,
      },
    });
  }
);

module.exports = router;
