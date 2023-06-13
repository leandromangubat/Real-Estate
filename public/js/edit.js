const propertyId = document.querySelector('input[name="property-id"]').value;
console.log(propertyId);

const editFormHandler = async (event) => {
  event.preventDefault();

    //const propertyTitle = document.querySelector('input[name="property-title"]').value;
    //const propertyPrice = document.querySelector('textarea[name="property-price"]').value;


  const response = await fetch(`/api/post/${propertyId}`, {
    method: 'PUT',
    body: JSON.stringify({
      propertyTitle,
      propertyPrice,
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  console.log(response);
  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Failed to update your property');
  }
  document.location.replace('/dashboard');
};

const deleteClickHandler = async () => {
  await fetch(`/api/property/${propertyId}`, {
    method: 'DELETE'
  });

  document.location.replace('/');
};

document
  .querySelector('#edit-property-form')
  .addEventListener('submit', editFormHandler);
document
  .querySelector('#delete-btn')
  .addEventListener('click', deleteClickHandler);
