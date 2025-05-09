export class OliveUserRegisterResponseDto{
    constructor(name,userId,email, passWord, country){
        this.name= name;
        this.userId=userId;
        this.email=email;
        this.passWord=passWord;
        this.country=country;
    }
}