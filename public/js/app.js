document.addEventListener( 'DOMContentLoaded', () => {
  const testDiv = document.querySelector( '.test-div' )
  const navTitle = document.querySelector( '.navbar-brand' )
  const quoteInput = document.querySelector( '.quote-count' )
  // const quoteCount = document.querySelector( '.quote-count' )
  // const frontColors = document.querySelector( '.front-colors' )
  // const backColors  = document.querySelector( '.back-colors' )
  const quoteTotal = document.querySelector( '.quote-total' )




  //FUNCTIONS DEFINITIONS
  // Adjust Brand Text on Nav for Resize
  adjNavTitleText = () => {window.innerWidth > 1000 ? navTitle.innerHTML = "Monument Print Company" : navTitle.innerHTML = "MONUMENT"}

  // Change information for quote form
  function quoteCalc() {
    const c = parseInt(document.querySelector( '.quote-count' ).value)
    const f = parseInt(document.querySelector( '.front-colors' ).value)
    const b = parseInt(document.querySelector( '.back-colors' ).value)
    let baseCost, costPer = 0, setupPer = 0
    c > 12 ? baseCost = 5.00 : baseCost
    c >= 24 ? baseCost = 3.40 : baseCost
    c >= 60 ? baseCost = 2.75 : baseCost
    c >= 120 ? baseCost = 2.40 : baseCost
    c >= 300 ? baseCost = 2.20 : baseCost
    console.log(`c = ${c}, f = ${f}, b = ${b}`);
    setupPer = ((f + b)*20)/c
    console.log(`setupPer = ${setupPer} , baseCost = ${baseCost} f = ${f}, b = ${b}`);
    costPer = (Math.ceil((1.98 + baseCost + ((f*.25)-.25) + setupPer)*20)/20)

    b ? costPer += (1 + ((b-1)*.25)) : b



    return costPer.toFixed(2)
  }

  //CALLING FUNCTIONS
  adjNavTitleText()

  window.addEventListener('resize', (windowWidth) => {
    adjNavTitleText()
  })



  quoteInput.addEventListener('change', () => {
    let total = quoteCalc()
    quoteTotal.innerHTML = `$${total}`

  })

})
