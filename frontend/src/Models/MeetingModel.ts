export class MeetingModel {
    
    public id: number = 0;
    public team: number | undefined;
    public start: Date = new Date();
    public end: Date = new Date();
    public description: string ="";
    public room: string ="";

}