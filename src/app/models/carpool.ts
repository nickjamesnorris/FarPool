import { User } from './user';

export class Carpool {
    public carpoolName: String;
    public host: User;
    public startingPoint: string;
    public destination: string;
    public scheduledDays: string[];
    public leaveTime: string;
    public returnTime: string;
    public make: string;
    public model: string;
    public year: number;


    constructor(carpoolObj) {
        this.carpoolName = carpoolObj.carpoolName;
        this.host = carpoolObj.host;
        this.startingPoint = carpoolObj.startingPoint;
        this.destination = carpoolObj.destination
        this.scheduledDays = carpoolObj.scheduledDays;
        this.leaveTime = carpoolObj.leaveTime;
        this.returnTime = carpoolObj.returnTime;
        this.make = carpoolObj.make;
        this.model = carpoolObj.model;
        this.year = carpoolObj.year;
    }

}
