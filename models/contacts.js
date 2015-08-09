var mongoose = require('mongoose');

var contactSchema = new mongoose.Schema({
  gender: String,
  name : {
    first: String,
    last: String,
    title: String
  }
});

var ContactModel = mongoose.model('Contact', contactSchema);


function get(callback){
  ContactModel.find({}, function (err, contacts) {
    callback(err, contacts);
  });
}

get(function(err, contacts){
  if(err){
    return;
  }
  var ndx = 0;
  for(ndx = 0; ndx < contacts.length; ndx++){
    console.log(contacts[ndx].name.first);
  }
});


module.exports = function () {
  return {
    getContacts: function(callback){
      ContactModel.find({}, function (err, contacts) {
        callback(err, contacts);
      });
    }
  };
}();