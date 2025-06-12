import { UniqueEntityID } from "@/core/entities/unique-entity-id"
import { AnswerComment } from "@/domain/forum/enterprise/entities/answer-comment"
import { Comment as PrismaComment, Prisma } from "@prisma/client"

export class PrismaAnswerCommentMapper {
  // Prisma to Domain Mapper for AnswerComment Entity
  static toDomain(raw: PrismaComment): AnswerComment {
    if (!raw.answerId) {
      throw new Error("Invalid comment type.")
    }

    return AnswerComment.create(
      {
        content: raw.content,
        answerId: new UniqueEntityID(raw.answerId),
        authorId: new UniqueEntityID(raw.authorId),
        createdAt: raw.createdAt,
        updatedAt: raw.updatedAt,
      },
      new UniqueEntityID(raw.id),
    )
  }

  // Domain to Prisma Mapper for AnswerComment Entity
  static toPrisma(
    answerComment: AnswerComment,
  ): Prisma.CommentUncheckedCreateInput {
    return {
      id: answerComment.id.toString(),
      content: answerComment.content,
      answerId: answerComment.answerId.toString(),
      authorId: answerComment.authorId.toString(),
      createdAt: answerComment.createdAt,
      updatedAt: answerComment.updatedAt,
    }
  }
}
