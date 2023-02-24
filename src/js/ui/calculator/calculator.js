const MAIN_CALC_EL = document.getElementById('interestScreme')
if (MAIN_CALC_EL) {
   //-----
   const calcBnbInputEL = document.getElementById('calcInputBnb')
   const calcBnbBtnPlusEL = document.getElementById('calcBnbPlus')
   const calcBnbBtnMinusEL = document.getElementById('calcBnbMinus')
   const calcBnbResultEl = document.getElementById('calcBnbResult')
   //-----
   const calcDaysInputEL = document.getElementById('calcInputDays')
   const calcDaysBtnPlusEL = document.getElementById('calcDaysPlus')
   const calcDaysBtnMinusEL = document.getElementById('calcDaysMinus')
   const calcDaysResultEl = document.getElementById('calcDaysResult')
   //-----
   const calcTotalPercentEl = document.getElementById('calcTotalPercent')
   const calcInvestmentSumInputEl = document.getElementById('calcInvestmentSum')
   const calcProfitSumEl = document.getElementById('profitSum')
   //-----
   const calcAllInput = MAIN_CALC_EL.querySelectorAll('input')

   calcAllInput.forEach((el) =>
      el.addEventListener('input', function (e) {
         this.value = this.value.replace(/[^\d.]/g, '')
      })
   )

   calcInit()

   function calcInit() {
      calcBnbInputEL.value = '150'
      calcDaysInputEL.value = '1'
      calcBnbResultEl.textContent = 0.1
      calcDaysResultEl.textContent = 0.05
      calcTotalPercent()
   }
   //========================================================================================================================================================
   calcBnbInputEL.addEventListener('input', calcBnbPercent)
   calcBnbBtnPlusEL.addEventListener('click', addBnbInput)
   calcBnbBtnMinusEL.addEventListener('click', subBnbInput)

   function addBnbInput() {
      calcBnbInputEL.value = +calcBnbInputEL.value + 150
      calcBnbPercent()
   }
   function subBnbInput() {
      if (calcBnbInputEL.value > 150) {
         calcBnbInputEL.value = +calcBnbInputEL.value - 150
         calcBnbPercent()
      }
   }

   Math.round(+calcInputBnb.value / 150)

   function calcBnbPercent() {
      const bnbResult = Math.round(+calcInputBnb.value / 150) * 0.1
      calcBnbResultEl.textContent = bnbResult.toFixed(3)
      calcTotalPercent()
   }

   calcDaysInputEL.addEventListener('input', calcDaysPercent)
   calcDaysBtnPlusEL.addEventListener('click', addDaysInput)
   calcDaysBtnMinusEL.addEventListener('click', subDaysInput)

   function addDaysInput() {
      calcDaysInputEL.value = +calcDaysInputEL.value + 1
      calcDaysPercent()
   }
   function subDaysInput() {
      if (calcDaysInputEL.value > 1) {
         calcDaysInputEL.value = +calcDaysInputEL.value - 1
         calcDaysPercent()
      }
   }
   function calcDaysPercent() {
      const resultDays = calcDaysInputEL.value / 20
      calcDaysResultEl.textContent = resultDays.toFixed(3)
      calcTotalPercent()
   }
   //========================================================================================================================================================

   //========================================================================================================================================================

   function calcTotalPercent() {
      const resultPercent = +calcBnbResultEl.textContent + +calcDaysResultEl.textContent + 1
      calcTotalPercentEl.textContent = resultPercent.toFixed(3)
      calcDailyProfit()
   }

   //========================================================================================================================================================
   calcInvestmentSumInputEl.addEventListener('input', calcDailyProfit)

   function calcDailyProfit() {
      const profit = (calcInvestmentSumInputEl.value / 100) * +calcTotalPercentEl.textContent
      calcProfitSumEl.textContent = `${profit.toFixed(3)}$`
   }

   //calc END========================================================================================================================================================
}
