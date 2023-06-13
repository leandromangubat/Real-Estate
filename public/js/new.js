const newFormHandler = async function(event) {
    event.preventDefault();
  
    //const propertyTitle = document.querySelector('input[name="property-title"]').value;
    //const propertyPrice = document.querySelector('textarea[name="property-price"]').value;
  
  
    await fetch(`/api/post`, {
      method: 'POST',
      body: JSON.stringify({
        propertyTitle,
        propertyContent,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  
     document.location.replace('/');
  };
  
 // document
 //   .querySelector('#new-property-form')
 //   .addEventListener('submit', newFormHandler);