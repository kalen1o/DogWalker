 let data={
  dog:[
    {
      text:"Dog Boarding" ,
      icon: "suitcase-rolling" ,
      timeOfTheDay: "day",
      description: "Perfect if you need overnight pet care.",
      name: 'Step1',
      value: "Dog-Boarding"
  },
    {
      text:"House Sitting" ,
      icon: "home" ,
      timeOfTheDay: "day",
      description:"Great if you need overnight pet or house-sitting services.",
      name: 'Step1',
      value: "House-Sitting"
    },
    {
      text:"Drop-In Visits" ,
      icon: "walking",
      timeOfTheDay: "day",
      description:"Whenever your dog needs a walk.",
      name: 'Step2',
      value: 'Drop-In-Visits'
    },
    {
      text:"Doggy Day Care" ,
      icon: "sun",
      timeOfTheDay: "night",
      description:"Daytime pet care in your sitter’s dog-friendly home." ,
      name: 'Step2',
      value: "Doggy-Day-Care"
    },
    {
      text:"Dog Walking" ,
      icon: "dog",
      timeOfTheDay: "night" ,
      description: "For check-ins and play dates.",
      name: 'Step2',
      value: "Dog-Walking"
    }
  ],
  cat:[
    {text:"Cat Boarding" , icon: "cat" },
    {text:"House Sitting" , icon: "home" },
    {text:"Drop-In Visits" , icon: "walking" }
  ],
  weights:[

    { dogSize:" Small", weight:"0-6 kg", name:" Small",},
    { dogSize:" Medium", weight:"7-18 kg", name:" Medium"},
    {dogSize:" Large" , weight:"19-45 kg", name:" Large"},
    {dogSize:" Giant",weight:"46+ kg", name:" Giant"}
  ],
  daysOfTheWeek:[
    {day:"Sunday", value:"Sun", id: 101},
    {day:"Monday", value:"Mon", id: 102},
    {day:"Tuesday", value:"Tue", id: 103},
    {day:"Wednesday", value:"Wed", id: 104},
    {day:"Thursday", value:"Thu", id: 105},
    {day:"Friday", value:"Fri", id: 106},
    {day:"Saturday", value:"Sat", id: 107}
  ],
  oftenNeedService:[
    {text:"One Time", icon: "calculator", value: "One-Time"},
    {text:"Repeat Weekly", icon: "sync", value: "Repeat-Weekly"}
  ]
}

export default data
