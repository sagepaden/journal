//Business Logic for entries

export default function Entry(title, body)  {
  this.title = title;
  this.body = body;
}

Entry.prototype.wordCount = function() {
  return this.body.split(" ").length;
}


Entry.prototype.vowelCount = function()  {
  let numberOfVowels = 0;

  for (let i = 0; i < this.body.length; i++) {
    switch (this.body[i].toLowerCase()) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        numberOfVowels++;
        break;
      default:
        break;
    }
  }

  return numberOfVowels;
};

Entry.prototype.consCount = function()  {
  let cons = 0;
  let noPunctuationStr = this.body.replace(/[,.#!()'"?1234567890]/g,"");
  let str = noPunctuationStr.replace(" ","");
  let numberOfCons = 0;
  for (let i = 0; i < this.body.length; i++) {
    if (str[i] !== "a" && str[i] !== "e" && str[i] !== "i" && str[i] !== "o" && str[i] !== "u" &&)  {
      numberOfCons++;
    } return numberOfCons;

  }
}

Entry.prototype.getTeaser = function()  {

}