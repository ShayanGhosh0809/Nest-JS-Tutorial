import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hey Buddy!';
  }

  getShayan(): string {
    return 'Hey Yoooo!!! SHAYAN HERE Buddy';
  }
}
