import React, { Component } from 'react';

import InfoBlock from './components/info-block/info-block';
import Collapsible, { CollapsibleItem } from './components/collapsible/collapsible';

// import ErrorBoundary from './components/errors/error-boundary';

class App extends Component {

  	render() {
  		const props = { type: 'one', node: 'tow' }

    	return( 
    		<InfoBlock { ...props }>
    			<Collapsible>
    				<CollapsibleItem head="head1">
    					<p>text1</p>
    					<p>text1</p>
    					<p>Появился метод жизненного цикла componentDidCatch() для отлавливания ошибок. Также дерево DOM отмонтируется и выводится резервный интерфейс. Есть возможность отследить ошибки через границы ошибок error boundaries - это компоненты React, которые отлавливают ошибки JavaScript в любом месте их дочернего дерева компонентов, регистрируют эти ошибки и отображают резервный интерфейс вместо поломанного дерева компонентов, т.е. если какой-то компонент в одной из этих областей пользовательского интерфейса ломается, остальные продолжают исправно работать.</p>
    				</CollapsibleItem>
    				<CollapsibleItem head="head2">text2</CollapsibleItem>
    				<CollapsibleItem head="head3">text3</CollapsibleItem>
    			</Collapsible>
    		</InfoBlock>
    	);

  	}
}

export default App;