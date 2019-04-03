// the array model is the starting point of the app
// the v-for iterates through this array and renders an HTML element for each object in it

/*
{
  label - the label of the input,
  value - the value of the input, bound from the object to the HTML input with v-model,
  mandatory - boolean value to check whether the input needs to have a valid input
  invalid - boolean value to check whether the input is invalid
}

*/

let inputs = [
  {
    label: 'Your fist name',
    value: '',
    mandatory: true,
    invalid: false
  },
  {
    label: 'Your latin name',
    value: '',
    mandatory: true,
    invalid: false
  },
  {
    label: 'Your last name',
    value: '',
    mandatory: true,
    invalid: false
  },
  {
    label: 'Your creed',
    value: '',
    mandatory: true,
    invalid: false
  },
  {
    label: 'Deus vult',
    value: '',
    textarea: true,
    mandatory: false
  }
]

export default inputs;