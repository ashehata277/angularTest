class Language {
    private  arabic :Language  = new Language();
    private  english : Language =  new Language();
    constructor() {
        this.SetLanguages();
     }
    public Code: string ="";
    public Lable: string="";

    private  SetLanguages() {
        this.arabic.Code = "ar";
        this.arabic.Lable = "Arabic";
        this.english.Code = "en";
        this.english.Lable = "English";
    }

    public  GetSupportedLanguages(): Language[] {
        var languageList: Language[] = [];
        languageList.push(this.arabic);
        languageList.push(this.english);
        return languageList;
    }
}