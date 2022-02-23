import { gradeInputControlsView } from './grade-input-controls'
import { gradeInputErrorView } from './grade-input-error'

export const gradeInputView = `
  <div class="grade-input">
    <label for="info">Enter Names and Grades: </label>
    <textarea 
      name="info" 
      cols="30" 
      rows="10" 
      placeholder="Joseph 92\nJerald 97"
    ></textarea>
    ${gradeInputErrorView}
    ${gradeInputControlsView}
  </div>
`
