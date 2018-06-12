$(function(){
  //$("#input-date").val(Date().toISOString());
  $("#form-account").submit(function(event){
    event.preventDefault();

    var userName = $("#input-name").val();
    var balance = parseInt($("#input-balance").val());

    var newAccount = new BankAccount(userName,balance);

    newAccount.output();

  });

});

  //Create a constructor for object Task
  function BankAccount(inputUserName,inputBalance){
  this.name = inputUserName;
  this.balance = inputBalance;
  }

  BankAccount.prototype.output = function ()
  {
  $(".output-balance").text(formatUSD(this.balance.toString()));
  };

  function clear(temp)
  {
  $(temp).val("");
  }

  function formatUSD(tempString)
  {
    return tempString.toLocaleString('en-US',{style: 'currency', currency: 'USD'});
  }
