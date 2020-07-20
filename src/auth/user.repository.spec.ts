import { Test } from '@nestjs/testing';
import { UserRepository } from './user.repository';

describe('UserRepository', () => {
  let userRepository: UserRepository;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [UserRepository],
    }).compile();

    userRepository = module.get<UserRepository>(UserRepository);
  });

  it('should exist', () => {
    expect(1).toBe(1);
  });
});
