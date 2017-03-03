import {Category} from "../category/category";

export class Thing {
    constructor(
        public id: number,
        public category: Category,
        public title: string,
        public image: string,
        public description: string,
        public created_at: Date,
        public updated_at: Date,
    ){}
}
