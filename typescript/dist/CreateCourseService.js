"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ? vai definir que vai ser um atributo opcional
class CreateCouseService {
    execute({ duration = 8, instructor, name }) {
        console.log(name, duration, instructor);
    }
}
exports.default = new CreateCouseService();
