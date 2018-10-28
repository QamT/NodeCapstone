import '../stylesheets/main.scss';


[...document.getElementsByClassName('tech__card-pin')].forEach(el => {
  el.addEventListener('click', (e) => {
    let index = el.getAttribute('data-val');
    document.querySelectorAll(`[data-val="${index}"`).forEach(el => {
      el.classList.remove('lighten');
    });

    el.classList.add('lighten');
})});
//fix lets, constant
let addTech = document.getElementsByClassName('tech__card-btn--add')[0];

if (addTech) addTech.addEventListener('click', () => {
  let valueTitle = document.querySelector('.tech__card-title--add h3').innerHTML;
  let valueInfo = document.querySelector('.tech__card--add .tech__card-info').innerHTML;
  let list = addTech.closest('.tech__card-container');
  let progressEl = [...list.children[0].children].find(el => el.classList.contains('lighten'));
  let progressValue = progressEl ? progressEl.getAttribute('value') : 'red';

  let headers = {
    headers: {
      'content-type': 'application/json',
      Authorization: 'Bearer' + jwt
    },
    credentials: 'same-origin',
    method: 'POST'
  }

  let href = `${addTech.getAttribute('data-url')}?title=${valueTitle}&info=${valueInfo}&check=${progressValue}`;

  fetch(href, headers)
    .then(data => {
      location.reload();
    })
    .catch(err => {
      console.log(err);
    })
});

[...document.getElementsByClassName('tech__card-btn--update')].forEach(el => {
  el.addEventListener('click', () => {
    let valueTitle = el.closest('li').children[0].children[2].innerHTML;
    let valueInfo = el.closest('.tech__card-description').children[0].innerHTML;
    let list = el.closest('.tech__card-container');
    let progress = [...list.children[0].children].find(el => el.classList.contains('lighten'));

    let headers = {
      headers: {
        'content-type': 'application/json',
        Authorization: 'Bearer' + jwt
      },
      credentials: 'same-origin',
      method: 'POST'
    }

    let href = `${el.getAttribute('data-url')}?title=${valueTitle}&info=${valueInfo}&check=${progress.getAttribute('value')}`;

    fetch(href, headers)
      .then(data => {
        return data;
      })
      .catch(err => {
        console.log(err);
      })
  });
});

[...document.getElementsByClassName('tech__card-expand')].forEach(el => {
  el.addEventListener('click', () => {
    el.closest('li').children[1].classList.toggle('tech__card-description-expanded');
  });
});

[...document.querySelectorAll('[contenteditable="true"]')].forEach((el, index) => {
  el.addEventListener('focus', () => {
    [...document.querySelectorAll('[contenteditable="true"]')].forEach(el => el.classList.remove('focus'));
    el.classList.add('focus');
  });
  
  el.addEventListener('keypress', (e) => {
    let techCard = document.getElementsByClassName('tech__card')[index/2];
    let max = e.target.nodeName === 'H3' ? 19 : 150;

    if (el.innerHTML.length > max) e.preventDefault();
    
  });
})

var getCookie = () => {
  return document.cookie.split('=')[1];
}

var jwt = getCookie();

[...document.getElementsByClassName('tech__card-delete')].forEach((el, i) => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
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
        updateTechs(i);
      })
      .catch(err => {
        console.log(err);
      })
  });
});

var updateTechs = (num) => {
  [...document.getElementsByClassName('tech__card-pin')].forEach((el, i) => {
    let index = parseInt(el.getAttribute('data-val'));
    if (index > num) el.setAttribute('data-val', index - 1); 
  });
}

//project

var addProjectBtn = document.getElementsByClassName('project__add')[0],
  updateProjectBtn = document.getElementsByClassName('project__card-update'),
  deleteProject = document.getElementsByClassName('project__card-delete'),
  updateImgBtn = document.getElementsByClassName('project__card-addImg');

if(addProjectBtn) addProjectBtn.addEventListener('click', () => {
  document.getElementsByClassName('modal')[0].classList.toggle('display-modal');
});

if (updateProjectBtn) [...updateProjectBtn].forEach(el => {
  el.addEventListener('click', () => {
    el.closest('li').children[3].classList.toggle('display-modal');
  });
});

if (updateImgBtn) [...updateImgBtn].forEach(el => {
  el.addEventListener('click', () => {
    el.closest('li').children[3].classList.toggle('display-modal');
  });
});

if (deleteProject) [...deleteProject].forEach(el => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
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

//window

window.addEventListener('click', (e) => {
  [...document.getElementsByClassName('modal')].forEach(el => {
    if(e.target === el) el.classList.toggle('display-modal');
  });
  
  if (e.target.contentEditable !== 'true') {
    [...document.querySelectorAll('[contenteditable="true"]')].forEach(el => {
      el.classList.remove('focus');
   });
  }
});

//nav

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

