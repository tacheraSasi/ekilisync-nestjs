import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to EkiliSync Backend</title>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.16/dist/tailwind.min.css" rel="stylesheet">
      </head>
      <body class="bg-gray-900 text-white font-sans flex justify-center items-center h-screen">
        <div class="text-center">
          <h1 class="text-5xl font-extrabold text-yellow-400 mb-4">Welcome to EkiliSync Backend</h1>
          <p class="text-lg text-gray-300">The backend of EkiliSync is up and running smoothly.</p>
          <p class="mt-4 text-md text-gray-500">Powered by NestJS</p>
          <div class="mt-8">
            <a href="https://tachera.vercel.app" target="_blank" class="text-blue-500 hover:text-blue-700 font-bold">Created by Tachera sasi</a>
          </div>
        </div>
      </body>
      </html>
    `;
  }
}
