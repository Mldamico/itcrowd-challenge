import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterLoginDto } from './dto/register-login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('register')
  create(@Body() registerLoginDto: RegisterLoginDto) {
    return this.authService.create(registerLoginDto);
  }

  @Post('login')
  login(@Body() registerLoginDto: RegisterLoginDto) {
    return this.authService.login(registerLoginDto);
  }


}
