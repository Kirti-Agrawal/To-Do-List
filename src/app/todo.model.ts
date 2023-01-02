export class todoFeatures {
    public sno: number;
    public title: string;
    public desc: string;
    public isActive: boolean;

    constructor(sno: number, title: string, desc: string, isActive: boolean) {
        this.sno = sno;
        this.title = title;
        this.desc = desc;
        this.isActive = isActive;


    }
}