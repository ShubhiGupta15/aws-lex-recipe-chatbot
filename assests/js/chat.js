$(document).ready(function () {
  AWS.config.region = "us-east-1"; // your Lex region
  AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: "us-east-1:57abde01-bae7-49af-951d-000d54f00ad4",
  });

  const lexruntimev2 = new AWS.LexRuntimeV2();
  const $messages = $(".messages-content");

  const botId = "XLPX2JKVIS";       // Lex V2 botId (UUID)
  const botAliasId = "AJXSIUL44A";  // Lex V2 botAliasId (UUID)
  const localeId = "en_US";         // Your bot locale
  const sessionId = "User-" + Date.now(); // Generate once per session

  $(window).on("load", function () {
    $messages.mCustomScrollbar();
    insertBotMessage("Welcome 🙌 ! Ready to cook something delicious?");
  });

  function updateScrollbar() {
    $messages
      .mCustomScrollbar("update")
      .mCustomScrollbar("scrollTo", "bottom", { scrollInertia: 10, timeout: 0 });
  }

  function sendMessage() {
    const msg = $(".message-input").val().trim();
    if (msg === "") return false;

    // Wrap user message
    $('<div class="message-wrapper user-message-wrapper"><div class="message message-personal">' + msg + '</div></div>')
      .appendTo($(".messages-content"));

    $(".message-input").val(null);
    updateScrollbar();

    // Lex API call
    const params = {
      botId,
      botAliasId,
      localeId,
      sessionId, // reuse same session
      text: msg,
    };

    lexruntimev2.recognizeText(params, function (err, data) {
      if (err) {
        console.error("Error:", err);
        insertBotMessage("Oops, something went wrong. Please try again.");
      } else if (data && data.messages && data.messages.length > 0) {
        const responseText = data.messages.map((m) => m.content).join("\n");
        insertBotMessage(responseText);
      } else {
        insertBotMessage("Sorry, I didn’t quite get that.");
      }
    });
  }

  $(".message-submit").click(function () {
    sendMessage();
  });

  $(window).on("keydown", function (e) {
    if (e.which === 13) {
      sendMessage();
      return false;
    }
  });

  function insertBotMessage(content) {
    $('<div class="message-wrapper bot-message-wrapper"><div class="message bot-message">' + content + '</div></div>')
      .appendTo($(".messages-content"));
    updateScrollbar();
  }
});
