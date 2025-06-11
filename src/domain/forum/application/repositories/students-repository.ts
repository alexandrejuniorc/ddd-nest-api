import { PaginationParams } from "@/core/repositories/pagination-params"
import { Student } from "../../enterprise/entities/student"

export abstract class StudentsRepository {
  abstract create(student: Student): Promise<void>
  abstract findByEmail(email: string): Promise<Student | null>
}
