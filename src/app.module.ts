/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentController } from './controller/student/student.controller';
import { StudentSchema } from './schema/student.schema';
import { StudentService } from './service/student/student.service';

@Module({
  imports: [MongooseModule.forRoot('mongodb://127.0.0.1:27017/',{dbName: 'test'}),
  MongooseModule.forFeature([{ name: 'Student', schema: StudentSchema }])],
  controllers: [AppController,StudentController],
  providers: [AppService,StudentService],
})
export class AppModule {}