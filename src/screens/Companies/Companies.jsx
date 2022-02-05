import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { COMPANIES_URL } from "../../constants"

// const actionClassica = { type: 'SET_COMPANY', payload: [company1, company2...] }

export const Companies = () => {
  const [companies, setCompanies] = useState([])
  const state = useSelector(state => state);
  console.log('state', state)
  useEffect(() => {
    fetch(COMPANIES_URL)
      .then(res => {
        console.log('res', res);
        return res.json()
      })
      .then( data => {
        setCompanies(data)
      })
  }, [])
  console.log('companies', companies);
  return (
    <div>
      pippo
    </div>
  )
}