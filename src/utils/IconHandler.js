 export default function IconHandler(e) {
    let Isinput = e.currentTarget.previousSibling.type == 'password';
    let secIcon = e.currentTarget.children[1];
    let firIcon = e.currentTarget.children[0]
     if (Isinput) {
      e.currentTarget.previousSibling.type = 'text'
     }
     else{
      e.currentTarget.previousSibling.type = 'password'; 
     }
     if (secIcon.classList.contains('d-none') ) {
      secIcon.classList.remove('d-none');
      firIcon.classList.add('d-none')
     } else{
      secIcon.classList.add('d-none');
      firIcon.classList.remove('d-none')
     }
  }
  