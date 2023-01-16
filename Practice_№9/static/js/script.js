let answer;
do
{
  answer = prompt('Would you like to register on the website?');
  answer = answer.toLowerCase();

  if (answer == 'yes' || answer == 'yea' || answer == 'ok')
  {
    alert('Well!');
  }
  else
  {
    alert('Better luck next time!');
  }
} while (answer != 'yes' && answer != 'yea' && answer != 'ok');

answer = prompt('Login?');
if (answer == 'Admin')
{
  answer = prompt('Password?');
  if (answer == "qwerty")
  {
    alert('Hello!');
  }
  else if (answer === null)
  {
    alert('Cancelled...');
  }
  else
  {
    alert('Invalid password!');
  }
}
else if (answer === null || answer == '')
{
  alert('Cancelled...');
}
else
{
  alert("Who are you? I didn't call you!");
}
