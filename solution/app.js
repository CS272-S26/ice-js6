console.log("Hello world!");

// These are global variables! I am giving you permission to use them :)
// Any function in this file can modify it.
let story = [];
let actions = [];

// As an extension of this exercise, can you add a redo button?
// HINT: You'll want to add another list!

/**
 * Called whenever the "Add to story!" button is clicked.
 * Should prompt the user and add their string to the story.
 */
function addToStory() {
    const inp = prompt("What would you like to say?");
    if (inp) {
        story.push(inp);
        actions.push({
            action: "add",
            txt: inp
        });
        updateStory();
    }
}

/**
 * Called whenever the "Delete from story!" button is clicked.
 * Should confirm with the user to delete the last string of the story.
 */
function deleteFromStory() {
    if (story.length === 0) {
        alert("There is nothing to delete!");
    } else {
        const conf = confirm("Are you sure you want to delete the last part of the story?");
        if(conf) {
            const oldText = story.pop();
            actions.push({
                action: "remove",
                txt: oldText
            });
            updateStory();
        }
    }
}

/**
 * Called whenever the "Undo!" button is clicked.
 * Should undo the last action.
 */
function undo() {
    if (actions.length === 0) {
        alert("There is nothing to undo!");
    } else {
        const lastAction = actions.pop();
        if(lastAction.action === 'add') {
            story.pop();
        } else if (lastAction.action === 'remove') {
            story.push(lastAction.txt);
        } else {
            console.error("This should never happen!");
        }
        updateStory();
    }
    
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
