export class Member {
  constructor(
    public id: number = null,
    public firstname: string = "",
    public lastname: string = "",
    public email: string = "",
    public password: string = "",
    public passwordconfirm: string = "",
    public address: string = "",
    public apt: string = "",
    public city: string = "",
    public state: string = "",
    public bool: boolean = true,
    public created_at: Date = new Date(),
    public updated_at: Date = new Date()
  ){}
}  
