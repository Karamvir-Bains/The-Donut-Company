// Client facing scripts here
$(() => {
  $('#send-sms').on('click', () => {
    $.ajax({
      method: 'GET',
      url: '/api/twilio'
    });
  });
});
