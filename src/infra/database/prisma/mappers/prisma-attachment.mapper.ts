import { Attachment } from "@/domain/forum/enterprise/entities/attachment"
import { Prisma } from "@prisma/client"

export class PrismaAttachmentMapper {
  // Domain to Prisma Mapper for Attachment Entity
  static toPrisma(
    attachment: Attachment,
  ): Prisma.AttachmentUncheckedCreateInput {
    return {
      id: attachment.id.toString(),
      title: attachment.title,
      url: attachment.url,
    }
  }
}
