/*
  Warnings:

  - The primary key for the `user` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `user` table. All the data in the column will be lost.
  - The required column `user_id` was added to the `user` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "public"."user" DROP CONSTRAINT "user_pkey",
DROP COLUMN "id",
ADD COLUMN     "dealer_id" TEXT,
ADD COLUMN     "user_id" TEXT NOT NULL,
ADD CONSTRAINT "user_pkey" PRIMARY KEY ("user_id");

-- AddForeignKey
ALTER TABLE "public"."user" ADD CONSTRAINT "user_dealer_id_fkey" FOREIGN KEY ("dealer_id") REFERENCES "public"."user"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;
