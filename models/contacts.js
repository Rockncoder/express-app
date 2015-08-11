var mongoose = require('mongoose');

var contactSchema = new mongoose.Schema({
  gender: String,
  name: {
    first: String,
    last: String,
    title: String
  },
  location: {
    street: String,
    city: String,
    state: String,
    zip: String
  },
  email: String,
  dob: Date,
  phone: String,
  cell: String,
  picture: {
    large: String,
    medium: String,
    thumbnail: String
  }
});

var ContactModel = mongoose.model('Contacts', contactSchema);

function get(callback) {
  ContactModel.find({}, function (err, contacts) {
    callback(err, contacts);
  });
}

function getById(id, callback) {
  ContactModel.findById(id, function (err, contacts) {
    callback(err, contacts);
  });
}

function post(contact, callback) {
  if(!contacts._id){
    var person = new ContactModel(contact);
    person.save(function(err){
      callback(err);
    });
  }
}

function put(contact, callback) {
  ContactModel.findByIdAndUpdate(
    contact._id,
    contact,
    {
      new: true,
      upsert: true
    },
    function (err, contacts) {
      callback(err, contacts);
    });
}

function del(id, callback) {
  ContactModel.findByIdAndRemove(
    id,
    function (err, data) {
      callback(err, data);
    });
}

module.exports = function () {
  return {
    getContacts: get,
    getContact: getById,
    postContact: post,
    putContact: put,
    deleteContact: del
  };
}();