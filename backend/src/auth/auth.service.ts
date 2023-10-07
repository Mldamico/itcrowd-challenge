import { Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { RegisterLoginDto } from './dto/register-login.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Auth } from './entities/auth.entity';
import * as bcrypt from 'bcrypt';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(@InjectRepository(Auth) private readonly authRepository: Repository<Auth>,
    private readonly jwtService: JwtService) { }

  async create(registerLoginDto: RegisterLoginDto) {
    try {
      const { password, email } = registerLoginDto;
      const user = this.authRepository.create({
        email,
        password: bcrypt.hashSync(password, 10)
      });

      await this.authRepository.save(user);
      delete user.password;

      return { ...user, token: this.generateJwtToken({ id: user.id }) };
    } catch (error) {
      throw new InternalServerErrorException('something went wrong');
    }
  }

  async login(registerLoginDto: RegisterLoginDto) {
    const { email, password } = registerLoginDto;
    try {
      const user = await this.authRepository.findOne({
        where: { email },
        select: { id: true, email: true, password: true }
      });

      if (!user) throw new UnauthorizedException('Bad credentials');

      if (!bcrypt.compareSync(password, user.password)) throw new UnauthorizedException('Bad credentials');


      return { ...user, token: this.generateJwtToken({ id: user.id }) };
    } catch (error) {
      throw new InternalServerErrorException('something went wrong');
    }
  }

  private generateJwtToken(payload: JwtPayload) {
    const token = this.jwtService.sign(payload);
    return token;
  }


}
