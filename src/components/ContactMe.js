import React from "react"

class ContactM extends React.Component {
  render() {
    return (
      <div className='ContactIframe'>
        <iframe
          src="https://synectiks-website.s3.amazonaws.com/LatestKontact.html"
          width="100%"
          height="430px"
          frameBorder="0"
          scrolling="no"
          overflow="hidden"
        ></iframe>
      </div>
    )
  }
}

export default ContactM
