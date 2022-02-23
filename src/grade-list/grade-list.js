import { gradeListControlsView } from './grade-list-controls'
import { gradeEmptyView } from './grade-empty'

export const gradeListView = `
  <div class="grade-list">
    <h2>GRADE LIST:</h2>
    <div class="grade-list_content">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody> 
          ${gradeEmptyView}
        </tbody>
      </table>
    </div>
    ${gradeListControlsView}
    <div class="average"></div>
  </div>
`