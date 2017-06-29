function Phone(phoneNumber){
  this.phoneNumber = phoneNumber;
}

Phone.prototype.callPhone = function(phoneNumber){
  // console.log(this.phoneNumber);
  // console.log(phoneNumber);
  return this.phoneNumber + " calls " + phoneNumber;
};

module.exports = Phone;