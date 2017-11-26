


export class TicketTableModel {
  public _ticketid: number;
  public _ticketoriginalid: number;
  public _tickettitle: string;
  public _ticketdescription: string;
  public _departmentdescription: string;
  public _prioritydescription: string;
  public _creationdate: Date;
  public _updatedate: Date;
  public _targetdate: Date;
  public _departmentid: number;
  public _ticketowner: string;
  public _creationuser: string;
  public _updateuser: string;


  public get ticketid(): number {
    return this._ticketid;
  }

  public set ticketid(value: number) {
    this._ticketid = value;
  }

  public get ticketoriginalid(): number {
    return this._ticketoriginalid;
  }

  public set ticketoriginalid(value: number) {
    this._ticketoriginalid = value;
  }

  public get tickettitle(): string {
    return this._tickettitle;
  }

  public set tickettitle(value: string) {
    this._tickettitle = value;
  }

  public get ticketdescription(): string {
    return this._ticketdescription;
  }

  public set ticketdescription(value: string) {
    this._ticketdescription = value;
  }

  public get departmentdescription(): string {
    return this._departmentdescription;
  }

  public set departmentdescription(value: string) {
    this._departmentdescription = value;
  }

  public get prioritydescription(): string {
    return this._prioritydescription;
  }

  public set prioritydescription(value: string) {
    this._prioritydescription = value;
  }

  public get creationdate(): Date {
    return this._creationdate;
  }

  public set creationdate(value: Date) {
    this._creationdate = value;
  }

  public get updatedate(): Date {
    return this._updatedate;
  }

  public set updatedate(value: Date) {
    this._updatedate = value;
  }

  public get targetdate(): Date {
    return this._targetdate;
  }

  public set targetdate(value: Date) {
    this._targetdate = value;
  }

  public get departmentid(): number {
    return this._departmentid;
  }

  public set departmentid(value: number) {
    this._departmentid = value;
  }

  public get ticketowner(): string {
    return this._ticketowner;
  }

  public set ticketowner(value: string) {
    this._ticketowner = value;
  }

  public get creationuser(): string {
    return this._creationuser;
  }

  public set creationuser(value: string) {
    this._creationuser = value;
  }

  public get updateuser(): string {
    return this._updateuser;
  }

  public set updateuser(value: string) {
    this._updateuser = value;
  }
}
