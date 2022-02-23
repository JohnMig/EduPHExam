import { gradeListView } from './src/grade-list/grade-list'
import { gradeInputView } from './src/grade-input/grade-input'
import { app } from './src/app'

import './style.css'

document
  .querySelector('#app')
  .innerHTML = app(gradeInputView, gradeListView)

Array
  .prototype
  .forEach
  .call(
    document
    .querySelector('textarea'),
    (elem) => {
      elem.placeholder = 
        elem
          .placeholder
          .replace(/\\n/g, '\n')
    }
  )
