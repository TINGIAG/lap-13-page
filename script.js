function myFunction() {
   const emailValue = document.getElementById("myEmail").value;
   const errorEmail = document.getElementById("error");
   const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   const check = emailValue.match(regex);
   const sectionContent = document.querySelector('.hide');
   console.log('check section', sectionContent);
   const submitControl = document.querySelector('#personal-info .sign-in');
   if(check) {
    sectionContent.style.display = 'block';
    submitControl.style.display = 'none';
    errorEmail.innerHTML = '';
   } else {
    errorEmail.innerHTML = 'Email is invalid...';
   }
   
}

function handleOnMouseOver(element) {
    const viewMore = element.querySelector('.control');
    viewMore.style.display = 'inline-block';
}
function handleOnMouseOut(element) {
    const viewMore = element.querySelector('.control');
    if (!viewMore.classList.value.includes('view-less')) {
        viewMore.style.display = 'none';

    }
    
}
function handleViewMore(element) {
    const parentElement = element.closest('.box');
    const viewMore = parentElement.querySelector('.control');
    const sectionContent = parentElement.querySelectorAll('.section-content');
    if (viewMore.classList.value.includes('view-more')) {
        sectionContent.forEach((element) => {
            element.style.display = 'block';
        });
        viewMore.classList.remove('view-more');
        viewMore.classList.add('view-less');
        viewMore.innerHTML = 'View less';

    } else {
        sectionContent.forEach((element) => {
            element.style.display = 'none';
        });
        viewMore.classList.remove('view-less');
        viewMore.classList.add('view-more');
        viewMore.innerHTML = 'View more';
    }
    
}