export class Quote {
    public thumbsup: number;
    public thumbsdown: number;
    constructor(public name: string, public title: string, public quote: string, public author: string, public date: Date) {
        this.thumbsup = 0;
        this.thumbsdown = 0;
    }
}