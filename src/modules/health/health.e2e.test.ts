import { Application } from '../../app';
import { createTestingApp } from '../../tests/testing-app';
import request from 'supertest';
import assert from 'assert';

describe('health module e2e', () => {
  let app: Application;

  beforeEach(async (): Promise<void> => {
    app = await createTestingApp();
  });

  describe('GET /health', () => {
    it('responds with proper data', () => {
      request(app)
        .get('/health')
        .expect(200)
        .then((response) => {
          assert.deepStrictEqual(response.body, {
            http: true,
          });
        });
    });
  });
});
