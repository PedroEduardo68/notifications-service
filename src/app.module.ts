import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PostmarkMailService } from './mail/postmark-mail.service';
import { SMTPMail } from './mail/smtp-mail.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    {
      provide: SMTPMail,
      useClass: PostmarkMailService,
    },
  ],
})
export class AppModule {}
