import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./User";

@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @ManyToOne(() => User)
  user: User;

  public createWithUser(user: User) {
    this.user = user;
  }

  public static from(title: string, content: string, user: User) {
    const article = new Article();
    article.title = title;
    article.content = content;
    article.user = user;
    return article;
  }
}
