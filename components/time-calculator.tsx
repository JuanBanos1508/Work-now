'use client'

import { useState } from 'react'

export default function TimeCalculator() {
  const [cvCount, setCvCount] = useState(80)

  const stages = [
    {
      label: "Filtrado de CVs",
      sin: (cvCount * 3) / 60,    // 3 min por CV
      con: (cvCount * 0.2) / 60,  // 12 seg por CV
    },
    {
      label: "Coordinación de entrevistas",
      sin: 2.5,
      con: 0.3,
    },
    {
      label: "Entrevistas a los candidatos",
      sin: 3.5,
      con: 2.5,
    },
  ]

  const totalSin = stages.reduce((acc, item) => acc + item.sin, 0).toFixed(1)
  const totalCon = stages.reduce((acc, item) => acc + item.con, 0).toFixed(1)

  return (
    <div className="bg-white rounded-xl shadow-md p-6 space-y-8">
      {/* Encabezado */}
      <div className="text-center space-y-2">
        <h3 className="text-2xl font-bold text-gray-900">Calculá tu ahorro de tiempo personalizado</h3>
        <p className="text-gray-600">Ajustá la cantidad de CVs que recibís y descubrí cuánto tiempo podés ahorrar</p>
        <label className="font-medium text-gray-700 block mt-4">¿Cuántos CVs recibís?</label>
        <input
          type="range"
          min="10"
          max="200"
          value={cvCount}
          onChange={(e) => setCvCount(parseInt(e.target.value))}
          className="w-full accent-blue-600"
        />
        <div className="text-3xl font-bold text-blue-600">{cvCount} CVs</div>
      </div>

      {/* Etiquetas de columnas */}
      <div className="flex justify-between text-sm font-semibold text-gray-500 px-4 mt-6">
        <div className="w-1/3"></div>
        <div className="w-1/3 text-center">Sin Work Now</div>
        <div className="w-1/3 text-center">Con Work Now</div>
      </div>

      {/* Etapas */}
      <div className="space-y-6">
        {stages.map((item, index) => (
          <div key={index} className="flex justify-between items-center border-b pb-4 px-4">
            <div className="w-1/3 text-gray-800 font-medium">{item.label}</div>
            <div className="w-1/3 text-center text-red-600 font-semibold">{item.sin.toFixed(1)} h</div>
            <div className="w-1/3 text-center text-green-600 font-semibold">{item.con.toFixed(1)} h</div>
          </div>
        ))}
      </div>

      {/* Total */}
      <div className="bg-green-50 rounded-lg p-4 flex justify-between items-center font-bold text-lg px-4">
        <div className="w-1/3">Total</div>
        <div className="w-1/3 text-center text-red-600">{totalSin} h</div>
        <div className="w-1/3 text-center text-green-600">{totalCon} h</div>
      </div>

      {/* Botón */}
      <div className="text-center mt-6">
        <button className="bg-[#FF6B00] hover:bg-[#E55A00] text-white font-semibold rounded-xl px-8 py-4 text-lg shadow-lg">
          Quiero ahorrar ese tiempo
        </button>
      </div>
    </div>
  )
}
