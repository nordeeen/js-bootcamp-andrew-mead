let restaurant = {
  name: 'KFC',
  guestCapacity: 75,
  guestCount: 0,
  checkAvailability: function (partySize) {
    let seatsLeft = this.guestCapacity - this.guestCount;
    return partySize <= seatsLeft;
  },
  seatParty: function (partySize) {
    this.guestCount = this.guestCount + partySize;
    console.log(restaurant);
  },
  removeParty: function (partySize) {
    this.guestCount = this.guestCount - partySize;
    console.log(restaurant);
  },
};

let cekStatus = restaurant.checkAvailability(7); // 75 - 7 = 68 ( 7 <= 68 ) true
console.log(cekStatus);
restaurant.seatParty(71); // 71 <= 75 guestCapacity
console.log(restaurant.checkAvailability(0));
restaurant.removeParty(5); // 75 - 9 = 66 ( 5 + 4 = 99 // true )
console.log(restaurant.checkAvailability(4));
