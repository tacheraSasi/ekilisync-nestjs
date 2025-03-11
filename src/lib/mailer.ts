import EkiliRelay from 'ekilirelay';
import { ekiliSyncEmailTemplate } from './email-template';

export class Mailer extends EkiliRelay {
  //   static sendEmail(email: string, arg1: string, arg2: string) {
  //     throw new Error('Method not implemented.');
  //   }
  //   private readonly apiKey: string = process.env.RELAY_API_KEY;

  constructor() {
    super(process.env.RELAY_API_KEY);
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
    return this.sendEmail(to, subject, messageTemplate, from);
  }
}
