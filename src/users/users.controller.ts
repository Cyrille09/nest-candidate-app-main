import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

/**
 * users controller
 */
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  /**
   * GET: /users
   * Returns all users
   */
  @Get()
  getUsers(): any[] {
    return this.usersService.getUsers();
  }
}
