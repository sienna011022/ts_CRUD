import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Article } from "./Article";

@Entity()
export class Picture {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  pictureUrl : string;

  @ManyToOne(() => Article)
  article: Article;

  public static from(
    pictureUrl: string,
    article: Article,
  ) {
    const picture = new Picture();
    picture.pictureUrl = pictureUrl;
    picture.article = article;
    return picture;
  }
}
