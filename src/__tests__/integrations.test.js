import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';

import Root from '../Root';
import App from '../components/App';

let wrapped = null;

beforeEach(() => {
  moxios.install();
  moxios.stubRequest('https://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{ id: 1, body: 'Comment 1' }, { id: 2, body: 'Comment 2' }]
  });

  wrapped = mount(
    <Root>
      <App />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
  wrapped = null;

  moxios.uninstall();
});

it('can fetch a list of comments and display them', async () => {
  wrapped.find('.fetch-comments').simulate('click');
  const promise = new Promise(resolve => moxios.wait(() => resolve()));
  await promise;
  wrapped.update();
  expect(wrapped.find('li').length).toEqual(2);

  // moxios.wait(() => {
  //   wrapped.update();
  //   expect(wrapped.find('li').length).toEqual(2);
  //   done();
  // });
});
