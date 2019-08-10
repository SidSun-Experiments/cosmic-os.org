$(document).ready(() => {
  $(document).click(event => {
    let clickover = $(event.target);
    let opened = $('.navbar-collapse').hasClass('show');
    if (opened === true && !clickover.hasClass('navbar-toggler')) {
      $('.navbar-toggler').click();
    }
  });
});
