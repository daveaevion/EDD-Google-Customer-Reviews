<script src="https://apis.google.com/js/platform.js?onload=renderOptIn" async defer></script>

<script>
  window.renderOptIn = function() {
    window.gapi.load('surveyoptin', function() {
      window.gapi.surveyoptin.render(
        {
          // REQUIRED FIELDS
          "merchant_id": YOUR_MERCHANT_ID,
          "order_id": "<?php echo edd_get_payment_number( $payment->ID ); ?>",
          "email": "<?php echo edd_get_payment_user_email( $payment->ID ); ?>",
          "delivery_country": "US",
          "estimated_delivery_date": "<?php echo date("Y-m-d"); ?>"
        });
    });
  }
</script>
