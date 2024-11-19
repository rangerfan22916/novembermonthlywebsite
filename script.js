function updateStory() {
  const fields = [
      "adjective1", "animal1", "name", "adjective2", "color",
      "noun1", "place", "adjective3", "animal2", "verb1",
      "adjective4", "adjective5", "adjective6", "noun2", "verb2",
      "emotion", "adjective7", "noun3"
  ];

  fields.forEach(field => {
      const value = document.getElementById(field).value || "______";
      document.getElementById(`span-${field}`).textContent = value;
  });
}
