import { Injectable } from '@nestjs/common';
import { Storage } from 'crm-prototypes';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

@Injectable()
export class StorageService {
  private uploadFolder: string;
  constructor() {
    this.uploadFolder = process.cwd() + '/files/';
  }

  async upload(files: Array<Express.Multer.File>) {
    return files.map((file) => {
      file.destination = this.uploadFolder + (file.fieldname || '') + '/';
      if (!existsSync(file.destination)) {
        mkdirSync(file.destination, { recursive: true });
      }
      writeFileSync(file.destination + file.originalname, file.buffer);
      return file.fieldname || '' + file.originalname;
    });
  }

  async uploadOne(file: Storage.IFile) {
    const destination = this.uploadFolder + file.destination;
    if (!existsSync(destination)) {
      mkdirSync(destination, { recursive: true });
    }
    writeFileSync(destination + '/' + file.filename, file.content);
    return join(file.destination, file.filename);
  }

  async readFile(request: Storage.ReadFile) {
    return readFileSync(join(this.uploadFolder, request.filePath));
  }
}
