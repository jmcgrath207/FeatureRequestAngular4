


export class TicketTableModel {
  public _ticketId: number;
  public _ticketOriginalId: number;
  public _ticketTitle: string;
  public _ticketDescription: string;
  public _departmentDescription: string;
  public _priorityDescription: string;
  public _creationDate: Date;
  public _updateDate: Date;
  public _targetDate: Date;
  public _ticketOwner: string;
  public _creationUser: string;
  public _updateUser: string;


  public get ticketId(): number {
    return this._ticketId;
  }

  public set ticketId(value: number) {
    this._ticketId = value;
  }

  public get ticketOriginalId(): number {
    return this._ticketOriginalId;
  }

  public set ticketOriginalId(value: number) {
    this._ticketOriginalId = value;
  }

  public get ticketTitle(): string {
    return this._ticketTitle;
  }

  public set ticketTitle(value: string) {
    this._ticketTitle = value;
  }

  public get ticketDescription(): string {
    return this._ticketDescription;
  }

  public set ticketDescription(value: string) {
    this._ticketDescription = value;
  }

  public get departmentDescription(): string {
    return this._departmentDescription;
  }

  public set departmentDescription(value: string) {
    this._departmentDescription = value;
  }

  public get priorityDescription(): string {
    return this._priorityDescription;
  }

  public set priorityDescription(value: string) {
    this._priorityDescription = value;
  }

  public get creationDate(): Date {
    return this._creationDate;
  }

  public set creationDate(value: Date) {
    this._creationDate = value;
  }

  public get updateDate(): Date {
    return this._updateDate;
  }

  public set updateDate(value: Date) {
    this._updateDate = value;
  }

  public get targetDate(): Date {
    return this._targetDate;
  }

  public set targetDate(value: Date) {
    this._targetDate = value;
  }

  public get ticketOwner(): string {
    return this._ticketOwner;
  }

  public set ticketOwner(value: string) {
    this._ticketOwner = value;
  }

  public get creationUser(): string {
    return this._creationUser;
  }

  public set creationUser(value: string) {
    this._creationUser = value;
  }

  public get updateUser(): string {
    return this._updateUser;
  }

  public set updateUser(value: string) {
    this._updateUser = value;
  }
}
