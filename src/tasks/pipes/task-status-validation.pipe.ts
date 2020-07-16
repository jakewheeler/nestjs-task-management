import { PipeTransform, BadRequestException } from '@nestjs/common';
import { TaskStatus } from '../task.model';

export class TaskStatusValidationPipe implements PipeTransform {
  readonly allowedStatuses = [
    TaskStatus.OPEN.toString(),
    TaskStatus.IN_PROGRESS.toString(),
    TaskStatus.DONE.toString(),
  ];

  transform(value: string): string {
    value = value.toUpperCase();
    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`"${value} is an invalid status`);
    }
    return value;
  }

  private isStatusValid(status: string): boolean {
    const idx = this.allowedStatuses.indexOf(status);
    return idx !== -1;
  }
}
