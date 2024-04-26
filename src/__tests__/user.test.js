import { username, city, image } from "../data/user";

test("username, city, and image are all exported", () => {
  expect(username).toEqual("Liza");
  expect(city).toEqual("NewYork");
  expect(image).toEqual("https://i.imgur.com/mV8PQxj.gif");
});
