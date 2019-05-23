import React, { Component } from 'react';
import './Styles/Summary.css';

export class Summary extends Component {
    render() {
         return (
            <div className="summary-outer">
                <div id="summary">
                    <h2>Summary</h2>
                    <p>Full stack engineer living in Austin, TX. Focused on delivering scalable and maintainable code.  Advocate for software craftsmanship and SOLID principles.</p>
                    <p className="backdrop" dangerouslySetInnerHTML={{__html: codeBlock}}>
                    </p>
                </div>
            </div>
        )
    }
}

const codeBlock = 
`function <span class="orange">getFizzBuzz</span>(){
    for (var i = 1; i <= 100; i++) {
        var f = i % 3 == 0, b = i % 5 == 0;
        <span class="teal">console</span>.log(f ? b ? <span class="orange">FizzBuzz"</span> : <span class="orange">"Fizz"</span> : b ? <span class="orange">"Buzz"</span> : i);
    }
}
<span class="teal">console</span>.log(<span class="orange">"Hello world"</span>);`;