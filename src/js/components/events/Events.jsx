import React from 'react';
import dataForEvents from './DataEvents';
import EventsSection from './EventsSection';
import Discover from '../discover/Discover';
import News from '../News/News';

const Events = function () {
  console.log(dataForEvents)
  var dataToRender = dataForEvents.map((item, index) => {
    return (
      <EventsSection
        key={index}
        thmubnail={item.thmubnail}
        style={item.style}
        description={item.description}
        amountOfPhotos={item.amountOfPhotos}
        year={item.year}
      />
    )
  })
  return (
    <div>
      <div className='events-wrapper'>
        <div className='events'>
          <h2>Junior School</h2>
          <div className="box-events"></div>
          <p>
            Kindergarten and Pre-primary education provides
            an important foundation for both brain development
            and instilling a child's life long love of learning.
            We have a holistic view of education and cater for the physical,
            creative, intellectual, emotional, social and spiritual domains
            of learning in our classrooms.
		        </p>
          {dataToRender}
        </div>
        {
          //################ Please add the right portion here! #####################
        }
        <News />
      </div>
      <Discover />
    </div>
  )
}

export default Events