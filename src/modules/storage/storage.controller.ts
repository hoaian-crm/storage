import {
  Controller,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { Messages, Response, Storage } from 'crm-prototypes';
import { StorageService } from './storage.service';

@Controller('/storages')
export class StorageController implements Storage.IStorageController {
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
  async Put(request: Storage.IFile): Promise<Storage.PutFileResponse> {
    const result = await this.storageService.uploadOne(request);
    return {
      url: result,
    };
  }

  @GrpcMethod('IStorageController', 'Read')
  async Read(request: Storage.ReadFile): Promise<Storage.ReadFileResponse> {
    const data = await this.storageService.readFile(request);
    return {
      content: data,
    };
  }

  @GrpcMethod('IStorageController', 'HealthCheck')
  async HealthCheck(
    request: Storage.HealthCheckResult,
  ): Promise<Storage.HealthCheckResult> {
    return request;
  }
}
