import { checkUUID } from './main';

describe('checkUUID', () => {
  it('should return the id', () => {
    const sampleId = '13f3ef58-669f-4dde-8383-52e842ead111';
    expect(checkUUID(sampleId)).toEqual(sampleId);
  });
});
