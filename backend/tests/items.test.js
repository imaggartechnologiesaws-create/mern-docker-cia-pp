import request from 'supertest';
import app from '../app.js';

describe('GET /api/items', () => {
  it('should return 200', async () => {
    const res = await request(app).get('/api/items');
    expect(res.statusCode).toBe(200);
  });
});





