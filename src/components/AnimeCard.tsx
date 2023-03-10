import React from 'react'
import { useParams } from 'react-router-dom'
import { useAnilist } from '../context/AnimeContext';

const AnimeCard = () => {
    const paramIds = useParams();
    const anilist = useAnilist();
  return (
    <div>{
        
        }</div>
  )
}

export default AnimeCard