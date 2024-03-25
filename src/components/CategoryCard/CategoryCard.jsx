import React from 'react'
import data from '../../utils/categoryList.json'
import Card from '../Card/Card'

const CategoryCard = () => {
  return (
    <div className='grid grid-cols-4 gap-6'>
        {
            data && data.map(cat=> (
               <Card key={cat.id} title={cat.category} tile={cat.tile} />
            ))
        }
    </div>
  )
}

export default CategoryCard