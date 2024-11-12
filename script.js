let username = prompt('WHAT IS YOUR NAME')
let userquest = prompt('WHAT IS YOUR QUEST')
let userfavcolor = prompt('WHAT IS YOUR FAVORITE COLOR')
let swallowirspeed = prompt('WHAT IS THE AIR SPEED OF AN UNLAIDEN SWALLOW')


let mystory = `<p> hello ${username}. Answer me thse questions <span class="loud">three</span>, and the other side you'll see. </p>

<p> i see you have aalready answered, so ypur quest is to ${userquest} </p>
`



document.getElementById('story').innerHTML = myStory
