import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  signup(@Body() body: { email: string; password: string; name: string }) {
    try {
      return this.authService.signUp(body.email, body.password, body.name);
    } catch (error) {
      return { error: true, message: `Something went wrong ${error}` };
    }
  }

  @Post('login')
  login(@Body() body: { email: string; password: string }) {
    try {
      return this.authService.signIn(body.email, body.password);
    } catch (error) {
      return { error: true, message: `Something went wrong ${error}` };
    }
  }
}
