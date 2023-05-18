import { Request, Response } from "express";
import { prismaClient } from "../prismaClient";


export class CreateController {
    async handle(request: Request, response: Response) {

        const { email, name } = request.body;

        try {

            const user = await prismaClient.user.create({
                data: {
                    email,
                    name
                },
            });

            return response.json(user);
        }
        catch (error) {

            console.error(error);
            return response.status(500).json({ error: "Erro ao cadastrar usuário" });
        }
    }
}

export class FindController {
    async handle(request: Request, response: Response) {

        const { email, name } = request.body;

        try {

            const user = await prismaClient.user.findMany({
                where: {
                    email,
                    name
                },
            });

            return response.json(user);
        }
        catch (error) {

            console.error(error);
            return response.status(500).json({ error: "Erro ao cadastrar usuário" });
        }
    }
}

export class UpdateController {
    async handle(request: Request, response: Response) {

        const { email, name } = request.body;

        try {

            const user = await prismaClient.user.update({
                where: {
                    email
                },
                data: {
                    email,
                    name
                }
            });

            return response.json(user);
        }
        catch (error) {

            console.error(error);
            return response.status(500).json({ error: "Erro ao cadastrar usuário" });
        }
    }
}

export class DeleteController {
    async handle(request: Request, response: Response) {

        const { email } = request.body;

        try {

            const user = await prismaClient.user.delete({
                where: {
                    email
                }
            });

            return response.json(user);
        }
        catch (error) {

            console.error(error);
            return response.status(500).json({ error: "Erro ao cadastrar usuário" });
        }
    }
}
