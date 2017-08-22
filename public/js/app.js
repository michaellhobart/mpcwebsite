document.addEventListener( 'DOMContentLoaded', () => {
  const testDiv = document.querySelector( '.test-div' )
  const navTitle = document.querySelector( '.navbar-brand' )
  const quoteText = document.querySelector( '.quote-count' )
  const frontColors = document.querySelector( '.front-colors' )
  const backColors  = document.querySelector( '.back-colors' )
  const quoteTotal = document.querySelector( '.quote-total' )
  const quoteInputs = [quoteText, frontColors, backColors]


  // ******* NAV BRAND TEXT RESIZE *******
  // Adjust Brand Text on Nav for Resize
  adjNavTitleText = () => {window.innerWidth > 1000 ? navTitle.innerHTML = "Monument Print Company" : navTitle.innerHTML = "MONUMENT"}

  adjNavTitleText()

  window.addEventListener('resize', (windowWidth) => {
    adjNavTitleText()
  })

  // ******* QUOTE FORM *******

  // FUNCTION TO CALCULATE PRICE PER UNIT

  function quoteCalc() {
    const c = parseInt(document.querySelector( '.quote-count' ).value)
    const f = parseInt(document.querySelector( '.front-colors' ).value)
    const b = parseInt(document.querySelector( '.back-colors' ).value)
    // c === 0 ? return 0 : c
    let baseCost, costPer = 0, setupPer = 0
    c >= 12 ? baseCost = 5.00 : baseCost
    c >= 24 ? baseCost = 3.40 : baseCost
    c >= 60 ? baseCost = 2.75 : baseCost
    c >= 120 ? baseCost = 2.40 : baseCost
    c >= 300 ? baseCost = 2.20 : baseCost
    setupPer = ((f + b)*20)/c
    costPer = (Math.ceil((1.98 + baseCost + ((f*.25)-.25) + setupPer)*20)/20)
    b ? costPer += (1 + ((b-1)*.25)) : b
    return costPer.toFixed(2)
  }

  // CHECKS ALL INPUTS FOR CHANGE AND ADJUSTS PRICE

  quoteInputs.forEach((qI)=>{
    qI.addEventListener('change', () => {
      let total = quoteCalc()
      const tQ = (parseInt(quoteText.value) * total).toFixed(2)
      quoteText.value < 12 ? quoteTotal.innerHTML = "$0.00" : quoteTotal.innerHTML = `$${total} per and $${tQ} total`

    })
  })

})
