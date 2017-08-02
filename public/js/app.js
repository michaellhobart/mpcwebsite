document.addEventListener( 'DOMContentLoaded', () => {
  const testDiv = document.querySelector( '.test-div' )
  const navTitle = document.querySelector( '.navbar-brand' )

  //FUNCTIONS DEFINITIONS
  const adjNavTitleText = () => {window.innerWidth > 1000 ? navTitle.innerHTML = "Monument Print Company" : navTitle.innerHTML = "MONUMENT"}

  //CALLING FUNCTIONS
  adjNavTitleText()

  window.addEventListener('resize', (windowWidth) => {
    adjNavTitleText()
  })
})
