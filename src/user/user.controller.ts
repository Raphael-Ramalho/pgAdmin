import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserRepository } from './user.repository';

/**
 * Controllers are responsible for handling incoming requests and sending responses back to the client.
 * Often, a controller has multiple routes and each route can perform a different action
 */

/**
 * The following decorator signals nestJS that the class UserController serve as a controller.
 * To access this route, connect to localhost:3000/users
 */
@Controller('/users')
export class UserController {
  /* 
The constructor enables you to provide any custom initialization that must be done before
any other methods can be called on an instantiated object.

Ex: 
class Person{
    constructor(name){
        this.name = name
    }
    introduce(){
        console.log("hello, my name is ${this.name}")
    }
}
const otto = new Person("Otto")
  */

  /** By declaring userRepository inside constructor, nestJs instantiate it automatically.
   * similar as
   * const userRepository = new UserRepository()
   *
   * To implement it, look at comments on file user.repository.ts
   */
  constructor(private userRepository: UserRepository) {}

  @Get()
  listUsers() {
    return this.userRepository.list();
  }

  @Post() //signals that the following method will be called on post
  createUser(@Body() userData: unknown) {
    //@Body() indicate that the userData will come from the body request

    this.userRepository.save(userData);

    return { status: 'user created!', data: userData };
  }
}
