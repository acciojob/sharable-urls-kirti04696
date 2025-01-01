// your code here
 function updateURL(event) {
      event.preventDefault(); 

      // Get values from input fields
      const name = document.getElementById('name').value;
      const year = document.getElementById('year').value;

      // Construct the query string
      const baseURL = 'https://localhost:8080/';
      const queryString = `?name=${encodeURIComponent(name)}&year=${encodeURIComponent(year)}`;

      // Update the h3 element with the new URL
      document.getElementById('url').textContent = baseURL + queryString;
    }