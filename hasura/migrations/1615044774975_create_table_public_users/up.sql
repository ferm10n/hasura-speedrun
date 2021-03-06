CREATE TABLE "public"."users"("id" bigserial NOT NULL, "name" text NOT NULL, "created" date NOT NULL DEFAULT now(), PRIMARY KEY ("id") , UNIQUE ("id"));
