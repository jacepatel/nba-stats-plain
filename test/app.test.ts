import App from '../lib/app';

test('basic', () => {
  expect(App.testReturnOne()).toBe(1);
});