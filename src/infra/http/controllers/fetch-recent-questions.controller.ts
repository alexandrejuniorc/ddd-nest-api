import { Controller, Get, Query, UseGuards } from "@nestjs/common"
import { JWTAuthGuard } from "@/infra/auth/jwt-auth.guard"
import { ZodValidationPipe } from "@/infra/http/pipes/zod-validation-pipe"
import { z } from "zod"
import { FetchRecentQuestionsUseCase } from "@/domain/forum/application/use-cases/fetch-recent-questions"

const pageQueryParamsSchema = z
  .string()
  .optional()
  .default("1")
  .transform(Number)
  .pipe(z.number().min(1))

const queryValidationPipe = new ZodValidationPipe(pageQueryParamsSchema)

type PageQueryParamsSchema = z.infer<typeof pageQueryParamsSchema>

@Controller("/questions")
@UseGuards(JWTAuthGuard)
export class FetchRecentQuestionsController {
  constructor(private fetchRecentQuestions: FetchRecentQuestionsUseCase) {}

  @Get()
  async handle(
    @Query("page", queryValidationPipe) page: PageQueryParamsSchema,
  ) {
    const questions = await this.fetchRecentQuestions.execute({ page })

    return { questions }
  }
}
