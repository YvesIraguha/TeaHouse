import dotenv from "dotenv";

dotenv.config();

export const individualPiece = {
  title: "ut labore et dolore magna",
  author: "Yves Iraguha",
  body:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  type: "Short story"
};

export const token = process.env.TOKEN;
export const userToken = process.env.USER_TOKEN;
export const pieceId = "998dff5c-9ade-473c-9497-33f2b300d89d";
export const deleteId = "35f38664-9d42-40a5-97ba-29786b07ac69";
export const wrongId = "35f38664-9d42-40c5-97ba-29786b07ac6f";
