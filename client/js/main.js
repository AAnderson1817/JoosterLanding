//Variables
const signup = $('#signup-btn');
const formpanel = $('#form-panel');
const successpanel = $('#success-panel');
const successexit = $('#success-exit');

//Functions
function swapPanels(){
  console.log("Working!");
  successpanel[0].style.display = "block";
<<<<<<< HEAD
  successpanel.addClass('slideRight').addClass('zmid').removeClass('zbot').removeClass('hidden');
}
function closePanel(){
  successpanel.addClass('hidden');
=======
  successpanel.toggleClass('slideRight').toggleClass('ztop').toggleClass('zbot');
>>>>>>> d0791dd4518f7cf60122f9a314afaf99e599cb32
}

//Event Listeners
signup.on('click', swapPanels);
<<<<<<< HEAD
successexit.on('click', closePanel);
=======
$(window).on('click', )
>>>>>>> d0791dd4518f7cf60122f9a314afaf99e599cb32
