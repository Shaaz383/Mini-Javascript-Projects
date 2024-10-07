function generateIDCard() {
  const name = document.getElementById("name").value;
  const mobile = document.getElementById("mobile").value;
  const email = document.getElementById("email").value;
  const department = document.getElementById("department").value;
  const photoInput = document.getElementById("photo").files[0];

  if (!name || !mobile || !email || !department || !photoInput) {
      alert("Please fill all fields and upload a photo");
      return;
  }

  const reader = new FileReader();

  reader.onload = function (e) {
      const photoURL = e.target.result;

      const cardTemplate = `
          <div class="card">
              <img src="${photoURL}" alt="Student Image">
              <h3>${name}</h3>
              <h4>${department}</h4>
              <p>Mobile: ${mobile}</p>
              <p>Email: ${email}</p>
              <p class="college-name">ABC University</p>
          </div>
      `;

      document.getElementById("cards-container").innerHTML += cardTemplate;

      // Clear inputs after card is generated
      document.getElementById("name").value = "";
      document.getElementById("mobile").value = "";
      document.getElementById("email").value = "";
      document.getElementById("department").value = "";
      document.getElementById("photo").value = "";
  };

  reader.readAsDataURL(photoInput); // Convert image to base64 URL
}
