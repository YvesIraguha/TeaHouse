import dotenv from "dotenv";

dotenv.config();

export const individualPiece = {
  title: "ut labore et dolore magna",
  author: "Yves Iraguha",
  body:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  type: "Short story"
};

export const collection2 = {
  title: "Hello world Issues collection",
  author: "Yves Iraguha",
  type: "Issues"
};

export const collection = {
  ...collection2,
  previewPublicId: "q2vfycilkbcm68il25fj",
  collectionPublicId: "g04uocbpfpctngkp4slq",
  previewUrl:
    "http://res.cloudinary.com/yvesiraguha/image/upload/v1574239109/q2vfycilkbcm68il25fj.png",
  collectionUrl:
    "http://res.cloudinary.com/yvesiraguha/image/upload/v1574239103/g04uocbpfpctngkp4slq.pdf"
};

export const uploadResponse = {
  public_id: "gepwc2x39kxivrm66ioy",
  version: 1574308895,
  signature: "597a4e4e32e1cef3bc84803ba9119d9678ddaee6",
  width: 937,
  height: 556,
  format: "png",
  resource_type: "image",
  created_at: "2019-11-21T04:01:35Z",
  tags: [],
  bytes: 42188,
  type: "upload",
  etag: "b442d1f752da5b9ed9c41e1d371b0bab",
  placeholder: false,
  url:
    "http://res.cloudinary.com/yvesiraguha/image/upload/v1574308895/gepwc2x39kxivrm66ioy.png",
  secure_url:
    "https://res.cloudinary.com/yvesiraguha/image/upload/v1574308895/gepwc2x39kxivrm66ioy.png"
};

export const uploadResponse2 = {
  public_id: "xp9pdn8b2n5uyca568kp",
  version: 1574308890,
  signature: "294545a612d0653c666e1fdf5ddaf5b034a934d9",
  width: 252,
  height: 329,
  format: "pdf",
  resource_type: "image",
  created_at: "2019-11-21T04:01:30Z",
  tags: [],
  pages: 306,
  bytes: 4134597,
  type: "upload",
  etag: "3ea10b80525986dd4c01dbf23678272f",
  placeholder: false,
  url:
    "http://res.cloudinary.com/yvesiraguha/image/upload/v1574308890/xp9pdn8b2n5uyca568kp.pdf",
  secure_url:
    "https://res.cloudinary.com/yvesiraguha/image/upload/v1574308890/xp9pdn8b2n5uyca568kp.pdf"
};

export const deleteCollectionResult = { result: "ok" };
export const token = process.env.TOKEN;
export const userToken = process.env.USER_TOKEN;
export const pieceId = "998dff5c-9ade-473c-9497-33f2b300d89d";
export const deleteId = "35f38664-9d42-40a5-97ba-29786b07ac69";
export const wrongId = "35f38664-9d42-40c5-97ba-29786b07ac6f";
