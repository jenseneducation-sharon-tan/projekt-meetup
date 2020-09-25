const defaultData = {
  history: [
    {
      id: 9,
      name: "Afterwork kayaking",
      image: "kayak",
      date: "THU, APR 17,",
      time: " 17:30",
      location: "Stockholm",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique tempora mollitia hic sequi quaerat optio neque! Quibusdam totam ut fuga perferendis illum odio necessitatibus! Repudiandae ipsam omnis magni laudantium eaque",
      attendees: 8,
    },
    {
      id: 10,
      name: "Wedding planning - The must know",
      image: "wedding",
      date: "TUE, JAN 20,",
      time: " 14:00",
      location: "Stockholm",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique tempora mollitia hic sequi quaerat optio neque! Quibusdam totam ut fuga perferendis illum odio necessitatibus! Repudiandae ipsam omnis magni laudantium eaque",
      attendees: 15,
    },
    {
      id: 11,
      name: "Jazz nite",
      image: "jazz",
      date: "SUN, MAR 20,",
      time: " 19:30",
      location: "Stockholm",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique tempora mollitia hic sequi quaerat optio neque! Quibusdam totam ut fuga perferendis illum odio necessitatibus! Repudiandae ipsam omnis magni laudantium eaque",
      attendees: 7,
    },
  ],
};

// Försök 2, localStorage
function getPastEvents() {
  const LS_KEY = "viewlist-history";
  let fromLs = localStorage.getItem(LS_KEY);

  if (!fromLs) {
    localStorage.setItem(LS_KEY, JSON.stringify(defaultData));
    fromLs = localStorage.getItem(LS_KEY);
  }

  return JSON.parse(fromLs);
}

/*
  // Försök 1, enklast möjliga
  function getAnimals() {
	  return [
		  { id: 1, animal: 'häst', from: 'Norge' },
		  { id: 2, animal: 'ekorre', from: 'Schweiz' },
		  { id: 3, animal: 'giraff', from: 'Kenya' },
		  { id: 5, animal: 'yeti', from: 'Alperna' }
	  ]
  }*/

export { getPastEvents };
