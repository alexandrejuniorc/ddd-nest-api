import { Either, left, right } from "@/core/either"

// EXTERNAL DEPENDENCY
import { Injectable } from "@nestjs/common"
import { InvalidAttachmentError } from "./errors/invalid-attachment.error"
import { Attachment } from "../../enterprise/entities/attachment"
import { AttachmentsRepository } from "../repositories/attachments.repository"
import { Uploader } from "@/domain/forum/application/storage/uploader"

interface UploadAndCreateAttachmentUseCaseRequest {
  fileName: string
  fileType: string
  body: Buffer
}

type UploadAndCreateAttachmentUseCaseResponse = Either<
  InvalidAttachmentError,
  { attachment: Attachment }
>

@Injectable()
export class UploadAndCreateAttachmentUseCase {
  constructor(
    private attachmentsRepository: AttachmentsRepository,
    private uploader: Uploader,
  ) {}

  async execute({
    fileName,
    fileType,
    body,
  }: UploadAndCreateAttachmentUseCaseRequest): Promise<UploadAndCreateAttachmentUseCaseResponse> {
    const isAvailableMimeType = /^(image\/(jpeg|png))$|^application\/pdf$/

    if (!isAvailableMimeType.test(fileType)) {
      return left(new InvalidAttachmentError(fileType))
    }

    const { url } = await this.uploader.upload({
      fileName,
      fileType,
      body,
    })

    const attachment = Attachment.create({
      title: fileName,
      url,
    })

    await this.attachmentsRepository.create(attachment)

    return right({
      attachment,
    })
  }
}

