enum UserRole {
  ADMIN,
  USER,
  GUEST
}

let role: UserRole = UserRole.ADMIN;

console.log(role);           // 0
console.log(UserRole.ADMIN); // 0
console.log(UserRole[0]);    // ADMIN