import { Request, Response } from "express";
import CreateCourseService from "./CreateCourseService";

export default function CreateCouseService(request: Request, response: Response) {
    CreateCourseService.execute({
        name: "NodeJS",
        instructor: 'Kauan Cleuton',
        duration: 10
    })

    CreateCourseService.execute({
        name: "React",
        instructor: 'Raul Cleuton',
    })
    return response.send()
}