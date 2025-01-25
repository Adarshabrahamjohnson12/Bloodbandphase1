document.getElementById("donorForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const bloodType = document.getElementById("blood-type").value;
    const location = document.getElementById("location").value;
  
    alert(`Thank you, ${name}, for registering as a blood donor!`);
    console.log({ name, bloodType, location });
  });
  
  document.getElementById("searchDonors").addEventListener("click", function() {
    const bloodType = document.getElementById("search-blood-type").value;
    document.getElementById("results").innerHTML = `Searching for donors with blood type ${bloodType}...`;
  });
  
  // Chart (dummy data)
  const ctx = document.getElementById('forecastChart').getContext('2d');
  const forecastChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May'],
      datasets: [{
        label: 'Blood Demand',
        data: [30, 40, 35, 50, 45],
        borderColor: 'red',
        fill: false,
      }]
    },
    options: {
      responsive: true,
    }
  });
  