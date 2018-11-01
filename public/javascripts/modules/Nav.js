export default class Nav {
  constructor(el) {
    this.el = el;
    this.setupDOM();
    this.bindEvents();
    this.highlightNav()
  }

  setupDOM() {
    this.topBar = this.el.querySelector('.topBar');
    this.topBarMenu = this.el.querySelector('.topBar-menu');
    this.sideNav = this.el.querySelector('.sideNav');
    this.links = this.el.querySelectorAll('.sideNav a');
  }

  bindEvents() {
    this.topBarMenu.addEventListener('click', this.expandNav.bind(this));
    this.topBarMenu.addEventListener('keypress', this.expandNav.bind(this));
    window.onscroll = this.highlightBar.bind(this);
  }

  expandNav(e) {
    if (e.key === 'Enter' || e.type === 'click') this.sideNav.classList.toggle('sideNav-expanded');
  }

  highlightNav() {
    let num = this.sideNav.getAttribute('data-num');
    this.links[num].classList.add('selected');
  }

  highlightBar() {
    if((window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) > 40) {
      this.topBar.classList.add('topBar-colored');
    } else {
      this.topBar.classList.remove('topBar-colored');
    }
  }
}