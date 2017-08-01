document.addEventListener( 'DOMContentLoaded', () => {
  const testDiv = document.querySelector( '.test-div' )
  testDiv.innerHTML = window.innerWidth + " " + screen.width;
  window.addEventListener("resize", () => {
    testDiv.innerHTML = window.innerWidth + " " + screen.width
  });
  // testDiv.innerHTML = window.innerWidth + " " + screen.width;
})
