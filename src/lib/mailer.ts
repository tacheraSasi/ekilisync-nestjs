import EkiliRelay from 'ekilirelay';
import { ekiliSyncEmailTemplate } from './email-template';

export class Mailer extends EkiliRelay {
  //   private readonly apiKey: string = process.env.RELAY_API_KEY;

  constructor() {
    super(process.env.RELAY_API_KEY);
  }

  async sendEmail(
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
