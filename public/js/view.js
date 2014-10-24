var View = (function(){
  var usd = true
  var cur_price = updatePrice();

  function displayPrice(price){
    $(".price h2").text(price)
    cur_price = price
  }

  function startPriceUpdate(){
    setInterval(function(){
      updatePrice()}, 10000);
  }

  function updatePrice(){
    $.ajax({
        url: "/price"
      }).done( displayPrice);
  }

  function addToDom($newdiv, size){
      $("#bubbleDiv").append($newdiv);
      $newdiv.addClass("movingDiv");
      $newdiv.attr("id",current_tx.tx_hash);
      var ypos = Math.random()*($( window ).height()-150);
      var speed = 40000 + Math.random()*20000;
      $newdiv.css("background-color", Please.make_color());
      $newdiv.css("font-size",size+"em");
      $newdiv.height($newdiv.width());
      $newdiv.css("border-radius","50%");
      $newdiv.css("top",ypos - $newdiv.height());
      $newdiv.addClass("fade");
      $newdiv.transition({x:$( window ).width()-$newdiv.width(), duration:speed},'linear',function(){
         $newdiv.transition({opacity:0, duration:300},function(){
            $(this).remove();
        });
      });
  }

  function displayTransactions(transactions){
    for(var i=0; i<transactions.length; i++)
    {
      current_tx = transactions[i].transaction;
      if(usd === false)
      {
        amount = current_tx.bitcoin/100000000;
        amount = amount.toFixed(6).toString() + " BTC";
      }
      else
        amount = convertToUSD(current_tx.bitcoin/100000000).toString() + "$"

      var $link = $("<div><a href='http://blockchain.info/tx/"+current_tx.tx_hash+"' target='_blank'><h4>" + amount +  "</h4></a></div>")
      addToDom($link, Math.log(convertToUSD(current_tx.bitcoin/100000000))/6);

    }
  }

  function convertToUSD(num_btc){
    val = num_btc*cur_price
    return val.toFixed(2)
  }

  function switchCurrencies(){
    usd = !usd

    if(usd === false)
    {
      $(".movingDiv h4").each(function(){
        var num_usd = parseFloat($(this).text());
        $(this).text((num_usd/cur_price).toFixed(4) + " BTC");
        $(this).height($(this).width());
        $(this).css("border-radius","50%")
      })
       $(".movingDiv").each(function(){
        $(this).height($(this).width());
        $(this).css("border-radius","50%")
      })

    }
    else
      $(".movingDiv h4").each(function(){
        var num_btc = parseFloat($(this).text());
        $(this).text(convertToUSD(num_btc) + " $");
      })
      $(".movingDiv").each(function(){
        $(this).height($(this).width());
        $(this).css("border-radius","50%")
      })
    }


  return{
    displayTransactions: displayTransactions,
    switchCurrencies: switchCurrencies,
    startPriceUpdate: startPriceUpdate
  }
})();
