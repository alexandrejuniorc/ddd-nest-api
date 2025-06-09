import { Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import type { Env } from "src/env";

@Module({
  imports: [
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory(config: ConfigService<Env, true>) {
        const secret = config.get("JWT_SECRET", { infer: true });

        return {
          secret,
        };
      },
    }),
    PassportModule,
  ],
})
export class AuthModule {}
