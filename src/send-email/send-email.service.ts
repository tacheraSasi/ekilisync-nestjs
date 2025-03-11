import { Injectable } from '@nestjs/common';
import { CreateSendEmailDto } from './dto/create-send-email.dto';
import { UpdateSendEmailDto } from './dto/update-send-email.dto';

@Injectable()
export class SendEmailService {
  create(createSendEmailDto: CreateSendEmailDto) {
    return 'This action adds a new sendEmail';
  }

  findAll() {
    return `This action returns all sendEmail`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sendEmail`;
  }

  update(id: number, updateSendEmailDto: UpdateSendEmailDto) {
    return `This action updates a #${id} sendEmail`;
  }

  remove(id: number) {
    return `This action removes a #${id} sendEmail`;
  }
}
