export class Book {
    name: string;
    author: string;
    color: string;
    createdOn: number = new Date().getTime();
    editedOn: number = new Date().getTime();
    // $key: any;
    // $exists: any;
    constructor(bk?: Book, key?: Boolean) {
        if (bk) {
            this.name = bk.name;
            this.author = bk.author;
            this.color = bk.color;
            this.createdOn = bk.createdOn;
            this.editedOn = bk.editedOn;
            // if (key) {
            //     this.$key = bk.$key;
            //     this.$exists = bk.$exists;
            // }
        }
    }
}