function Main() {
    this.showBtnLinks = [];
    this.buttonUrls = [];
    this.sidebarUrls = [];
    this.currentBtnLinksIndex = 0;
    // this.currentBtnUrlsIndex = 0;
    this.currentSidebarIndex = 0;
    this.showBtnSideBarMail = null;
    this.showBtnSideBarImg = null;
    this.showBtnSideBareApps = null;
    this.showBtnSideBarUser = null;
    this.inputSearch = null;   
    this.i = 0; 
};

Main.prototype.start = function(){
    var that = this;

    //Нахождение эл бокового меню
    this.showBtnSideBarMail = document.querySelector('#sb_btn_mail');
    this.showBtnSideBarImg = document.querySelector('#sb_btn_img');
    this.showBtnSideBareApps = document.querySelector('#sb_btn_apps');
    this.showBtnSideBarUser = document.querySelector('#sb_btn_user');

    //Ссылки для кнопок бокового меню
    this.sidebarUrls.push('https://mail.google.com/');
    this.sidebarUrls.push('https://www.google.ru/imghp?hl=ru&tab=ri&ogbl');

    //Нахождение всех нижних кнопок 
    this.showBtnLinks = document.querySelectorAll('#btn_link_add');

    //Ссылки всех нижних кнопок
    this.buttonUrls.push('https://mail.ru/');
    this.buttonUrls.push('https://vk.com/feed');
    this.buttonUrls.push('https://github.com/');
    this.buttonUrls.push('https://www.google.com/');
    this.buttonUrls.push('error');

    //Событие нажатия кнопок бокового меню
    this.showBtnSideBarMail.addEventListener('click', function(e){
        this.currentSidebarIndex = 0;
        that.onShowBtnSideBar(this.currentSidebarIndex);
    });
    this.showBtnSideBarImg.addEventListener('click', function(e){
        this.currentSidebarIndex = 1;
        that.onShowBtnSideBar(this.currentSidebarIndex);
    });
    // this.showBtnSideBareApps.addEventListener('click', this.onShowBtnSideBar);
    // this.showBtnSideBarUser.addEventListener('click', this.onShowBtnSideBar);

    for(var i = 0; i < this.showBtnLinks.length-1; i++){
        if(this.showBtnLinks[i].value === 1){
            this.currentBtnLinksIndex = i;
        }
    }

    //Событие нажатия нижних кнопок
    this.showBtnLinks[this.currentBtnLinksIndex].addEventListener('click', function(e){  
        that.onShowBtnLinks(this.currentBtnLinksIndex);
    });
};
Main.prototype.onShowBtnSideBar = function(index){
    window.open(this.sidebarUrls[index], '_blank');
};
Main.prototype.onShowBtnLinks = function(index){
    window.open(this.buttonUrls[index], '_blank');
};
