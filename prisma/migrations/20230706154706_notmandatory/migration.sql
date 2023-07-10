-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "lastLogin" DATETIME,
    "externalId" TEXT,
    "createdBy" TEXT NOT NULL DEFAULT 'system',
    "createdDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedBy" TEXT,
    "updatedDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedBy" TEXT,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "deletedDate" DATETIME
);
INSERT INTO "new_User" ("createdBy", "createdDate", "deletedBy", "deletedDate", "email", "externalId", "id", "isDeleted", "lastLogin", "password", "updatedBy", "updatedDate") SELECT "createdBy", "createdDate", "deletedBy", "deletedDate", "email", "externalId", "id", "isDeleted", "lastLogin", "password", "updatedBy", "updatedDate" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE UNIQUE INDEX "User_externalId_key" ON "User"("externalId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
