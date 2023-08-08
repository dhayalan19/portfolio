//   <script src="https://unpkg.com/scrollreveal"></script>
//    <script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"></script>
//    <script src="script.js"></script>
// INTHA 3 LINEYAUM UNGA HTML FILE LA ADD PANIKOONGA ANTHA JS FILE MATTUM UNGA WISH PADI NAME CHANGE PANIKOONGA
// APROM INTHA KEELA ULLA JS LINES AA APIDI YA POTUTU UNGALUKU ENTA DIRECTION REVEAL AAGANUMOO ANTHA DIRECTIONLA UNGA "CLASS NAME" A PODUNGA

ScrollReveal({
    reset:true,
    distance:'80px',
    duration:1000,
    delay:100
});
 

 ScrollReveal().reveal('.navbar',{origin: 'top'});
 ScrollReveal().reveal('.home', {origin: 'bottom'});
 ScrollReveal().reveal('main,.gallery', {origin: 'left'});
 ScrollReveal().reveal('headings,.skills,.footer-social', {origin: 'right'});
 
 

