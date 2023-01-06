import React from 'react'

const dateReducer = (date=new Date().toDateString(),action) => {
  
    // .toISOString().substring(0, 10)
    switch (action.type) {
        
        case "CHANGE_DATE":
            return action.payLoad.toDateString()
        case "LOGOUT_DATE":
            return new Date().toDateString()
        default:
            return date
    }
}

export default dateReducer