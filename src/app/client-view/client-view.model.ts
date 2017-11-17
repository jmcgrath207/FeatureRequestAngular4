


export class ClientViewModel {
  public TicketId: number;
  public Title: string;
  public UserId: number;
  public Description: string;
  public CreationDate: string;
  public UpdateDate: string;
  public TargetDate: string;
  public DepartmentId: number;
  public StatusId: number;
  public PriorityId: number;


  constructor(TicketId: number, Title: string, UserId: number,
              Description: string, CreationDate: string, UpdateDate: string,
              TargetDate: string, DepartmentId: number, StatusId: number, PriorityId: number) {
    this.TicketId = TicketId;
    this.Title = Title;
    this.UserId = UserId;
    this.Description = Description;
    this.CreationDate = CreationDate;
    this.UpdateDate = UpdateDate;
    this.TargetDate = TargetDate;
    this.DepartmentId = DepartmentId;
    this.StatusId = StatusId;
    this.PriorityId = PriorityId;
  }
}
