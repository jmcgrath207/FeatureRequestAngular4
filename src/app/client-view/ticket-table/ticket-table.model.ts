


export class TicketTableModel {
  public _TicketId: number;
  public _TicketOriginalId: number;
  public _TicketTitle: string;
  public _TicketDescription: string;
  public _DepartmentDescription: string;
  public _PriorityDescription: string;
  public _CreationDate: Date;
  public _UpdateDate: Date;
  public _TargetDate: Date;
  public _TicketOwner: string;
  public _CreationUser: string;
  public _UpdateUser: string;


  public get TicketId(): number {
    return this._TicketId;
  }

  public set TicketId(value: number) {
    this._TicketId = value;
  }

  public get TicketOriginalId(): number {
    return this._TicketOriginalId;
  }

  public set TicketOriginalId(value: number) {
    this._TicketOriginalId = value;
  }

  public get TicketTitle(): string {
    return this._TicketTitle;
  }

  public set TicketTitle(value: string) {
    this._TicketTitle = value;
  }

  public get TicketDescription(): string {
    return this._TicketDescription;
  }

  public set TicketDescription(value: string) {
    this._TicketDescription = value;
  }

  public get DepartmentDescription(): string {
    return this._DepartmentDescription;
  }

  public set DepartmentDescription(value: string) {
    this._DepartmentDescription = value;
  }

  public get PriorityDescription(): string {
    return this._PriorityDescription;
  }

  public set PriorityDescription(value: string) {
    this._PriorityDescription = value;
  }

  public get CreationDate(): Date {
    return this._CreationDate;
  }

  public set CreationDate(value: Date) {
    this._CreationDate = value;
  }

  public get UpdateDate(): Date {
    return this._UpdateDate;
  }

  public set UpdateDate(value: Date) {
    this._UpdateDate = value;
  }

  public get TargetDate(): Date {
    return this._TargetDate;
  }

  public set TargetDate(value: Date) {
    this._TargetDate = value;
  }

  public get TicketOwner(): string {
    return this._TicketOwner;
  }

  public set TicketOwner(value: string) {
    this._TicketOwner = value;
  }

  public get CreationUser(): string {
    return this._CreationUser;
  }

  public set CreationUser(value: string) {
    this._CreationUser = value;
  }

  public get UpdateUser(): string {
    return this._UpdateUser;
  }

  public set UpdateUser(value: string) {
    this._UpdateUser = value;
  }
}
