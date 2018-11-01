import { fetchData, jwt } from '../helper.js';

export default class Tech {
  constructor(el) {
    this.el = el;
    this.setupDOM();
    this.bindEvents();
  }

  setupDOM() {
    this.EditableContent = [...this.el.querySelectorAll('[contenteditable="true"]')];
    this.techExpand = [...this.el.getElementsByClassName('tech__card-expand')];
    this.addTechBtn = this.el.querySelector('.tech__card-btn--add');
    this.deleteTechBtn = [...this.el.getElementsByClassName('tech__card-delete')];
    this.updateTechBtn = [...this.el.getElementsByClassName('tech__card-btn--update')];
    this.techPin = [...this.el.getElementsByClassName('tech__card-pin')];
  }

  bindEvents() {
    this.EditableContent.forEach(el => el.addEventListener('focus', this.focusContent.bind(this)))
    window.addEventListener('click', this.unfocusContent.bind(this));
    this.EditableContent.forEach(el => el.addEventListener('keypress', this.limitChars.bind(this)));
    this.techExpand.forEach(el => el.addEventListener('click', this.expandTech.bind(this)));
    this.techExpand.forEach(el => el.addEventListener('keypress', this.expandTech.bind(this)));
    this.addTechBtn.addEventListener('click', this.addTech.bind(this));
    this.addTechBtn.addEventListener('keypress', this.addTech.bind(this));
    this.updateTechBtn.forEach(el => el.addEventListener('click', this.updateTech.bind(this)));
    this.updateTechBtn.forEach(el => el.addEventListener('keypress', this.updateTech.bind(this)));
    this.deleteTechBtn.forEach(el => el.addEventListener('click', this.deleteTech.bind(this)));
    this.deleteTechBtn.forEach(el => el.addEventListener('keypress', this.deleteTech.bind(this)));
    this.techPin.forEach(el => el.addEventListener('click', this.highlightPin.bind(this)));
    this.techPin.forEach(el => el.addEventListener('keypress', this.highlightPin.bind(this)));
  }

  focusContent(e) {
    this.EditableContent.forEach(el => el.classList.remove('focus'));
    e.currentTarget.classList.add('focus');
  }

  unfocusContent(e) {
    if (e.target.contentEditable !== 'true') {
      this.EditableContent.forEach(el => {
        el.classList.remove('focus');
     });
    }
  }

  limitChars(e) {
    let max = e.target.nodeName === 'H3' ? 19 : 150;
    if (e.currentTarget.innerHTML.length > max) e.preventDefault();
  }

  expandTech(e) {
    if (e.key === 'Enter' || e.type === 'click') e.currentTarget.closest('li').children[1].classList.toggle('tech__card-description-expanded');
  }

  addTech(e) {
    if (e.key === 'Enter' || e.type === 'click') {
      let valueTitle = this.el.querySelector('.tech__card-title--add h3').innerHTML;
      let valueInfo = this.el.querySelector('.tech__card--add .tech__card-info').innerHTML;
      let list = this.addTechBtn.closest('.tech__card-container');
      let progressEl = [...list.children[0].children].find(el => el.classList.contains('lighten'));
      let progressValue = progressEl ? progressEl.getAttribute('value') : 'red';

      let href = `${this.addTechBtn.getAttribute('data-url')}?title=${valueTitle}&info=${valueInfo}&check=${progressValue}`;

      fetchData(href, 'post')
        .then(data => {
          location.reload();
        })
        .catch(err => {
          console.log(err);
        });
      }
  }

  updateTech(e) {
    if (e.key === 'Enter' || e.type === 'click') { 
      let valueTitle = e.currentTarget.closest('li').children[0].children[2].innerHTML;
      let valueInfo = e.currentTarget.closest('.tech__card-description').children[0].innerHTML;
      let list = e.currentTarget.closest('.tech__card-container');
      let progress = [...list.children[0].children].find(el => el.classList.contains('lighten'));

      let href = `${e.currentTarget.getAttribute('data-url')}?title=${valueTitle}&info=${valueInfo}&check=${progress.getAttribute('value')}`;

      fetchData(href, 'post')
        .then(data => {
          return;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }

  deleteTech(e) {
    if (e.key === 'Enter' || e.type === 'click') { 
      e.preventDefault();
      let href = e.currentTarget.getAttribute('href');
      let li = e.currentTarget.closest('li');

      fetchData(href, 'delete')
        .then(() => {
          li.remove();
        })
        .catch(err => {
          console.log(err);
        });
      }
  }

  highlightPin(e) {
    if (e.key === 'Enter' || e.type === 'click') { 
      let list = e.currentTarget.closest('ul');
      [...list.children].forEach(el => {
        el.classList.remove('lighten');
      });

      e.currentTarget.classList.add('lighten');
    }
  }
}