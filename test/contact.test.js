import {createTestUser, removeAllTestContact, removeTestUser} from "./test-util.js";
import supertest from "supertest";
import {web} from "../src/application/web.js";


describe('POST /api/contact', () => {
    beforeEach(async () => {
        await createTestUser();
    })

    afterEach(async () => {
        await  removeAllTestContact();
        await  removeTestUser();
    })


    it('should can create new contact', async () => {
        const result = await supertest(web)
            .post('/api/contacts')
            .set('Authorization', 'test')
            .send({
                first_name: 'test',
                last_name: 'test',
                email: 'test@test.com',
                phone: '123456789'
            });



        expect(result.status).toBe(200);
        expect(result.body.data.id).toBeDefined();
        expect(result.body.data.first_name).toBe('test');
        expect(result.body.data.last_name).toBe('test');
        expect(result.body.data.email).toBe('test@test.com');
        expect(result.body.data.phone).toBe('123456789');


    })
})