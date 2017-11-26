


export class TicketTableModel {
  public ticketId: number;
  public ticketOriginalId: number;
  public ticketOwnerId: number;
  public title: string;
  public description: string;
  public creationDate: string;
  public creationUserId: number;
  public updateDate: string;
  public updateUserId: number;
  public targetDate: string;
  public departmentId: number;
  public statusId: number;
  public priorityId: number;


  constructor(ticketId: number, ticketOriginalId: number, ticketOwnerId: number, title: string, description: string, creationDate: string, creationUserId: number, updateDate: string, updateUserId: number, targetDate: string, departmentId: number, statusId: number, priorityId: number) {
    this.ticketId = ticketId;
    this.ticketOriginalId = ticketOriginalId;
    this.ticketOwnerId = ticketOwnerId;
    this.title = title;
    this.description = description;
    this.creationDate = creationDate;
    this.creationUserId = creationUserId;
    this.updateDate = updateDate;
    this.updateUserId = updateUserId;
    this.targetDate = targetDate;
    this.departmentId = departmentId;
    this.statusId = statusId;
    this.priorityId = priorityId;
  }
}
