import { User } from 'src/user/entities/user.entity';

export class CreateQueetDto {
  message: string;
  user: User;
}
