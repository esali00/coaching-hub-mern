import React from 'react'
import {InlineWidget} from 'react-calendly'

const Calendly = () => {
    return (
      <div>
        <InlineWidget styles={{height: "560px"}} url="https://calendly.com/emirsali/" />
      </div>
    );
}

export default Calendly