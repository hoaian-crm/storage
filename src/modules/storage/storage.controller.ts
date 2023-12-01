import {
  Controller,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { Messages } from 'src/prototypes/formatters/messages';
import { Response } from 'src/prototypes/formatters/response';
import {
  HealthCheckResult,
  IFile,
  IStorageController,
  PutFileResponse,
  ReadFile,
  ReadFileResponse,
} from 'src/prototypes/gen/ts/interfaces/storage';
import { StorageService } from './storage.service';

@Controller('/storages')
export class StorageController implements IStorageController {
  constructor(private storageService: StorageService) {}
  @Post('') // Upload file api
  @UseInterceptors(AnyFilesInterceptor())
  async upload(@UploadedFiles() files: Array<Express.Multer.File>) {
    if (!files) {
      Response.badRequestThrow(Messages.mustHaveFile);
    }
    const result = await this.storageService.upload(files);
    return Response.createBulkSuccess(result);
  }

  @GrpcMethod('IStorageController', 'Put')
  async Put(request: IFile): Promise<PutFileResponse> {
    const result = await this.storageService.uploadOne(request);
    return {
      url: result,
    };
  }

  @GrpcMethod('IStorageController', 'Read')
  async Read(request: ReadFile): Promise<ReadFileResponse> {
    const data = await this.storageService.readFile(request);
    return {
      content: data,
    };
  }

  @GrpcMethod('IStorageController', 'HealthCheck')
  async HealthCheck(request: HealthCheckResult): Promise<HealthCheckResult> {
    return request;
  }
}
