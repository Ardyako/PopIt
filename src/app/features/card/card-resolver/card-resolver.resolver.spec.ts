import { TestBed } from '@angular/core/testing';

import { CardResolverResolver } from './card-resolver.resolver';

describe('CardResolverResolver', () => {
  let resolver: CardResolverResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CardResolverResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
