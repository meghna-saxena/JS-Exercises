// You can add new properties to existing JavaScript objects the same way you would modify them.
// Here's how we would add a "bark" property to ourDog:

ourDog.bark = "bow-wow";

or

ourDog["bark"] = "bow-wow";

// Now when we evaluate ourDog.bark, we'll get his bark, "bow-wow".

// ===============================
// Delete properties
// ===============================

var myDog = {
  name: "Happy Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"],
  bark: "woof"
};

delete myDog.tails;


