


export class ClientViewModel {
  public ticketId: number;
  public title: string;
  public userId: number;
  public description: string;
  public creationDate: string;
  public updateDate: string;
  public targetDate: string;
  public departmentId: number;
  public statusId: number;
  public priorityId: number;


  constructor(ticketId: number, title: string, userId: number,
              description: string, creationDate: string, updateDate: string,
              targetDate: string, departmentId: number, statusId: number, priorityId: number) {
    this.ticketId = ticketId;
    this.title = title;
    this.userId = userId;
    this.description = description;
    this.creationDate = creationDate;
    this.updateDate = updateDate;
    this.targetDate = targetDate;
    this.departmentId = departmentId;
    this.statusId = statusId;
    this.priorityId = priorityId;
  }
}
