document.addEventListener( 'DOMContentLoaded', () => {
  const testDiv = document.querySelector( '.test-div' )
  const navTitle = document.querySelector( '.navbar-brand' )
  const quoteText = document.querySelector( '.quote-count' )
  const frontColors = document.querySelector( '.front-colors' )
  const backColors  = document.querySelector( '.back-colors' )
  const quoteTotal = document.querySelector( '.quote-total' )
  const quoteInputs = [quoteText, frontColors, backColors]
  // const sendButton = document.getElementById( 'send' )
  const sendButton = document.getElementById( 'contactSend' )


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
    let baseCost = 0, costPer = 0, setupPer = 0
    c >= 12 ? baseCost = 5.00 : baseCost
    c >= 24 ? baseCost = 3.40 : baseCost
    c >= 60 ? baseCost = 2.75 : baseCost
    c >= 120 ? baseCost = 2.40 : baseCost
    c >= 300 ? baseCost = 2.20 : baseCost
    setupPer = ((f + b)*20)/c
    costPer = (Math.ceil((1.98 + baseCost + ((f*.25)-.25) + setupPer)*20)/20)
    b ? costPer += (1 + ((b-1)*.25)) : b
    !f ? costPer -= 0.75 : costPer
    return costPer.toFixed(2)
  }

  // CHECKS ALL INPUTS FOR CHANGE AND ADJUSTS PRICE

  quoteInputs.forEach((qI)=>{
    qI.addEventListener('change', () => {
      let total = quoteCalc()
      const tQ = (parseInt(quoteText.value) * total).toFixed(2)
      quoteText.value < 12 ? quoteTotal.innerHTML = "Minimum quantity is 12 pieces" : quoteTotal.innerHTML = `$${total} per shirt / $${tQ} total`


    })
  })


  // ****** CHANGES DROPDOWNS BASED ON QTY ******

  function changeInkColors(q) {
    let inks = 0
    let fSelected = parseInt(document.querySelector( '.front-colors' ).value)
    let bSelected = parseInt(document.querySelector( '.back-colors' ).value)
    console.log(`fSelected = ${fSelected}`);
    frontColors.innerHTML = ""
    backColors.innerHTML = ""
    q < 24 ? inks = 1 : inks
    q >= 24 ? inks = 3 : inks
    q >= 48 ? inks = 5 : inks
    q >= 60 ? inks = 8: inks

    for (var x = 0; x <= inks; x++){
      if (fSelected === x) {
        frontColors.innerHTML += `<option value="${x}" selected>${x} COLOR</option>`
      } else {
      frontColors.innerHTML += `<option value="${x}">${x} COLOR</option>`
      }
    }

    for (var x = 0; x <= inks; x++){
      if (bSelected === x) {
        backColors.innerHTML += `<option value="${x}" selected>${x} COLOR</option>`
      } else {
      backColors.innerHTML += `<option value="${x}">${x} COLOR</option>`
      }
    }
  }

  quoteText.addEventListener('change', () => {
    let q = parseInt(quoteText.value)
    changeInkColors(q)
  })

  // ********* TEST CONTACT FORM *********
  // let fullURL = location.protocol+'//'+location.hostname+(location.port ? ':'+location.port : '')
  // sendButton.addEventListener('click', () => {
  //   const formData = $("#test-mailer").serialize() // creates JSON object for #test-mailer form and stores it in formData
  //   $.ajax({
  //     url: `${fullURL}/send`,
  //     type: 'POST',
  //     data: formData,
  //     success: (result) => {console.log(result)},
  //     error: (e) => {console.log(e)},
  //     dataType: "html",
  //     timeout: 60000
  //   })

    // ********* CONTACT FORM CONTROLLER *********
    let fullURL = location.protocol+'//'+location.hostname+(location.port ? ':'+location.port : '')
    sendButton.addEventListener('click', () => {
      const formData = $("#contactForm").serialize() // creates JSON object for #test-mailer form and stores it in formData
      $.ajax({
        url: `${fullURL}/send`,
        type: 'POST',
        data: formData,
        success: (result) => {console.log(result)},
        error: (e) => {console.log(e)},
        dataType: "html",
        timeout: 60000
      })




  });



})
// END OF APP
