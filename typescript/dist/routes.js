"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CreateCourseService_1 = __importDefault(require("./CreateCourseService"));
function CreateCouseService(request, response) {
    CreateCourseService_1.default.execute({
        name: "NodeJS",
        instructor: 'Kauan Cleuton',
        duration: 10
    });
    CreateCourseService_1.default.execute({
        name: "React",
        instructor: 'Raul Cleuton',
    });
    return response.send();
}
exports.default = CreateCouseService;
