import { useEffect, useState } from 'react'
import { TodoProvider } from './Contexts/TodoContext'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [todos, setT