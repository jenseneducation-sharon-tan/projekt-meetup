const defaultData = {
  events: [
    {
      id: 1,
      name: "Meditation and well-being",
      image: "meditate",
      date: "THU, SEPT 17,",
      time: " 17:30",
      location: "Stockholm",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique tempora mollitia hic sequi quaerat optio neque! Quibusdam totam ut fuga perferendis illum odio necessitatibus! Repudiandae ipsam omnis magni laudantium eaque",
      attendees: 10,
    },
    {
      id: 2,
      name: "Halloween home deco ideas",
      image: "halloween",
      date: "TUE, OCT 20,",
      time: " 14:00",
      location: "Stockholm",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique tempora mollitia hic sequi quaerat optio neque! Quibusdam totam ut fuga perferendis illum odio necessitatibus! Repudiandae ipsam omnis magni laudantium eaque",
      attendees: 15,
    },
    {
      id: 3,
      name: "Amigurumi learn to crochet",
      image: "amigurumi",
      date: "SUN, NOV 1,",
      time: " 09:30",
      location: "Stockholm",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique tempora mollitia hic sequi quaerat optio neque! Quibusdam totam ut fuga perferendis illum odio necessitatibus! Repudiandae ipsam omnis magni laudantium eaque",
      attendees: 7,
    },
    {
      id: 4,
      name: "Serial programming session",
      image: "programming",
      date: "WED, SEPT 30,",
      time: " 12:00",
      location: "Stockholm",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique tempora mollitia hic sequi quaerat optio neque! Quibusdam totam ut fuga perferendis illum odio necessitatibus! Repudiandae ipsam omnis magni laudantium eaque",
      attendees: 20,
    },
    {
      id: 5,
      name: "Fengshui your home for inner peace",
      image: "fengshui",
      date: "MON, NOV 30,",
      time: " 10:30",
      location: "Stockholm",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique tempora mollitia hic sequi quaerat optio neque! Quibusdam totam ut fuga perferendis illum odio necessitatibus! Repudiandae ipsam omnis magni laudantium eaque",
      attendees: 18,
    },
    {
      id: 6,
      name: "Speak chinese - 学中文",
      image: "chinese",
      date: "THU, DEC 10,",
      time: " 11:30",
      location: "Stockholm",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique tempora mollitia hic sequi quaerat optio neque! Quibusdam totam ut fuga perferendis illum odio necessitatibus! Repudiandae ipsam omnis magni laudantium eaque",
      attendees: 10,
    },
    {
      id: 7,
      name: "Zumba your way to fitness",
      image: "zumba",
      date: "SUN, SEPT 20,",
      time: " 09:30",
      location: "Stockholm",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique tempora mollitia hic sequi quaerat optio neque! Quibusdam totam ut fuga perferendis illum odio necessitatibus! Repudiandae ipsam omnis magni laudantium eaque",
      attendees: 14,
    },
    {
      id: 8,
      name: "Spice and pan - Asian culinary",
      image: "cooking",
      date: "TUE, DEC 1,",
      time: " 10:00",
      location: "Stockholm",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique tempora mollitia hic sequi quaerat optio neque! Quibusdam totam ut fuga perferendis illum odio necessitatibus! Repudiandae ipsam omnis magni laudantium eaque",
      attendees: 8,
    },
  ],
};

// Försök 2, localStorage
function getEvents() {
  const LS_KEY = "viewlist-events";
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

export { getEvents };
