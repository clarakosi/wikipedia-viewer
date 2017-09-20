$(document).ready(function() {
  $("#search").keyup(function(event) {
    if (event.keyCode == 13) {
      $(".input-group-btn").click();
    }
  });

  $(".input-group-btn").on("click", function() {
    var query = $("#search").val();
    var queryhtml = encodeURIComponent(query.trim());
    //alert(queryhtml);

    var wikiurl =
      "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" +
      queryhtml +
      "&format=json&origin=*";

    $.getJSON(wikiurl, function(json) {
      if (json.query.search.length === 10) {
        $(".list-group").show();

        $("#heading1").text(json.query.search[0].title);
        $("#description1").html(json.query.search[0].snippet + "...");
        $("#link1").attr(
          "href",
          "https://en.wikipedia.org/?curid=" + json.query.search[0].pageid
        );

        $("#heading2").text(json.query.search[1].title);
        $("#description2").html(json.query.search[1].snippet + "...");
        $("#link2").attr(
          "href",
          "https://en.wikipedia.org/?curid=" + json.query.search[1].pageid
        );

        $("#heading3").text(json.query.search[2].title);
        $("#description3").html(json.query.search[2].snippet + "...");
        $("#link3").attr(
          "href",
          "https://en.wikipedia.org/?curid=" + json.query.search[2].pageid
        );

        $("#heading4").text(json.query.search[3].title);
        $("#description4").html(json.query.search[3].snippet + "...");
        $("#link4").attr(
          "href",
          "https://en.wikipedia.org/?curid=" + json.query.search[3].pageid
        );

        $("#heading5").text(json.query.search[4].title);
        $("#description5").html(json.query.search[4].snippet + "...");
        $("#link5").attr(
          "href",
          "https://en.wikipedia.org/?curid=" + json.query.search[4].pageid
        );

        $("#heading6").text(json.query.search[5].title);
        $("#description6").html(json.query.search[5].snippet + "...");
        $("#link6").attr(
          "href",
          "https://en.wikipedia.org/?curid=" + json.query.search[5].pageid
        );

        $("#heading7").text(json.query.search[6].title);
        $("#description7").html(json.query.search[6].snippet + "...");
        $("#link7").attr(
          "href",
          "https://en.wikipedia.org/?curid=" + json.query.search[6].pageid
        );

        $("#heading8").text(json.query.search[7].title);
        $("#description8").html(json.query.search[7].snippet + "...");
        $("#link8").attr(
          "href",
          "https://en.wikipedia.org/?curid=" + json.query.search[7].pageid
        );

        $("#heading9").text(json.query.search[8].title);
        $("#description9").html(json.query.search[8].snippet + "...");
        $("#link9").attr(
          "href",
          "https://en.wikipedia.org/?curid=" + json.query.search[8].pageid
        );

        $("#heading10").text(json.query.search[9].title);
        $("#description10").html(json.query.search[9].snippet + "...");
        $("#link10").attr(
          "href",
          "https://en.wikipedia.org/?curid=" + json.query.search[9].pageid
        );
      } else {
        $("#headin1").text(
          "Please modify your search. Not enough information found."
        );
      }
    });
  });
});