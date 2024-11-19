function generateStory() {
  const adjective1 = document.getElementById('adjective1').value;
  const name = document.getElementById('name').value;
  const animal = document.getElementById('animal').value;
  const verb1 = document.getElementById('verb1').value;
  const noun1 = document.getElementById('noun1').value;
  const adjective2 = document.getElementById('adjective2').value;
  const place = document.getElementById('place').value;
  const verb2 = document.getElementById('verb2').value;
  const food = document.getElementById('food').value;
  const emotion = document.getElementById('emotion').value;
  const color = document.getElementById('color').value;


  const story = `
      It was a ${adjective1} morning when ${name} laced up their skates for the biggest game of the season. 
      The rink was packed, and the crowd was roaring as they watched the ${adjective2} game unfold. 
      ${name} was ready to hit the ice, but before they could even step on, a wild ${animal} appeared on the ice, 
      skating around with an incredible ${noun1} in its paws. 

      The crowd went wild as the ${animal} challenged ${name} to a one-on-one shootout. 
      Without hesitation, ${name} grabbed their stick, ready to show off their ${adjective2} moves. 
      They started skating, but the ${animal} was faster than expected! It ${verb1} across the ice, 
      leaving ${name} in the dust as they tried to chase it down. 

      But suddenly, the puck flew into the air and landed in a pile of ${food}, where ${name} and the ${animal} 
      had to stop and decide whether to eat or keep playing. After a quick snack, they both got back on the ice, 
      and the game continued with even more intensity. 

      Just when it looked like ${name} would score the winning goal, a massive ${color} wall of ice appeared, 
      blocking their shot! In the blink of an eye, they had to ${verb2} past the wall, but it wasn’t easy. 
      With a last-second move, ${name} slipped the puck past the wall and into the goal, scoring the winning point! 
      The crowd erupted in applause as ${emotion} spread across ${name}'s face. 

      In the end, ${name} was crowned the MVP of the game and celebrated with their teammates, 
      while the ${animal} went off to find another adventure. The story of the wild hockey game would be told 
      for years to come, and ${name} would always be remembered as the player who defeated a ${animal} in a shootout! 
  `;


  document.getElementById('story').innerHTML = story;
}
