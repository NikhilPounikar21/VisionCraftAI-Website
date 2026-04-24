import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api",
});

export const GenerateAIImage = async (data) =>
  await API.post("/generateImage", data);

export const CreatePost = async (data) =>
  await API.post("/post", data);

export const GetPosts = async () =>
  await API.get("/post");