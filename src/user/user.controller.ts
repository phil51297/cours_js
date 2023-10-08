import { containsSpaces, isNegativeNumber, isNotDefined } from '../utils'
import { User } from './user';
import { UserService } from './user.service';

export class UserController {
    constructor(private userService: UserService) {}

    add(username: string): User {
        if (isNotDefined(username)) {
            throw new Error('Given username is not defined.');
        }
        if (containsSpaces(username)) {
            throw new Error('Given username is whitespaced.');
        }
        return this.userService.add(username);
    }

    getById(id: number): User | null {
        if (isNegativeNumber(id)) {
            throw new Error('Given ID is a negative number.');
        }

        return this.userService.getById(id);
    }
}