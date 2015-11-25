/* eslint no-unused-expressions:0 */
import { expect } from 'chai';
import request from 'supertest';

import { app } from '../src/app';

describe('routing index', () => {
  it('should respond 200 index', (done) => {
    request(app)
      .get('/')
      .end((err, ret) => {
        if (err) throw err;

        expect(ret.res.headers['content-type'])
          .to.equal('text/html; charset=utf-8');

        expect(ret.res.statusCode).to.equal(200);
        done();
      });
  });
});

describe('routing circle', () => {
  it('should respond 200 with message', (done) => {
    request(app)
      .get('/circles')
      .end((err, ret) => {
        if (err) throw err;

        expect(ret.res.statusCode).to.equal(200);
        done();
      });
  });
});

describe('routing checks', () => {
  it('should respond 200 with message', (done) => {
    request(app)
      .get('/checks')
      .end((err, ret) => {
        if (err) throw err;

        expect(ret.res.statusCode).to.equal(200);
        done();
      });
  });
});
