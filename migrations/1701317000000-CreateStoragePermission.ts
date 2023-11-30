import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateStoragePermission1701317000000 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            insert into permissions (id, "createdAt", "updatedAt", "deletedAt", name, description, policy, resource, upstream, method)
            values (default, default, default, default, 'Upload file', 'Allow upload file to system', 'storage:upload', '/storages', 'Storage', 'POST')
        `)
        await queryRunner.query(`
            insert into permissions (id, "createdAt", "updatedAt", "deletedAt", name, description, policy, resource, upstream, method)
            values (default, default, default, default, 'Get file', 'Get file in system', 'public', '/storages/*', 'Storage', 'GET')
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            delete from permissions where upstream = 'Storage'
        `)
    }

}
