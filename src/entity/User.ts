import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "text",
    length: 10,
    unique: true
  })
  userId: string;

  @Column({
    type: "text",
    length: 20,
  })
  password: string;

  @Column({
    type: "text",
    length: 30,
    unique: true
  })
  email: string;
 
  public static from(userId: string, password: string, email: string) {
    const user = new User();
    user.userId = userId;
    user.password = password;
    user.email = email;
    return user;
  }
}
