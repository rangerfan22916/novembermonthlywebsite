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
            <p>One day, a ${adjective} ${noun} named ${name} decided to ${verb} through the ${place}. The sun was shining bright, and the air was crisp, making it the perfect day for an adventure. As ${name} wandered deeper into the ${place}, they felt a sudden wave of ${emotion}. They were about to meet a ${number} ${animal}s who were part of the famous ${team} team.</p>
            
            <p>The ${animal}s were excited to see ${name} and offered to share a delicious plate of ${food} with them. The ${color} sky and the scent of the ${food} in the air made everything feel magical. After enjoying the meal, the group decided to race to the top of a hill, where the view was supposed to be the best. Who would win? The ${adjective} ${animal}? Or ${name}?</p>
            
            <p>As they raced, ${name} could feel the energy in their legs growing stronger. The ${animal}s were fast, but ${name} wasn’t going to let them win that easily. With one final push, ${name} sprinted to the top, crossing the finish line with a victorious yell. The ${team} cheered, and the celebration continued with even more ${food} and laughs under the ${color} sky.</p>
            
            <p>Everyone was happy, but ${name} felt something more—something deep inside that told them this was just the beginning of their greatest adventure yet. After all, who would have thought that a simple trip to the ${place} would turn into such an unforgettable day? It was the perfect combination of ${adjective} moments, wild animals, and a team that never gave up. And that’s how the legend of ${name} and the ${color} ${animal} was born.</p>
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
