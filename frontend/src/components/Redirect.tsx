'use client'
import { useEffect } from 'react';

export default function Redirect( { props }: {props: string}) {
  useEffect(() => {
    window.location.assign(props)
  })
  return(
    <></>
  )
}