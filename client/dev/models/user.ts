/**
 * Created by kfraser on 15/07/2016.
 */
export class User {
  constructor(
    public userid: string,
    public classes: string[],
    public questions: string[],
    public notifications: string[],
    public auth: string,
    public anonymous: string
  ) {}

  public print(){
    return this.userid + "\n" +
      this.classes + "\n" +
      this.questions + "\n" +
      this.notifications + "\n" +
      this.auth + "\n" +
      this.anonymous + "\n";
  }

}
