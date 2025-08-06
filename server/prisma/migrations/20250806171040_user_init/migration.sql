-- CreateEnum
CREATE TYPE "public"."user_type" AS ENUM ('DEALER', 'DISTRIBUTOR', 'TECHNICIAN', 'BACKOFFICE');

-- CreateTable
CREATE TABLE "public"."user" (
    "id" TEXT NOT NULL,
    "mobile" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "business" TEXT,
    "gstin" TEXT,
    "billing_address" JSONB,
    "shipping_address" JSONB,
    "profile_pic" TEXT,
    "user_type" "public"."user_type" NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_mobile_key" ON "public"."user"("mobile");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "public"."user"("email");
