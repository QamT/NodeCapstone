import { fetchData, jwt } from '../helper.js'

export default class Project {
  constructor(el) {
    this.el = el;
    this.setupDOM();
    this.bindEvents();
  }

  setupDOM() {
    this.addProjectBtn = this.el.querySelector('.project__add');
    this.updateProjectBtn = [...this.el.getElementsByClassName('project__card-update')];
    this.deleteProjectBtn = [...this.el.getElementsByClassName('project__card-delete')];
    this.updateImgBtn = [...this.el.getElementsByClassName('project__card-addImg')];
  }

  bindEvents() {
    this.deleteProjectBtn.forEach(el => el.addEventListener('click', this.deleteProject.bind(this)));
    this.deleteProjectBtn.forEach(el => el.addEventListener('keypress', this.deleteProject.bind(this)));
    this.addProjectBtn.addEventListener('click', this.displayAddModal.bind(this));
    this.addProjectBtn.addEventListener('keypress', this.displayAddModal.bind(this));
    this.updateProjectBtn.forEach(el => el.addEventListener('click', this.displayUpdateModal.bind(this)));
    this.updateProjectBtn.forEach(el => el.addEventListener('keypress', this.displayUpdateModal.bind(this)));
    this.updateImgBtn.forEach(el => el.addEventListener('click', this.displayUpdateModal.bind(this)));
    this.updateImgBtn.forEach(el => el.addEventListener('keypress', this.displayUpdateModal.bind(this)));
    window.addEventListener('click', this.closeModal.bind(this));
  }

  deleteProject(e) {
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

  displayAddModal(e) {
    if (e.key === 'Enter' || e.type === 'click') this.el.getElementsByClassName('modal')[0].classList.toggle('display-modal');
  }

  displayUpdateModal(e) {
    if (e.key === 'Enter' || e.type === 'click') e.currentTarget.closest('li').children[3].classList.toggle('display-modal');
  }

  closeModal(e) {
    [...this.el.getElementsByClassName('modal')].forEach(el => {
      if(e.target === el) el.classList.toggle('display-modal');
    });
  }
}