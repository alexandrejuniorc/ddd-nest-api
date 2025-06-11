import type { PaginationParams } from "@/core/repositories/pagination-params"
import type { QuestionsRepository } from "@/domain/forum/application/repositories/questions-repository"
import type { Question } from "@/domain/forum/enterprise/entities/question"
import { Injectable } from "@nestjs/common"
import type { PrismaService } from "../prisma.service"
import { PrismaQuestionMapper } from "../mappers/prisma-question.mapper"

@Injectable()
export class PrismaQuestionsRepository implements QuestionsRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(question: Question): Promise<void> {
    throw new Error("Method not implemented.")
  }

  save(question: Question): Promise<void> {
    throw new Error("Method not implemented.")
  }

  findBySlug(slug: string): Promise<Question | null> {
    throw new Error("Method not implemented.")
  }

  async findById(questionId: string): Promise<Question | null> {
    const question = await this.prisma.question.findUnique({
      where: { id: questionId },
    })

    if (!question) {
      return null
    }

    return PrismaQuestionMapper.toDomain(question)
  }

  findManyRecent(params: PaginationParams): Promise<Question[]> {
    throw new Error("Method not implemented.")
  }

  delete(question: Question): Promise<void> {
    throw new Error("Method not implemented.")
  }
}
