-- CreateTable
CREATE TABLE "UserExample" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "UserExample_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EmailSignUp" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "Status" TEXT,

    CONSTRAINT "EmailSignUp_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserExample_email_key" ON "UserExample"("email");

-- CreateIndex
CREATE UNIQUE INDEX "EmailSignUp_email_key" ON "EmailSignUp"("email");
