import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export default function Reserve() {
  const { id } = useParams()
  const [infos, setInfos] = useState("")

  const handleReserve = async () => {
    try {
      await axios.post('http://localhost:8081/api/reservations/', {
        trajet: id,
        informations: infos
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access')}`
        }
      })
      alert("Réservation effectuée !")
    } catch (e) {
      alert("Erreur lors de la réservation.")
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow-md rounded">
      <textarea placeholder="Vos infos" className="w-full p-2 border" onChange={e => setInfos(e.target.value)} />
      <button onClick={handleReserve} className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Réserver</button>
    </div>
  )
}
