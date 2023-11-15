import { User } from "./models/user.model";
import bcrypt from "bcryptjs";

export const sampleUsers: User[] = [
  {
    id: "001",
    name: "Angel",
    email: "admin@example.com",
    password: bcrypt.hashSync("12345"),
    isAdmin: true,
  },
  {
    id: "002",
    name: "Albert",
    email: "user@example.com",
    password: bcrypt.hashSync("67890"),
    isAdmin: false,
  },
];
