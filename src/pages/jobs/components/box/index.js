import Button from '../../../../components/general/button'
import ButtonOutlined from '../../../../components/general/buttonOutlined'

import './style.css'

const BoxJobs = ({ img, name, location, title, type, tier, salary, description }) => {
  return (
    <div className='jobs-grid-object'>
      <div className='jobs-grid-object-header'>
        <img src={img} alt='' style={{ width: 60 }} />
        <div className='jobs-grid-object-header-title-location'>
          <p>{name}</p>
          <small>{location}</small>
        </div>
      </div>
      <p className='jobs-grid-object-title'>
        {title}
      </p>

      <div className='jobs-grid-chips-info'>
        <small className='jobs-grid-object-type'>{type}</small>
        <small className='jobs-grid-object-tier'>{tier}</small>
        <small className='jobs-grid-object-location'>{location}</small>
        <small className='jobs-grid-object-salary'>{salary}</small>
      </div>
      <small className='jobs-grid-object-description'>
        {description}
      </small>
      <div className='jobs-grid-object-button-row'>
        <Button text={'Aplicar agora'} />
        <ButtonOutlined text={'Detalhes'} />
      </div>
    </div>
  )
}

export default BoxJobs