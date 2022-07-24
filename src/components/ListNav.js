import React from 'react'
import '../style/listNav.css'
const ListNav = () => {
  return (
    <div>
        <ul className='textPosition decoration'>
            <li className='text listProduit'>produits
                   <ul className='listSub'>
                    <li className='linkSub'>pc</li>
                    <li className='linkSub'>clavier</li>
                    <li className='linkSub'>sourie</li>
                    <li className='linkSub'>casque</li>
                   </ul>
            </li>
            <li className='text contactList'>contact
            
                  <ul>
                  <li className='contactSub'>26752528</li>
                 </ul>
            </li>
        </ul>
    </div>
  )
}

export default ListNav