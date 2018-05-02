// import '../../libs/JQuery';

import React, { Component } from 'react';

import './collapsible.scss';

export default class Collapsible extends Component {

  	render(){

    	return(

    		<ul className='collapsible'>

    			{ this.props.children }
    		
            </ul>

    	);
  	}
}

export class CollapsibleItem extends Component {

    state = { 
        open: false
    }

    refContent = React.createRef();
    refWrapper = React.createRef();

    collapse(){
        this.changeContentHeight();

        this.setState((prev, props) => {
            return { 
                open: !prev.open
            }
        });
    }

    changeContentHeight(){

        let content = this.refContent.current;
        let wrapper = this.refWrapper.current;

        if(!this.state.open){
            content.style.visible = 'hidden';
            content.style.height = 'auto';

            let openHeight = content.clientHeight;

            content.style.height = '0px';
            content.style.visible = 'visible';
            content.style.display = 'block';

            this.animateHeight(0, openHeight, content, function(){
                content.removeAttribute('style');
                wrapper.setAttribute('data-open', null);
            });
        } else {
            this.animateHeight(content.clientHeight, 0, content, function(){
                content.removeAttribute('style');
                wrapper.removeAttribute('data-open');
            });
        }
    }

    animateHeight(from, to, node, after){

        let sign = (from > to ? 1 : -1);

        let timer = setInterval(function(){

            from -= 5 * sign;

            if(from * sign <= to * sign){
                clearInterval(timer);

                setTimeout(function(){
                    after();
                }, 10);
            }

            node.style.height = Math.floor(from * sign < to * sign ? to : from) + 'px';

        }, 2);
    }

    render(){

        return(
            
            <li className={ this.state.open ? 'collapsible-wrapper active' : 'collapsible-wrapper' } ref={ this.refWrapper }>
                
                <div className='collapsible-header'>
                    <a onClick={ this.collapse.bind(this) }>{ this.props.head }</a>
                </div>

                <div className='collapsible-content' ref={ this.refContent }>
                    <div className='content-wrapper'>
                        { this.props.children }
                    </div>
                </div>

            </li>

        );
    }
}