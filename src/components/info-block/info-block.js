// import '../../libs/JQuery';

import React, { Component } from 'react';

import './info-block.scss';

class InfoBlock extends Component {

  	render() {
    	return(
    		<section>

    			{ this.props.children }

    		</section>
    	);
  	}
}

export default InfoBlock;
