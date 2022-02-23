import { state } from '../grade-list/grade'

export const gradeInputControlsView = `
  <div class="grade-input_controls">
    <button class="add">ADD</button>
  </div>
`

window.addEventListener('DOMContentLoaded', () => {
  const _ = (e) => document.querySelector(e)

  // Get individual input values
  const getValues = (values) => {
    const 
      data = values.split(' '),
      name = data.slice(0, data.length - 1).join(' '),
      grade = data[data.length - 1]
    return [name, grade]
  }

  // Input Validation
  const isValid = (values) => {
    let valid = true
    if (!values) return !valid

    values.forEach((value) => {
      const [name, grade] = getValues(value)
      if (isNaN(grade) || !name) {
        valid = false
        _('.input-error').style.display = 'block'
        return
      }
    })

    return valid
  }

  _('.add')
    .addEventListener('click', () => {
      let values = _('textarea').value.trim()
      values = values ? values.split('\n') : null

      if (!isValid(values)) return

      // Generate table data rows
      const getRows = (newValues) => {
        return newValues.map((value) => {
          const [name, grade] = getValues(value)

          return `
            <tr>
              <td>${name}</td>
              <td>${grade}</td>
            </tr>
          `
        })
      }

      // Render table data rows to the DOM
      const renderNewGradeList = (newValues) => {
        const tableBody = _('tbody')
        const tableRows = getRows(newValues)
        tableBody.innerHTML = tableRows.join('')
      }

      state.grades = [...values, ...state.grades]
      renderNewGradeList(state.grades)
      _('textarea').value = ''
      _('.input-error').style.display = 'none'
      _('.average').innerHTML = ''
    })
})
