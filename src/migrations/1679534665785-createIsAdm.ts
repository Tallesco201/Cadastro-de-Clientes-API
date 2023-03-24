import { MigrationInterface, QueryRunner } from "typeorm";

export class createIsAdm1679534665785 implements MigrationInterface {
    name = 'createIsAdm1679534665785'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" ADD "isAdm" boolean NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "isAdm"`);
    }

}
