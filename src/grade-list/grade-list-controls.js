import { gradeEmptyView } from './grade-empty'
import { state } from './grade'

export const gradeListControlsView = `
  <div class="grade-list_controls">
    <button class="compute">Compute Average</button>
    <button class="clear" onclick="clear()">Clear Grades</button>
  </div>
`

window.addEventListener('DOMContentLoaded', () => {
  const _ = (e) => document.querySelector(e)

  // Reset state
  _('.clear')
    .addEventListener('click', () => {
      state.grades = []
      _('tbody').innerHTML = `${gradeEmptyView}`
      _('.average').innerHTML = ''
    })

  // Calculate average
  _('.compute')
    .addEventListener('click', () => {
      const grades = state.grades.map((grade) => grade.split(' ').at(-1))
      const average = (grades.reduce((acc, value) => acc + (+value), 0) / grades.length).toFixed(2)
      if (average && average !== 'NaN') {
        _('.average').innerHTML = 
        `<div style="color: green; margin-top: 1rem;">Class Average Grade is ${average}.</div>`
      }
    })
})
