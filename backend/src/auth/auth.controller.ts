import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterLoginDto } from './dto/register-login.dto';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from './decorators/get-user.decorator';
import { Auth } from './entities/auth.entity';

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

  @Get('me')
  @UseGuards(AuthGuard())
  getUser(
    @GetUser() user: Auth
  ) {
    return this.authService.getUser(user);
  }



}
