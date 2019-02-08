'use strict';

const mongoose = require('mongoose');


// this is our schema to represent a RecipeBox
const RecipeBoxSchema = mongoose.Schema({
  title: {type: String, required: true},
  ingredients: {type: String, required: true},
  steps: {type: String, required: true},
  description: { type: String, required: true},
 
  // ingredients and or steps will be an arrays of objects
});

// *virtuals* (http://mongoosejs.com/docs/guide.html#virtuals)
// allow us to define properties on our object that manipulate
// properties that are stored in the database. Here we use it
// to generate a human readable string based on the address object
// we're storing in Mongo.
// RecipeBoxSchema.virtual('ingredientsString').get(function() {
  
//   foreach( `${this.ingredients}`) 
//     { function ingredient () {
//       return `${this.ingredient}`    
//       };
//     };
//   });



// this is an *instance method* which will be available on all instances
// of the model. This method will be used to return an object that only
// exposes *some* of the fields we want from the underlying data
RecipeBoxSchema.methods.serialize = function() {

  return {
    id: this._id,
    title: this.title,
    description: this.description,
    steps: this.steps,
    ingredients: this.ingredients
   
  };
};

// note that all instance methods and virtual properties on our
// schema must be defined *before* we make the call to `.model`.
const RecipeBox = mongoose.model('RecipeBox', RecipeBoxSchema);

module.exports = {RecipeBox};
