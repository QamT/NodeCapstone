import '../stylesheets/main.scss';

// can't use let, const in the global scope for some reason. need to add plugin in webpack perhaps

// let checks = document.querySelectorAll("input[type=radio]");

// console.log(checks.length);
// 
// let checks = [...document.querySelectorAll('input[name="check"]')];

[...document.querySelectorAll('input[name="check"]')].forEach(el => {
  el.addEventListener('click', (e) => {
    let num = el.getAttribute('data-val');
    if (num) document.getElementsByClassName('tech__progress')[num].submit();
})});

[...document.getElementsByClassName('tech__update')].forEach(el => {
  el.addEventListener('click', () => {
    console.log(el.parentElement.children[0].getAttribute('value'));
    let valueTitle = el.parentElement.parentElement.children[0].innerHTML;
    let valueInfo = el.parentElement.parentElement.children[1].innerHTML;
    el.parentElement.children[0].setAttribute('value', valueTitle);
    el.parentElement.children[1].setAttribute('value', valueInfo);
    el.closest('li form').submit();
  });
});

var jwt = document.cookie.split('=')[1];

[...document.querySelectorAll('li > a')].forEach(el => {
  el.addEventListener('click', (e) => {
    e.preventDefault()
    let headers = {
      headers: {
        'content-type': 'application/json',
        Authorization: 'Bearer' + jwt
      },
      credentials: 'same-origin',
      method: 'DELETE'
    }

    let href = el.getAttribute('href');
    let li = el.closest('li');

    fetch(href, headers)
      .then(() => {
        li.remove();
      })
      .catch(err => {
        console.log(err);
      })
  });
});

var addBtn = document.querySelector('.tech__add'),
  addProjectBtn = document.getElementsByClassName('project__add')[0],
  updateProjectBtn = document.getElementsByClassName('project__update');

if (addBtn) addBtn.addEventListener('click', () => {
  document.getElementsByClassName('modal')[0].classList.toggle('display-modal');
});

if(addProjectBtn) addProjectBtn.addEventListener('click', () => {
  document.getElementsByClassName('modal')[0].classList.toggle('display-modal');
});

if (updateProjectBtn) [...updateProjectBtn].forEach((el, i) => {
  el.addEventListener('click', () => {
    document.querySelectorAll('ul .modal')[i].classList.toggle('display-modal');
  });
});

window.addEventListener('click', (e) => {
  [...document.getElementsByClassName('modal')].forEach(el => {
    if(e.target === el) el.classList.toggle('display-modal');
  });
});

var topBar = document.getElementsByClassName('topBar')[0];
var topBarMenu = document.getElementsByClassName('topBar-menu')[0];
var sideNav = document.getElementsByClassName('sideNav')[0];
var links =  document.querySelectorAll('.sideNav a');

if (topBar) {
  window.onscroll = () => {
    if((window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) > 40) {
      topBar.classList.add('topBar-colored');
    } else {
      topBar.classList.remove('topBar-colored');
    }
  }

  topBarMenu.addEventListener('click', () => {
    sideNav.classList.toggle('sideNav-expanded');
  });
  
  var num = sideNav.getAttribute('data-num');
  links[num].classList.add('selected');
}

