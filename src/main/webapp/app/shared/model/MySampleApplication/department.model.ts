import { ILocation } from 'app/shared/model/MySampleApplication/location.model';
import { IEmployee } from 'app/shared/model/MySampleApplication/employee.model';

export interface IDepartment {
  id?: number;
  departmentName?: string;
  location?: ILocation;
  employees?: IEmployee[];
}

export class Department implements IDepartment {
  constructor(public id?: number, public departmentName?: string, public location?: ILocation, public employees?: IEmployee[]) {}
}
