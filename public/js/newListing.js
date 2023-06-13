async function newListing(event) {
  event.preventDefault();

  const title = document.querySelector("#new-post-title").value.trim();
  const post_body = document.querySelector("#new-post-body").value.trim();
  const fileInput = document.querySelector("#photo-upload");
  const formData = new FormData();

  formData.append("title", title);
  formData.append("post_body", post_body);
  formData.append("photo", fileInput.files[0]);

  if (title && post_body) {
    try {
      const response = await fetch("/api/post", {
        method: "POST",
        body: formData,
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

document
  .querySelector("#new-listing-form")
  .addEventListener("submit", newListing);
