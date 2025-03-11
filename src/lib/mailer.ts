import EkiliRelay from 'ekilirelay';

export class Mailer extends EkiliRelay {
  //   private readonly apiKey: string = process.env.RELAY_API_KEY;

  constructor() {
    super(process.env.RELAY_API_KEY);
  }

  async sendEmail(to: string, subject: string, message: string): Promise<any> {
    return this.sendEmail(to, subject, message);
  }
}
