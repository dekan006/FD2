class Language {
    #code = "en";
    #name = "English";
    #rtl = true;
    #defaults = false;

    constructor(code, name, rtl, defaults){
      this.#code = code;
      this.#name = name;
      this.#rtl = rtl;
      this.#defaults = defaults;
    }
    get getCode() {
      return this.#code;
    }
  
    get getName() {
      return this.#name;
    }
  
    get getRtl() {
      return this.#rtl;
    }
  
    get getDefault() {
      return this.#defaults;
    }
  }
  
  const russian = new Language("ru", "Russian", false, true);


  console.log(russian.getCode, russian.getName);