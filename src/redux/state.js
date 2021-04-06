let state = {
   profilePage: {
    posts: [
      { id: 1, message: "Hi, how are you", likesCount: 11, dislike: 1 },
      { id: 2, message: "It is very well", likesCount: 9 },
      { id: 3, message: "Welcome", likesCount: 5 },
    ],
  },
  dataPage: {
    dialogData: [
      { id: 1, name: "Boka" },
      { id: 2, name: "Vasyl" },
      { id: 3, name: "Solo" },
      { id: 4, name: "Nata" },
      { id: 5, name: "Vitaliy" },
    ],
    messagesData: [
      { id: 1, message: "It is ok" },
      { id: 2, message: "Very good" },
      { id: 3, message: "Be happy" },
      { id: 4, message: "Best" },
      { id: 5, message: "Fine" },
    ],
  },
  sidebar: [
    {id: 1, name: 'Name1'},
    {id: 2, name: 'Name2'}
  ]
};
export default state;
