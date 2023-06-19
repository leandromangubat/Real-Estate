async function newListing(event) {
  event.preventDefault();

  // const title = document.querySelector("#new-post-title").value.trim();
  // const post_body = document.querySelector("#new-post-body").value.trim();
  // const fileInput = document.querySelector("#myFile");
  // const formData = new FormData();

  // formData.append("title", title);
  // formData.append("post_body", post_body);
  // formData.append("photo", fileInput.files[0]);
  // const streetNumber = document.querySelector("#street-number").value.trim();
  // const streetName = document.querySelector("#street-name").value.trim();
  // const postalCode = document.querySelector("#postal-code").value.trim();
  // const city = document.querySelector("#city").value.trim();
  // const price = document.querySelector("#price").value.trim();
  // const bedrooms = document.querySelector("#bedrooms").value.trim();
  // const bathrooms = document.querySelector("#bathrooms").value.trim();
  // const listingType = document.querySelector("#listing-type").value.trim();

  const newListingInfo = {
    streetNumber: document.querySelector("#street-number").value.trim(),
    streetName: document.querySelector("#street-name").value.trim(),
    postalCode: document.querySelector("#postal-code").value.trim(),
    city: document.querySelector("#city").value.trim(),
    price: document.querySelector("#price").value.trim(),
    bedrooms: document.querySelector("#bedrooms").value.trim(),
    bathrooms: document.querySelector("#bathrooms").value.trim(),
    listingType: document.querySelector("#listing-type").value.trim(),
  };

  if (newListingInfo) {
    try {
      const response = await fetch("/api/newlisting", {
        method: "POST",
        body: JSON.stringify(newListingInfo),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        //document.location.replace("/");
        alert("Property successfully uploaded!");
      } else {
        alert(response.statusText);
      }
    } catch (error) {
      console.log(error);
      alert("An error occurred during file upload.");
    }
  }
}

const postForm = document.querySelector("#new-post-button");

postForm.addEventListener("click", newListing);

// document
//   .querySelector("#photo-upload-form")
//   .addEventListener("submit", (event) => {
//     event.preventDefault(); // Prevent form submission
//   });
