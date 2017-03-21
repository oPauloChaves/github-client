import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value.trim()))
        input.value = ''
      }}>
        <input
          style={{
            padding: '5px'
          }}
          ref={node => {
            input = node
          }}
        />
        <button
          style={{
            padding: '5px'
          }}
          type="submit"
        >
          Add Todo
        </button>
      </form>
    </div>
  )
}

AddTodo = connect()(AddTodo)

export default AddTodo
