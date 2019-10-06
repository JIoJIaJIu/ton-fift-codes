// TODO: use Array
import * as _ from 'lodash'

const data = [
  // asm, code, alias, stack, desc
  [ "CTOS", '', null, '', "Cell to Slice"],
  [ "DUP", '', "PUSH s0", null, null ],
  [ "INC", '', "ADDCONST 1", null, null ],
  [ "INT", '', '', "(b x - b')", null ],
  [ "LDSLICEX", null, null, "(s l - s′′s′)", "loads the first 0 ≤ l ≤ 1023bits from Slices into a separateSlices′′, returning the remainder of s a s`" ],
  [ "STUcc+1", null, null, "(x b - b′)", "stores an unsigned cc+1-bit integer x into Builder b" ],
  [ "LDUcc+1", null, null, "(s - x s′)", "loads an unsigned cc+1-bit integer x from Slices" ],
  [ "PLDUcc+1", null, null, "(s - x)", "preloads an unsigned cc+1-bit integer froms." ],
  [ "SETCODE", "x{FB04}", null, "(c - )", "creates an output action that would change this smart contract code to that given by Cellc." ]
];

const instructions = _.map(data, ([asm, code, alias, stack, desc]) => ({
  asm,
  code,
  alias,
  stack,
  desc
}));

export default instructions;
