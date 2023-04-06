import { Injectable } from '@nestjs/common';

// @Injectable() indica que pude servir como provider y que puede ser inyectada en constructor
// via parametro de contructor del nestjs dependency injection
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
