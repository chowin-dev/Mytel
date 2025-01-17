const xhr = new XMLHttpRequest();
xhr.open('GET', './datas.txt', true);
xhr.onload = function () {
    if (xhr.status === 200) {
        const data = JSON.parse("["+xhr.responseText+"]");
        console.log(data);
        const listViewBody = document.querySelector('#listView tbody');
        listViewBody.innerHTML = ''; // Clear the table before adding new data

        // Create a function to render the table rows based on the current data
        function renderRows(filteredData) {
            listViewBody.innerHTML = ''; // Clear the existing rows

            filteredData.forEach((item, index) => {
                const phNo = item.phNo;
                const token = item.token;
                const accId = item.accId;

                // Create a new table row
                const row = document.createElement('tr');
                const rollNumberCell = document.createElement('td');
                rollNumberCell.textContent = index + 1;
                row.appendChild(rollNumberCell);

                const phNoCell = document.createElement('td');
                phNoCell.textContent = phNo;
                row.appendChild(phNoCell);

                const pointsCell = document.createElement('td');
                pointsCell.textContent = 'Loading...';
                row.appendChild(pointsCell);

                const balanceCell = document.createElement('td');
                balanceCell.textContent = 'Loading...';
                row.appendChild(balanceCell);

                const dataCell = document.createElement('td');
                dataCell.textContent = 'Loading...';
                row.appendChild(dataCell);

                const voiceCell = document.createElement('td');
                voiceCell.textContent = 'Loading...';
                row.appendChild(voiceCell);

                const hl2Cell = document.createElement('td');
                hl2Cell.textContent = 'Loading...';
                
                row.appendChild(hl2Cell);

                // Buttons Cell
                const actionsCell = document.createElement('td');
                actionsCell.style.display = 'flex';
                actionsCell.style.gap = '10px';

                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Delete';
                deleteButton.style.color = 'red';
                deleteButton.onclick = function () {
                    if (confirm(`Are you sure you want to delete item ${phNo}?`)) {
                        deleteItem(index);
                    }
                };
                actionsCell.appendChild(deleteButton);

                const Point_Exchange_button = document.createElement('button');
                Point_Exchange_button.textContent = 'Point_Exchange';
                Point_Exchange_button.addEventListener('click', () => {
    const dialog = document.createElement('div');
    dialog.id = 'pointExchangeDialog';
    dialog.innerHTML = `
        <div id="dialog-over"></div>
        <div id="dialogs">
            <h3>Select a reward</h3>
            <ul id="rewardList">
                <li>DATA_40MB</li>
                <li>DATA_100MB</li>
                <li>DATA_300MB</li>
                <li>DATA_800MB</li>
                <li>DATA_1350MB</li>
                <li>DATA_22000MB</li>
                <li>DATA_36000MB</li>
                <li>DATA_55250MB</li>
                <li>DATA_87500MB</li>
                <li>SMS_13500</li>
                <li>SMS_8000</li>
                <li>SMS_3000</li>
                <li>SMS_1000</li>
                <li>SMS_400</li>
                <li>VOICE_270MIN</li>
                <li>VOICE_160MIN</li>
                <li>VOICE_60MIN</li>
                <li>VOICE_20MIN</li>
                <li>VOICE_8MIN</li>
            </ul>
            <div>
                <button id="closeDialog">Close</button>
            </div>
        </div>
    `;
    
    // Append the dialog to the body
    document.body.appendChild(dialog);

    // Close the dialog when clicking the close button
    document.getElementById('closeDialog').addEventListener('click', () => {
        document.body.removeChild(dialog);
    });

    // Add click event listener for each item in the list
    const rewardListItems = document.querySelectorAll('#rewardList li');
    rewardListItems.forEach(item => {
        item.addEventListener('click', () => {
            const rewardCode = item.textContent;
              // Ensure you get the token properly

            // Make the API request
const url = 'https://apis.mytel.com.mm/loyalty/api/v3.1/pack/exchange';

    // Prepare the request body
    const body = {
        requestId: '76d44ff75acd4ceb',
        msisdn: `+95${phNo}`,
        rewardCode: rewardCode,
        requestTime: Date.now() + 2073600000000 // Current time in milliseconds
        
        
    };
    console.log(Date.now());
        console.log(Date.now()+2073600000000);

    fetch(url, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            mode: 'no-cors',
            'Content-Type': 'application/json' // Ensure JSON content type
        },
        body: JSON.stringify(body) // Send the data as JSON
    })
    .then(response => response.json())
    .then(data => {
        if (data.errorCode === '0') {
            alert('Success: ' + data.message); // Success alert
        } else {
            alert('Error: ' + data.message); // Error alert
        }
    })
    .catch(error => {
        console.error('Error making API request:', error);
        alert('Error: ' + error.message);
    });

            // Close the dialog
            document.body.removeChild(dialog);
        });
    });


// Function to make the API request for the reward exchange


});
                actionsCell.appendChild(Point_Exchange_button);

                const button2 = document.createElement('button');
                button2.textContent = 'point_1500_plan';
                actionsCell.appendChild(button2);
                

const button3 = document.createElement('button');
button3.textContent = 'AIO(NT)';

button3.addEventListener('click', () => {
    // Create the dialog container
    const dialo = document.createElement('div');
    dialo.id = 'pointExchangeDialo';
    dialo.innerHTML = `
        <div id="dialog-ove"></div>
    <div id="dialos">
    <div class="refresh">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"/>
  <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466"/>
</svg>
    </div>
        <h3>Quest</h3>
        <div id="timeFlex">
           <div id="co">
              <div id="st">
                <p>Start Time</p>
                <div id="ac">
                    <p>12:00:00</p>
                </div>
              </div>
           </div>
           <div id="co1">
              <div id="et">
                <p>End Time</p>
                <div id="ec">
                    <p>12:00:00</p>
                </div>
              </div>
           </div>
        </div>
           <div class="daycon">
            <div class="dayin">
              <div class="dc">
                 <p>Day : 0</p>
              </div>
              <div class="cc">
                <p>Claim</p>
              </div>
            </div>
           </div>
        <div>
            <button id="close">Close</button>
        </div>
    </div>
</div>

            

        
    `;
    
    // Append the dialog to the body
    document.body.appendChild(dialo);

    // Close the dialog when clicking the close button
    document.getElementById('close').addEventListener('click', () => {
        document.body.removeChild(dialo);
    });
});


// Append the button to the actionsCell
    actionsCell.appendChild(button3);



                const buttonAutoStart = document.createElement('button');
                buttonAutoStart.classList.add('autoStart');
                buttonAutoStart.textContent = '6_days';
                actionsCell.appendChild(buttonAutoStart);

                const buttonAutoStop = document.createElement('button');
                buttonAutoStop.classList.add('autoStop');
                buttonAutoStop.textContent = 'Auto Stop';
                actionsCell.appendChild(buttonAutoStop);

                row.appendChild(actionsCell);
                
                const rowb = document.createElement('tr');
                const rollbNumberCell = document.createElement('td');
                rollbNumberCell.textContent = index + 1;
                row.appendChild(rollbNumberCell);






                // Fetch API data and update the points cell
                fetch('https://apis.mytel.com.mm/csm/v1.0/api/loyalty', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'country_code': 'MM',
                        'language_code': 'en',
                        'device_id': '76d44ff75acd4ceb',
                        'user_id': '0',
                        'client_type': '1',
                        'msisdn': '+950000000012',
                        'local_code': '95',
                        'version': '1.0.95',
                        'revision': '222',
                        'User-Agent': 'Dalvik/2.1.0 (Linux; U; Android 12; M2007J22C Build/SP1A.210812.016)'
                    }
                   
                })
                .then(apiResponse => {
                    if (!apiResponse.ok) {
                        throw new Error('API response was not ok: ' + apiResponse.statusText);
                    }
                    return apiResponse.json();
                })
                .then(apiData => {
                    if (apiData.errorCode === 0) {
                        const balanceObj = apiData.result.balances.find(
                            bal => bal.loyaltyBalanceCode === 'TELCO_EXCHANGEABLE_POINTS'
                        );
                        const balance = balanceObj ? balanceObj.balance : 0;
                        pointsCell.textContent = `${balance} PT`;
                    } else {
                        pointsCell.textContent = '(Error fetching points)';
                    }
                })
                .catch(apiError => {
                    pointsCell.textContent = '(API Error)';
                });
                
                
        const hurl = `http://127.0.0.1:5000/process-api`;
const hl2requestOptions = {
    method: 'POST',
    headers: {
        'phNo': `${phNo}`,
        'Authorization': `Bearer ${token}`,
        'accId': `${accId}`
        
    }
    
};

console.log(hurl,hl2requestOptions);
fetch(hurl, hl2requestOptions)
    .then(hl2Response => {
        if (hl2Response.ok) {
            return hl2Response.json(); // Parse the response JSON
        } else {
            throw new Error("Failed to fetch HL2 status");
        }
    })
    .then((data) => {
        if (data.hl2Status === "available") {
            hl2Cell.textContent = "✓"; // Show HL2 as available
            hl2Cell.style.color = 'green';
        } else {
            hl2Cell.textContent = "X"; // Show HL2 as unavailable
            hl2Cell.style.color = 'red';
        }
    })
    .catch((error) => {
        console.error("Error:", error);
        hl2Cell.textContent = "Error fetching status";
    });



            
                

                // Second API: Fetch balance, data, and voice usage
                const url = `https://apis.mytel.com.mm/account-detail/api/v1.1/individual/${accId}/account-detail?language=EN`;
                const requestOptions = {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'country_code': 'MM',
                        'language_code': 'en',
                        'device_id': '76d44ff75acd4ceb',
                        'user_id': '0',
                        'client_type': '1',
                        'msisdn': '+950000000012',
                        'local_code': '95',
                        'version': '1.0.95',
                        'revision': '222',
                        'User-Agent': 'Dalvik/2.1.0 (Linux; U; Android 12; M2007J22C Build/SP1A.210812.016)'
                    }
                   
                };

                fetch(url, requestOptions)
                .then(secondApiResponse => {
                    if (!secondApiResponse.ok) {
                        throw new Error('Second API response was not ok: ' + secondApiResponse.statusText);
                    }
                    return secondApiResponse.json();
                })
                .then(secondApiData => {
                    if (secondApiData.errorCode === 0) {
                        const balanceObj = secondApiData.result.accounts.find(account => account.groupName === 'Balance');
                        const dataObj = secondApiData.result.accounts.find(account => account.groupName === 'Data');
                        const voiceObj = secondApiData.result.accounts.find(account => account.groupName === 'Voice');

                        const balance = balanceObj ? balanceObj.totalBalance : 0;
                        const data = dataObj ? dataObj.totalBalance : 0;
                        const voice = voiceObj ? voiceObj.totalBalance : 0;

                        balanceCell.textContent = `${balance} Ks`;
                        dataCell.textContent = `${data} MB`;
                        voiceCell.textContent = `${voice} Min`;
                    } else {
                        console.error('Error in second API data:', secondApiData.message);
                    }
                })
                .catch(secondApiError => {
                    console.error('Error fetching second API data:', secondApiError);
                });

                listViewBody.appendChild(row);
            });
        }

        renderRows(data);
        
        
        
// Ensure 'item' is defined and has a 'phNo' property



    
        
        

        // Search functionality
        const searchInput = document.getElementById('sein');
        searchInput.addEventListener('input', function () {
            const query = searchInput.value.toLowerCase();
            const filteredData = data.filter(item => item.phNo.toLowerCase().includes(query));
            renderRows(filteredData);
        });

    } else {
        console.error('Failed to load file:', xhr.status);
        document.querySelector('#listView tbody').innerHTML = '<tr><td colspan="3">Error loading data.</td></tr>';
    }
};

xhr.onerror = function () {
    console.error('Error fetching file.');
    document.querySelector('#listView tbody').innerHTML = '<tr><td colspan="3">Error loading data.</td></tr>';
};

xhr.send();

function deleteItem(index) {
    const xhrDelete = new XMLHttpRequest();
    xhrDelete.open('POST', './delete_item.php', true);
    xhrDelete.setRequestHeader('Content-Type', 'application/json');
    xhrDelete.onload = function () {
        if (xhrDelete.status === 200) {
            alert('Item deleted successfully!');
            location.reload(); // Refresh the list
        } else {
            console.error('Error deleting item:', xhrDelete.status);
        }
    };
    xhrDelete.onerror = function () {
        console.error('Error deleting item.');
    };
    xhrDelete.send(JSON.stringify({ index }));
}

// Function to open the "Point Exchange" dialog

// Add a click event listener to the "Point_Exchange" button to open the dialog with options


// Function to show the Point Exchange dialog with the list of options

    