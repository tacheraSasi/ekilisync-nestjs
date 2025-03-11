import { HttpService } from '@nestjs/axios';
import { EkiliRelay } from './ekilirelay';
import { ekiliSyncEmailTemplate } from './email-template';

export class Mailer extends EkiliRelay {
  constructor(httpService: HttpService) {
    super(httpService, process.env.RELAY_API_KEY);
  }

  static async sendEmail(
    to: string,
    subject: string,
    message: string,
    from: string = 'From EkiliSync <support@ekilie.com>',
  ): Promise<any> {
    const messageTemplate = ekiliSyncEmailTemplate({
      type: 'default',
      title: subject,
      message,
      companyName: 'EkiliSync',
    });
    return super.prototype.sendEmail.call(
      this,
      to,
      subject,
      messageTemplate,
      from,
    );
  }
}
