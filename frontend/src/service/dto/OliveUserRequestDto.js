export class OliveUserRegisterRequestDto{
    constructor(name,userId, email, passWord, country){
        this.name= name;
        this.userId=userId;
        this.email=email;
        this.passWord=passWord;
        this.point=0;
        this.country=country;
    }
}