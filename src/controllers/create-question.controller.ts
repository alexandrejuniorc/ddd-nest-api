import { Controller, Post, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { JWTAuthGuard } from "src/auth/jwt-auth.guard";

@Controller("/questions")
@UseGuards(JWTAuthGuard)
export class CreateQuestionController {
  constructor() {}

  @Post()
  async handle() {
    return "ok";
  }
}
