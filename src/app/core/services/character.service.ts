import { Injectable } from '@angular/core';
import { EntityServiceBase, EntityServiceFactory } from 'ngrx-data';
import { Character } from '../model';

@Injectable()
export class CharacterService extends EntityServiceBase<Character> {
  constructor(entityServiceFactory: EntityServiceFactory) {
    super('Character', entityServiceFactory);
  }
}
