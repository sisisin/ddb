/* eslint no-unused-expressions:0 */
const expect = require('chai').expect;
const sinon = require('sinon');
const db = require('../../src/models/');

import { getChecks, postChecks } from '../../src/routes/checks';

describe('getChecks', () => {
  let req, res, spy;

  beforeEach(() => {
    req = res = {};
    spy = res.render = sinon.spy();
  });
  it('should called once', () => {
    return getChecks(req, res)
      .then((db) => {
        expect(spy.calledOnce).to.equal(true);
      }, (err) => expect(err).to.equal(null));
  });
  it('should renderd "/checks"', () => {
    return getChecks(req, res)
      .then(
        () => expect(spy.args[0][0]).to.equal('checks')
        , (err) => expect(err).to.equal(null)
      );
  });
  it('should called with eventName, spPrefix,etc...', () => {
    const params = {
      title: 'checks'
      , checks: [
        {
          eventName: 'コミックマーケット89 3日目'
          , spPrefix: 'シ'
          , spNo: 71
          , spAlphabet: 'a'
          , circleName: 'にのこや'
          , notificationURL: 'http://www.pixiv.net/member.php?id=204506'
        }
        , {
          eventName: 'コミックマーケット88 3日目'
          , spPrefix: 'シ'
          , spNo: 21
          , spAlphabet: 'a'
          , circleName: 'にのこや'
          , notificationURL: 'http://www.pixiv.net/member.php?id=204506'
        }
      ]
    };

    return getChecks(req, res)
      .then(
        () => expect(spy.args[0][1]).to.deep.equal(params)
        , (err) => expect(err).to.equal(null)
      );
  });
});
