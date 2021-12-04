// Getter dan Setter

// Getter = pengambil/mengambil data.
// Setter = penyetel/menyetel data.
// method trim() = untuk menghilangkan spasi di sisi kanan dan kiri.

const data = {
  locations: [],
  get location() {
    return this._location;
  },
  set location(value) {
    this._location = value.trim();
    this.locations.push(this._location);
  },
};

// code that uses the data object
data.location = '       Philadelphia       ';
data.location = '  New York     ';
console.log(data.location);
console.log(data);
