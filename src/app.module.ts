import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

import { SMTPMail } from './mail/smtp-mail.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [SMTPMail],
})
export class AppModule {}
