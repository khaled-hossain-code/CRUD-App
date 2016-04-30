var express = require('express');
var router = express.Router();
var _ = require('underscore');

// URL: /createDevices/
router.route('/')
    .all(function(req, res, next) {
      // runs for all HTTP verbs first
      // think of it as route specific middleware!
      next();
    })
    .get(function(req, res, next) {
      //GET /devices/ip/:deviceIp
      //ex: GET /api/devices/ip/192.168.100.10
      //have to find the user from database and return it
      res.render('devices');

    })
    .post(function(req, res, next){
      //POST/devices/ip/:deviceIp
      //create new device list
      //  {
      //   "Floor": "1",
      //   "RoomType" : "Single",
      //   "RoomNumber":"R1A",
      //   "BedNumber":"52A"
      //  }

      //var body = _.pick(req.body,"Floor","RoomType","RoomNumber","BedNumber");
      //console.log(body);

      res.send("new device list is created");
    })
    .put(function(req, res, next) {
      //PUT/devices/ip/:deviceIp
      //Updating a existing device list
      //  {
      //   "Floor": "1",
      //   "RoomType" : "Single",
      //   "RoomNumber":"R1A",
      //   "BedNumber":"52A"
      //  }

      //var body = _.pick(req.body,"Floor","RoomType","RoomNumber","BedNumber");
      //console.log(body);

      res.send("device list is updated");
    })
    .delete(function(req, res, next) {
      /* DELETE specific IP */
      //DELETE /api/devices/ip/:deviceIp
      //DELETE /api/devices/ip/192.168.100.5

      res.send( "in delete url");
      console.log(req.user);
    });
//~~~~~~~~~~~End Of IP CRUD~~~~~~~~~~\\

module.exports = router;