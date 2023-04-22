import React from 'react'

export default function Button({text,link}) {
  return (
    <>
    <a href={link} className="btn"> {text}</a>
    </>
  )
}
