import { Injectable } from '@nestjs/common';
import { homeHtml } from './lib/home';

@Injectable()
export class AppService {
  getHello(): string {
    return homeHtml;
  }
}
