/* eslint no-unused-expressions:0 */
import { expect } from 'chai';
import sinon from 'sinon';

import { getCircles } from '../../src/routes/circles';

describe('route circles', () => {
  let req, res, spy;

  beforeEach(() => {
    req = res = {};
    spy = res.render = sinon.spy();
  });
  it('should called once', () => {
    return getCircles(req, res)
      .then((db) => {
        expect(spy.calledOnce).to.equal(true);
      }, (err) => expect(err).to.equal(null));
  });
  it('should called with name, author, pixivURL', () => {
    return getCircles(req, res)
      .then(
        () => expect(spy.args[0][0]).to.equal('circles')
        , (err) => expect(err).to.equal(null)
      );
  });
  it('should callsed with name, author, pixivURL', () => {
    const params = {
      title: 'circles'
      , circles: [
        {
          name: 'にのこや'
          , author: 'にのこ'
          , pixivURL: 'http://www.pixiv.net/member.php?id=204506'
        }
        , {
          name: 'まろん☆まろん'
          , author: 'まろん☆まろん'
          , pixivURL: 'http://www.pixiv.net/member.php?id=4727246'
        }
      ]
    };

    return getCircles(req, res)
      .then(
        () => expect(spy.args[0][1]).to.deep.equal(params)
        , (err) => expect(err).to.equal(null)
      );
  });
});
