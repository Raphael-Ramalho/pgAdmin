import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

/**
 * DTO -> Data Transfer Object
 *
 * Simple object that contains data type and may have some validation logic. Used to
 * transfer data between client and server or between different layers of the server-side
 *
 * Useful to validate if data from client is in the correct format
 *
 * Should be used on all server data entry points and, ideally, on the exits as well
 */

export class CreateUserDto {
  @IsNotEmpty({ message: 'Name should not be empty!' })
  name: string;

  @IsEmail(undefined, { message: 'Provided email is invalid!' })
  email: string;

  @MinLength(6, { message: 'Password should have at least 6 character!' })
  password: string;
}
