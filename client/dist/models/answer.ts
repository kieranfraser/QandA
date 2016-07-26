/**
 * Created by kfraser on 01/03/2016.
 */

export class Answer {
    constructor(
        public id: string,
        public answer: string,
        public user: string,
        public date: string,
        public anonymous: string,
        public username: string,
        public picture: string
    ) {}
}

