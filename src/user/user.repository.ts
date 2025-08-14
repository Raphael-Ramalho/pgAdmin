import { Injectable } from '@nestjs/common';
/**
 * The Repository class encapsulate all database operations related to a specific entity.
 * It is consumed by the controller class.
 */

/**
 * The injectable declare that the UserRepository class is a provider, enabling it to be
 * injected as a dependency on an controller. Look up on user.controller.ts. It should also
 * be imported on user module as a provider
 */
@Injectable()
export class UserRepository {
  private users: unknown[] = [];

  list() {
    return this.users;
  }

  save(user: unknown) {
    this.users.push(user);
  }
}
