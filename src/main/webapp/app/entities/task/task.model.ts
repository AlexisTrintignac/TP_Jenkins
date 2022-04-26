export interface ITask {
  id?: number;
  titre?: string | null;
  description?: string | null;
}

export class Task implements ITask {
  constructor(public id?: number, public titre?: string | null, public description?: string | null) {}
}

export function getTaskIdentifier(task: ITask): number | undefined {
  return task.id;
}
