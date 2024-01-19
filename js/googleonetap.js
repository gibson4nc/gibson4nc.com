function handleCredentialResponse(response) {
  // Here we can do whatever process with the response we want
  // Note that response.credential is a JWT ID token
  console.log("Encoded JWT ID token: " + response.credential);
}
window.onload = function () {
  google.accounts.id.initialize({
    client_id: "YOUR_GOOGLE_CLIENT_ID", // Replace with your Google Client ID
    callback: handleCredentialResponse // We choose to handle the callback in client side, so we include a reference to a function that will handle the response
  });
  // You can skip the next instruction if you don't want to show the "Sign-in" button
  google.accounts.id.renderButton(
    document.getElementById("buttonDiv"), // Ensure the element exist and it is a div to display correcctly
    { theme: "outline", size: "large" }  // Customization attributes
  );
  google.accounts.id.prompt(); // Display the One Tap dialog
}
