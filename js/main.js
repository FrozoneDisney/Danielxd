var list = document.getElementById("daniel0iq");
var valuelist = [[]]
var oldValue = [];
var oldChar;
var numberOfCheckboxes = 5;
var numberOfCharacters = 4;

document.getElementById('resetbtn').onclick = reset;


function updateList(char)
{
    saveInfoBasedOnChar(oldChar);
    
    if(valuelist[char] != null)
    {
        for(var i = 0; i < numberOfCheckboxes; i++)
        {
            document.getElementById(`checkbox${i}`).checked = valuelist[char][i];
        }
    }
    else
    {
        for(var i = 0; i < numberOfCheckboxes; i++)
        {
            document.getElementById(`checkbox${i}`).checked = false;
        }
    }

    oldChar = char;
    
}

function saveInfoBasedOnChar(char)
{
    valuelist[char] = [];
    for(var i = 0; i < numberOfCheckboxes; i++)
    {
        valuelist[char].push(document.getElementById(`checkbox${i}`).checked);
    }
}

window.onload = (event) =>
{
    for(var i = 0; i < numberOfCheckboxes; i++)
    {
        oldValue.push(document.getElementById(`checkbox${i}`).checked);
    }
    valuelist[0] = oldValue;
    oldChar = 0;
}

function reset()
{
    valuelist = [[]];
    emptyList();
}

function emptyList()
{
    for(var i = 0; i < numberOfCheckboxes; i++)
    {
        document.getElementById(`checkbox${i}`).checked = false;
    }
}