import { Injectable } from '@nestjs/common';

// Add injectable decorator
@Injectable()
export class UsersService {
  /**
   * In the future I may like to revove users array list from users.services.ts,
   * because I might need users list array to get a specific user.
   * Also, create utils file and add any reusable code or function.
   * @returns
   */
  getUsers(): any[] {
    return [
      {
        id: 1,
        firstName: 'Oliver',
        lastName: 'Gartland',
      },
      {
        id: 2,
        firstName: 'Anna',
        lastName: 'Watts',
      },
      {
        id: 3,
        firstName: 'Andy',
        lastName: 'Brown',
      },
      {
        id: 4,
        firstName: 'Maisie',
        lastName: 'Curtis',
      },
      {
        id: 5,
        firstName: 'Jonathan',
        lastName: 'Curtis',
      },
      {
        id: 6,
        firstName: 'Jonathan',
        lastName: 'Wright',
      },
      {
        id: 7,
        firstName: 'Jennifer',
        lastName: 'Tomkinson',
      },
      {
        id: 8,
        firstName: 'Rich',
        lastName: 'Richman',
      },
    ].sort(function (a, b) {
      return (
        a.firstName.localeCompare(b.firstName) ||
        a.lastName.localeCompare(b.lastName)
      );
    });
  }
}
