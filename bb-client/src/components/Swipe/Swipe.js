import "./Swipe.scss";
import $ from "jquery";

function Swipe() {
  $(document).ready(function () {
    $(".buddy").on("swiperight", function () {
      $(this).addClass('rotate-left').delay(700).fadeOut(1);
      $('.buddy').find('.status').remove();

      $(this).append('<div className="status like">Like!</div>');
      if ($(this).is(':last-child')) {
        $('.buddy:nth-child(1)').removeClass('rotate-left rotate-right').fadeIn(300);
      } else {
        $(this).next().removeClass('rotate-left rotate-right').fadeIn(400);
      }
    });

    $(".buddy").on("swipeleft", function () {
      $(this).addClass('rotate-right').delay(700).fadeOut(1);
      $('.buddy').find('.status').remove();
      $(this).append('<div className="status dislike">Dislike!</div>');

      if ($(this).is(':last-child')) {
        $('.buddy:nth-child(1)').removeClass('rotate-left rotate-right').fadeIn(300);
        alert('OUPS');
      } else {
        $(this).next().removeClass('rotate-left rotate-right').fadeIn(400);
      }
    });
  });

  return (
    <div id="container">
      <div className="buddy" style={{ display: "block" }}>
        <div className="avatar" style={{ display: "block", backgroundImage: 'url())' }}></div>
      </div>
      <div className="buddy">
        <div className="avatar" style={{ display: "block", backgroundImage: 'url()' }}></div>
      </div>
      <div className="buddy">
        <div className="avatar" style={{ display: "block", backgroundImage: 'url()' }}></div>
      </div>
      <div className="buddy">
        <div className="avatar" style={{ display: "block", backgroundImage: 'url()' }}></div>
      </div>
      <div className="buddy">
        <div className="avatar" style={{ display: "block", backgroundImage: 'url()' }}></div>
      </div>
    </div>
  );
}

export default Swipe;
