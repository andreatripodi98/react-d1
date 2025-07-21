import React from "react";

class ImageComponent extends React.Component {
  render() {
    const { src, alt } = this.props;
    return <img src={src} alt={alt} className="img-fluid" />;
  }
}
export default ImageComponent;