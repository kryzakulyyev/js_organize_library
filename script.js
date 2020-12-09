//1
class Media {
constructor(title,type){   //3
  this._title = title;
  this._isCheckedOut = false;
  this._ratings = [];
  this._type = type;
} //2

get title(){
  return this._title;
}
get isCheckedOut(){
 return this._isCheckedOut; 
}
get ratings(){
  return this._ratings;
}
get type(){
  return this._type;
}
set isCheckedOut(value ){
  return this._isCheckedOut = value ;
}
toggleCheckOutStatus(){
  if(this.isCheckedOut === true){
    return this.isCheckedOut === false
  }else{
    return this.isCheckedOut === true
  }
}
  getAverageRating(){
    var array = this._ratings;
    var sum = 0;
   
    for (var i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }

    return sum/array.length;
  };
  addRating(result){
   if(result >=1 && result <=10){
     return this._ratings.push(result)
  }else{
    return "Enter between 1-10 value"
  }
  }
};

//9
class Book extends Media{
  constructor(author,title, pages, type){
    super(title, type);
    this._author = author;
    this._pages = pages;
  }
  get author(){
    return this._author;
  };
  get pages(){
    return this._pages;
  }
}

class Movie extends Media {
  constructor(director,title, runTime, type){
    super(title, type)
    this._director = director;
    this._runTime = runTime;
  }
  get director(){
    return this._director;
  }
  get runTime(){
    return this._runTime;
  }
} 

const historyOfViolence = new Book ('Édouard Louis', 'History of Violence', 224, 'history');
console.log(historyOfViolence.toggleCheckOutStatus());
console.log(historyOfViolence);
console.log(historyOfViolence.isCheckedOut);
historyOfViolence.addRating(4);
historyOfViolence.addRating(5); 
historyOfViolence.addRating(5);
console.log(historyOfViolence.ratings)
console.log(historyOfViolence.getAverageRating())

//20
const bloodSport = new Movie ('Jean-Claude Van Damme','Blood Sport', 122, 'action');

console.log(bloodSport)
console.log(bloodSport.toggleCheckOutStatus());
bloodSport.addRating(1);
bloodSport.addRating(1);
bloodSport.addRating(5);
console.log(bloodSport.ratings)
console.log(bloodSport.getAverageRating());

//24
class CD extends Media{
  constructor( artist, title, type){
    super(title,type);
    this._artist = artist;
    this._songs = [];
  }
   get artist(){
     return this._artist;
   }
   get songs(){
     return this._songs;
   }
   addSongs(song){
     return this._songs.push(song)
   }
   shuffle(){
     return this._songs.sort(()=>Math.random()-0.5)
   }
}
const album = new CD ('Joker', 'That\'s Life', 'drama')
album.addSongs('Rock & Roll' );
album.addSongs('Skrillex & Rick Roos' )

console.log(album.shuffle());

class Catalog {
  constructor() {
    this._catalogArr = [];
  }
  get catalogArr() {
    return this._catalogArr;
  }
  set catalogArr(val) {
    this._catalogArr = val;
  }
  addMedia(media) {
    this.catalogArr.push(media);
  }
}
const newCatalog = new Catalog();
newCatalog.addMedia(historyOfViolence);
newCatalog.addMedia(bloodSport);
newCatalog.addMedia(album);


console.log(newCatalog);

