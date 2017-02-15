import Test from 'ava';
import * as Assignment from '../src';

Test('traverses properly', t => {

  console.log(Assignment.traverse([
    [1, 2, 3],
    [1, 2, 3, 4],
    [1, 2]
  ]));
  t.truthy({});
});
