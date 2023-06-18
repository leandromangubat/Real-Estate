async function newListing(event) {
  event.preventDefault();

  // const title = document.querySelector("#new-post-title").value.trim();
  // const post_body = document.querySelector("#new-post-body").value.trim();
  // const fileInput = document.querySelector("#myFile");
  // const formData = new FormData();

  // formData.append("title", title);
  // formData.append("post_body", post_body);
  // formData.append("photo", fileInput.files[0]);

  const newListingInfo = {
    streetNumber: $("#street-number").value.trim(),
    streetName: $("#street-name").value.trim(),
    postalCode: $("#postal-code").value.trim(),
    city: $("#city").value.trim(),
    price: $("#price").value.trim(),
    bedrooms: $("#bedrooms").value.trim(),
    bathrooms: $("#bathrooms").value.trim(),
    listingType: $("#listing-type").value.trim(),
  };

  if (newListingInfo.streetNumber && newListingInfo.price) {
    try {
      const response = await fetch("/api/post", {
        method: "POST",
        body: JSON.stringify(newListingInfo),
      });

      if (response.ok) {
        document.location.replace("/sell");
      } else {
        alert(response.statusText);
      }
    } catch (error) {
      console.log(error);
      alert("An error occurred during file upload.");
    }
  }
}

const postForm = $("#new-post-button");

postForm.on("click", newListing);

document
  .querySelector("#photo-upload-form")
  .addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form submission
  });
