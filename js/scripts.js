
//Busines Logic
function Luck(unluckyEvents,luckyEvents){
  this.unluckyEvents = unluckyEvents,
  this.luckyEvents = luckyEvents
  //return event1.length;
}
//Prototype to return unlucky selections
Luck.prototype.countUnlucky = function() {
  var totalCount = this.unluckyEvents.length;
  console.log(totalCount);
  return totalCount;
}
//Prototype to return lucky selections
Luck.prototype.countLucky = function() {
  var totalCount = this.luckyEvents.length;
  console.log(totalCount);
  return totalCount;
}

//Variables
var unluckyEvents = [];
var luckyEvents = [];

//Interface logic
$(document).ready(function(){
  $("#fortune_form").submit(function(event){
    event.preventDefault();
    $("input:checkbox[name=unlucky-events]:checked").each(function(){
      unluckyEvents.push($(this).val());
    });
    $("input:checkbox[name=lucky-events]:checked").each(function(){
      luckyEvents.push($(this).val());

    });

    var chosenEvents = new Luck(unluckyEvents,luckyEvents);
    //this console.log way also works!
    console.log(chosenEvents.unluckyEvents.length);

    var luckyCount= chosenEvents.countLucky();
    var unluckyCount= chosenEvents.countUnlucky();


    console.log("hello" + chosenEvents.countUnlucky());
    console.log("hello" + chosenEvents.countLucky());

    //Displays the result onto the screen
    if (luckyCount >= unluckyCount) {
      $("#lucky").show();
    } else {
      $("#unlucky").show();
    }
  });
});
