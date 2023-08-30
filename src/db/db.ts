 const Users = [
  {
    username: "Isac",
    password: "123",
    role: "USER",
    todos: [],
    settings: [],
  },
  {
    username: "Admin",
    role: "ADMIN",
    password: "123",
    todos: [
      {
        Title:"WOOP",
        desc:"Ät upp daniellas kakor när hon inte ser (för hennes skull)"
      },
      {
        Title:"BAJSLÄDER",
        desc:"Mmm läder"
      }
    ],
    settings: [],
  },
];

// export const Admin = [
//   {
//     username: "Admin",
//     role: "ADMIN",
//     todos: [],
//     settings: [],
//   },
// ];

export default Users;
// export { Users }