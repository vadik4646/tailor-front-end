export class Category {
  constructor(
    public id: number,
    public title: string,
    public description: string,
    public image: string,
    public created_at: Date,
    public updated_at: Date
  ) {}
}
