console.log("Hello world!");

// These are global variables! I am giving you permission to use them :)
// Any function in this file can modify it.
let story = [];
let actions = [];

/**
 * Called whenever the "Add to story!" button is clicked.
 * Should prompt the user and add their string to the story.
 */
function addToStory() {
    alert("I should add a string to story!");
}

/**
 * Called whenever the "Delete from story!" button is clicked.
 * Should confirm with the user to delete the last string of the story.
 */
function deleteFromStory() {
    alert("I should remove the last string from story!");
}

/**
 * Called whenever the "Undo!" button is clicked.
 * Should undo the last action.
 */
function undo() {
    alert("I should undo the last action!");
}

/**
 * Should be called any time you want to update the story-text
 * element to reflect the current story.
 * HINT: You can use innerHTML to insert HTML tags!
 *       There are security concerns with this, but we'll
 *       discuss those in the future :)
 */
function updateStory() {
    const storyNode = document.getElementById("story-text");
    const storyText = story.join("<br/>");
    storyNode.innerHTML = storyText;
}
