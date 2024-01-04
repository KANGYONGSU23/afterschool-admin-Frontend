import { http, HttpResponse } from "msw";
import user from "./user.json";

export const userHandler = [
  //user정보 불러오기
  http.get("/user/:id", ({ params }) => {
    const { id } = params;
    return HttpResponse.json(user.filter((item) => item.id === id)[0]);
  }),
];
