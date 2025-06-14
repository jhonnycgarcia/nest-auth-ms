import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @MessagePattern('auth.register.user')
  registerUser(@Payload() payload: any) {
    return {
      message: 'Register successful',
    };
  }
  @MessagePattern('auth.login.user')
  loginUser(@Payload() payload: any) {
    return {
      message: 'Login successful',
    };
  }
  @MessagePattern('auth.verify.user')
  verifyUser(@Payload() payload: any) {
    console.log(payload);
    return {
      message: 'Verify token successful',
    };
  }
}
