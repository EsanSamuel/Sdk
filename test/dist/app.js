"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sdk_test_1 = __importDefault(require("sdk-test"));
const client = new sdk_test_1.default({
    apiKey: "123",
});
client
    .createPost({
    title: "hi",
    body: "yoo",
    userId: 1,
})
    .then((post) => console.log(`New Post created at ${post.id}`));
