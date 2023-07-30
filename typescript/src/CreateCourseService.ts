
interface Course {
    name: string;
    duration?:number;
    instructor: string;
}
// ? vai definir que vai ser um atributo opcional


class CreateCouseService {
   
    execute({duration = 8, instructor, name}: Course) {
        console.log( name, duration, instructor)
    }
}
export default new CreateCouseService()