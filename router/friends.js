const express = require('express');

const router = express.Router();


let friends = {
    "johnsmith@gamil.com": {"firstName": "John","lastName": "Doe","DOB":"22-12-1990"},
    "annasmith@gamil.com":{"firstName": "Anna","lastName": "smith","DOB":"02-07-1983"},
    "peterjones@gamil.com":{"firstName": "Peter","lastName": "Jones","DOB":"21-03-1989"}
};


// GET request: Retrieve all friends
router.get("/",(req,res)=>{
  // const friendsList = Object.keys(friends).map((email) => {
  //   return {
  //     email: email, // Include the email address
  //     ... friends[email],  // Spread operator to include all properties of the friend object
  //   };
  // });
  // return res.send(friendsList)
  res.send(JSON.stringify(friends,null,4)); // It will return the object as it is in pretty form with 4 spaces
});

// GET by specific ID request: Retrieve a single friend with email ID
router.get("/:email",(req,res)=>{
  const email = req.params.email;
  res.send(friends[email]);
});


// POST request: Add a new friend
router.post("/", (req, res) => {
  console.log(req.body); // Add logging to see the incoming request body
  if (req.body.email) {
    friends[req.body.email] = {
      "firstName": req.body.firstName,
      "lastName": req.body.lastName,
      "DOB": req.body.DOB
    };
    res.send("The user " + req.body.firstName + " " + req.body.lastName + " has been added successfully");
  } else {
    res.status(400).send("Email is required.");
  }
});


// PUT request: Update the details of a friend with email id
router.put("/:email", (req, res) => {
  const email = req.params.email;
  let friend = friends[email];

  if (friend) {
    const {DOB, firstName, lastName} = req.body;
  
  if (DOB) {
    friend["DOB"] = DOB;
  }

  if (firstName) {
    friend["firstName"] = firstName;
  }

  if (lastName) {
    friend["lastName"] = lastName;
  }

  friends[email] = friend;
  // Sending a JSON response for consistency
  res.status(200).json({
    message: "Friend details updated successfully",
    friend: friend
  });

} else {
  //Friend not found, setting status to 404
  res.status(404).json({
    message: "Friend not found"
  })
}
});

// DELETE request: Delete a friend by email id
router.delete("/:email", (req, res) => {
  const email = req.params.email;
  if (friends[email]) { // Check if the friend exists
    delete friends[email]; // Delete the friend
    res.status(200).json({
      message: "Friend deleted successfully."
    });
  } else {
    // Friend not found, return a 404 status
    res.status(404).json({
      message: "Friend not found."
    });
  }
});

module.exports=router;
