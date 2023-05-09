const sidebar = document.querySelector('.sidebar');
const layout = document.querySelector('.layout');
const body = document.querySelector('.body');
const Offcanvas = document.querySelector('.offcanvas');
const offcanButton = document.querySelector('.but')



sidebar.addEventListener('click' , () => {
    console.log("event apply");
    
    // layout

   const displayout = layout.classList;
   displayout.add('layout_apply');
   displayout.remove('layout');
   const scroll = body.classList;
    scroll.add('block_scroll');

    //Offcanvas

    const offcan = Offcanvas.classList;
    offcan.add("offcanvas_show");
    offcan.remove('offcanvas')


})
layout.addEventListener('click', () =>{
    console.log('2 event apply');

    // layout

    const dispbk = layout.classList;
    dispbk.add('layout');
    dispbk.remove('layout_apply');
    const scroll = body.classList;
    scroll.remove('block_scroll');

     //Offcanvas

    const offcan = Offcanvas.classList;
    offcan.add("offcanvas");
    offcan.remove('offcanvas_show')
})

//offcanvas close button

offcanButton.addEventListener('click' , () => {
     // layout

     const dispbk = layout.classList;
     dispbk.add('layout');
     dispbk.remove('layout_apply');
     const scroll = body.classList;
     scroll.remove('block_scroll');
 
      //Offcanvas
 
     const offcan = Offcanvas.classList;
     offcan.add("offcanvas");
     offcan.remove('offcanvas_show')
})


