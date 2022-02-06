import React from 'react';
import './Footer.css';

export default function FooterComponent() {
    return (
        <div id="footer">
            <ul>
                <li><a rel="noreferrer" target="_blank" href="http://github.com/mado8"><img src="https://img.icons8.com/material-sharp/24/000000/github.png" alt="GitHub"></img></a></li>
                <li><a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/madeline-donley-0110/"><img src="https://img.icons8.com/material-rounded/24/000000/linkedin--v1.png" alt="LinkedIn" key=""></img></a></li>
                <li><a rel="noreferrer" target="_blank" href="https://stackoverflow.com/users/16596723/madeline-donley"><img src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/24/000000/external-stack-overflow-is-a-question-and-answer-site-for-professional-logo-bold-tal-revivo.png" alt="Stack Overflow" key=""></img></a></li>
            </ul>
        </div>
    )
}