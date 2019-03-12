var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

function randomValueFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}

console.log("log 1");

const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

console.log("log 2");

const insertX = [
    "Willy the Goblin",
    "Big Daddy",
    "Father Christmas"];

const insertY = [   
    "the soup kitchen",
    "Disneyland",
    "the White House"];

const insertZ = [
    "spontaneously combusted",
    "melted into a puddle on the sidewalk",
    "turned into a slug and crawled away"];

randomize.addEventListener('click', result);

function result() {
    
    let newStory = storyText;
    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);
    
    newStory = newStory.replace(":insertx:", xItem);
    newStory = newStory.replace(":insertx:", xItem); // replace second occurance
    newStory = newStory.replace(":inserty:", yItem);
    newStory = newStory.replace(":insertz:", zItem);

  if(customName.value !== '') {
    var name = customName.value;
    newStory = newStory.replace("Bob", name);
  }

  if(document.getElementById("uk").checked) {
    var weight = Math.round(300 * 0.071429) + " stone";
    var temperature =  Math.round((94 - 32) * 0.5556) + " centigrade";
    newStory = newStory.replace("300 pounds", weight);    
    newStory = newStory.replace("94 fahrenheit", temperature);  
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
  story.style.backgroundColor='lightblue';
    document.querySelector.back
}
