import EkiliRelay from 'ekilirelay';

export class Mailer extends EkiliRelay {
//   private readonly apiKey: string = process.env.RELAY_API_KEY;

  constructor() {
    super(process.env.RELAY_API_KEY);
  }
}
