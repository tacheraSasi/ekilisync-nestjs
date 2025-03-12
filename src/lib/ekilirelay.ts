import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

export class EkiliRelay {
  private readonly apiUrl = 'https://relay.ekilie.com/api/index.php';

  constructor(
    private readonly httpService: HttpService,
    private readonly apiKey: string,
  ) {}

  async sendEmail(
    to: string,
    subject: string,
    message: string,
    headers: string = '',
  ): Promise<any> {
    const data = {
      to,
      subject,
      message,
      headers,
      apikey: this.apiKey,
    };

    try {
      const response = await firstValueFrom(
        this.httpService.post(this.apiUrl, data, {
          headers: { 'Content-Type': 'application/json' },
        }),
      );
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
      return { error: error.message };
    }
  }
}
