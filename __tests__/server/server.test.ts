import request from 'supertest';
import app from '../../src/server/server';

describe('Server', () => {
  let server;

  beforeAll(() => {
    server = app.listen(3000);
  });

  afterAll((done) => {
    server.close(done);
  });

  it('should return a 200 response for GET', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello, Personal Blog')
  });
});
