const express = require("express");
const router = express.Router();
const passwordModel = require("../src/models");

//adding username and password in the database
router.post("/password", async (req, res) => {
  try {
    let response = {
      status: false,
    };

    let body = req.body;
    let passwordObj = new passwordModel(body);
    passwordObj
      .save()
      .then((data) => {
        response.status = true;
        response.message = "Password saved successfully";
        res.send(response);
      })
      .catch((err) => {
        response.error = err;
        response.message = "Password not saved";
        res.send(response);
      });
  } catch (err) {
    res.send(err);
  }
});

router.update("password/:id", async (req, res) => {
  let response = {
    status: false,
  };
  try {
    let body = req.body;

    const Id = req.params.id;
    const filter = { _id: mongoose.Types.ObjectId(Id) };
    const update = body.newPassword;

    Model.findOneAndUpdate(filter, update, {
      new: true,
    })
      .then((doc) => {
        response.status = true;
        response.message = "password updated successfully";
        res.send(response);
      })
      .catch((err) => {
        response.error = err;
        response.message = "password not updated";
        res.send(response);
      });
  } catch (err) {
    response.message = "Something went wrong";
    response.error = err;
    res.send(response);
  }
});

router.delete("/password/:id", async (req, res) => {
  let response = {
    status: false,
  };
  try {
    const id = req.params.id;
    passwordModel
      .deleteOne({ _id: mongoose.Types.ObjectId(id) })
      .then((doc) => {
        response.status = true;
        response.message = "Data deleted Successfully";
        res.send(response);
      })
      .catch((err) => {
        response.error = err;
        response.message = "Data not deleted";
        res.send(response);
      });
  } catch (err) {
    response.message = "Something went wrong";
    response.error = err;
    res.send(err);
  }
});
