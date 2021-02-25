import request from "supertest";
import app from "../shared/http/app";
import createConnection from '../shared/typeorm';

describe("User",()=>{

    beforeAll(async() => {
        const connection  = await createConnection();
        await connection.runMigrations();
    });

    it("Should to able to create a new user",async()=>{
            const response = await request(app).post("/users").send({
                name:"User example",
                email:"user@example.com",
                
            });
            expect(response.status).toBe(201);
    })
    it("should not be able to create a user with exists email",async ()=>{
        const response = await request(app).post("/users").send({
                name:"User example",
                email:"user@example.com",
                
            });
            expect(response.status).toBe(400);
    })

   
});