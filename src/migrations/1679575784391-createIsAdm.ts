import { MigrationInterface, QueryRunner } from "typeorm";

export class createIsAdm1679575784391 implements MigrationInterface {
    name = 'createIsAdm1679575784391'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" ALTER COLUMN "isAdm" SET DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" ALTER COLUMN "isAdm" DROP DEFAULT`);
    }

}
