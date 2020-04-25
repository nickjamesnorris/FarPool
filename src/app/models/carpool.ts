import { User } from './user';

export class Carpool {
    public carpoolName: String;
    public host: User;
    public startingPoint: String;
    public destination: String;
    public scheduledDays: String;
    public leaveTime: String;
    public returnTime: String;
    public make: String;
    public model: String;
    public year: String;


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
