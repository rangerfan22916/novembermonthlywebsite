document.getElementById('generateStory').addEventListener('click', function () {
    const noun = document.getElementById('noun').value;
    const verb = document.getElementById('verb').value;
    const adjective = document.getElementById('adjective').value;
    const animal = document.getElementById('animal').value;
    const name = document.getElementById('name').value;
    const team = document.getElementById('team').value;
    const place = document.getElementById('place').value;
    const emotion = document.getElementById('emotion').value;
    const number = document.getElementById('number').value;
    const food = document.getElementById('food').value;
    const color = document.getElementById('color').value;

    if (noun && verb && adjective && animal && name && team && place && emotion && number && food && color) {
        const story = `
            <p>In a small, enchanted village nestled at the edge of a shimmering ${place}, there lived a ${adjective} ${noun} named ${name}. Known for their curious spirit and boundless energy, ${name} woke up one morning with an unshakable urge to ${verb}. Packing a small satchel with essentials (and a generous helping of ${food}), ${name} set off on an adventure unlike any other.</p>

            <p>The ${place} was alive with the sights and sounds of nature. Birds chirped melodiously, and the ${color} leaves rustled in a gentle breeze. As ${name} ventured deeper into the forest, they stumbled upon a hidden clearing. There, they found ${number} ${animal}s engaged in what could only be described as an epic game of ${team}-style soccer! Intrigued, ${name} approached, and to their surprise, the ${animal}s invited them to join the game.</p>

            <p>Despite initial nerves, ${name} quickly found their rhythm. Their ${adjective} moves on the field left everyone in awe. The game was intense, with laughter, friendly banter, and daring plays filling the air. When the final whistle blew, ${name}'s team emerged victorious. The ${animal}s roared with excitement, hoisting ${name} up on their shoulders. In that moment, ${name} felt a mix of ${emotion} and pride—it was a day to remember.</p>

            <p>To celebrate, the group gathered around a crackling fire as the ${color} sky turned to twilight. Plates of ${food} were passed around, and stories of legendary adventures were shared. One ${animal}, the leader of the ${team}, told ${name} about a secret treasure hidden within the ${place}. Energized by the tale, ${name} vowed to return one day to uncover it, marking the start of a lifelong friendship with the ${animal}s and an unforgettable chapter in their story.</p>

            <p>As the night wore on and the stars sparkled above, ${name} knew this was more than just a game or a chance meeting. It was a reminder that the best adventures are often unplanned, fueled by a little curiosity, a pinch of courage, and a hearty dose of ${food}. And thus, the tale of ${name} and the legendary ${team} in the magical ${place} became one that would be told for generations.</p>
        `;

        document.getElementById('story').innerHTML = story;

        const videoContainer = document.createElement('div');
        videoContainer.innerHTML = `
            <h2>Watch this YouTube video!</h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/FqC2lO3Yy_4?list=PLPPomK5QKeyWV7PYC9s-PxrDhVIDpt4Oe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `;
        document.getElementById('video-container').appendChild(videoContainer);
    } else {
        document.getElementById('story').innerHTML = `<p>Please fill out all fields to generate a story.</p>`;
    }
});
